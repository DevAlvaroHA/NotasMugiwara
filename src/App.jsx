// Importamos los hooks useState y useEffect de React
import { useState, useEffect } from 'react';

// Importamos los componentes principales de la aplicación
import NoteContainer from './components/Notes/NoteContainer';
import SideBar from './components/SideBar/SideBar';

// Datos de ejemplo (notas predeterminadas)
const DUMMY_NOTES = [
  {
    id: 'n3',
    text: 'Hola, agrega tu nota haciendo clic en el ícono de más y eligiendo el color del tema',
    time: 'Jul 28, 3:50 PM',
    color: '#E52B50', // Rojo vibrante
    lock: false
  },
  {
    id: 'n2',
    text: 'Puedes bloquear tu nota haciendo clic en el ícono de candado y desbloquearla con el mismo',
    time: 'Jul 25, 8:00 PM',
    color: '#2A9D8F', // Verde azulado
    lock: false
  },
  {
    id: 'n1',
    text: 'También puedes eliminar tu nota haciendo clic en el ícono de eliminar. \n\nSí... sí, también puedes eliminar estas notas de instrucciones',
    time: 'Jul 18, 10:55 AM',
    color: '#FF6F61', // Naranja rojizo
    lock: false
  }
];

// Componente principal de la aplicación
const App = () => {

  // Estado para almacenar las notas, cargando desde Local Storage si existen, de lo contrario, usa DUMMY_NOTES
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('react-notes-app')) || DUMMY_NOTES
  );

  // Función para agregar una nueva nota con un color de tema seleccionado
  const addNoteHandler = (themeColor) => {
      const note = {
        id: Date.now() + "" + Math.floor(Math.random()*78), // Genera un ID único
        text: '', // La nota comienza vacía
        time: new Date().toLocaleDateString('en-US', { 
          hourCycle: 'h12', minute: '2-digit', day: '2-digit', 
          month: 'short', hour: '2-digit'
        }), // Formato de fecha con hora en 12 horas
        color: themeColor, // Color asignado a la nota
        lock: false // Inicia desbloqueada
      }
      // Agrega la nueva nota al inicio del array
      setNotes((prevNotes) => {
        return [note, ...prevNotes];
      });
  }

  // Función para eliminar una nota por su ID
  const deleteNoteHandler = (noteId) => {
    const prevNotes = [...notes]; // Copia del array de notas
    
    let indexToDelete = prevNotes.findIndex((note) => note.id === noteId); // Encuentra la nota a eliminar
    if (indexToDelete < 0) return; // Si no encuentra la nota, no hace nada

    prevNotes.splice(indexToDelete, 1); // Elimina la nota del array
    setNotes(prevNotes); // Actualiza el estado
  }

  // Función para actualizar el texto de una nota específica
  const updateTextHandler = (noteId, textValue) => {
    const prevNotes = [...notes]; // Copia del array de notas
    
    let indexToUpdate = prevNotes.findIndex((note) => note.id === noteId); // Encuentra la nota a modificar
    if (indexToUpdate < 0) return; // Si no encuentra la nota, no hace nada

    prevNotes[indexToUpdate].text = textValue; // Actualiza el texto de la nota
    setNotes(prevNotes); // Actualiza el estado con el nuevo texto
  }

  // Función para bloquear o desbloquear una nota
  const updateLockHandler = (noteId, lockStatus) => {
    const prevNotes = [...notes]; // Copia del array de notas
    
    let indexToLock = prevNotes.findIndex((note) => note.id === noteId); // Encuentra la nota a bloquear/desbloquear
    if (indexToLock < 0) return; // Si no encuentra la nota, no hace nada

    console.log(indexToLock + " " + noteId + " " + lockStatus); // Depuración en consola

    prevNotes[indexToLock].lock = lockStatus; // Cambia el estado de bloqueo de la nota
    console.log(prevNotes[indexToLock].lock); // Depuración en consola
    setNotes(prevNotes); // Actualiza el estado
  }
  
  // Guardamos las notas en Local Storage cada vez que se actualizan
  useEffect(() => {
    localStorage.setItem('react-notes-app', JSON.stringify(notes));
  }, [notes]) // Se ejecuta cada vez que "notes" cambia
  
  return (
    <div className='app'>
      {/* Barra lateral para agregar nuevas notas */}
      <SideBar addTheme={addNoteHandler} />

      {/* Contenedor que muestra las notas */}
      <NoteContainer 
          notes={notes} 
          deleteNote={deleteNoteHandler}
          updateText={updateTextHandler}
          updateLock={updateLockHandler} />
    </div>
  );
}

// Exportamos el componente para su uso en otros archivos
export default App;
