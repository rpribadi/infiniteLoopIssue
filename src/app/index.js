import { injectReducer } from '../store/reducers';
import reducer from './reducers';
import App from './Layout';

export default (store) => {
  injectReducer(store, { key: 'app', reducer });
  return App(store);
};
