import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

// Modules
import { Dashboard } from './modules/dashboard/pages/Dashboard';
import { MyResumes } from './modules/myResumes/pages/MyResumes';
import { CreateResume } from './modules/createResume/pages/CreateResume';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/' exact>
          <Dashboard />
        </Route>
        <Route path='/my-resumes' exact>
          <MyResumes />
        </Route>
        <Route path='/create-resume' exact>
          <CreateResume />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
