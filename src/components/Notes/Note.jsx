// Importamos los hooks de React y los estilos de la nota
import { useState } from 'react';
import React from 'react';

import './Note.css';

// Importamos las imágenes de los iconos de bloqueo y eliminación
import lockImage from '../../assets/lock.png';
import deleteImage from '../../assets/delete.png';

// Componente funcional que representa una Nota
const Note = (props) => {
    
    // Estado que maneja si la nota está bloqueada o no
    const [disabled, setDisabled] = useState(props.note.lock);

    // Función para alternar el bloqueo de la nota
    const lockHandler = (e) => {
        setDisabled(!disabled); // Alterna entre habilitado y deshabilitado
        props.updateLock(props.note.id, !disabled); // Actualiza el estado de bloqueo en los datos de la nota
    }

    return (
        // Contenedor principal de la nota con su color de fondo dinámico
        <div className='note' style={{ backgroundColor: props.note.color }}>
            
            {/* Área de texto de la nota */}
            <textarea 
                className="note__text custom-scroll" 
                defaultValue={props.note.text} // Muestra el texto inicial de la nota
                disabled={disabled} // Si la nota está bloqueada, no se puede editar
                onChange={(e) => props.updateText(props.note.id, e.target.value)} // Actualiza el texto de la nota
            ></textarea>
            
            {/* Pie de la nota que contiene la fecha y los iconos */}
            <div className='note__footer'>
                
                {/* Muestra la fecha y hora de la nota */}
                <p className='note__time'>{props.note.time}</p>
                
                <div>
                    {/* Icono de candado para bloquear/desbloquear la nota */}
                    <img 
                        className='note__icon' 
                        src={lockImage} alt='lock' 
                        onClick={lockHandler} // Llama a la función lockHandler al hacer clic
                    />
                    
                    {/* Icono de papelera para eliminar la nota */}
                    <img 
                        className='note__icon' 
                        src={deleteImage} alt='delete'
                        onClick={() => props.deleteNote(props.note.id)} // Llama a la función deleteNote al hacer clic
                    />
                </div>
            </div>
        </div>
    )
}

// Exportamos el componente para su uso en otros archivos
export default Note;
