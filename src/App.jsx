import './App.css'
import Navigation from "./components/Navigation";
import About from "./components/About";
import Form from "./components/Form";

function App() {

  return (
    <>
      <Navigation />
      <div className="w-screen h-max lg:h-[90dvh] flex flex-col lg:flex-row md:gap-x-8 justify-around items-center">
        <About />
        <Form />
      </div>
    </>
  )
}

export default App