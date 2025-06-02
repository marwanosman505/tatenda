// import logo from './logo.svg';
import './App.css';
// import Home from './components/Home';
import Landing from './components/Landing';
import Main from './components/Main';
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className="App">
      <Main/>
      <Analytics/>
    </div>
  );
}

export default App;
