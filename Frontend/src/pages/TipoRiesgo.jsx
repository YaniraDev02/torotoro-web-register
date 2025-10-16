import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const TipoRiesgo = () => {
  const { id_categoria } = useParams()
  const navigate = useNavigate()
  const [nivel, setNivel] = useState('MEDIO')
  const [descripcion, setDescripcion] = useState('')

  const handleCreate = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3333/api/create/tipoRiesgo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nivel, descripcion })
    })
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      navigate(`/atractivoTuristico/${id_categoria}/${data.id_tipo_riesgo}`)
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
      <h1>Registrar Tipo de Riesgo</h1>
      <form
        onSubmit={handleCreate}
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          width: '350px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <div>
          <label style={{ fontWeight: 'bold', color: '#555' }}>Nivel:</label>
          <select
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '8px'
            }}
          >
            <option value='BAJO'>BAJO</option>
            <option value='MEDIO'>MEDIO</option>
            <option value='ALTO'>ALTO</option>
          </select>
        </div>
        <div>
          <label style={{ fontWeight: 'bold', color: '#555' }}>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            rows={3}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              resize: 'none'
            }}
          ></textarea>
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
