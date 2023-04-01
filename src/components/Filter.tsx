import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Note, Tag } from '../store/actions';

interface FilterProps {
    onFilterChange: (filteredNotes: Note[]) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
    const [selectedTag, setSelectedTag] = useState('');
    const notes = useSelector((state: { notes: Note[] }) => state.notes);
    const tags = useSelector((state: { tags: Tag[] }) => state.tags);

    const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const tag = event.target.value;
        setSelectedTag(tag);

        if (tag === '') {
            onFilterChange(notes);
        } else {
            const filteredNotes = notes.filter((note) => note.tags.includes(tag));
            onFilterChange(filteredNotes);
        }
    };

    return (
        <div className="filter">
            <label htmlFor="tag-filter">Фильтр по тегам: </label>
            <select id="tag-filter" value={selectedTag} onChange={handleTagChange}>
                <option value="">Все</option>
                {tags.map((tag) => (
                    <option key={tag.id} value={tag.name}>
                        {tag.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;
