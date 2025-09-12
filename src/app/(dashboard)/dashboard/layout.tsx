"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  isAuthenticated,
  hasAnyPermissions,
  debugAuthState,
} from "@/services/auth.service";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardShell } from "./_components/dashboard-shell";
import "../../../app/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        console.log("Starting auth check...");
        debugAuthState();
        
        const token = await isAuthenticated();
        const hasPerms = await hasAnyPermissions();
        
        console.log("User is authenticated:", token);
        console.log("User permissions valid:", hasPerms);

        if (!token || !hasPerms) {
          console.log("Redirecting to signin...");
          router.push("/signin");
          return;
        }

        console.log("Auth check passed, showing dashboard");
        setLoading(false);
      } catch (error) {
        console.error("Auth check failed:", error);
        router.push("/signin");
      }
    };

    checkAccess();
  }, [router]);

  if (loading) return null;

  return (
    <SidebarProvider className="overflow-hidden fixed">
      <DashboardShell>{children}</DashboardShell>
    </SidebarProvider>
  );
}