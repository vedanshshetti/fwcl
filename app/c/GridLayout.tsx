import type { ReactNode } from "react";

function GridLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {children}
    </div>
  );
}

export default GridLayout;