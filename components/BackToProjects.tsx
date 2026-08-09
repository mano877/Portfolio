"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackToProjects() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        sessionStorage.setItem("scrollTarget", "projects");
        router.push("/");
      }}
      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-accent transition-colors"
    >
      <ArrowLeft className="w-3.5 h-3.5" />
      Back to projects
    </button>
  );
}