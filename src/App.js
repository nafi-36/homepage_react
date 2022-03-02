// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Galery from './components/Galery';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      {/* <Header/> move it to Section.js*/}
      <Section/>
      <Galery/>
      {/* <About/> */}
    </div>
  );
}

export default App;
