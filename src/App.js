import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
<<<<<<< HEAD
=======

>>>>>>> a6c8176989799e4d2cc89f0a7280911c03d2b41c
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
<<<<<<< HEAD
          <Route path="/shop">
=======
          <Route exact path="/shop">
>>>>>>> a6c8176989799e4d2cc89f0a7280911c03d2b41c
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
<<<<<<< HEAD
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/placeorder">
=======
          <Route path="/Inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/PlaceOrder">
>>>>>>> a6c8176989799e4d2cc89f0a7280911c03d2b41c
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

<<<<<<< HEAD
    </div>
=======
    </div >
>>>>>>> a6c8176989799e4d2cc89f0a7280911c03d2b41c
  );
}

export default App;
