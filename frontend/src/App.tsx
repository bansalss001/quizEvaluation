import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Layout } from 'antd';
import './App.css';
import { UserObserver } from './helpers/event';
import { UserService } from './services/user';
import { User } from './models/user';
import { Welcome } from './pages/welcome';
import { Header as PageHeader } from './components/header';
import './App.css';
import "antd/dist/antd.css";

const { Header, Content } = Layout;

function App() {

  useEffect(() => {
    const user_id = localStorage.getItem('user_id');
    if(user_id){
        getUserDetails(user_id);
    }
  }, []);

  const getUserDetails = async (user_id: string) => {
    const userService = new UserService();
    const user: User = await userService.getUserInfo(user_id);
    UserObserver?.next(user);
  }
  return (
    <Router>
      <Layout className="layout">
        <Header className="header"><PageHeader/></Header>
        <Content className="content">
            <Switch>
               <Route exact path="/welcome">
                 <Welcome />
               </Route>
               <Route exact path="/">
                 <Redirect to="/welcome" />
               </Route>
            </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
