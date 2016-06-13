import { injectReducer } from '../../store/reducers';

// Sync route definition
export default (store) => {
  const Container = require('./Layout').default;
  const reducer = require('./reducers').default;

  injectReducer(store, { key: 'authentication', reducer });

  return {
    path: 'authentication',
    component: Container
  };
};
