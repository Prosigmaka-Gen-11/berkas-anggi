import logo from './logo.svg';
import './App.css';
import Wish from './components/Wish';
import Greet from './components/Greet';
import Time from './components/Time';

function App() {
  return (
    <>
    <div className='container'>
    <Greet />
     <Wish />
     <Time/>

    </div>
  
    </>

    
  )
}

export default App;
