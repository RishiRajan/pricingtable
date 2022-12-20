import './App.css';
import Pricecard from './Components/pricecard';
import plans from './plans';
function App() {
  

  return (
    <div className="container-fluid">
      <div className="col-lg-12 pricingsection">
          <div className='row'>
            <Pricecard type ={plans("free")}></Pricecard>
            <Pricecard type ={plans("plus")}></Pricecard>
            <Pricecard type ={plans("pro")}></Pricecard>
          </div>
      </div>
    </div>
  );
}

export default App;
