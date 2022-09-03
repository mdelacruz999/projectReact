import React from 'react'

const Formulario = () => {
    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [lista, setLista] = React.useState([])
    const guardarDatos = (e) => {
        e.preventDefault()//prevenir el comportamiento del metodo get
        //validaciones
        if (!nombre.trim()) {
            alert('Ingrese el Nombre')
            return
        }
        if (!apellido.trim()) {
            alert('Ingrese el Apellido')
            return
        }
        //guardar lista
        setLista(
            [
                ...lista,
                { nombre: nombre, apellido: apellido }
            ]
        )
        setNombre('')
        setApellido('')
        e.target.reset()

    }
    const eliminar = (id) => {
        const listaFiltrada = lista.filter((elemento) => elemento.id !== id)
        setLista(listaFiltrada)
    }
    return (
        <div>
            <hr />
        <h2>Formulario de Registro</h2>
        <form onSubmit={guardarDatos}>
            <input type="text" 
            placeholder='Ingrese Nombre'
            className='form-control m-3'
            onChange={(e)=>setNombre(e.target.value)}
            />
            <input type="text" 
            placeholder='Ingrese Apellido'
            className='form-control m-3'
            onChange={(e)=>setApellido(e.target.value)}
            />
            <div className='d-grid gap2'>
                <button type='submit' className='m-3 btn btn-outline-info'>Registrar</button>
            </div>
        </form>
        <h2>Lista de usuarios</h2>
        <ul className="list-group">
            {
              lista.map((elemento) => (
                <li key={elemento.id} className="list-group-item">
                  {elemento.nombre} {elemento.apellido}
                  <button className="btn btn-danger float-end mx-2"
                    onClick={() => eliminar(elemento.id)}>Eliminar</button>
                </li>
              ))
            }
          </ul>
    </div >
  )
}

export default Formulario
