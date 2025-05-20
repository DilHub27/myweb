import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Componant/AboutUs';
import Contant from './Componant/Contant';
import Project  from './Componant/Project';
import Skill from './Componant/Skill '; 
import Contact from './Componant/Contact' ;





function App() {
  return (
    <div className="App">


      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Contant/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Project" element={<Project/>} />
          <Route path="/Skill" element={<Skill/>} />
          <Route path="/Contact" element={<Contact/>} />


       
          
        
        </Routes>    
      </BrowserRouter>
    </div>
  );
}

export default App;
