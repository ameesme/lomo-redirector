"use client";

import { useEffect } from "react";

export default function DownloadAppRoute() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/get";
    }, 500);
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}
