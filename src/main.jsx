import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import { BrowserRouter } from 'react-router-dom'; // ✅ import this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={Store}> {/* ✅ 'store', not 'Store' */}
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
