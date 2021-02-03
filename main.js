const NomeContext = React.createContext('nome');

function MeuComponente1(props) {
  return (
    <div className="componente1">
      <MeuComponente2>
        <p>Teste</p>
        <MeuComponente3 onClickIncrementar={props.onClickIncrementar} />
      </MeuComponente2>
    </div>
  )
}

function MeuComponente2(props) {
  return (
    <div className="componente2">
      <header>{props.children}</header>
    </div>
  )
}

function MeuComponente3(props) {
  const [telefone, setTelefone] = React.useState('123');
  setTimeout(() => {
    setTelefone('321');
  }, 2000);
  return (
    <div className="componente3">
      <MeuComponente4 telefone={telefone} onClickIncrementar={props.onClickIncrementar}></MeuComponente4>
    </div>
  )
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(22);
  setTimeout(() => {
    setIdade(30);
  }, 3000);
  return (
    <div className="componente4">
      <p>Componete 4 - {idade} - {props.telefone} </p>
      <button onClick={props.onClickIncrementar}>Incrementar</button>
    </div>
  )
}

function MeuComponente(props) {
  return (
    <div id="componentes">
      <MeuComponente1 onClickIncrementar={props.onClickIncrementar} />
    </div>
  )
}

function MeuComponenteIrmao(props) {
  return (
    <div id="componente-irmao">
      <MeuComponenteIrmao2 contador={props.contador}></MeuComponenteIrmao2>
    </div>
  )
}

function MeuComponenteIrmao2(props) {
  return (
    <h2>Contador: { props.contador}</h2>
  )
}

function AppComponente() {
  const [contador, incrementarContador] = React.useState(0);

  const clickIncrementa = function () {
    incrementarContador(contador + 1);
  }

  return (
    <React.Fragment>
      <MeuComponente onClickIncrementar={clickIncrementa}></MeuComponente>
      <MeuComponenteIrmao contador={contador}></MeuComponenteIrmao>
    </React.Fragment>
  )
}

ReactDOM.render(
  <AppComponente />,
  document.getElementById('app')
)