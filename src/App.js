import { Navbar, Hero, Presentation, Trade, Features, Mining, Footer } from './containers'
import TraderDisplay from './containers/TraderDisplay';

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-cradark">
      <header>
        <Navbar />
        <Hero />
      </header>
      <section>
        <Presentation />
        <TraderDisplay />
        <Features />
        <Mining/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
