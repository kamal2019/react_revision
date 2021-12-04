import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Stylesheet from './components/Stylesheet';
import Forms from './components/Forms';
import ComponentC from './components/ComponentC';


function App() {
  return (
    <div className="App">
      <ComponentC/>
      {/* <Forms/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Message/> */}
      {/* /* <Greet name="kamal" heroName="batman"/>
      <Welcome name="laxmi"/> */}
    </div>
  );
}

export default App;
