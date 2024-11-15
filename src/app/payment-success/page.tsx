"use client";

import { useEffect } from "react";

export default function PaymentSuccessRoute() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "co.lomoapp://?status=success";
    }, 200);
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}
