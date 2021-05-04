import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Notification from './components/notification';

const ViewMain = React.lazy(() =>
  import(/* webpackChunkName: "views-auth" */ './pages/main')
);

const App = () => {
  return (
    <React.Fragment>
      <Notification 
      timeLimit={2000}
      />
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={props => <ViewMain {...props} />}
            />
          </Switch>
        </Router>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
