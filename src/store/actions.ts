import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, ADD_TAG, DELETE_TAG, FILTER_NOTES } from './actionTypes';

export interface Note {
    id: number;
    content: string;
    tags: string[];
}

export interface Tag {
    id: number;
    name: string;
}

interface AddNoteAction {
    type: typeof ADD_NOTE;
    payload: Note;
}

interface EditNoteAction {
    type: typeof EDIT_NOTE;
    payload: Note;
}

interface DeleteNoteAction {
    type: typeof DELETE_NOTE;
    payload: number;
}

interface AddTagAction {
    type: typeof ADD_TAG;
    payload: Tag;
}

interface DeleteTagAction {
    type: typeof DELETE_TAG;
    payload: number;
}

interface FilterNotesAction {
    type: typeof FILTER_NOTES;
    payload: string;
}

export type ActionTypes =
    | AddNoteAction
    | EditNoteAction
    | DeleteNoteAction
    | AddTagAction
    | DeleteTagAction
    | FilterNotesAction;

export const addNote = (note: Note): AddNoteAction => ({
    type: ADD_NOTE,
    payload: note,
});

export const editNote = (note: Note): EditNoteAction => ({
    type: EDIT_NOTE,
    payload: note,
});

export const deleteNote = (noteId: number): DeleteNoteAction => ({
    type: DELETE_NOTE,
    payload: noteId,
});

export const addTag = (tag: Tag): AddTagAction => ({
    type: ADD_TAG,
    payload: tag,
});

export const deleteTag = (tagId: number): DeleteTagAction => ({
    type: DELETE_TAG,
    payload: tagId,
});

export const filterNotes = (tag: string): FilterNotesAction => ({
    type: FILTER_NOTES,
    payload: tag,
});
