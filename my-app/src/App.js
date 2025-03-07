import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    // <div className="App w-[1340px] h-[3016px] ">
    <div className='container min-w-[1280px]'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
