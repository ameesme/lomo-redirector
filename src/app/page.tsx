"use client";

import { useEffect } from "react";

export default function DownloadAppRoute() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/get";
    }, 1000);
  }, []);

  return (
    <div>
      <p>We sturen je door!</p>
    </div>
  );
}
