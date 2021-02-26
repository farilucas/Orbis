import {useParams} from 'react-router-dom'
import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [{
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
]

export default function UserPlaces(){
    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId )
    return <PlaceList place={loadedPlaces}/>
}