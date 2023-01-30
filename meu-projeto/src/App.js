import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

    const nome = 'Richard';

    return (
        <div className="App">
            <h1>Testando CSS</h1>
            <Frase/>
            <SayMyName nome="Michael"/>
            <SayMyName nome="Djulia"/>
            <SayMyName nome={nome}/>
            <Pessoa 
                nome="Michael"
                idade="24"
                profissao="Programador"
                foto="https://via.placeholder.com/150"
            />
            <List/>
        </div>
    );
}

export default App;
