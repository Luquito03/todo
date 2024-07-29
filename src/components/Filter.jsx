

const Filter = ({filter, setFilter, setSort}) => {

    //HTML de renderização do filtro
  return (
    <div className="filtro">
        <h2>Filtrar:</h2>
        <div className="filtro-opcoes">
            <div>
                <p>Status</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="Todas">Todas</option>
                    <option value="Incompleta">Incompletas</option>
                    <option value="Completas">Completas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética</p>
                <button onClick={() => setSort("AZ")}>A-Z</button>
                <button onClick={() => setSort("ZA")}>Z-A</button>
            </div>
        </div>
    </div>
  )
}

export default Filter