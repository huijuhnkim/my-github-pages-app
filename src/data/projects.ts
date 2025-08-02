// data/projects.ts
import { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Arietta',
        description: 'Music Application for ET/SR Practice - A consumer-facing iOS music education app that helps musicians improve ear training and sight reading skills.',
        thumbnail: 'https://huijuhnkim-portfolio-website.s3.us-east-2.amazonaws.com/arietta-overview.png',
        tags: ['Design', 'Music', 'Software Engineering'],
        fullDescription: 'Released a consumer-facing iOS music education app that helps musicians improve ear training and sight reading skills. Implemented real-time audio analysis for pitch detection using Core Audio. Implemented user authentication and data persistence through Firebase REST APIs, utilizing Firebase Auth for secure user management and Firestore for NoSQL database operations.',
        skills: 'Swift, SwiftUI, UIKit, Apple Audio Toolkit Library, Google Cloud Platform',
        githubLink: 'https://github.com/huijuhnkim/arietta'
    },
    {
        id: 2,
        title: 'MIDI Tokenization & Chord Progression Prediction Model',
        description: 'Tokenize MIDI files using NLP techniques and recognize chord progressions with machine learning frameworks such as LSTM and MusicBERT.',
        thumbnail: 'https://huijuhnkim-portfolio-website.s3.us-east-2.amazonaws.com/thumbnail-MIDI-analysis-prediction-model.png',
        tags: ['Software Engineering', 'Audio'],
        fullDescription: 'Tokenize MIDI file using natural language processing techniques such as TF-IDF and regular expressions. Recognize chord progressions with machine learning techniques and frameworks such as LSTM and MusicBERT. Collaborated with a partner to develop the program, utilizing Git for version control and GitHub for code management.',
        skills: 'Python, NumPy, PyTorch, Matplotlib, MIDI Protocol, Music Theory',
        githubLink: 'https://github.com/huijuhnkim/midi-chord-prediction'
    },

    {
        id: 3,
        title: 'Guitar Recording for HoYoFair ',
        description: 'Recorded acoustic guitar for HoYoFair Musical Competition, which had 3.8M views on YouTube.',
        thumbnail: '',
        tags: ['Music'],
        fullDescription: 'Recorded acoustic guitar for HoYoFair Musical Competition, which had 3.8M views on YouTube.',
        skills: 'Guitar Performance, Music Theory',
        githubLink: 'https://youtu.be/JlSElpfv2pM?si=PzfEY1CqFLRR9JcZ',
    },

    {
        id: 3,
        title: 'EPPA (Ensemble Part Performance Assistant)',
        description: 'An iOS app that simplifies music practice for ensemble musicians by providing easy access to individual parts and accompaniments.',
        thumbnail: 'https://via.placeholder.com/400x300/e5e5e5/666666?text=EPPA',
        tags: ['Music', 'Software Engineering', 'Design'],
        fullDescription: `EPPA (Ensemble Part Performance Assistant) is an innovative iOS application designed to help ensemble musicians practice more effectively. The app addresses a common challenge faced by musicians in orchestras, bands, and chamber groups: the difficulty of practicing individual parts without the full ensemble context.

Key Features:
- Access individual instrument parts from ensemble pieces
- Play along with pre-recorded accompaniments
- Adjustable tempo for practice sessions
- Loop sections for focused practice
- Built-in metronome synchronized with accompaniments
- Support for various ensemble types (orchestra, band, chamber music)

Technical Implementation:
The app is built using Swift and SwiftUI, leveraging Core Audio for high-quality audio playback and synchronization. The architecture follows MVVM patterns to ensure clean separation of concerns and maintainability.

EPPA makes it easier for musicians to prepare for rehearsals and performances by providing the context of other instruments while practicing alone. This is particularly valuable for musicians learning contemporary pieces where hearing harmonic context is crucial for understanding their part.

The app includes a curated library of ensemble pieces with professionally recorded accompaniments, and supports importing of custom audio files for personalized practice sessions.`,
        skills: 'Swift, SwiftUI, Core Audio, AVFoundation, MVVM Architecture, iOS Development',
        githubLink: 'https://github.com/huijuhnkim/EPPA'
    },
];