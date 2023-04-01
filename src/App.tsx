import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addNote, editNote, deleteNote, addTag, deleteTag, Note, Tag} from './store/actions';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import Filter from './components/Filter';
import TagList from './components/TagList';

function App() {
    const dispatch = useDispatch();
    const notes = useSelector((state: { notes: Note[] }) => state.notes);
    const tags = useSelector((state: { tags: Tag[] }) => state.tags);

    const [displayedNotes, setDisplayedNotes] = useState(notes);

    const handleAddNote = (note: Note) => {
        dispatch(addNote(note));
        setDisplayedNotes([...displayedNotes, note]);
    };

    const handleEditNote = (note: Note) => {
        dispatch(editNote(note));
        const updatedNotes = displayedNotes.map((n) => (n.id === note.id ? note : n));
        setDisplayedNotes(updatedNotes);
    };

    const handleDeleteNote = (noteId: number) => {
        dispatch(deleteNote(noteId));
        const updatedNotes = displayedNotes.filter((note) => note.id !== noteId);
        setDisplayedNotes(updatedNotes);
    };

    const handleAddTag = (tag: Tag) => {
        dispatch(addTag(tag));
    };

    const handleDeleteTag = (tagId: number) => {
        dispatch(deleteTag(tagId));
    };

    const handleFilterChange = (filteredNotes: Note[]) => {
        setDisplayedNotes(filteredNotes);
    };

    return (
        <div className="app">
            <h1>Текстовый редактор заметок с тегами</h1>
            <NoteEditor addNote={handleAddNote} addTag={handleAddTag} />
            <Filter onFilterChange={handleFilterChange} />
            <NoteList notes={displayedNotes} editNote={handleEditNote} deleteNote={handleDeleteNote} />
            <TagList tags={tags} deleteTag={handleDeleteTag} />
        </div>
    );
}

export default App;
