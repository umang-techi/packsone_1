

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Ensure Router is imported
import "./App.css";
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Battlepage1 from './components/Battlepage1';
import Packs from './components/Packs';
import NewPacks from './components/NewPacks';
import BattleHighlight from './components/BattleHighlight';
import ForgeHighlight from './components/ForgeHighlight';
import HowPackoneWorks from './components/HowPackoneWorks';
import ForgeMain from './components/ForgeMain';
import LoginSignup from './components/LoginSignup';
import Race from './components/Race';
import Rewards from './components/Rewards';
import CreateBattle from './components/CreateBattle';
import CreatePack from './components/CreatePack';
import ProductDetails from './components/ProductDetails';
import DropChance from './components/DropChance';
import ScrollPage from './components/ScrollPage';
import AllBattle from './components/AllBattle';
import AllBattleSecondSec from './components/AllBattleSecondSec';





function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <div>
        <Navbar />

        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <>
                <div className="pt-20">
  
                  <NewPacks />
                  <BattleHighlight />
                  <ForgeHighlight />
                  <HowPackoneWorks />
       

                </div>
              </>
            }
          />
          
          {/* Other routes */}
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/packs" element={<Packs />} />
          <Route path="/battlepage1" element={<Battlepage1 />} />
          <Route path="/forgemain" element={<ForgeMain />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/race" element={<Race />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/createbattle" element={<CreateBattle />} />
          <Route path="/createpack" element={<CreatePack />} />
          <Route path="/productdetails" element={<ProductDetails />} /> 
          <Route path="/dropchance" element={<DropChance />} /> 
          <Route path="/scrollpage" element={<ScrollPage />} /> 
          <Route path="/allbattle" element={<AllBattle />} /> 
          <Route path="/allbattlesecondsec" element={<AllBattleSecondSec />} /> 
          
       


        </Routes>

        <Footer />
      </div>
    </Router>  
  );
}

export default App;
