import React from 'react';
import { Navbar, Home,  Edit , Delete, Create,} from './component/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
