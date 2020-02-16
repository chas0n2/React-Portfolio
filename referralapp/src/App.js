import React from 'react';
//CSS frameworks and stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//Components
import Footer from './components/Footer/FooterIndex';
import NavIndex from './components/Navbar/NavIndex';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavIndex />
      </header>

        <Footer />
      
    </div>
  );
}

export default App;
