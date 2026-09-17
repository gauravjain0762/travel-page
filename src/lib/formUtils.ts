export function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function todayISO() {
  return new Date().toISOString().split("T")[0];
}
