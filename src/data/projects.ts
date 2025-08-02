// data/projects.ts
import { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: 'EPPA (Ensemble Part Performance Assistant)',
        description: 'An iOS app that simplifies music practice for ensemble musicians by providing easy access to individual parts and accompaniments.',
        thumbnail: 'https://huijuhnkim-portfolio-website.s3.us-east-2.amazonaws.com/eppa-thumbnail-v2.jpg',
        tags: ['Audio', 'Software Engineering', 'Design'],
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
    {
        id: 2,
        title: 'Arietta',
        description: 'Music Application for ET/SR Practice - A consumer-facing iOS music education app that helps musicians improve ear training and sight reading skills.',
        thumbnail: 'https://huijuhnkim-portfolio-website.s3.us-east-2.amazonaws.com/arietta-thumbnail-v2.png',
        tags: ['Design', 'Audio', 'Software Engineering'],
        fullDescription: 'Released a consumer-facing iOS music education app that helps musicians improve ear training and sight reading skills. Implemented real-time audio analysis for pitch detection using Core Audio. Implemented user authentication and data persistence through Firebase REST APIs, utilizing Firebase Auth for secure user management and Firestore for NoSQL database operations.',
        skills: 'Swift, SwiftUI, UIKit, Apple Audio Toolkit Library, Google Cloud Platform',
        githubLink: 'https://github.com/huijuhnkim/arietta'
    },
    {
        id: 3,
        title: 'MIDI Tokenization & Chord Progression Prediction Model',
        description:
            'Tokenize MIDI files using NLP techniques and recognize chord progressions with machine learning frameworks such as LSTM and MusicBERT.',
        thumbnail: 'https://huijuhnkim-portfolio-website.s3.us-east-2.amazonaws.com/thumbnail-MIDI-analysis-prediction-model.png',
        tags: ['Software Engineering', 'Audio'],
        fullDescription: 'Tokenize MIDI file using natural language processing techniques such as TF-IDF and regular expressions. Recognize chord progressions with machine learning techniques and frameworks such as LSTM and MusicBERT. Collaborated with a partner to develop the program, utilizing Git for version control and GitHub for code management.',
        skills: 'Python, NumPy, PyTorch, Matplotlib',
        githubLink: 'https://github.com/huijuhnkim/midi-chord-prediction'
    },
    {
        id: 4,
        title: 'HoYoFair丨The Diagnosis (Genshin Impact Fan Musical)',
        description: 'Guitar performance for a animated musical in HoYoFair2023, reaching 18M views.',
        thumbnail: 'https://huijuhnkim-portfolio-website.s3.us-east-2.amazonaws.com/hoyofair-thumbnail.jpg',
        tags: ['Music'],
        fullDescription: 'Recorded guitar for the musical participation in HoYoFair 2023.\n' +
            ' Music：\n' +
            'Written by Kim Jinhyoung & Marcus Perkins Bejarano\n' +
            'Orchestration: Kim Jinhyoung\n' +
            'Guitar: Hui Juhn Kim\n' +
            '\n' +
            'Kim: mynameiskimyeah.com/ ins:@mynameiskimyeah\n' +
            'Marcus: marcusperkinsmusicals.com/ ins:@perkins.marcus\n' +
            '\n' +
            'Audio Engineer: \n' +
            'LinkingHearts, Kim Jinhyoung\n' +
            '\n' +
            'Cast:\n' +
            'Tighnari -- Zachary Noah Piser\n' +
            'Cyno -- Daniel J. Edwards\n' +
            'Lambad -- Gavin Knittle\n' +
            'Kaveh -- Marcus Perkins Bejarano\n' +
            'Alhaitham -- Kim Jinhyoung\n' +
            'Other Bar Patrons -- Q Lim\n' +
            '\n' +
            'Animation: えんぴつ（a_kaeyada）',
        skills: 'Guitar Performance, Audio Engineering',
        githubLink: '#',
        youtubeLink: 'https://www.youtube.com/watch?v=JlSElpfv2pM'
    },
    {
        id: 5,
        title: 'Yerin Baek(백예린) - A Walk(산책) cover by Jasmine',
        description: 'Acoustic guitar performance for a K-POP cover',
        thumbnail: 'https://huijuhnkim-portfolio-website.s3.us-east-2.amazonaws.com/kpop-in-english-thumbnail.jpg',
        tags: ['Music', "Audio"],
        fullDescription: 'Credits\n' +
            'Translated & covered by Jasmine\n' +
            'Arranged by Hui Juhn Kim\n' +
            'Mixed & Mastered by Hui Juhn Kim\n' +
            'Video by Ji Young Kim\n',
        skills: 'Guitar Performance, Guitar Arrangement, Audio Engineering',
        githubLink: '#',
        youtubeLink: 'https://www.youtube.com/watch?v=v5tH7VxKwMs'
    }
];