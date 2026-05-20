"use client";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import DashboardSkeletonLoader from "./Loading/loading";

export default function ProtectedRoute({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles?: string[];
}) {
  const auth = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!auth?.loading && !auth?.accessToken) {
      router.push("/auth/login");
    }
  }, [auth?.loading, auth?.accessToken]);
  if (auth?.loading) {
    return <DashboardSkeletonLoader />;
  }
  if (!auth?.accessToken) {
    return <p>Checking authentication...</p>;
  }
  if (allowedRoles && !allowedRoles.includes(auth?.user?.role)) {
    router.push("/dashboard");

    return null;
  }
  return children;
}
