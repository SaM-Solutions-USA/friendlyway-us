import { AppShell } from "@/components/shared/shell/app-shell";

export default function Counter22Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell currentPathname="/products/counter-22">{children}</AppShell>;
}