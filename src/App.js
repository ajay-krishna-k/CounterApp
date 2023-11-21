
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className='d-flex align-items-center  w-100 flex-column' style={{height:'100vh',backgroundColor:'black'}}>
      <div className='d-flex align-items-center justiy-content-center flex-column p-5 rounded' style={{backgroundColor:'white',marginTop:'10%', width:'500px'}}>
          <h1 className='text-primary'>Counter Application</h1>
          <Counter/>
      </div>
    </div>
  );
}

export default App;
