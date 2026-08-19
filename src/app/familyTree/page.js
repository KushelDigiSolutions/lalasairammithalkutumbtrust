"use client";

import { useMemo, useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import familyData from "@/data/family-tree.json";

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

  const [expandedIds, setExpandedIds] = useState(new Set());
  const [openBranches, setOpenBranches] = useState(new Set());
  const [query, setQuery] = useState("");
  const [highlightId, setHighlightId] = useState(null);
  const [scrollTargetId, setScrollTargetId] = useState(null);
  const [allExpanded, setAllExpanded] = useState(false);

  const totalMembers = allPeople.length + 1; // +1 for the patriarch

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleBranch = (id) => {
    setOpenBranches((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleExpandAll = () => {
    const next = !allExpanded;
    setAllExpanded(next);
    if (next) {
      setOpenBranches(new Set(branches.map((b) => b._id)));
      setExpandedIds(new Set(allPeople.filter((p) => p.children?.length).map((p) => p._id)));
    } else {
      setOpenBranches(new Set());
      setExpandedIds(new Set());
    }
  };

  // Expands the whole tree, then opens the print dialog once the
  // re-render has happened, so the printed page shows everything.
  const handlePrint = () => {
    setAllExpanded(true);
    setOpenBranches(new Set(branches.map((b) => b._id)));
    setExpandedIds(
      new Set(allPeople.filter((p) => p.children?.length).map((p) => p._id))
    );
    setTimeout(() => window.print(), 150);
  };

  const searchResults = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.trim().toLowerCase();
    return allPeople.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 10);
  }, [query, allPeople]);

  const goToPerson = (person) => {
    // open the branch this person belongs to
    let node = person;
    while (node._parentId !== "root") node = idToNode.get(node._parentId);
    setOpenBranches((prev) => new Set(prev).add(node._id));

    // expand every ancestor along the way so the row is visible
    setExpandedIds((prev) => {
      const next = new Set(prev);
      let n = person;
      while (n._parentId && n._parentId !== "root") {
        next.add(n._parentId);
        n = idToNode.get(n._parentId);
      }
      return next;
    });

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

  function PersonNode({ node }) {
    const hasKids = node.children && node.children.length > 0;
    const isOpen = expandedIds.has(node._id);
    const isMatched = highlightId === node._id;

    return (
      <li id={node._id} className="relative pl-5 py-2 before:content-[''] before:absolute before:left-0 before:top-[22px] before:w-4 before:h-0.5 before:bg-amber-100">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-extrabold tracking-wide text-amber-600 bg-amber-50 rounded px-1.5 py-0.5">
            G{node._depth}
          </span>
          <span
            className={`text-sm font-semibold text-gray-800 rounded px-1 transition-all ${
              isMatched ? "bg-amber-200 ring-2 ring-amber-400" : ""
            }`}
          >
            {node.name}
          </span>
          {hasKids && (
            <>
              <span className="text-[11px] text-gray-400">
                ({countDescendants(node)})
              </span>
              <button
                onClick={() => toggleExpand(node._id)}
                className="text-[11px] font-bold text-amber-600 hover:underline ml-0.5 print:hidden"
              >
                {isOpen ? "hide family" : "show family"}
              </button>
            </>
          )}
        </div>

        {hasKids && (
          <div className={isOpen ? "block" : "hidden print:block"}>
            <ul className="list-none m-0 mt-1 pl-5 border-l-2 border-amber-100">
              {node.children.map((child) => (
                <PersonNode key={child._id} node={child} />
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  }

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-red-800 mb-3">
            The Five Branches
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
          <div className="flex justify-center gap-3 mt-6 flex-wrap print:hidden">
            <button
              onClick={handleExpandAll}
              className="bg-red-800 hover:bg-red-900 text-white text-xs font-bold px-5 py-2 rounded-full transition-colors"
            >
              {allExpanded ? "Collapse All" : "Expand All"}
            </button>
            <button
              onClick={handlePrint}
              className="border border-amber-200 text-red-800 hover:bg-amber-50 text-xs font-bold px-5 py-2 rounded-full transition-colors"
            >
              Print / Save as PDF
            </button>
          </div>
        </div>

        {/* Branch cards */}
        <div className="pb-16">
          {branches.map((branch, i) => {
            const isOpen = openBranches.has(branch._id);
            return (
              <div
                key={branch._id}
                className="bg-white rounded-3xl border border-amber-100 shadow-md mb-4 overflow-hidden print:shadow-none print:border-gray-300 print:break-inside-avoid"
              >
                <button
                  onClick={() => toggleBranch(branch._id)}
                  className="w-full flex items-center gap-4 p-5 md:p-6 text-left hover:bg-amber-50/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-red-800 text-white font-serif font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-bold text-red-800">
                      {branch.name}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {countDescendants(branch)} descendants recorded
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-amber-100 text-red-800 flex items-center justify-center transition-transform duration-300 print:hidden ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <FiChevronDown size={25} />
                  </div>
                </button>

                <div className={`px-5 md:px-6 pb-6 ${isOpen ? "block" : "hidden print:block"}`}>
                  <ul className="list-none m-0">
                    {(branch.children || []).map((child) => (
                      <PersonNode key={child._id} node={child} />
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-400 text-xs pb-16 print:hidden">
          🪔 This lineage record is maintained by the Trust. To add or correct a
          name, please contact the Mandir office.
        </p>
      </div>
    </div>
  );
}