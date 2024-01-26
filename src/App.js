import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import caslogo from './imagenes/caslogo.jpg'


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img
          src={caslogo}
          className='caslogo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>  
         <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
