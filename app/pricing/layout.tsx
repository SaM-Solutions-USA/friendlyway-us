import { AppShell } from "@/components/shared/shell/app-shell";

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell currentPathname="/pricing">{children}</AppShell>;
}