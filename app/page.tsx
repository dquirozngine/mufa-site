import { BooksSection } from "@/components/BooksSection";
import { ContactSection } from "@/components/ContactSection";
import { Epigraph } from "@/components/Epigraph";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Epigraph />
        <BooksSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
