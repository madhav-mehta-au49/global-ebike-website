export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatINR(n: number): string {
  return "₹" + n.toLocaleString("en-IN");
}

export function formatNumber(n: number): string {
  return n.toLocaleString("en-IN");
}