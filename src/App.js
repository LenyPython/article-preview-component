import './App.scss'
import Content from './Content'
import drawers from './images/drawers.jpg'

function App() {
  return (
    <div className='wrapper'>
      <div className='img-wrapper'>
        <img src={drawers} alt='drawer' />
      </div>
      <Content />
    </div>
  );
}

export default App;
