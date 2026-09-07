"use client";

import { useEffect } from "react";

export default function TenderFileInput() {
  useEffect(() => {
    const file = document.querySelector("#tenderFile") as HTMLInputElement | null;
    const fileName = document.querySelector("#fileName");
    if (!file) return;

    const onChange = () => {
      const f = file.files?.[0];
      if (!f) { if (fileName) fileName.textContent = "No file selected."; return; }
      const allowed = ["pdf", "doc", "docx", "xls", "xlsx", "zip"];
      const ext = f.name.split(".").pop()?.toLowerCase() ?? "";
      if (!allowed.includes(ext) || f.size > 15 * 1024 * 1024) {
        alert("Please choose a PDF, DOC, DOCX, XLS, XLSX or ZIP file under 15 MB.");
        file.value = "";
        if (fileName) fileName.textContent = "No file selected.";
        return;
      }
      if (fileName) fileName.textContent = `${f.name} · ${(f.size / 1024 / 1024).toFixed(2)} MB`;
    };

    file.addEventListener("change", onChange);
    return () => file.removeEventListener("change", onChange);
  }, []);

  return null;
}
