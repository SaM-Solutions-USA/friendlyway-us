import { AppShell } from "@/components/shared/shell/app-shell";

export default function ManufacturingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell currentPathname="/solutions-for-manufacturing">{children}</AppShell>;
}
