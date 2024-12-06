import './App.css';
import StarRating from './components/start-rating/StarRating';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarRating numOfStars={10} />
      </header>
    </div>
  );
}

export default App;
