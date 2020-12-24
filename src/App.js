import './App.css';
import Header from './component/Header';
import SideBar from './component/SideBar';
import { Route, Switch } from 'react-router-dom';
import Project from './component/Project';

function App() {
  return (
    <>
      <SideBar />
      <Switch>
        <Route exact path='/' component={Header} />
        <Route exact path='/projects' component={Project} />
      </Switch>
    </>
  );
}

export default App;
