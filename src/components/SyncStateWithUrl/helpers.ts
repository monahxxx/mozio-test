export const removeEmptyProps = (obj: Record<string, string | string[]>) =>
  Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v != null && v !== "")
  );
