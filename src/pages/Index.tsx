import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Process />
        <Testimonials />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
