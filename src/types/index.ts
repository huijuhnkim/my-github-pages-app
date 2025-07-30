// types/index.ts
export interface Tag {
    name: string;
    color: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    tags: string[];
    fullDescription: string;
    skills: string;
    githubLink: string;
    instagramLink?: string;
    youtubeLink?: string;
}

export interface PersonalInfo {
    name: string;
    email: string;
    summary: string;
    profilePic: string;
    socialLinks: {
        linkedin: string;
        github: string;
        instagram: string;
    };
}