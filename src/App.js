import './App.scss'
import Content from './components/Content'
import drawers from './images/drawers.jpg'
import avatar from './images/avatar-michelle.jpg'

const data = [
  {
    title: `Shift the overall look and feel by adding these wonderful
    touches to furniture in your home`,
    content: `Ever been in a room and felt like something was missing?
        Perhaps if felt slightly bare and uninviting. I've got some
      simple tips to help you make any room feel complete.`,
    name: 'Michelle Appleton',
    date: '28 Jun 2020'
  }
]

function App() {
  return (
    <div className='wrapper'>
      <div className='img-wrapper'>
        <img src={drawers} alt='drawer' />
      </div>
      <Content
        avatar={avatar}
        title={data[0].title}
        content={data[0].content}
        name={data[0].name}
        date={data[0].date}
      />
    </div>
  );
}

export default App;
