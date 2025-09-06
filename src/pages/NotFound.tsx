import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import not_found from "@/assets/404.gif";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />

        <div className="min-h-screen flex items-center justify-center flex-col bg-background">
          <img src={not_found} alt="404" />
          <a href="/" className="text-primary hover:text-primary/80 underline">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:shadow-strong transition-all transform hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              Return to Home
            </Button>
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
