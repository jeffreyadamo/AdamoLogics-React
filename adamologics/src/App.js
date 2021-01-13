import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Task from './components/Task';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Navbar navMessage="Let's code"/>
      <div className="container">
        <Message />
        <Counter />
        <Task name="PEMDAS"/>
        <Task name="Jupiter"/>
        <Task name="Sidebar"/>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
