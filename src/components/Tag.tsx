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
        ? 'px-2 py-1 text-xs'
        : 'px-3 py-1.5 text-sm';

    return (
        <button
            onClick={onClick}
            className={`${sizeClasses} rounded-full font-medium transition-all duration-200 transform hover:scale-105 whitespace-nowrap`}
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