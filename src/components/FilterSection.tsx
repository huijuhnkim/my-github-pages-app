// components/FilterSection.tsx
import React from 'react';
import Tag from './Tag';
import SearchBar from './SearchBar';
import { Tag as TagType } from '../types';

interface FilterSectionProps {
    tags: TagType[];
    selectedTags: string[];
    searchQuery: string;
    onTagToggle: (tagName: string) => void;
    onSearchChange: (query: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
                                                         tags,
                                                         selectedTags,
                                                         searchQuery,
                                                         onTagToggle,
                                                         onSearchChange
                                                     }) => {
    return (
        <section className="mb-12">
            <div className="grid grid-cols-3 gap-8">
                {/* Left Column - Tags (1/3 width) */}
                <div className="col-span-1">
                    <div className="grid grid-cols-2 gap-2">
                        {tags.map(tag => (
                            <Tag
                                key={tag.name}
                                tag={tag}
                                isSelected={selectedTags.includes(tag.name)}
                                onClick={() => onTagToggle(tag.name)}
                                size="small"
                            />
                        ))}
                    </div>
                </div>

                {/* Right Column - Search Bar (2/3 width) */}
                <div className="col-span-2 flex items-center">
                    <SearchBar
                        value={searchQuery}
                        onChange={onSearchChange}
                    />
                </div>
            </div>
        </section>
    );
};

export default FilterSection;