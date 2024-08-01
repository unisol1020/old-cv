import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex-1">
      <div>
        {children}
      </div>
    </main>
  );
};

export default Layout;