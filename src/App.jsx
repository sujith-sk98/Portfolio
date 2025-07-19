import { useEffect } from 'react';
import './App.scss';
import {LandingPageComponent} from './landing-page/LandingPageComponent';
import Lenis from 'lenis';

function App() {
  useEffect(()=> {
    const lenis = new Lenis()

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
    <LandingPageComponent />
  );
}

export default App;
