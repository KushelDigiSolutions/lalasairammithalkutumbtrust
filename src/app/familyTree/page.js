"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import familyData from "@/data/family-tree.json";

const NUMBER_WORDS = [
  "Zero", "One", "Two", "Three", "Four", "Five",
  "Six", "Seven", "Eight", "Nine", "Ten",
];

/* ============================================================
   Build a flat, indexed version of the tree once:
   assigns each person an id, depth (generation), the path of
   ancestor names above them, and their parent's id.
   ============================================================ */
function buildIndex(data) {
  let idc = 0;
  const idToNode = new Map();

  function indexNode(node, depth, path, parentId) {
    node._id = "p" + idc++;
    node._depth = depth;
    node._path = path;
    node._parentId = parentId;
    idToNode.set(node._id, node);
    if (node.children) {
      node.children.forEach((c) =>
        indexNode(c, depth + 1, [...path, node.name], node._id)
      );
    }
  }

  data.branches.forEach((b) => indexNode(b, 1, [data.name], "root"));

  const allPeople = [];
  function flatten(node) {
    allPeople.push(node);
    if (node.children) node.children.forEach(flatten);
  }
  data.branches.forEach(flatten);

  function countDescendants(node) {
    if (!node.children) return 0;
    let c = node.children.length;
    node.children.forEach((ch) => (c += countDescendants(ch)));
    return c;
  }

  return { branches: data.branches, allPeople, idToNode, countDescendants };
}

export default function FamilyTreePage() {
  const { branches, allPeople, idToNode, countDescendants } = useMemo(
    () => buildIndex(familyData),
    []
  );

  const [activeBranchId, setActiveBranchId] = useState(
    branches[0]?._id ?? null
  );
  const [query, setQuery] = useState("");
  const [highlightId, setHighlightId] = useState(null);
  const [scrollTargetId, setScrollTargetId] = useState(null);
  const [treeOverflows, setTreeOverflows] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const treeScrollRef = useRef(null);
  const topScrollRef = useRef(null);
  const isSyncingTop = useRef(false);
  const isSyncingTree = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);

  const totalMembers = allPeople.length + 1; // +1 for the patriarch

  const handlePrint = () => window.print();

  const searchResults = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.trim().toLowerCase();
    return allPeople.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 10);
  }, [query, allPeople]);

  const goToPerson = (person) => {
    // switch to the branch tab this person belongs to — the whole
    // branch is always shown in full, so no expanding is needed
    let node = person;
    while (node._parentId !== "root") node = idToNode.get(node._parentId);
    setActiveBranchId(node._id);

    setQuery(person.name);
    setScrollTargetId(person._id);
    setHighlightId(person._id);
  };

  useEffect(() => {
    if (!scrollTargetId) return;
    const t = setTimeout(() => {
      document
        .getElementById(scrollTargetId)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      setScrollTargetId(null);
    }, 150);
    return () => clearTimeout(t);
  }, [scrollTargetId]);

  useEffect(() => {
    if (!highlightId) return;
    const t = setTimeout(() => setHighlightId(null), 2600);
    return () => clearTimeout(t);
  }, [highlightId]);

  const updateScrollMetrics = () => {
    const el = treeScrollRef.current;
    if (!el) {
      setTreeOverflows(false);
      setContentWidth(0);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    const hasOverflow = el.scrollWidth > el.clientWidth + 2;
    setTreeOverflows(hasOverflow);
    setContentWidth(el.scrollWidth);
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  };

  // Synchronize top scroller with main tree scroller
  const handleTopScroll = () => {
    if (isSyncingTop.current) {
      isSyncingTop.current = false;
      return;
    }
    if (treeScrollRef.current && topScrollRef.current) {
      isSyncingTree.current = true;
      treeScrollRef.current.scrollLeft = topScrollRef.current.scrollLeft;
      updateScrollMetrics();
    }
  };

  const handleTreeScroll = () => {
    if (isSyncingTree.current) {
      isSyncingTree.current = false;
      return;
    }
    if (topScrollRef.current && treeScrollRef.current) {
      isSyncingTop.current = true;
      topScrollRef.current.scrollLeft = treeScrollRef.current.scrollLeft;
      updateScrollMetrics();
    }
  };

  // Quick navigation helpers
  const scrollLeftBy = () => {
    if (treeScrollRef.current) {
      treeScrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRightBy = () => {
    if (treeScrollRef.current) {
      treeScrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  const centerTree = () => {
    if (treeScrollRef.current) {
      const center = Math.max(
        0,
        (treeScrollRef.current.scrollWidth - treeScrollRef.current.clientWidth) / 2
      );
      treeScrollRef.current.scrollTo({ left: center, behavior: "smooth" });
      if (topScrollRef.current) {
        topScrollRef.current.scrollTo({ left: center, behavior: "smooth" });
      }
    }
  };

  // Mouse drag-to-scroll on tree canvas
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    if (e.target.closest("button") || e.target.closest("a") || e.target.closest("input")) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - treeScrollRef.current.offsetLeft;
    scrollLeftStartRef.current = treeScrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !treeScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - treeScrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    treeScrollRef.current.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
    }
  };

  useEffect(() => {
    const el = treeScrollRef.current;
    if (!el) {
      setTreeOverflows(false);
      return;
    }

    const measureAndCenter = () => {
      const centerPos = Math.max(0, (el.scrollWidth - el.clientWidth) / 2);
      el.scrollLeft = centerPos;
      if (topScrollRef.current) {
        topScrollRef.current.scrollLeft = centerPos;
      }
      updateScrollMetrics();
    };

    const timer = setTimeout(measureAndCenter, 60);

    window.addEventListener("resize", updateScrollMetrics);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateScrollMetrics);
    };
  }, [activeBranchId]);

  // Org-chart style box — a person's box, connected by lines to their
  // children's boxes laid out in a row beneath them, the same shape as
  // a company org chart / a hand-drawn family tree. Used both on screen
  // and (via printMode, which just drops the DOM id so it doesn't clash
  // with the on-screen copy) in the printed PDF, so the two always look
  // like the same design.
  function TreeNode({ node, tier, printMode }) {
    const childCount = node.children ? node.children.length : 0;
    const hasKids = childCount > 0;
    const isMatched = !printMode && highlightId === node._id;
    const cappedTier = Math.min(tier, 3);

    const nameClass =
      cappedTier === 1
        ? "font-serif font-bold text-red-900 text-sm md:text-base"
        : cappedTier === 2
          ? "font-semibold text-gray-800 text-xs md:text-sm"
          : "font-medium text-gray-700 text-xs";

    const boxClass =
      cappedTier === 1
        ? "bg-white border-amber-300 shadow-md"
        : cappedTier === 2
          ? "bg-white border-amber-200 shadow-sm"
          : "bg-amber-50/70 border-amber-100";

    return (
      <li>
        <div
          id={printMode ? undefined : node._id}
          className={`node-box inline-flex flex-col items-center gap-1 rounded-lg border ${boxClass} px-2 py-1.5 sm:px-3 sm:py-2 min-w-[68px] sm:min-w-[88px] transition-all ${isMatched ? "ring-2 ring-amber-400" : ""
            }`}
        >
          <span className={`${nameClass} text-center leading-tight`}>{node.name}</span>
          {hasKids && (
            <span className="text-[8px] sm:text-[9px] font-bold text-amber-700 bg-amber-100 rounded-full px-1.5 sm:px-2 py-0.5 whitespace-nowrap">
              {childCount} {childCount === 1 ? "child" : "children"}
            </span>
          )}
        </div>

        {hasKids && (
          <ul>
            {node.children.map((child) => (
              <TreeNode key={child._id} node={child} tier={tier + 1} printMode={printMode} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  const activeIndex = branches.findIndex((b) => b._id === activeBranchId);
  const activeBranch = activeIndex >= 0 ? branches[activeIndex] : branches[0];
  const branchesWord = NUMBER_WORDS[branches.length] || branches.length;

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8] w-full">
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-b from-red-950 to-red-900 pt-20 pb-28 px-4 text-center overflow-hidden print:hidden">
        <span className="inline-block text-amber-400 text-xs font-bold tracking-[3px] uppercase mb-4">
          Lala Sai Ram Mittal Kutumb
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Our Family Lineage
        </h1>
        <p className="text-red-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          A record of the descendants of Late Lala Sai Ram Mittal Ji, preserved
          with reverence for the generations who came before and those who
          carry the family forward.
        </p>
      </section>

      {/* Print-only title (screen uses the hero above instead) */}
      <div className="hidden print:block text-center mb-6">
        <h1 className="font-serif text-2xl font-bold text-gray-900">
          {familyData.name} Ji — Family Lineage
        </h1>
      </div>

      {/* Same max-w-7xl frame as the navbar and the rest of the site, so
          the tree's left/right edges line up with the logo and the
          Donate button all the way down the page. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Narrower inner column for the reading-heavy intro bits */}
        <div className="max-w-4xl mx-auto w-full">
          {/* Patriarch card */}
          <div className="relative z-10 -mt-16 bg-white rounded-3xl shadow-xl border border-amber-100 p-8 md:p-10 text-center print:hidden">
            <span className="text-5xl inline-block mb-4">🪔</span>
            <h2 className="font-serif text-2xl font-bold text-red-800 mb-1">
              {familyData.name} Ji
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Kul Purush · Founder of the family line
            </p>
            <div className="flex justify-center gap-10 flex-wrap">
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-red-800">
                  {totalMembers}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
                  Members Recorded
                </div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-red-800">
                  {Math.max(...allPeople.map((p) => p._depth)) + 1}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
                  Generations
                </div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-red-800">
                  {branches.length}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
                  Family Branches
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative mt-10 print:hidden">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a family member by name…"
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-amber-100 bg-white text-sm shadow-sm outline-none focus:border-amber-400"
            />
            {searchResults.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl border border-amber-100 shadow-lg overflow-hidden z-20">
                {searchResults.map((p) => (
                  <button
                    key={p._id}
                    onClick={() => goToPerson(p)}
                    className="w-full text-left px-5 py-3 border-b border-amber-50 last:border-b-0 hover:bg-amber-50"
                  >
                    <div className="text-sm font-bold text-red-800">{p.name}</div>
                    <div className="text-[11px] text-gray-400">
                      {p._path.join(" → ")}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Section head */}
          <div className="text-center mt-14 mb-8 print:hidden">
            <span className="inline-block text-amber-600 text-xs font-bold tracking-[3px] uppercase mb-3">
              Explore by lineage
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-red-800 mb-3">
              The {branchesWord} Branches
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Tap a branch below to see everyone in it, listed together from
              parent down to the youngest child.
            </p>
            <div className="flex justify-center mt-6">
              <button
                onClick={handlePrint}
                className="border border-amber-200 text-red-800 hover:bg-amber-50 text-xs font-bold px-5 py-2 rounded-full transition-colors"
              >
                Print / Save as PDF
              </button>
            </div>
          </div>
        </div>

        {/* Branch tabs — numbered, mutually exclusive */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 print:hidden" role="tablist" aria-label="Family branches">
          {branches.map((branch, i) => {
            const isActive = branch._id === activeBranchId;
            return (
              <button
                key={branch._id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveBranchId(branch._id)}
                className={`group relative flex flex-col items-center gap-2 rounded-2xl border p-4 md:p-5 text-center transition-all duration-300 ${isActive
                    ? "bg-gradient-to-b from-red-800 to-red-950 border-red-900 shadow-lg shadow-red-900/25 -translate-y-0.5"
                    : "bg-white border-amber-100 hover:border-amber-300 hover:bg-amber-50/60"
                  }`}
              >
                <span
                  className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center font-serif font-bold text-base transition-colors ${isActive
                      ? "bg-white text-red-800"
                      : "bg-amber-50 text-red-800 group-hover:bg-amber-100"
                    }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`font-serif font-bold text-xs sm:text-sm leading-tight line-clamp-2 ${isActive ? "text-white" : "text-red-800"
                    }`}
                >
                  {branch.name}
                </span>
                <span
                  className={`text-[10px] sm:text-[11px] ${isActive ? "text-amber-200" : "text-gray-400"
                    }`}
                >
                  {countDescendants(branch)} members
                </span>
              </button>
            );
          })}
        </div>

        {/* Active branch panel — only the selected branch is shown, in full */}
        {activeBranch && (
          <div
            key={activeBranch._id}
            className="branch-fade bg-white rounded-3xl border border-amber-100 shadow-md mt-5 mb-4 p-5 md:p-8 print:hidden"
          >
            <div className="flex items-center gap-4 mb-6 pb-5 border-b border-amber-50">
              <div className="w-12 h-12 rounded-full bg-red-800 text-white font-serif font-bold flex items-center justify-center flex-shrink-0 text-lg">
                {activeIndex + 1}
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-amber-600 font-bold">
                  Branch {activeIndex + 1} of {branches.length}
                </span>
                <h4 className="font-serif text-xl md:text-2xl font-bold text-red-800">
                  {activeBranch.name}
                </h4>
                <span className="text-xs text-gray-500">
                  {countDescendants(activeBranch)} members recorded
                </span>
              </div>
            </div>

            {activeBranch.children && activeBranch.children.length > 0 ? (
              <>
                {/* Sticky Top Scroller & Navigation Bar */}
                {treeOverflows && (
                  <div className="sticky top-20 z-30 -mx-5 md:-mx-8 px-5 md:px-8 py-2 mb-5 bg-gradient-to-r from-amber-50/95 via-white/95 to-amber-50/95 backdrop-blur-md border-y border-amber-200 shadow-xs transition-all">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={scrollLeftBy}
                        disabled={!canScrollLeft}
                        title="Scroll Left"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-amber-200 text-red-900 text-xs font-semibold hover:bg-amber-100 hover:border-amber-300 disabled:opacity-35 disabled:cursor-not-allowed shadow-2xs transition-colors shrink-0"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="hidden sm:inline">Left</span>
                      </button>

                      {/* Top Horizontal Scrollbar Track */}
                      <div
                        ref={topScrollRef}
                        onScroll={handleTopScroll}
                        className="tree-scrollbar overflow-x-auto overflow-y-hidden cursor-ew-resize py-0.5 rounded-full flex-1"
                        style={{ WebkitOverflowScrolling: "touch" }}
                        title="Drag slider to scroll horizontally"
                        aria-label="Family tree horizontal scroller"
                      >
                        <div style={{ width: `${contentWidth}px`, height: "8px" }} />
                      </div>

                      <button
                        type="button"
                        onClick={scrollRightBy}
                        disabled={!canScrollRight}
                        title="Scroll Right"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-amber-200 text-red-900 text-xs font-semibold hover:bg-amber-100 hover:border-amber-300 disabled:opacity-35 disabled:cursor-not-allowed shadow-2xs transition-colors shrink-0"
                      >
                        <span className="hidden sm:inline">Right</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        onClick={centerTree}
                        title="Center tree view"
                        className="px-2.5 py-1 rounded-lg bg-white border border-amber-200 text-red-900 text-xs font-semibold hover:bg-amber-100 hover:border-amber-300 shadow-2xs transition-colors shrink-0"
                      >
                        Center
                      </button>
                    </div>
                  </div>
                )}

                <div
                  ref={treeScrollRef}
                  onScroll={handleTreeScroll}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUpOrLeave}
                  onMouseLeave={handleMouseUpOrLeave}
                  className={`no-scrollbar overflow-x-auto overflow-y-hidden pb-4 -mx-5 md:-mx-8 px-5 md:px-8 ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"
                    }`}
                >
                  {/* the branch number is the root of the chart — one line
                      feeds down from it into the fan-out of children */}
                  <ul className="org-tree mx-auto">
                    <li>
                      <div className="node-box inline-flex items-center justify-center w-9 h-9 rounded-full bg-red-800 text-white font-serif font-bold text-sm flex-shrink-0">
                        {activeIndex + 1}
                      </div>
                      <ul>
                        {activeBranch.children.map((child) => (
                          <TreeNode key={child._id} node={child} tier={1} />
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-400 italic">
                No members recorded yet for this branch.
              </p>
            )}
          </div>
        )}

        {/* Print-only layout — every branch, in the same org-chart look
            as the screen, just scaled to fit a landscape page (see the
            @media print rules in globals.css) */}
        <div className="hidden print:block pb-10">
          {branches.map((branch, i) => (
            <div key={branch._id} className="mb-10 break-inside-avoid">
              <h4 className="font-serif text-base font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">
                Branch {i + 1}: {branch.name}{" "}
                <span className="text-xs font-normal text-gray-500">
                  ({countDescendants(branch)} members)
                </span>
              </h4>
              {branch.children && branch.children.length > 0 ? (
                <div className="print-tree flex justify-center">
                  <ul className="org-tree">
                    <li>
                      <div className="node-box inline-flex items-center justify-center w-9 h-9 rounded-full bg-red-800 text-white font-serif font-bold text-sm flex-shrink-0">
                        {i + 1}
                      </div>
                      <ul>
                        {branch.children.map((child) => (
                          <TreeNode key={child._id} node={child} tier={1} printMode />
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              ) : (
                <p className="text-sm text-gray-400 italic">
                  No members recorded yet for this branch.
                </p>
              )}
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}
