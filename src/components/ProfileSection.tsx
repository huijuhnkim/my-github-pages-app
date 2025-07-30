// components/ProfileSection.tsx
import React from 'react';
import { PersonalInfo } from '../types';

interface ProfileSectionProps {
    personalInfo: PersonalInfo;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ personalInfo }) => {
    return (
        <section className="mb-24">
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-1 flex justify-center items-center">
                    <img
                        src={personalInfo.profilePic}
                        alt={personalInfo.name}
                        className="w-40 h-40 rounded-full object-cover shadow-md"
                    />
                </div>
                <div className="col-span-2 flex items-center">
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {personalInfo.summary}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;