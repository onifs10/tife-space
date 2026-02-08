export type Theme = "light" | "dark" | "mirage";

const THEME_STORAGE_KEY = "ayu-theme";

export function getTheme(): Theme {
  // Check localStorage first
  const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  if (stored && ["light", "dark", "mirage"].includes(stored)) {
    return stored;
  }

  // Default to system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function setTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function initTheme(): void {
  const theme = getTheme();
  setTheme(theme);
}
