// data/projects.ts
import { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Arietta',
        description: 'Music Application for ET/SR Practice - A consumer-facing iOS music education app that helps musicians improve ear training and sight reading skills.',
        thumbnail: 'https://huijuhnkim-portfolio-website.s3.us-east-2.amazonaws.com/thumbnail-arietta.png',
        tags: ['Product Design', 'Audio Engineering', 'Software Development'],
        fullDescription: 'Released a consumer-facing iOS music education app that helps musicians improve ear training and sight reading skills. Implemented real-time audio analysis for pitch detection using Core Audio. Implemented user authentication and data persistence through Firebase REST APIs, utilizing Firebase Auth for secure user management and Firestore for NoSQL database operations.',
        skills: 'Swift, SwiftUI, UIKit, Apple Audio Toolkit Library, Google Cloud Platform',
        githubLink: 'https://github.com/huijuhnkim/arietta'
    },
    {
        id: 2,
        title: 'MIDI Tokenization & Chord Progression Prediction Model',
        description: 'Tokenize MIDI files using NLP techniques and recognize chord progressions with machine learning frameworks such as LSTM and MusicBERT.',
        thumbnail: 'https://huijuhnkim-portfolio-website.s3.us-east-2.amazonaws.com/thumbnail-MIDI-analysis-prediction-model.png',
        tags: ['Software Development', 'Audio Engineering'],
        fullDescription: 'Tokenize MIDI file using natural language processing techniques such as TF-IDF and regular expressions. Recognize chord progressions with machine learning techniques and frameworks such as LSTM and MusicBERT. Collaborated with a partner to develop the program, utilizing Git for version control and GitHub for code management.',
        skills: 'Python, NumPy, PyTorch, Matplotlib',
        githubLink: 'https://github.com/huijuhnkim/midi-chord-prediction'
    },
    {
        id: 3,
        title: 'Audio Synthesis Research Project',
        description: 'A comprehensive research project exploring novel approaches to digital audio synthesis and real-time processing techniques.',
        thumbnail: 'https://via.placeholder.com/400x300/e5e5e5/666666?text=Audio+Research',
        tags: ['Audio Engineering', 'Software Development'],
        fullDescription: `This extensive research project represents a deep dive into the fundamental principles of digital audio synthesis and real-time processing techniques. The project began as an exploration of traditional synthesis methods but quickly evolved into a comprehensive investigation of novel approaches to sound generation and manipulation.

The research encompasses multiple phases:

Phase 1: Foundation Research
During the initial phase, I conducted an extensive literature review of existing synthesis techniques, including subtractive, additive, FM, granular, and physical modeling synthesis. This involved analyzing over 50 academic papers and implementing proof-of-concept versions of each synthesis method to understand their computational requirements and sonic characteristics.

Phase 2: Algorithm Development
Building on the foundational knowledge, I developed several novel algorithms for audio synthesis that combine elements from different traditional approaches. One particularly successful algorithm uses a hybrid approach combining granular synthesis with physical modeling to create rich, evolving textures that respond dynamically to user input.

Phase 3: Real-time Implementation
The most challenging aspect of the project was optimizing the algorithms for real-time performance. This required deep optimization at both the algorithmic and implementation levels, including:
- SIMD vectorization for parallel processing
- Lock-free data structures for thread-safe audio processing
- Custom memory allocators to minimize allocation overhead
- Careful cache optimization to maximize CPU efficiency

Phase 4: User Interface Design
To make the synthesis engine accessible to musicians and sound designers, I developed an intuitive user interface that abstracts the complexity of the underlying algorithms while still providing deep control for advanced users. The interface uses a node-based patching system that allows users to create complex signal routing configurations visually.

Phase 5: Testing and Validation
The final phase involved extensive testing with professional musicians and sound designers. Their feedback was instrumental in refining both the synthesis algorithms and the user interface. The system was tested in various musical contexts, from ambient soundscapes to aggressive electronic music production.

Technical Achievements:
- Achieved sub-millisecond latency for real-time performance
- Developed a plugin architecture supporting VST3, AU, and AAX formats
- Implemented over 100 presets showcasing the synthesis capabilities
- Created comprehensive documentation and video tutorials

The project has received recognition from the audio engineering community and has been featured in several industry publications. The open-source components have been adopted by other developers, contributing to the broader audio development ecosystem.

Future work includes exploring machine learning approaches to synthesis parameter optimization and developing a hardware version of the synthesis engine for embedded systems.`,
        skills: 'C++, JUCE Framework, DSP, Real-time Audio Processing, UI/UX Design, Signal Processing, Mathematics',
        githubLink: 'https://github.com/huijuhnkim/audio-synthesis-research'
    },
    {
        id: 4,
        title: 'Project Placeholder 4',
        description: 'Another placeholder project to complete the grid layout demonstration. This helps visualize the portfolio structure with multiple projects.',
        thumbnail: 'https://via.placeholder.com/400x300/e5e5e5/666666?text=Project+4',
        tags: ['Audio Engineering', 'Music Production'],
        fullDescription: 'Full description for placeholder project 4.',
        skills: 'Various technologies',
        githubLink: '#'
    }
];