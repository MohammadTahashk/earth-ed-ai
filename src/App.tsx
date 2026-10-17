import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesCarousel from './components/FeaturesCarousel';
import ImpactCounters from './components/ImpactCounters';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './components/Login';
import EcoTasks from './components/EcoTasks';
import About from './components/About';
import Features from './components/Features';
import Community from './components/Community';
import Impact from './components/Impact';
import GetInvolved from './components/GetInvolved';

// HomePage component combining best elements
const HomePage = () => (
  <>
    <Header />
    <Hero />
    <FeaturesCarousel />
    <ImpactCounters />
    <Testimonials />
    <Footer />
  </>
);

// AboutPage component
const AboutPage = () => (
  <>
    <Header />
    <About />
    <Footer />
  </>
);

// FeaturesPage component  
const FeaturesPage = () => (
  <>
    <Header />
    <Features />
    <Footer />
  </>
);

// CommunityPage component
const CommunityPage = () => (
  <>
    <Header />
    <Community />
    <Footer />
  </>
);

// ImpactPage component
const ImpactPage = () => (
  <>
    <Header />
    <Impact />
    <Footer />
  </>
);

// GetInvolvedPage component
const GetInvolvedPage = () => (
  <>
    <Header />
    <GetInvolved />
    <Footer />
  </>
);

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/eco-tasks" element={<EcoTasks />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
      </Routes>
    </div>
  );
}

export default App;
