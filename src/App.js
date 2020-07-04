import React from 'react';
import Home from './Home';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Cleaning from './Cleaning';
import TimeTable from './TimeTable';
import Allabsentschedule from './Allabsentschedule';
import Alltimetable from './Alltimetable';
import Allcleaningschedule from './Allcleaningschedule';
import NavBar from './Navbar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <main>
      <Switch>

      <Route path="/" exact>
      <Home/>
      </Route>

      <Route path="/cleaningschedule">
        <Cleaning/>
      </Route>

      <Route path="/timetable">
        <TimeTable/>
      </Route>

      <Route path="/allabsentschedule">
        <Allabsentschedule/>
      </Route>

      <Route path="/alltimetable">
        <Alltimetable/>
      </Route>

      <Route path="/allcleaningschedule">
        <Allcleaningschedule/>
      </Route>
      </Switch>
      
    </main>
    </BrowserRouter>
  );
}

export default App;
