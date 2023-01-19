import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

    const nome = 'Richard';

    return (
        <div className="App">
            <SayMyName nome="Michael"/>
            <SayMyName nome="Djulia"/>
            <SayMyName nome={nome}/>
            <Pessoa 
                nome="Michael"
                idade="24"
                profissao="Programador"
                foto="https://via.placeholder.com/150"
            />
        </div>
    );
}

export default App;
