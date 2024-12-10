import './App.css';
import ImageSlider from './components/image-slider/ImageSlider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ImageSlider
          url={'https://picsum.photos/v2/list'}
          page={'1'}
          limit={'10'}
        /> */}

        {/* Image slider component */}
        <ImageSlider
          url={'https://picsum.photos/v2/list'}
          page={'1'}
          limit={'10'}
        />
      </header>
    </div>
  );
}

export default App;
