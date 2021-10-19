import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer';
import MenuScreen from './screens/MenuScreen';
import TableScreen from './screens/TableScreen';
import OrderScreen from './screens/OrderScreen';
import OrderedScreen from './screens/OrderedScreen';
import CashierScreen from './screens/CashierScreen';
import CashierCheckScreen from './screens/CashierCheckScreen';

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path='/' component={TableScreen} exact/>
          <Route path='/menu' component={MenuScreen}/>
          <Route path='/cart' component={OrderScreen}/>
          <Route path='/order' component={OrderedScreen}/>
          <Route path='/cashier' component={CashierScreen}/>
          <Route path='/check' component={CashierCheckScreen}/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
