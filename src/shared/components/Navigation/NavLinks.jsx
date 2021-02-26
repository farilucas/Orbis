import { useHistory } from 'react-router-dom'
import AddNewPlace from '../../../places/components/AddNewPlace'
import {useState} from 'react'

export default function NavLinks(props){
    let history = useHistory()
    const [show, setShow] = useState(false)
    return <ul className='butn-list'>
        <button className="butn btn-users" onClick={() => history.push('/users')}>Users</button>
        <button className='butn btn-newPost' onClick={() => setShow(true)}>New Post</button>
        <button className='butn btn-logIn'>Log In</button>
        <AddNewPlace show={show} setShow={setShow} AddNewPlace={props.AddNewPlace}/>
    </ul>
}