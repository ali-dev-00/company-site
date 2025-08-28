"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  isAuthenticated,
  hasAnyPermissions,
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
      const token = await isAuthenticated();
      const hasPerms = await hasAnyPermissions();

      if (!token || !hasPerms) {
        router.push("/signin");
        return;
      }

      setLoading(false);
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