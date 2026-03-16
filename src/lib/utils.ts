import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

export function formatCurrency(num: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

export function formatPercent(num: number): string {
  return `${num.toFixed(1)}%`;
}

export function daysUntil(dateStr: string): number {
  const now = new Date();
  const target = new Date(dateStr);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export function getStatusColor(score: number): string {
  if (score >= 90) return "text-emerald-600";
  if (score >= 75) return "text-amber-600";
  return "text-rose-600";
}

export function getStatusBg(score: number): string {
  if (score >= 90) return "bg-emerald-50 border-emerald-200";
  if (score >= 75) return "bg-amber-50 border-amber-200";
  return "bg-rose-50 border-rose-200";
}
