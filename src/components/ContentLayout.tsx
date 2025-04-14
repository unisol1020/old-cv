import { PropsWithChildren } from "react";

const ContentLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex-1 container relative pt-8 max-w-screen-xl px-4 pb-10">
      {children}
    </main>
  );
};

export default ContentLayout;
