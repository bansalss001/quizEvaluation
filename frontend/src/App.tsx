import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout } from 'antd';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>header</Header>
        <Content>
            <Switch>
               <Route>
                 
               </Route>
            </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
