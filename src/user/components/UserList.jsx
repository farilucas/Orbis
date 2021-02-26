import './UserList.css'
import UserItem from './UserItem'

export default function UserList(props){

    return <div>
        {props.items.length === 0
            ?<div>
                <h2>No users found.</h2>
            </div>
            :<ul>
                {
                    props.items.map(user => { 
                        console.log(user);
                    return <UserItem  
                        key={user.id} 
                        id={user.id} 
                        image={user.image} 
                        name={user.name} 
                        placeCount={user.places}
                    />
                })}
            </ul>
        }
    </div>
}