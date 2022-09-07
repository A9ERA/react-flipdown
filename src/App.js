import './App.css';
import { Flipdown } from './lib';

function App() {
  return (
    <div className='app'>
      <Flipdown endTime={new Date(2022, 9, 6, 23, 59, 59).getTime() / 1000} theme='dark'/>
    </div>
  );
}

export default App;
