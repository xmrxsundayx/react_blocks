import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContent from './components/Subcontent';
import Advertisement from './components/Advertisement';


function App() {
  return (
    <div className="AppBlock">
      <Header />
      <div style={{ display: 'flex'}}>
        <Navigation />
        <Main>
            <div className='adv'>
              <div style={{ display: 'flex'}}>
                <SubContent />
                <SubContent />
                <SubContent />
              </div>
              <Advertisement />
            </div >
        </Main>
      </div>
    </div>
  );
}

export default App;
