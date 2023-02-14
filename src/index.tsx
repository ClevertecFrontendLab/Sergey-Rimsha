import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { store } from './store/store';
import { App } from './app';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <React.StrictMode>
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
  // </React.StrictMode>
);
