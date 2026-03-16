"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Package,
  Wrench,
  FileText,
  AlertTriangle,
  Brain,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  inventoryItems,
  equipmentRegistry,
  upcomingPurchaseOrders,
  complianceFindings,
  aiInsights,
  upcomingDeliveries,
  delayedShipments,
  supplierPerformance,
} from "@/lib/mock-data";

type SearchResult = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  href: string;
  status?: string;
  statusColor?: string;
};

function buildResults(): SearchResult[] {
  const results: SearchResult[] = [];

  for (const item of inventoryItems) {
    results.push({
      id: item.id,
      title: item.name,
      subtitle: `${item.sku} · ${item.department} · ${item.supplier}`,
      category: "Inventory",
      href: "/inventory",
      status:
        item.status === "in-stock" ? "In Stock" :
        item.status === "low-stock" ? "Low Stock" :
        item.status === "critical" ? "Critical" :
        item.status === "out-of-stock" ? "Out of Stock" : "Expiring Soon",
      statusColor:
        item.status === "in-stock" ? "text-emerald-600" :
        item.status === "low-stock" ? "text-amber-600" : "text-red-600",
    });
  }

  for (const eq of equipmentRegistry) {
    results.push({
      id: eq.id,
      title: `${eq.name} — ${eq.model}`,
      subtitle: `${eq.manufacturer} · ${eq.department} · S/N: ${eq.serialNumber}`,
      category: "Equipment",
      href: "/compliance",
      status:
        eq.pmStatus === "current" ? "PM Current" :
        eq.pmStatus === "due-soon" ? "PM Due Soon" : "PM Overdue",
      statusColor:
        eq.pmStatus === "current" ? "text-emerald-600" :
        eq.pmStatus === "due-soon" ? "text-amber-600" : "text-red-600",
    });
  }

  for (const po of upcomingPurchaseOrders) {
    results.push({
      id: po.id,
      title: `${po.id} — ${po.supplier}`,
      subtitle: `$${po.totalCost.toLocaleString()} · ${po.department} · ${po.items.map((i) => i.name).join(", ")}`,
      category: "Purchase Orders",
      href: "/budget",
      status:
        po.status === "ai-recommended" ? "AI Recommended" :
        po.status === "pending-approval" ? "Pending" :
        po.status === "approved" ? "Approved" :
        po.status === "submitted" ? "Submitted" : "In Transit",
      statusColor:
        po.status === "in-transit" ? "text-emerald-600" :
        (po.status === "pending-approval" || po.status === "ai-recommended") ? "text-amber-600" : "text-foreground",
    });
  }

  for (const f of complianceFindings) {
    results.push({
      id: f.id,
      title: `${f.standard} — ${f.chapter}`,
      subtitle: f.description,
      category: "Compliance",
      href: "/compliance",
      status: f.status === "open" ? "Open" : "In Progress",
      statusColor: f.status === "open" ? "text-red-600" : "text-amber-600",
    });
  }

  for (const insight of aiInsights) {
    results.push({
      id: insight.id,
      title: insight.title,
      subtitle: insight.description.substring(0, 100) + "...",
      category: "AI Insights",
      href: (insight.type === "prediction" || insight.type === "outbreak") ? "/forecasting" : "/ai-insights",
      status: insight.severity.charAt(0).toUpperCase() + insight.severity.slice(1),
      statusColor:
        insight.severity === "high" ? "text-red-600" :
        insight.severity === "medium" ? "text-amber-600" : "text-emerald-600",
    });
  }

  for (const del of upcomingDeliveries) {
    results.push({
      id: del.id,
      title: `${del.id} — ${del.supplier}`,
      subtitle: `${del.carrier} · ${del.items.map((i) => i.name).join(", ")}`,
      category: "Deliveries",
      href: "/budget",
    });
  }

  for (const ds of delayedShipments) {
    results.push({
      id: ds.id,
      title: `${ds.id} — ${ds.supplier} (DELAYED)`,
      subtitle: ds.reason,
      category: "Deliveries",
      href: "/budget",
      status: `${ds.delayDays}d delay`,
      statusColor: ds.impactSeverity === "critical" ? "text-red-600" : "text-amber-600",
    });
  }

  for (const v of supplierPerformance) {
    results.push({
      id: `vendor-${v.name}`,
      title: v.name,
      subtitle: `On-time: ${v.onTimeRate}% · Fill rate: ${v.fillRate}% · ${v.orders} orders · $${(v.spend / 1000).toFixed(0)}K`,
      category: "Vendors",
      href: "/analytics",
    });
  }

  return results;
}

const categoryIcons: Record<string, typeof Package> = {
  Inventory: Package,
  Equipment: Wrench,
  "Purchase Orders": FileText,
  Compliance: ShieldCheck,
  "AI Insights": Brain,
  Deliveries: Truck,
  Vendors: Truck,
};

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const allResults = useMemo(buildResults, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return allResults.slice(0, 8);
    const q = query.toLowerCase();
    return allResults
      .filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.subtitle.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q) ||
          r.id.toLowerCase().includes(q)
      )
      .slice(0, 12);
  }, [query, allResults]);

  const grouped = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    for (const r of filtered) {
      if (!groups[r.category]) groups[r.category] = [];
      groups[r.category].push(r);
    }
    return groups;
  }, [filtered]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Scroll selected item into view
  useEffect(() => {
    if (!resultsRef.current) return;
    const items = resultsRef.current.querySelectorAll("[data-result-index]");
    const target = items[selectedIndex];
    if (target) target.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const handleSelect = useCallback(
    (result: SearchResult) => {
      setIsOpen(false);
      router.push(result.href);
    },
    [router]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      handleSelect(filtered[selectedIndex]);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative flex items-center gap-2 pl-9 pr-4 py-2 text-sm border border-border rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background text-left"
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
        <span className="text-muted">Search everything...</span>
        <kbd className="ml-auto text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-muted border border-border">
          &#8984;K
        </kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh]">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm modal-backdrop"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-[640px] max-h-[60vh] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col modal-panel">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
              <Search className="w-5 h-5 text-muted shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search inventory, equipment, POs, compliance, vendors..."
                className="flex-1 text-sm text-foreground placeholder:text-muted bg-transparent outline-none"
              />
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-muted border border-border shrink-0">
                ESC
              </kbd>
            </div>

            <div ref={resultsRef} className="overflow-y-auto flex-1">
              {Object.entries(grouped).length === 0 ? (
                <div className="px-5 py-12 text-center">
                  <p className="text-sm text-muted">No results for &quot;{query}&quot;</p>
                </div>
              ) : (
                Object.entries(grouped).map(([category, results]) => {
                  const CategoryIcon = categoryIcons[category] || Package;
                  return (
                    <div key={category}>
                      <div className="px-5 pt-3 pb-1.5 flex items-center gap-2">
                        <CategoryIcon className="w-3.5 h-3.5 text-muted" />
                        <span className="text-[11px] font-semibold text-muted uppercase tracking-wider">
                          {category}
                        </span>
                        <span className="text-[11px] text-muted">({results.length})</span>
                      </div>
                      {results.map((result) => {
                        const globalIdx = filtered.indexOf(result);
                        const isSelected = globalIdx === selectedIndex;
                        return (
                          <button
                            key={result.id}
                            data-result-index={globalIdx}
                            onClick={() => handleSelect(result)}
                            onMouseEnter={() => setSelectedIndex(globalIdx)}
                            className={cn(
                              "w-full flex items-center gap-3 px-5 py-2.5 text-left transition-colors",
                              isSelected ? "bg-primary/5" : "hover:bg-stone-50"
                            )}
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">
                                {result.title}
                              </p>
                              <p className="text-[11px] text-muted truncate">{result.subtitle}</p>
                            </div>
                            {result.status && (
                              <span
                                className={cn(
                                  "text-[11px] font-semibold shrink-0",
                                  result.statusColor || "text-muted"
                                )}
                              >
                                {result.status}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  );
                })
              )}
            </div>

            <div className="px-5 py-2.5 border-t border-border bg-stone-50 flex items-center gap-4 text-[11px] text-muted">
              <span>&#8593;&#8595; Navigate</span>
              <span>&#8629; Open</span>
              <span>ESC Close</span>
              <span className="ml-auto">{filtered.length} results</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
