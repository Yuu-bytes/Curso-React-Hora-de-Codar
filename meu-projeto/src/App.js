import './App.css';

function App() {

    const name = 'Michael';

    const newName = name.toUpperCase();

    function sum(a, b) {
        return a + b;
    }

    const url = 'https://via.placeholder.com/150';

    return (
        <div className="App">
            <h2>Alterando o JSX</h2>
            <p>Olá, {newName}</p>
            <p>A soma de 3 + 2 é: {sum(3, 2)}</p>
            <img src={url} alt="Minha Imagem" />
        </div>
    );
}

export default App;
