import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Work from './components/work';
import OurTeam from './components/ourteam';

function App() {
  return (
    <div className='pb-[200px]'>
      <Header></Header>
      <Work></Work>
      <OurTeam></OurTeam>
    </div>
  );
}

export default App;
