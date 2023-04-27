import './App.css';
import Navbar from './Components/Navbar';
import HomeSection from './Components/HomeSection';
import OfferSection from './Components/OfferSection';
import TeacherSection from './Components/TeacherSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <OfferSection />
      <TeacherSection/>
      <Footer/>
    </div>
  );
}

export default App;
