// Importamos el componente Note y los estilos CSS
import Note from './Note';
import './NoteContainer.css';

// Componente funcional NoteContainer, encargado de manejar la lista de notas
const NoteContainer = (props) => {
  return (
    // Contenedor principal de las notas
    <div className='note-container'>
      
      {/* Título de la sección */}
      <h1>NotasMugiwara</h1>

      {/* Contenedor de las notas con scroll personalizado */}
      <div className='note-container__notes custom-scroll'>

        {/* Si no hay notas, se muestra este mensaje */}
        { props.notes.length <= 0 && <h3>Agrega aquí tus NotasMugiwara.</h3> }

        {/* Si hay notas, se mapean y se renderizan como componentes Note */}
        { props.notes.length > 0 &&
          props.notes.map(noteObj =>
            <Note
              key={noteObj.id} // Clave única para cada nota
              note={noteObj} // Pasa el objeto de la nota al componente Note

              /* Función para eliminar la nota */
              deleteNote={(noteId) => props.deleteNote(noteId)}

              /* Función para actualizar el texto de la nota */
              updateText={(noteId, value) => props.updateText(noteId, value)}

              /* Función para bloquear o desbloquear la nota */
              updateLock={(noteId, lock) => props.updateLock(noteId, lock)}
            />
          )
        }
      </div>
    </div>
  );
}

// Exportamos el componente para su uso en otros archivos
export default NoteContainer;
