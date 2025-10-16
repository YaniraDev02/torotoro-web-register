import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Categoría = () => {
  const [nombre_categoria, setNombreCategoria] = useState('TURISTICO')
  const [descripcion, setDescripcion] = useState('')
  const [mensaje, setMensaje] = useState('')
  const navigate = useNavigate()

  const categorias = [
    'ARQUEOLOGICO',
    'GEOLOGICO',
    'NATURAL'
  ]

  const handleCreate = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:3333/api/create/categoria', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre_categoria, descripcion })
    })

    if (response.ok) {
      const data = await response.json()
      setMensaje('Categoría creada correctamente')
      setDescripcion('')
      setNombreCategoria('TURISTICO')
      navigate(`/tipoRiesgo/${data.id_categoria}`)
    } else {
      setMensaje('Error al crear la categoría')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f4f4f9'
    }}>
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
        <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>
          Crear Categoría
        </h2>

        <div>
          <label style={{ fontWeight: 'bold', color: '#555' }}>Nombre:</label>
          <select
            value={nombre_categoria}
            onChange={(e) => setNombreCategoria(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '8px'
            }}
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
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
          type="submit"
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

        {mensaje && (
          <p style={{
            textAlign: 'center',
            color: mensaje.startsWith('✅') ? 'green' : 'red',
            marginTop: '0.5rem'
          }}>
            {mensaje}
          </p>
        )}
      </form>
    </div>
  )
}
