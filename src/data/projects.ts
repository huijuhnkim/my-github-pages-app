// data/projects.ts
import { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: 'EPPA (Expression Pedal Playback Assistant)',
        description:
            'EPPA transforms an affordable expression pedal into an intuitive playback controller for Logic Pro, making audio production more accessible for visually impaired musicians and engineers.',
        thumbnail: 'https://huijuhnkim-portfolio-website.s3.us-east-2.amazonaws.com/eppa-thumbnail-v2.jpg',
        tags: ['Audio', 'Software Engineering', 'Design'],
        fullDescription:
            "EPPA transforms an affordable expression pedal into an intuitive playback controller for Logic Pro, making audio production more accessible for visually impaired musicians and engineers. This project was inspired by Dr. Abir Saha's research paper \"Understanding Audio Production Practices of People with Vision Impairments\", which highlights the accessibility challenges and high costs faced by blind audio professionals.\n" +
            "\n" +
            "🎯 Problem\n" +
            "\n" +
            "EPPA addresses two critical challenges identified in accessibility research:\n" +
            "\n" +
            "- Cost Barrier: Professional accessible control surfaces can cost upwards of $10,000\n" +
            "- Complexity: Existing assistive technologies have steep learning curves that create additional barriers\n" +
            "\n" +
            "💡 Solution\n" +
            "\n" +
            "EPPA uses a simple, intuitive control scheme inspired by driving:\n" +
            "\n" +
            "- 80-100% (Gas): Full playback\n" +
            "- 20-80% (Coasting): Solo current track\n" +
            "- 0-20% (Brake): Stop playback\n" +
            "\n" +
            "⁇ Why Expression Pedals?\n" +
            "\n" +
            "- Affordable: Quality pedals start at $30 (vs $10,000+ for control surfaces)\n" +
            "- Intuitive: Single-axis control mimics familiar gas pedal interaction\n" +
            "- Accessible: Hands-free operation leaves hands available for instruments or keyboard navigation\n" +
            "- Universal: Works with any standard expression pedal\n" +
            "\n" +
            "🚀 Features\n" +
            "\n" +
            "- Real-time MIDI device selection\n" +
            "- Visual pedal position indicator with accessibility labels\n" +
            "- Native Logic Pro integration via keyboard shortcuts\n" +
            "- Automatic solo state management",
        skills: 'Swift, SwiftUI, Core Audio, AVFoundation, iOS Development',
        githubLink: 'https://github.com/huijuhnkim/EPPA'
    },
    {
        id: 2,
        title: 'Arietta',
        description: 'An iOS Music Application for ET/SR Practice - A consumer-facing music practice app that helps musicians improve ear training and sight reading skills.',
        thumbnail: 'https://huijuhnkim-portfolio-website.s3.us-east-2.amazonaws.com/arietta-thumbnail-v2.png',
        tags: ['Design', 'Audio', 'Software Engineering'],
        fullDescription: 'Released a consumer-facing iOS music practice app that helps musicians improve ear training and sight reading skills. Implemented real-time audio analysis for pitch detection using Core Audio. Implemented user authentication and data persistence through Firebase REST APIs, utilizing Firebase Auth for secure user management and Firestore for NoSQL database operations.',
        skills: 'Swift, SwiftUI, UIKit, Apple Audio Toolkit Library, Google Cloud Platform',
        githubLink: 'https://github.com/huijuhnkim/arietta'
    },
    {
        id: 3,
        title: 'MIDI Tokenization & Chord Progression Prediction Model',
        description:
            'Tokenize MIDI files using NLP techniques and recognize chord progressions with machine learning frameworks.(LSTM and MusicBERT)',
        thumbnail: 'https://huijuhnkim-portfolio-website.s3.us-east-2.amazonaws.com/thumbnail-MIDI-analysis-prediction-model.png',
        tags: ['Software Engineering', 'Audio'],
        fullDescription: 'Tokenize MIDI file using natural language processing techniques such as TF-IDF and regular expressions. Recognize chord progressions with machine learning techniques and frameworks. (LSTM, MusicBERT) Collaborated with a partner to develop the program, utilizing Git for version control and GitHub for code management.',
        skills: 'Python, NumPy, PyTorch, Matplotlib',
        githubLink: 'https://github.com/zhang-hongyi34/CS6120FinalProject'
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