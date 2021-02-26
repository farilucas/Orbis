import { useHistory} from 'react-router-dom'
import MainHeader from './header'
import NavLinks from './NavLinks'
import './MainNavigation.css'

export default function MainNavigation(props){
    let history = useHistory()
    return <MainHeader>
        <h3 className='title' onClick={() => history.push('/')}>
            Orbis
        </h3>
        <NavLinks AddNewPlace={props.AddNewPlace}/>
    </MainHeader>
}