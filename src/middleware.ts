import type { NextRequest } from "next/server";
import { NextResponse, userAgent } from "next/server";

export function middleware(req: NextRequest) {
  const { ua } = userAgent(req);

  if (/iP(hone|ad|od)/.test(ua)) {
    return NextResponse.redirect(
      "https://apps.apple.com/nl/app/lomo-disposable-camera/id6468936854",
    );
  } else if (/Android/.test(ua)) {
    return NextResponse.redirect(
      "https://play.google.com/store/apps/details?id=co.lomoapp",
    );
  } else {
    return NextResponse.redirect("https://ollo.cam/");
  }
}

export const config = {
  matcher: "/get",
};
