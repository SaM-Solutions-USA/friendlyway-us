import { AppShell } from "@/components/shared/shell/app-shell";

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell currentPathname="/about-us">{children}</AppShell>;
}