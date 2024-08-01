import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="relative flex min-h-screen flex-col bg-background">
        <Header />

        <Button>qaz</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
