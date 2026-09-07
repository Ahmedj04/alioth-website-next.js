"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function RoutePreselect() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const route = searchParams.get("route");
    const select = document.querySelector("#route") as HTMLSelectElement | null;
    if (!select || !route) return;

    const map: Record<string, string> = { proposal: "proposal", recruitment: "recruitment", grow: "grow", "just-talk": "just" };
    const target = map[route];
    if (!target) return;

    [...select.options].some((opt) => {
      const match = (opt.value + " " + opt.textContent).toLowerCase().includes(target);
      if (match) { select.value = opt.value; return true; }
      return false;
    });
  }, [searchParams]);

  return null;
}
