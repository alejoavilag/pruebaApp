import React from 'react'
import { Form } from './components/Form'


const API = 'http://localhost:3000/api/employes'
const fetchInit = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    },
    mode: 'no-cors'
}

function getData () {
    try {
        fetch(API, fetchInit)
            .then((res) =>{
                console.log(res.json())
            })
    } catch(e){
        console.log(e)
    }
}

export const App = () => {
    getData()
    return(
        <h1>react app data empleados</h1>
    )
}