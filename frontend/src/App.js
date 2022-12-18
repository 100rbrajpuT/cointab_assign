import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom"
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      hello
      <Home/>
      <Routes>
      <Route path="/detail" element={ <Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
