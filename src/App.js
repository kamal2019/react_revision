import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Stylesheet from './components/Stylesheet';

function App() {
  return (
    <div className="App">
      <Stylesheet primary={true}/>
      {/* <Message/> */}
      {/* /* <Greet name="kamal" heroName="batman"/>
      <Welcome name="laxmi"/> */}
    </div>
  );
}

export default App;
