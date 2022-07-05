import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Work from './components/work';
import OurTeam from './components/ourteam';
import Footer from './components/footer';
import Contact from './components/contact';
import Services from './components/services';

function App() {
  return (
    <div>
      <Header></Header>
      <Work></Work>
      <Services></Services>
      <OurTeam></OurTeam>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
