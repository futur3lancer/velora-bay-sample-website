"use client";

// Reference-counted scroll lock so multiple components (e.g. the intro
// Loader and the mobile nav drawer) can each ask for a lock without
// stomping on each other's cleanup.
//
// Plain `overflow: hidden` on <body> is NOT reliable on iOS Safari — it
// does not actually stop touch scrolling there. The `position: fixed`
// technique below is the standard cross-browser-safe way to lock the
// page, including on iOS.

let lockCount = 0;
let savedScrollY = 0;

export function lockScroll() {
  if (typeof document === "undefined") return;

  if (lockCount === 0) {
    savedScrollY = window.scrollY;
    const body = document.body.style;
    body.position = "fixed";
    body.top = `-${savedScrollY}px`;
    body.left = "0";
    body.right = "0";
    body.width = "100%";
  }

  lockCount += 1;
}

export function unlockScroll() {
  if (typeof document === "undefined") return;

  lockCount = Math.max(0, lockCount - 1);

  if (lockCount === 0) {
    const body = document.body.style;
    body.position = "";
    body.top = "";
    body.left = "";
    body.right = "";
    body.width = "";
    window.scrollTo(0, savedScrollY);
  }
}
