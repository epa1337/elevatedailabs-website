import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}
