import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Concept from './pages/Concept';
import Variant from './pages/Variant';
import Footer from './components/Footer';
import './App.css'
import ScrollToTop from './components/ScrollToTop';


function App() {

  return (
  
    <Router>
        <Navbar />

        <main className="min-h-screen">
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/concept" element={<Concept />} />
            
            <Route path="/variant" element={<Variant />} />
          </Routes>
        </main>

        <Footer />
    </Router>
  )
}

export default App
