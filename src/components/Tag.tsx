// components/Tag.tsx
import React from 'react';
import { Tag as TagType } from '../types';

interface TagProps {
    tag: TagType;
    isSelected: boolean;
    onClick: () => void;
    size?: 'small' | 'medium';
}

const Tag: React.FC<TagProps> = ({ tag, isSelected, onClick, size = 'medium' }) => {
    const sizeClasses = size === 'small'
        ? 'px-3 py-1 text-xs'
        : 'px-4 py-2 text-sm';

    return (
        <button
            onClick={onClick}
            className={`${sizeClasses} rounded-full font-medium transition-all duration-200 transform hover:scale-105`}
            style={{
                backgroundColor: isSelected ? tag.color : 'transparent',
                color: isSelected ? 'white' : tag.color,
                border: `1px solid ${tag.color}`,
            }}
        >
            {tag.name}
        </button>
    );
};

export default Tag;