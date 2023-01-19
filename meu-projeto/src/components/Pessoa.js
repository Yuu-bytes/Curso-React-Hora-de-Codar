// dá para substituir o props.nome, props.idade, props.foto, etc fazendo a propriedade props receber as propriedades dentro de chaves e as nomeando conforme for o que vai receber,
// desta forma não precisa ficar sempre digitando de qual propiedade é o campo
function Pessoa({nome, idade, foto, profissao}){
    return (
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa;