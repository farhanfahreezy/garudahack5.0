export function truncateNumber(num: number): string {
  if (num < 1000) return num.toString();

  const units = ["k", "M", "B", "T"];
  const order = Math.floor(Math.log10(num) / 3);
  const unitname = units[order - 1];
  const numStr = (num / Math.pow(1000, order)).toFixed(2);

  // Remove unnecessary trailing zeros and decimal point
  return numStr.replace(/\.?0+$/, "") + unitname;
}
