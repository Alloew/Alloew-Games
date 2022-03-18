import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";

import Main from "./Main"

const history = createBrowserHistory();

ReactDOM.render(
  <>
    <Main />
  </>,
  document.getElementById('root')
);