import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/1NavigationBar/1NavigationBar.jsx';
import Title from './Components/2Title/Title.jsx';
import PhotoSlider from './Components/3PhotoSlider/PhotoSliderContainer.jsx';

import CheckOut from './Components/4CheckOut/CheckOut.jsx';
import Footer from './Components/5Footer/Footer.jsx'
//PlaceHolders
import ImageSlider from './Components/3PhotoSlider/ImageSlider/ImageSlider1/ImageSlider1.jsx';
import PurchaseItem from './Components/6PurchaseItem/PurchaseItem.jsx';

function App() {
  return (
    <div className="App">
      <nav>
<NavigationBar/>
      </nav>
<section className='grid-container'>
<Title className="grid1"/>
<PhotoSlider className="grid2"/>
<CheckOut className="grid3"/>
<Footer className="grid4"/>
</section>
<PurchaseItem/>
{/*placeHolders */}


    </div>
  );
}

export default App;

