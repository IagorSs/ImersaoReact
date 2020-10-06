import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import Home from './pages/Home';

import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
// import Test from './pages/Testes';

const Pagina404 = () => (
  <div>
    <div>Erro 404, Do you like going to </div>
    <Link to="/">Home?</Link>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      {/* <Route path="/teste" component={Test} exact /> */}
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
