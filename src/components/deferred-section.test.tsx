import { act } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DeferredSection } from "./deferred-section";

describe("on-demand section loading", () => {
  beforeEach(() => { vi.stubGlobal("IS_REACT_ACT_ENVIRONMENT", true); });
  afterEach(() => { vi.unstubAllGlobals(); window.location.hash = ""; document.body.innerHTML = ""; });
  it("does not mount unvisited content and preserves it after leaving the viewport", async () => {
    let notify: IntersectionObserverCallback | undefined;
    vi.stubGlobal("IntersectionObserver", class {
      constructor(callback: IntersectionObserverCallback) { notify = callback; }
      observe() {} disconnect() {}
    });
    const host = document.createElement("div"); document.body.append(host);
    const root = createRoot(host);
    const mounted = vi.fn();
    function Content() { mounted(); return <input defaultValue="kept" />; }
    await act(async () => { root.render(<DeferredSection anchor="programs"><Content /></DeferredSection>); });
    expect(mounted).not.toHaveBeenCalled();
    await act(async () => { notify?.([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver); });
    expect(host.querySelector("input")?.value).toBe("kept");
    await act(async () => { notify?.([{ isIntersecting: false } as IntersectionObserverEntry], {} as IntersectionObserver); });
    expect(host.querySelector("input")?.value).toBe("kept");
    await act(async () => root.unmount());
  });
  it("loads a directly linked section without requiring a scroll", async () => {
    vi.stubGlobal("IntersectionObserver", class { observe() {} disconnect() {} });
    window.location.hash = "#programs";
    const host = document.createElement("div"); document.body.append(host);
    const root = createRoot(host);
    await act(async () => { root.render(<DeferredSection anchor="programs"><input defaultValue="linked" /></DeferredSection>); });
    expect(host.querySelector("input")?.value).toBe("linked");
    await act(async () => root.unmount());
  });
});