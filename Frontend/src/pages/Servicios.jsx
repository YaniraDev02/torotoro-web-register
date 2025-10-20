import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const Servicios = () => {
  const navigate = useNavigate()
  const { id_atractivo_turistico } = useParams()
  
  const [nombre, setNombre] = useState('')
  const [tipo_servicio, setTipoServicio] = useState('HOTEL')
  const [costo, setCosto] = useState()
  const [direccion, setDireccion] = useState('')
  const [telefono, setTelefono] = useState('')
  const [calificacion, setCalificacion] = useState()
  const [longitud, setLongitud] = useState('')
  const [latitud, setLatitud] = useState('')

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `http://localhost:3333/api/create/servicio/${id_atractivo_turistico}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nombre,
            tipo_servicio,
            costo: costo ? parseFloat(costo) : null,
            direccion,
            telefono,
            calificacion: calificacion ? parseFloat(calificacion) : null,
            longitud: longitud ? parseFloat(longitud) : null,
            latitud: latitud ? parseFloat(latitud) : null
          })
        }
      )

      if (!response.ok) throw new Error('Error al crear servicio')

      const data = await response.json()
      console.log('Servicio creado:', data)
      navigate(`/final/${id_atractivo_turistico}`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#f4f4f9'
    }}>
      <h1>Registrar Servicio</h1>
      <form
        onSubmit={handleCreate}
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <div>
          <label>Nombre:</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label>Tipo de Servicio:</label>
          <select
            value={tipo_servicio}
            onChange={(e) => setTipoServicio(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          >
            <option value='CAFETERIA'>CAFETERIA</option>
            <option value='HOTEL'>HOTEL</option>
            <option value='RESTAURANTE'>RESTAURANTE</option>
            <option value='TRANSPORTE'>TRANSPORTE</option>
            <option value='GUIA_TURISTICO'>GUÍA TURÍSTICO</option>
            <option value='CENTRO_DE_SALUD'>CENTRO DE SALUD</option>
          </select>
        </div>

        <div>
          <label>Costo:</label>
          <input
            type='number'
            value={costo}
            onChange={(e) => setCosto(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label>Dirección:</label>
          <input
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label>Teléfono:</label>
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label>Calificación:</label>
          <input
            type='number'
            value={calificacion}
            onChange={(e) => setCalificacion(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label>Longitud:</label>
          <input
            type='number'
            value={longitud}
            onChange={(e) => setLongitud(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label>Latitud:</label>
          <input
            type='number'
            value={latitud}
            onChange={(e) => setLatitud(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <button
          type='submit'
          style={{
            padding: '0.7rem',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#007bff',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: '0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Crear
        </button>
      </form>
    </div>
  )
}
