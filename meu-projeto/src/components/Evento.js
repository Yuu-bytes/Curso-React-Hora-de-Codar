import PropTypes from 'prop-types';

function Evento({numero}){

    function meuEvento(){
        console.log(`Evento disparado! ${numero}`);
    }

    return (
        <div>
            <p>Clique parea disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    );
}

Evento.propTypes = {
    numero: PropTypes.number
}

export default Evento;