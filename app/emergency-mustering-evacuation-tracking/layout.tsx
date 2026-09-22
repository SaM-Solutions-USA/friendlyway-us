import { AppShell } from "@/components/shared/shell/app-shell";

export default function EmergencyMusteringLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell currentPathname="/emergency-mustering-evacuation-tracking">{children}</AppShell>;
}