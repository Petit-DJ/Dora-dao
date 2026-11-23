import { lazy, type ComponentType } from "react";

/**
 * After a redeploy or a preview restart, an open tab can ask for a section file
 * that no longer exists ("Importing a module script failed"). Retry once, then
 * reload the page a single time so the visitor gets the fresh files instead of
 * a blank screen. A timestamp guard prevents reload loops.
 */
const RELOAD_KEY = "dora:stale-chunk-reload";
const RELOAD_WINDOW_MS = 15_000;

const CHUNK_ERROR =
  /Importing a module script failed|Failed to fetch dynamically imported module|error loading dynamically imported module|Unable to preload CSS|ChunkLoadError|Loading chunk [\w-]+ failed/i;

export function isStaleChunkError(error: unknown): boolean {
  const message = error instanceof Error ? `${error.name} ${error.message}` : String(error ?? "");
  return CHUNK_ERROR.test(message);
}

/** Reloads once per window; returns true when a reload was started. */
export function reloadForStaleChunk(error: unknown): boolean {
  if (typeof window === "undefined" || !isStaleChunkError(error)) return false;
  try {
    const last = Number(window.sessionStorage.getItem(RELOAD_KEY) ?? 0);
    if (Date.now() - last < RELOAD_WINDOW_MS) return false;
    window.sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
  } catch {
    // Storage blocked: still reload, the browser's own cache keeps this from looping fast.
  }
  window.location.reload();
  return true;
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function lazyRetry<T extends ComponentType<any>>(load: () => Promise<{ default: T }>) {
  return lazy(async () => {
    try {
      return await load();
    } catch (first) {
      if (typeof window === "undefined" || !isStaleChunkError(first)) throw first;
      await wait(500);
      try {
        return await load();
      } catch (second) {
        if (reloadForStaleChunk(second)) return new Promise<{ default: T }>(() => {});
        throw second;
      }
    }
  });
}
