
import './App.css';
import NavigationBar from './Components/1NavigationBar/NavigationBar.jsx';
import Title from './Components/2Title/Title.jsx';
import PhotoSlider from './Components/3PhotoSlider/PhotoSliderContainer.jsx';

import CheckOut from './Components/4CheckOut/CheckOut.jsx';
import Footer from './Components/5Footer/Footer.jsx'
//PlaceHolders
import ImageSlider from './Components/3PhotoSlider/ImageSlider/ImageSlider1/ImageSlider1.jsx';
import PurchaseItem from './Components/6PurchaseItem/PurchaseItem.jsx';
import { use, useState } from 'react';
import Sidebar from './Components/7Sidebar/Sidebar.jsx';
import Cart from './Components/8Cart/Cart.jsx';
import Contacts from './Components/Links/Contacts.jsx';
import { Contact } from 'lucide-react';
function App() {
  const [liftedChoiceQuality, liftedSetChoiceQuality] = useState();
  const [liftedChoiceCuteness, liftedSetChoiceCuteness] = useState();
  const [showPurchaseItemComponent, setShowPurchaseItemComponent] = useState(false);
    const [showPurchaseItemComponentCart, setShowPurchaseItemComponentCart] = useState(false);
const [initialCartState,setInitialCartState] = useState([]);
  return (
    <div className="App">
      <nav>
<NavigationBar/>
      </nav>
<section className='grid-container'>
<Title className="grid1" setShowPurchaseItemComponentCart={setShowPurchaseItemComponentCart}/>
<PhotoSlider className="grid2"/>
<CheckOut className="grid3" liftedSetChoiceQuality={liftedSetChoiceQuality} liftedSetChoiceCuteness={liftedSetChoiceCuteness} showPurchaseItemComponent={showPurchaseItemComponent} setShowPurchaseItemComponent={setShowPurchaseItemComponent}/>
<Footer/>

{showPurchaseItemComponent && (
  <PurchaseItem
    liftedChoiceQuality={liftedChoiceQuality}
    liftedChoiceCuteness={liftedChoiceCuteness}
    setShowPurchaseItemComponent={setShowPurchaseItemComponent}
    initialCartState={initialCartState}
    setInitialCartState={setInitialCartState}
  />
)}
{showPurchaseItemComponentCart && (
  <Cart initialCartState={initialCartState}  setInitialCartState={setInitialCartState} setShowPurchaseItemComponentCart={setShowPurchaseItemComponentCart}/>
)}

</section>

{/*placeHolders */}
<Contacts/>

    </div>
  );
}

export default App;

