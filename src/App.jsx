import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Method from './components/sections/Method';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Stickman from './components/ui/Stickman';
import { contact, footer, hero, method, navigation, projects, skills } from './data/portfolioData';

const App = () => (
  <div className="min-h-screen">
    <Navbar navigation={navigation} />
    <main className="pt-24">
      <Hero data={hero} />
      <Projects data={projects} />
      <Method data={method} />
      <Skills data={skills} />
      <Contact data={contact} />
    </main>
    <Footer note={footer.note} />
    <Stickman />
  </div>
);

export default App;
