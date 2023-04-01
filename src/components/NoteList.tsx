import React, { useState } from 'react';
import { Note } from '../store/actions';

interface NoteListProps {
    notes: Note[];
    editNote: (note: Note) => void;
    deleteNote: (noteId: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, editNote, deleteNote }) => {
    const [editingNoteId, setEditingNoteId] = useState<number | null>(null);
    const [editingNoteContent, setEditingNoteContent] = useState('');

    const handleEditNote = (note: Note) => {
        setEditingNoteId(note.id);
        setEditingNoteContent(note.content);
    };

    const handleSaveNote = (noteId: number) => {
        editNote({
            id: noteId,
            content: editingNoteContent,
            tags: notes.find((note) => note.id === noteId)?.tags || [],
        });

        setEditingNoteId(null);
        setEditingNoteContent('');
    };

    const handleCancelEdit = () => {
        setEditingNoteId(null);
        setEditingNoteContent('');
    };

    return (
        <div className="note-list">
            <h2>Список заметок</h2>
            {notes.length === 0 ? (
                <p>Заметок нет. Добавьте новую заметку.</p>
            ) : (
                <ul>
                    {notes.map((note) => (
                        <li key={note.id}>
                            {editingNoteId === note.id ? (
                                <>
                  <textarea
                      className="note-list__edit"
                      value={editingNoteContent}
                      onChange={(e) => setEditingNoteContent(e.target.value)}
                  />
                                    <button onClick={() => handleSaveNote(note.id)}>Сохранить</button>
                                    <button onClick={handleCancelEdit}>Отменить</button>
                                </>
                            ) : (
                                <>
                                    <p>{note.content}</p>
                                    <button onClick={() => handleEditNote(note)}>Редактировать</button>
                                </>
                            )}
                            <button onClick={() => deleteNote(note.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NoteList;
