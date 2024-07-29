

const Pesquisa = ({pesquisa, setPesquisa}) => {

  //Renderização do campo de pesquisa
  return(
    <div className="pesquisa">
        <h2>Pesquisar</h2>
        <input type="text" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="Digite para pesquisar..." />
    </div>
  )
}

export default Pesquisa