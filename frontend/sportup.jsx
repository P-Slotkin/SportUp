const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const App = require('./components/app');
const LoginForm = require('./components/login_form');
const UserShow = require('./components/user_show');
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');
const GroupForm = require('./components/group_form');
const GroupShow = require('./components/group_show');
const UserEdit = require('./components/user_edit');
const EventForm = require('./components/event_form');
const GroupEdit = require('./components/group_edit');
const EventEdit = require('./components/event_edit');
const EventShow = require('./components/event_show');

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ LoginForm } />
      <Route path="/users/:userId" component={ UserShow } />
      <Route path="/users/:userId/edit" component={ UserEdit } />
      <Route path="/groups/:groupId" component={ GroupShow} />
      <Route path="/groups/:groupId/edit" component={ GroupEdit } />
      <Route path="/events/:eventId/edit" component={ EventEdit } />
      <Route path="/events/:eventId" component={ EventShow } />
      <Route path="/groupform" component={ GroupForm } onEnter={ _ensureLoggedIn }/>
      <Route path="/eventform/:groupId" component={ EventForm } onEnter={ _ensureLoggedIn }/>
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
    replace('/login');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
