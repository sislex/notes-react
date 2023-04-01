import { combineReducers } from 'redux';
import { ActionTypes, Note, Tag } from './actions';
import {ADD_NOTE, ADD_TAG, DELETE_NOTE, DELETE_TAG, EDIT_NOTE} from "./actionTypes";

const notesInitialState: Note[] = [];
const tagsInitialState: Tag[] = [];

const notesReducer = (state = notesInitialState, action: ActionTypes): Note[] => {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, action.payload];
        case EDIT_NOTE:
            return state.map((note) => (note.id === action.payload.id ? action.payload : note));
        case DELETE_NOTE:
            return state.filter((note) => note.id !== action.payload);
        default:
            return state;
    }
};

const tagsReducer = (state = tagsInitialState, action: ActionTypes): Tag[] => {
    switch (action.type) {
        case ADD_TAG:
            return [...state, action.payload];
        case DELETE_TAG:
            return state.filter((tag) => tag.id !== action.payload);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    notes: notesReducer,
    tags: tagsReducer,
});

export default rootReducer;
