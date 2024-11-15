"use client";

import { useEffect } from "react";

export default function PaymentCancelledRoute() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "co.lomoapp://?status=cancelled";
    }, 200);
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}
