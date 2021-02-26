import './App.css';
import MainNavigation from './shared/components/Navigation/MainNavigation'
import PlaceList from './places/components/PlaceList'
import UserPlaces from './places/pages/UserPlaces'
import { useState } from 'react'
import Users from './user/pages/Users'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {

  const [place, setPlace] = useState([
    {
      id:'p1',
      title: 'Punta del Este',
      desc: 'Hermoso lugar para vacacionar con amigos.',
      img: 'https://images.unsplash.com/photo-1612050436710-68e156aac166?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
      address: '2 de Febrero, 20100 Punta del Este, Departamento de Maldonado',
      creator: 'u1',
      coordinates: {
        lat: '-34.942722',
        lon: '-54.9290143'
      }
    },
    {
      id:'p2',
      title: 'Puente Barón de Mauá',
      desc: 'El puente mas largo de Uruguay.',
      img: 'https://lh5.googleusercontent.com/p/AF1QipPzbuHUtBBV6UuAQwOrNqSO5XpKXSMswwNDHTdz=w408-h345-k-no',
      address: 'Puente Internacional Barón de Mauá, 37100 Río Branco, Departamento de Cerro Largo',
      creator: 'u2',
      coordinates: {
        lat: '-32.572807',
        lon: '-53.3749294'
      }
    },
    {
      id:'p3',
      title: 'Puertito del Buceo',
      desc: 'Las mejores playas de Montevideo.',
      img: 'http://img.viajeauruguay.com/puertito-del-buceo.jpg',
      address: 'Av. República Federal de Alemania, 11300 Montevideo, Departamento de Montevideo',
      creator: 'u2',
      coordinates: {
        lat: '-34.910126',
        lon: '-56.1323781'
      }
    },
  ])

  const addPlace = (newPlace) => setPlace(prevPlace => prevPlace.concat(newPlace))

  return (
    <Router>
      <MainNavigation place={place} AddNewPlace={addPlace}/>
      <div className="App">
      </div>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route exact path="/:userId/places">
            <UserPlaces />
          </Route>
          <Route exact path='/'>
            <PlaceList place={place} AddNewPlace={addPlace}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
