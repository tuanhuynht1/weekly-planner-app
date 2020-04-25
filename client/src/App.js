import React, {Fragment, Component} from 'react';
import QuickAdd from './components/QuickAdd';
import Todos from './components/Todos';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      today: new Date(),
      list: [],
      view_date: new Date()
    }
    this.addToList = this.addToList.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.switchView = this.switchView.bind(this);
  }
  // call this when app renders
  componentDidMount(){
    this.getTodos();  // get all todos
  }
  // convert getMonth() to string for rendering
  monthToString(month){
    switch(month){
      case 0: return 'January';   case 1: return 'February';  case 2: return 'March';     case 3: return 'April';
      case 4: return 'May';       case 5: return 'June';      case 6: return 'July';      case 7: return 'August';   
      case 8: return 'September'; case 9: return 'October';   case 10: return 'November'; case 11: return 'December';
      default: return '';
    }
  }
  // convert date object to yyyy-mm-dd string (postgres format)
  dateToString(date){
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); 
    const yyyy = date.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  }
  // add a tempory todo to local memory while waiting on insert to database (pass down to QuickAdd)
  addToList(todo){
    this.setState({
      list: [...this.state.list, todo]
    });
  }
  // get all todos and set it to list
  getTodos(){
    axios
    .get('/todos')
    .then( res => {
      this.setState({
        list: res.data
      });
    })
    .catch(console.error);
  }
  // switch view
  switchView(date_offset){
    let date = new Date();
    date.setDate(date.getDate()+date_offset);
    // console.log(date);
    this.setState({
      view_date: date
    })
    this.getTodos();
  }

  render(){
    const { today, list, view_date } = this.state;

    // parse date object 
    const date = view_date.getDate();
    const month = view_date.getMonth(); // [Jan,Dec] -> [0,11] 
    const year = view_date.getFullYear();

    // filter list to only include current todos
    const current_list = list.filter(todo => todo.assigned_date.substring(0,10) === this.dateToString(view_date));

    return (
      <Fragment>
        <NavBar view_date={view_date} today={today} switchView={this.switchView}/>
        <div className='main-content'>
          <h1>{this.monthToString(month)  + ' ' + date + ', ' + year}</h1>
          <QuickAdd addToList={this.addToList} getTodos={this.getTodos} date_string={this.dateToString(view_date)}/>
          <Todos list={current_list} />
        </div>
        <Footer list={current_list}/>
      </Fragment>
    )
  }
  
}

export default App;
