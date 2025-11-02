import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/1NavigationBar/Git.jsx';
import Title from './Components/2Title/Title.jsx';
import PhotoSlider from './Components/3PhotoSlider/PhotoSliderContainer.jsx';

import CheckOut from './Components/4CheckOut/CheckOut.jsx';
import Footer from './Components/5Footer/Footer.jsx'
//PlaceHolders
import ImageSlider from './Components/3PhotoSlider/ImageSlider/ImageSlider1/ImageSlider1.jsx';
import PurchaseItem from './Components/6PurchaseItem/PurchaseItem.jsx';
import { useState } from 'react';

function App() {
  const [liftedChoice, liftedSetChoice] = useState();
  const [liftedChoiceCuteness, liftedSetChoiceCuteness] = useState();
  const [showPurchaseItemComponent, setShowPurchaseItemComponent] = useState(false);

  return (
    <div className="App">
      <nav>
<NavigationBar/>
      </nav>
<section className='grid-container'>
<Title className="grid1"/>
<PhotoSlider className="grid2"/>
<CheckOut className="grid3" liftedSetChoice={liftedSetChoice} liftedSetChoiceCuteness={liftedSetChoiceCuteness} showPurchaseItemComponent={showPurchaseItemComponent} setShowPurchaseItemComponent={setShowPurchaseItemComponent}/>
<Footer/>
{showPurchaseItemComponent && (
  <PurchaseItem
    liftedChoice={liftedChoice}
    liftedChoiceCuteness={liftedChoiceCuteness}
    setShowPurchaseItemComponent={setShowPurchaseItemComponent}
  />
)}

</section>

{/*placeHolders */}


    </div>
  );
}

export default App;

