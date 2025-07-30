// data/projects.ts
import { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Arietta',
        description: 'Music Application for ET/SR Practice - A consumer-facing iOS music education app that helps musicians improve ear training and sight reading skills.',
        thumbnail: 'https://huijuhnkim-portfolio-website.s3.us-east-2.amazonaws.com/thumbnail-arietta.png',
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
];