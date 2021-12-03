import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message/>
      {/* /* <Greet name="kamal" heroName="batman"/>
      <Welcome name="laxmi"/> */}
    </div>
  );
}

export default App;
