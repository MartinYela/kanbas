import './style.css'
import { useContext } from 'react';
import { DateContext } from '../contexto';

function TaskCard(props) {

    const [date, setDate] = useContext(DateContext);
    // recuperamos del localStorage el objeto por su id
   let resultsObjet= localStorage.getItem(`task${props.results.id}`);
   let estadoIcons= JSON.parse(resultsObjet)
   
    function handleClickDelete(){
        localStorage.removeItem(`task${props.results.id}`)
        props.onUpdateTaskList();
        const day = new Date();
        const lastDate = `Updated on ${day.getDate()}/${day.getMonth() + 1} ${day.getSeconds()}`
        setDate(lastDate)
        localStorage.setItem('lastUpdate', lastDate);

    }
    return (
        <div className='cardTasK_contenedor'>
            <div className='cardTask_tilte-Icons'>
                {estadoIcons?.estadoIcono === 'Pending' ?
                    <p><span className="iconInprogress">pending</span></p>
                    : <p><span className="iconChecked"> check_circle</span></p>}

                <h3 className="task__name">{props.results.tarea}</h3>
                <span className="iconDelete" onClick={handleClickDelete}>&#128465;</span>
            </div>
            <p className="task__date">#{props.results.id} {props.results.fecha}</p>
        </div>
    )
}
export default TaskCard;