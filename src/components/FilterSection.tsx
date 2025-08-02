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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Search Bar - Top on mobile, Right on desktop */}
                <div className="order-1 md:order-2 md:col-span-1 flex items-center">
                    <SearchBar
                        value={searchQuery}
                        onChange={onSearchChange}
                    />
                </div>

                {/* Tags - Bottom on mobile, Left on desktop */}
                <div className="order-2 md:order-1 md:col-span-1 flex items-center justify-center md:justify-start">
                    <div className="flex flex-wrap gap-2">
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
            </div>
        </section>
    );
};

export default FilterSection;