import React, { useState } from 'react';
import { Note, Tag } from '../store/actions';

interface NoteEditorProps {
    addNote: (note: Note) => void;
    addTag: (tag: Tag) => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({ addNote, addTag }) => {
    const [noteContent, setNoteContent] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNoteContent(event.target.value);
    };

    const handleAddNote = () => {
        if (!noteContent.trim()) return;

        const noteId = new Date().getTime();
        const tags = noteContent.match(/#[^\s#]+/g) || [];

        const uniqueTags = Array.from(new Set(tags.map((tag) => tag.slice(1))));

        addNote({
            id: noteId,
            content: noteContent,
            tags: uniqueTags,
        });

        uniqueTags.forEach((tagName) => {
            addTag({ id: noteId, name: tagName });
        });

        setNoteContent('');
    };

    return (
        <div className="note-editor">
      <textarea
          className="note-editor__input"
          value={noteContent}
          onChange={handleInputChange}
          placeholder="Введите текст заметки..."
      />
            <button className="note-editor__submit" onClick={handleAddNote}>
                Добавить заметку
            </button>
        </div>
    );
};

export default NoteEditor;
