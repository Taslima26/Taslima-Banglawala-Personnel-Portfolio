import './App.css';
import Header from './component/Header';
import SideBar from './component/SideBar';
import { Route, Switch } from 'react-router-dom';
import Project from './component/Project';
import Contact from './component/Contact';
import CV from './component/CV';
function App() {
  return (
    <>
      <SideBar />
      <Switch>
        <Route exact path='/' component={Header} />
        <Route exact path='/projects' component={Project} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/cv' component={CV} />
      </Switch>
    </>
  );
}

export default App;
