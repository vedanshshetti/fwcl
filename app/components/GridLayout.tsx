import type { ReactNode } from "react";
import Layout from "../demo/Layout/Layout";

function GridLayout({ children }: { children: ReactNode }) {
  return <Layout type="grid">{children}</Layout>;
}

export default GridLayout;
