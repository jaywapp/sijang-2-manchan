import logo from './logo.svg';
import './App.css';
import Filter from './components/Filter'
import FeedBlocks from './components/FeedBlocks'
import TitleBar from './components/TitleBar';

function App() {
  return (
    <div>
      <TitleBar/>
      <Filter/>
      <FeedBlocks/>
    </div>
  );
}

export default App;
