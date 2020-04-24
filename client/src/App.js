import React, {Fragment} from 'react';
import QuickAdd from './components/QuickAdd';
import Todos from './components/Todos';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {

  const monthToString = month => {
    switch(month){
      case 0: return 'January'; case 1: return 'February';  case 2: return 'March';
      case 3: return 'April';   case 4: return 'May';       case 5: return 'June'; 
      case 6: return 'July';    case 7: return 'August';    case 8: return 'September'; 
      case 9: return 'October'; case 10: return 'November'; case 11: return 'December';
      default: return '';
    }
  }

  // calculate date as soon as app starts up
  const today = new Date();
  let date = today.getDate();
  let month = today.getMonth(); // [Jan,Dec] -> [0,11] 
  let year = today.getFullYear();
  // let day = today.getDay(); // [Sun,Sat] -> [0,6]


  return (
    <Fragment>
      <NavBar/>
      <h1>{monthToString(month)  + ' ' + date + ', ' + year}</h1>
      <QuickAdd/>
      <Todos/>
      <Footer/>
    </Fragment>
  )
}

export default App;
