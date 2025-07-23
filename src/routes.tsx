import { lazy, Suspense } from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";

import Loader from "./components/Loader.tsx";

// Lazy-loaded pages and components
const HomePage = lazy(() => import("./pages/HomePage.tsx"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute.tsx"));
const TermsConditionsPage = lazy(() => import("./pages/TermsConditionsPage.tsx"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage.tsx"));
const SignUpPage = lazy(() => import("./pages/SignUpPage.tsx"));
const AboutUs = lazy(() => import("./pages/AboutUs.tsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.tsx"));
const SignInPage = lazy(() => import("./pages/SignInPage.tsx"));
const SuccessPage = lazy(() => import("./pages/SuccessPage.tsx"));
const OrderSummaryPage = lazy(() => import("./pages/OrderSummaryPage.tsx"));

// Higher-order component to wrap lazy-loaded components
const withSuspense = (
  Component: React.LazyExoticComponent<React.ComponentType>,
  isProtected: boolean = false
) => {
  const element = (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );

  return isProtected ? <ProtectedRoute>{element}</ProtectedRoute> : element;
};

const AppRoutes: RouteObject[] = [
  {
    path: "/",
    element: withSuspense(HomePage),
  },
  {
    path: "/terms-of-service",
    element: withSuspense(TermsConditionsPage),
  },
  {
    path: "/privacy-policy",
    element: withSuspense(PrivacyPolicyPage),
  },
  {
    path: "/sign-up",
    element: withSuspense(SignUpPage),
  },
  {
    path: "/sign-in",
    element: withSuspense(SignInPage),
  },
  {
    path: "/about-us",
    element: withSuspense(AboutUs)
  },
  {
    path: "/order-summary",
    element: withSuspense(OrderSummaryPage, true)
  },
  {
    path: "/success",
    element: withSuspense(SuccessPage, true)
  },
  {
    path: "*", // Catch-all route for 404
    element: withSuspense(NotFoundPage),

  },
]

const Router = createBrowserRouter(AppRoutes);

export default Router;