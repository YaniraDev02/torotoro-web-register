import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const AtractivoTuristico = () => {
  const { id_categoria, id_tipo_riesgo } = useParams()
  const navigate = useNavigate()

  const [nombre, setNombre] = useState('')
  const [tipo_atractivo, setTipoAtractivo] = useState('MIRADOR')
  const [estado, setEstado] = useState('BUENO')
  const [tiempo_visita, setTiempoVisita] = useState()
  const [elevacion, setElevacion] = useState('')
  const [longitud, setLongitud] = useState('')
  const [latitud, setLatitud] = useState('')
  const [este, setEste] = useState('')
  const [norte, setNorte] = useState('')

  const handleCreate = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        `http://localhost:3333/api/create/atractivoTuristico/${id_categoria}/${id_tipo_riesgo}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nombre,
            tipo_atractivo,
            estado,
            tiempo_visita: parseInt(tiempo_visita),
            elevacion: elevacion ? parseFloat(elevacion) : null,
            longitud: longitud ? parseFloat(longitud) : null,
            latitud: latitud ? parseFloat(latitud) : null,
            este: este ? parseFloat(este) : null,
            norte: norte ? parseFloat(norte) : null
          })
        }
      )

      if (!response.ok) throw new Error('Error al crear atractivo')

      const data = await response.json()
      console.log('Atractivo creado:', data)
      navigate(`/final/${data.id_atrac_turist}`)
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
      <h1>Registrar Atractivo Turístico</h1>
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
          <label>Tipo de Atractivo:</label>
          <select
            value={tipo_atractivo}
            onChange={(e) => setTipoAtractivo(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          >
            <option value='MIRADOR'>MIRADOR</option>
            <option value='CANON'>CAÑÓN</option>
            <option value='CASCADA'>CASCADA</option>
            <option value='FOSIL'>FÓSIL</option>
            <option value='CAVERNA'>CAVERNA</option>
          </select>
        </div>

        <div>
          <label>Estado:</label>
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          >
            <option value='BUENO'>BUENO</option>
            <option value='RIESGO'>RIESGO</option>
            <option value='DETERIORADO'>DETERIORADO</option>
          </select>
        </div>

        <div>
          <label>Tiempo de Visita (horas):</label>
          <input
            type='number'
            value={tiempo_visita}
            onChange={(e) => setTiempoVisita(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label>Elevación (m):</label>
          <input
            type='number'
            value={elevacion}
            onChange={(e) => setElevacion(e.target.value)}
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

        <div>
          <label>Este:</label>
          <input
            type='number'
            value={este}
            onChange={(e) => setEste(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label>Norte:</label>
          <input
            type='number'
            value={norte}
            onChange={(e) => setNorte(e.target.value)}
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

