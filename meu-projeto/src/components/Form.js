import { useState } from 'react';

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(`Cadastrou o usuário "${name}" com a senha "${password}"`);
    }

    const [name, setName] = useState('Michael'); // valor default
    const [password, setPassword] = useState();

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" required value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite a sua senha" required onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    );
}

export default Form;