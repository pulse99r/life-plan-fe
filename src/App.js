
import './App.css';
import './components/navbar'
import Home from './components/home';
import AddTwoNums from './add-two-nums';

function App() {
  return (
    <div className="App">
      <Home fName="Kenti" lName='Johnson' home='New York' agent={false}/>
      <AddTwoNums a={2} b={2}/>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
