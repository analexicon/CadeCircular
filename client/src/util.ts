export function convertStringToNumber(string: string): number {
  try {
    return Number(string.replace(/[^0-9.-]+/g, ""));
  } catch (error: unknown) {
    console.error(error);
    return 0;
  }
}
