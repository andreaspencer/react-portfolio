import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div>
    <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
    ></Nav>
    <main>
    {!contactSelected ? (
    <>
      <Gallery currentCategory={currentCategory}></Gallery>
      <About></About>
    </>
    ) : (
      <ContactForm></ContactForm>
    )}
    </main>
  </div>
  );
}

export default App;
