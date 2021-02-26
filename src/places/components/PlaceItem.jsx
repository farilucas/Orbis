import {useState} from 'react'
import {Link} from 'react-router-dom'
import Modal from '../../shared/components/UIElement/Modal'
export default function PlaceItem(props){
    const[show, setShow] = useState(false)
    return <div key={props.id} className="post-container"> 
        <div className="post-header">
            <h2>{props.title}</h2>
        </div>
        <div className="post-body">
            <img src={props.src} alt={props.alt}/>
        </div>
        <div className="post-footer">
            <p>{props.desc}</p>
            <ul className="btn-list">
                <span onClick={() => setShow(!show)} className="btn btn-map">Ver en mapa</span>
                <Modal title={props.title} show={show} setShow={setShow} lat={props.coordinates.lat} lon={props.coordinates.lon} />
                <Link to={`/places/${props?.id}`} className="btn btn-edit">Editar</Link>
                <button onClick={() => console.log(props)} className="btn btn-delete">Eliminar</button>
            </ul>
        </div>
    </div>  
}