import React from 'react';
import './styles/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { rrfProps } from './store';
import Navbar from './components/layout/Navbar';
import Students from './components/students/Students';
import Student from './components/students/Student';
import StudentForm from './components/students/StudentForm';
import Login from './components/pages/Login';
import PrivateRoute from './components/routes/PrivateRoute';
import NotFound from './components/pages/NotFound';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import Appiness_Dashboard from './components/appiness/Appiness_Dashboard';

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <div className='App'>
            <PrivateRoute component={Navbar} />
            <Switch>
              <PrivateRoute exact path='/' component={Students} />
              <PrivateRoute exact path='/student/:id' component={Student} />
              <PrivateRoute
                exact
                path='/studentForm/:id?'
                component={StudentForm}
              />
              <PrivateRoute
                exact
                path='/appiness_dashboard'
                component={Appiness_Dashboard}
              />

              <Route exact path='/login' component={Login} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
