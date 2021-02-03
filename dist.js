const NomeContext = React.createContext('nome');

function MeuComponente1(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement("p", null, "Teste"), /*#__PURE__*/React.createElement(MeuComponente3, {
    onClickIncrementar: props.onClickIncrementar
  })));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente2"
  }, /*#__PURE__*/React.createElement("header", null, props.children));
}

function MeuComponente3(props) {
  const [telefone, setTelefone] = React.useState('123');
  setTimeout(() => {
    setTelefone('321');
  }, 2000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, {
    telefone: telefone,
    onClickIncrementar: props.onClickIncrementar
  }));
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(22);
  setTimeout(() => {
    setIdade(30);
  }, 3000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente4"
  }, /*#__PURE__*/React.createElement("p", null, "Componete 4 - ", idade, " - ", props.telefone, " "), /*#__PURE__*/React.createElement("button", {
    onClick: props.onClickIncrementar
  }, "Incrementar"));
}

function MeuComponente(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, {
    onClickIncrementar: props.onClickIncrementar
  }));
}

function MeuComponenteIrmao(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componente-irmao"
  }, /*#__PURE__*/React.createElement(MeuComponenteIrmao2, {
    contador: props.contador
  }));
}

function MeuComponenteIrmao2(props) {
  return /*#__PURE__*/React.createElement("h2", null, "Contador: ", props.contador);
}

function AppComponente() {
  const [contador, incrementarContador] = React.useState(0);

  const clickIncrementa = function () {
    incrementarContador(contador + 1);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeuComponente, {
    onClickIncrementar: clickIncrementa
  }), /*#__PURE__*/React.createElement(MeuComponenteIrmao, {
    contador: contador
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponente, null), document.getElementById('app'));
