import React from 'react';
import { Tag } from '../store/actions';

interface TagListProps {
    tags: Tag[];
    deleteTag: (tagId: number) => void;
}

const TagList: React.FC<TagListProps> = ({ tags, deleteTag }) => {
    return (
        <div className="tag-list">
            <h2>Список тегов</h2>
            {tags.length === 0 ? (
                <p>Тегов нет. Создайте новые теги, добавив их в заметки с символом #.</p>
            ) : (
                <ul>
                    {tags.map((tag) => (
                        <li key={tag.id}>
                            <span>{tag.name}</span>
                            <button onClick={() => deleteTag(tag.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TagList;
