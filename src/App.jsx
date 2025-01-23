import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <section className="z-0 min-h-screen bg-blue-500">

      </section>
    </main>
  )
}

export default App