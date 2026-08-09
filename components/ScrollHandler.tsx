"use client";

import { useEffect } from "react";

export default function ScrollHandler() {
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (target) {
      sessionStorage.removeItem("scrollTarget");
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return null;
}