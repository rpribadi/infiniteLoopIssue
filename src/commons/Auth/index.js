import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';


export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: (state) => { return state.authentication; },
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  failureRedirectPath: '/authentication',
  predicate: (user) => { return user.accessKey; }
  //allowRedirectBack: false
});


export default UserIsAuthenticated;
