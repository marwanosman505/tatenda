// import logo from './logo.svg';
import './App.css';
// import Home from './components/Home';
import Landing from './components/Landing';
import Main from './components/Main';
import { Analytics } from '@vercel/analytics/react'
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <ModalProvider>
      <Main/>
      <Analytics/>
    </ModalProvider>
  );
}

export default App;
