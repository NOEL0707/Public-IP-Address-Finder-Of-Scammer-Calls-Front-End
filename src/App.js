import './App.css';
import Footer from './components/Footer';
import IPResults from './components/IPResults';
import ResponsiveAppBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <IPResults/>
      <Footer/>
    </div>
  );
}

export default App;
