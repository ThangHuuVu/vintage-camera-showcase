import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <Header />
      {children}
    </div>
  );
}
