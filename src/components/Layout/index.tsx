import { Wrapper } from "./layoutStyles";
import { Children } from "@/types/children";
import { useDarkMode } from "@/hooks/useDarkMode";

interface LayoutProps extends Children {}

export default function Layout({ children }: LayoutProps) {
  const { twilightTheme } = useDarkMode();
  return <Wrapper $twilightTheme={twilightTheme}>{children}</Wrapper>;
}
