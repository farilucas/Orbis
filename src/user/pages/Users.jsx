import { useState } from 'react'
import UsersList from '../components/UserList'

export default function Users(){
    const USERS = [{
        id:'u1',
        name:'Beard Man',
        image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80',
        places: 100
    }]
    return <UsersList items={USERS}/>
}