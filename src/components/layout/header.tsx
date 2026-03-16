"use client";

import { Search, Bell, Calendar } from "lucide-react";

export function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-card border-b border-border">
      <div>
        <h1 className="text-xl font-semibold text-foreground font-display">{title}</h1>
        {subtitle && <p className="text-sm text-muted mt-0.5">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-muted">
          <Calendar className="w-4 h-4" />
          {today}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search inventory, equipment, reports..."
            className="pl-9 pr-4 py-2 text-sm border border-border rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
          />
        </div>
        <button className="relative p-2 rounded-lg hover:bg-background transition-colors">
          <Bell className="w-5 h-5 text-muted" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-danger border-2 border-card" />
        </button>
      </div>
    </header>
  );
}
