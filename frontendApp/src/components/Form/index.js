import React from 'react'

export const Form = () => {
    return (
        <>
        <form>
            <h1>Agregar o eliminar empleado</h1>
            <label>Id</label>
            <input type='number' placeholder='id' required />
            <label>Full name</label>
            <input type='text' placeholder='full name' />
            <label>Cargo</label>
            <input type='text' placeholder='cargo' />
            <label>Es Jefe?</label>
            <input type='radio' value='true' />
            <label>Id de jefe inmediato</label>
            <input type='number' placeholder='id jefe' />
            <button>ADD</button>
            <button>DELETE</button>
        </form>
        </>
    )
}