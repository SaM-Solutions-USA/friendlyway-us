import { AppShell } from "@/components/shared/shell/app-shell";

export default function VisitorManagementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell currentPathname="/visitor-management-solution">{children}</AppShell>;
}