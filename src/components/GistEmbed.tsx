"use client";

import { useEffect, useRef } from "react";

interface GistEmbedProps {
  id: string; // gist id hash
  username: string; // gist owner username
  file?: string; // optional specific file name within the gist
}

export default function GistEmbed({ id, username, file }: GistEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    const base = `https://gist.github.com/${username}/${id}.js`;
    script.src = file ? `${base}?file=${encodeURIComponent(file)}` : base;
    script.async = true;

    // Clear previous content (if hot reloaded)
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(script);

    return () => {
      if (!containerRef.current) return;
      containerRef.current.innerHTML = "";
    };
  }, [id, username, file]);

  return <div ref={containerRef} />;
}


