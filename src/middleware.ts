import { authMiddleware, clerkClient } from "@clerk/nextjs";

export default authMiddleware({
  // Public routes are routes that don't require authentication
  publicRoutes: [
    "/form",
    "/",
    "/pricing",
    "/signin(.*)",
    "/signup(.*)",
    "/sso-callback(.*)",
    "/categories(.*)",
    "/product(.*)",
    "/products(.*)",
    "/product(.*)",
    "/stores(.*)",
    "/store(.*)",
    "/build-a-board(.*)",
    "/email-preferences(.*)",
    "/blog(.*)",
    "/about(.*)",
    "/contact(.*)",
    "/terms(.*)",
    "/privacy(.*)",
    "/api(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api)(.*)"],
};
