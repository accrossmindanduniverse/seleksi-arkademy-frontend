import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import UserSignIn  from './pages/user-signin';
import  UserSignUp  from './pages/user-signup';
import Profile from './pages/profile/profile'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/Store'

function App() {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <nav>
              <a href='/signin'>Sign In</a><br></br>
              <a href="/profile">Profile</a>
            </nav>
            <Switch>
              <Route path='/signin' component={UserSignIn}/>\
              <Route path='/signup' component={UserSignUp}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/' component={Home}/>
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
  );
}

export default App;
