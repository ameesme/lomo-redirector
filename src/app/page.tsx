import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function DownloadAppRoute() {
  redirect("/get");

  return (
    <div>
      <p>We sturen je door!</p>
    </div>
  );
}
