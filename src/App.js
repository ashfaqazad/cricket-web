import React from 'react';
import Navbar from './Components/Navbar';
import SocialIcons from './Components/SocialIcons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Basketball from './Pages/Basketball';
import Football from './Pages/Football';
import Soccer from './Pages/Soccer';
import Formula1 from './Pages/Formula1';
import NBAStreams from './Pages/NBAStreams';
import WNBAStreams from './Pages/WNBAStreams';
import NFLStreams from './Pages/NFLStreams';
import CFBStreams from './Pages/CFBStreams';
import XFLStreams from './Pages/XFLStreams';
import CFLStreams from './Pages/CFLStreams';
import MLSStreams from './Pages/MLSStreams';
import LigaPortugal from './Pages/LigaPortugal';
import MotoGPStreams from './Pages/MotoGPStreams';
import UFCStreams from './Pages/UFCStreams';

export default function App() {
  return (

<Router>
  <Navbar />
  <SocialIcons/>
  <Routes>
    <Route path='/basketball' element={<Basketball />} />
    <Route path='/basketball/wnbastreams' element={<WNBAStreams />} />
    <Route path='/basketball/nbastreams' element={<NBAStreams />} />
    <Route path='/football' element={<Football />} />
    <Route path='/football/nflstreams' element={<NFLStreams />} />
    <Route path='/football/cflstreams' element={<CFLStreams />} />
    <Route path='/football/xflstreams' element={<XFLStreams />} />
    <Route path='/football/cfbstreams' element={<CFBStreams />} />
    <Route path='/ufcstreams' element={<UFCStreams/>} />
    <Route path='/soccer' element={<Soccer />} />
    <Route path='/soccer/mlsstreams' element={<MLSStreams />} />
    <Route path='/soccer/ligaportugal' element={<LigaPortugal />} />
    <Route path='/formula1' element={<Formula1 />} />
    <Route path='/formula1/motogpstreams' element={<MotoGPStreams />} />

  </Routes>
</Router>



  );
}
