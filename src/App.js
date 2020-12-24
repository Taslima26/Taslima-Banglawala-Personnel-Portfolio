import './App.css';
import Header from './component/Header';
import SideBar from './component/SideBar';
import { Route, Switch } from 'react-router-dom';
import Project from './component/Project';
import Contact from './component/Contact';

function App() {
  return (
    <>
      <SideBar />
      <Switch>
        <Route exact path='/' component={Header} />
        <Route exact path='/projects' component={Project} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </>
  );
}

export default App;
