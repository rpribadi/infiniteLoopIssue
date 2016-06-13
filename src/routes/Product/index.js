import { injectReducer } from '../../store/reducers';
import UserIsAuthenticated from 'commons/Auth';

export default (store) => ({
  path: 'product/:productId',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Container = require('./Layout').default;
      const reducer = require('./reducers').default;

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'product', reducer });

      /*  Return getComponent   */

      // Enable UserIsAuthenticated for infinite loop
      cb(null, UserIsAuthenticated(Container));

      // Disabled UserIsAuthenticated for normal flow
      //cb(null, Container);

      /* Webpack named bundle   */
    }, 'product');
  }
});
