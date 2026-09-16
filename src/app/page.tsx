import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Specialties } from "@/components/site/specialties";
import { About } from "@/components/site/about";
import { Differentiators } from "@/components/site/differentiators";
import { Testimonial } from "@/components/site/testimonial";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { WhatsappFab } from "@/components/site/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Specialties />
        <About />
        <Differentiators />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
