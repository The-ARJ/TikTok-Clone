import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <main className=" pt-12 md:pt-32">
        <Hero />

      </main>
    </div>
  )
}
