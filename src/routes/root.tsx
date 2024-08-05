import ContentLayout from "@/components/ContentLayout";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="relative flex min-h-screen flex-col bg-background">
        <Header />

        <ContentLayout>
          <Outlet />
        </ContentLayout>
      </div>
    </ThemeProvider>
  );
};

export default Root;
