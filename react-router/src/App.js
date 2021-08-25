import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'
import MainHeader from './components/MainHeader';

import Product from './pages/Products';
import Welcome from './pages/Welcome';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <header>
        <MainHeader/>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to='/welcome'/>
          </Route>
        <Route path="/welcome" >
          <Welcome/>
        </Route>
        <Route exact path="/products" >
          <Product/>
        </Route>
        <Route path="/products/:productId" >
          <ProductDetail/>
        </Route>
        </Switch>
      </main>
      </BrowserRouter>
  );
}

export default App;
