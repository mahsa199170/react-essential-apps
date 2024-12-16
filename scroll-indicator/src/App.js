import './App.css';
import ScrollIndicator from './components/scroll-indicator/ScrollIndicator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
      </header>
    </div>
  );
}

export default App;
