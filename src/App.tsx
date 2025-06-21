import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import MatchInfo from './pages/MatchInfo';
import FoodCulture from './pages/FoodCulture';
import Transport from './pages/Transport';
import AIAssistant from './pages/AIAssistant';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/matches" element={<MatchInfo />} />
          <Route path="/food-culture" element={<FoodCulture />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;