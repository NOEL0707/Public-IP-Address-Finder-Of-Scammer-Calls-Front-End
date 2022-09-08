import './App.css';
import IPResults from './components/IPResults';
import ResponsiveAppBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <IPResults/>
    </div>
  );
}

export default App;
