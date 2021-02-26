import './UserItem.css'
import Card from '../../shared/components/UIElement/Card'
import Avatar from '../../shared/components/UIElement/Avatar'
import {Link} from 'react-router-dom'

export default function UserItem(props){
    return <Card>
        <Link to={`/${props.id}/places`} > 
            <div key={props.id} className="user-item-container">
                <Avatar image={props.image} alt={props.name} className={"user-image"}/>
                <div className='user-info'>
                    <h2 className="user-name">{props.name}</h2>
                    <h4 className="user-places-count">Places visited: {props.placeCount}</h4>
                </div>
            </div>
        </Link>
    </Card>
}