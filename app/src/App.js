import logo from './logo.svg';
import { Topbar } from './GlobalUI.js';
import { HomeContent } from './pages/home.js';
import './App.css';

function App() {
  return (
    <div className="grid bg-gradient-to-l from-sky-800 to-indigo-900 top-0 h-screen w-screen
                    grid-cols-1">
      <Topbar/>
      <HomeContent/>
    </div>
    
  );
}

export default App;
