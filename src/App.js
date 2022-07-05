import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Work from './components/work';
import OurTeam from './components/ourteam';
import Footer from './components/footer';

function App() {
  return (
    <div className='pb-[200px]'>
      <Header></Header>
      <Work></Work>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </div>
  );
}

export default App;
