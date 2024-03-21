import logo from './logo.svg';
import { Topbar } from './GlobalUI.js'
import './App.css';

function App() {
  return (
    <div className="flex bg-gradient-to-l from-sky-800 to-indigo-900 top-0 h-screen w-screen">
      <Topbar/>
    </div>
    
  );
}

export default App;
