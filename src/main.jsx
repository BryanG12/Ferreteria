import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Ferreteria } from './Ferreteria';

import { Ejemplo } from './components/Ejemplo'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* {<Ejemplo />} */}

    <BrowserRouter>
      <Ferreteria />
    </BrowserRouter>

  </React.StrictMode>
)
