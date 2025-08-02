// components/ProfileSection.tsx
import React from 'react';
import { PersonalInfo } from '../types';

interface ProfileSectionProps {
    personalInfo: PersonalInfo;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ personalInfo }) => {
    return (
        <section className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 flex justify-center items-center">
                    <img
                        src={personalInfo.profilePic}
                        alt={personalInfo.name}
                        className="w-50 h-50 rounded-full object-cover shadow-md"
                        style={{ width: '200px', height: '200px' }}
                    />
                </div>
                <div className="md:col-span-2 flex items-center">
                    <p className="text-gray-700 leading-relaxed text-center md:text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {personalInfo.summary}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;