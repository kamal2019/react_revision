import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="kamal" heroName="batman"/>
      <Welcome name="laxmi"/>
    </div>
  );
}

export default App;
