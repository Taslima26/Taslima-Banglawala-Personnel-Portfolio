import './App.css';
import Header from './component/Header';
import SideBar from './component/SideBar';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <SideBar />
      <Switch>
        <Route exact path='/' component={Header} />
      </Switch>
    </>
  );
}

export default App;
