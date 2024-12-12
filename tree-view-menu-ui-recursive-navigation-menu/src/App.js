import './App.css';
import TreeView from './components/tree-view/TreeView';
import menus from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TreeView menus={menus} />
      </header>
    </div>
  );
}

export default App;
