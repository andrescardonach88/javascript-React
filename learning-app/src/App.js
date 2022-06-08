import logo from './logo.svg'; //LOS IMPORTS VAN PRIMERO
import './App.css';

function App() {

  const Equipos = [

    {
      id: 1,
      equipo: 'barcelona',
      copasGanadas: 10,
      juegaSiguienteFecha: true,
      fechaCreacion: 19900519,
      promedioGolesPorPartido: 3.5,
      tecnico: { nombretecnico: 'juan garcia', edad: 67 },
      plantilla: [{ nombre: 'daniel martinez' }, { nombre: 'joel mindiola' },
      { nombre: 'gilberto mindiola' }, { nombre: 'carlos roa' }, { nombre: 'guillermo reales' }]
    },

    {
      id: 2,
      equipo: 'liverpool',
      copasGanadas: 10,
      juegaSiguienteFecha: true,
      fechaCreacion: 19900519,
      promedioGolesPorPartido: 3.5,
      tecnico: { nombretecnico: 'jurguen kloop', edad: 53 },
      plantilla: [{ nombre: 'daniel martinez' }, { nombre: 'joel mindiola' },
      { nombre: 'gilberto mindiola' }, { nombre: 'carlos roa' }, { nombre: 'guillermo reales' }]
    },

    {
      id: 3,
      equipo: 'Real madrid',
      copasGanadas: 10,
      juegaSiguienteFecha: true,
      fechaCreacion: 19900519,
      promedioGolesPorPartido: 3.5,
      tecnico: { nombretecnico: 'carlos ancelloty', edad: 50 },
      plantilla: [{ nombre: 'daniel martinez' }, { nombre: 'joel mindiola' },
      { nombre: 'gilberto mindiola' }, { nombre: 'carlos roa' }, { nombre: 'guillermo reales' }]
    },


    {
      id: 4,
      equipo: 'barcelona',
      copasGanadas: 10,
      juegaSiguienteFecha: true,
      fechaCreacion: 19900519,
      promedioGolesPorPartido: 3.5,
      tecnico: { nombretecnico: 'juan garcia', edad: 32 },
      plantilla: [{ nombre: 'daniel martinez' }, { nombre: 'joel mindiola' },
      { nombre: 'gilberto mindiola' }, { nombre: 'carlos roa' }, { nombre: 'guillermo reales' }]
    },


    {
      id: 5,
      equipo: 'barcelona',
      copasGanadas: 10,
      juegaSiguienteFecha: true,
      fechaCreacion: 19900519,
      promedioGolesPorPartido: 3.5,
      tecnico: { nombretecnico: 'juan garcia', edad: 32 },
      plantilla: [{ nombre: 'daniel martinez' }, { nombre: 'joel mindiola' },
      { nombre: 'gilberto mindiola' }, { nombre: 'carlos roa' }, { nombre: 'guillermo reales' }]
    }
  ];


  return (
    <div className='App'>
      {Equipos.map((equipo) => {
        return (
          <div>
            <div>{equipo.id}</div>
            <div>{equipo.equipo}</div>
            <div>{equipo.copasGanadas}</div>
            <div>{equipo.fechaCreacion}</div>
            <div>{equipo.tecnico.nombretecnico}</div>
            <div>{equipo.tecnico.edad}</div>
            {equipo.plantilla.map((plantilla) => {
              return plantilla.nombre;
            })}
          </div>

        );

      })}

    </div>
  );
} export default App;
