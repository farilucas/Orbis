import { useState, useEffect } from 'react'
import AddNewPlace from './AddNewPlace'
import PlaceItem from './PlaceItem'
import './PlaceList.css'

export default function PlaceList(props){
    const [show, setShow] = useState(false)

    return (
    <div>
        {
            props.place.length === 0 ? <div className="no-places">
                <h2 className="empty-text">No se encontraron lugares. Desea compartir uno?</h2>
                <button className="btn-compartir" onClick={() => setShow(true)}>Compartir!</button>
                <AddNewPlace show={show} setShow={setShow} AddNewPlace={props.AddNewPlace} />
            </div>
            : props.place?.map(place => 
                <PlaceItem 
                    key={place.id}
                    id={place.id}
                    title={place.title}
                    src={place.img}
                    alt={place.title}
                    desc={place.desc}
                    address={place.address}
                    creatorId={place.creator}
                    coordinates={place.coordinates}
                />
            )
        }
    </div>
    )
}