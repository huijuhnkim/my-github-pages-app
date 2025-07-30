import React, { useState, useEffect } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';

interface Tag {
  name: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  fullDescription: string;
  skills: string;
  githubLink: string;
}

const Portfolio: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Add Inter font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Define tags with colors
  const tags: Tag[] = [
    { name: 'Music Production', color: '#DC143C' }, // crimson red
    { name: 'Audio Engineering', color: '#800080' }, // purple
    { name: 'Software Development', color: '#000080' }, // navy blue
    { name: 'Product Design', color: '#006400' } // dark green
  ];

  // Define projects
  const projects: Project[] = [
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
    }
  ];

  // Filter projects based on selected tags and search query
  const filteredProjects = projects.filter(project => {
    const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => project.tags.includes(tag));

    const matchesSearch = searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTags && matchesSearch;
  });

  // Toggle tag selection
  const toggleTag = (tagName: string) => {
    setSelectedTags(prev =>
        prev.includes(tagName)
            ? prev.filter(t => t !== tagName)
            : [...prev, tagName]
    );
  };

  const getTagColor = (tagName: string): string => {
    const tag = tags.find(t => t.name === tagName);
    return tag ? tag.color : '#666';
  };

  return (
      <div className="min-h-screen" style={{ backgroundColor: '#FAFAF8', fontFamily: 'Inter, sans-serif' }}>
        {selectedProject ? (
            // Project Detail View
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <button
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </button>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div
                    className="h-64 md:h-96 flex items-center justify-center p-8"
                    style={{
                      background: 'repeating-linear-gradient(45deg, #e5e5e5, #e5e5e5 10px, #f0f0f0 10px, #f0f0f0 20px)',
                    }}
                >
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>{selectedProject.title}</h1>
                </div>

                <div className="p-8">
                  <div className="relative h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden mb-8">
                    <img
                        src={selectedProject.thumbnail}
                        alt={selectedProject.title}
                        className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-3">Title</h2>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedProject.tags.map(tag => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full text-xs font-medium text-white"
                                style={{ backgroundColor: getTagColor(tag) }}
                            >
                        {tag}
                      </span>
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{selectedProject.fullDescription}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Skills</h3>
                      <p className="text-gray-600">{selectedProject.skills}</p>
                    </div>

                    {selectedProject.githubLink && (
                        <div className="pt-4 border-t border-gray-200">
                          <a
                              href={selectedProject.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            View on GitHub
                          </a>
                        </div>
                    )}
                  </div>
                </div>
              </section>
            </div>
        ) : (
            // Main Portfolio View
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Header Section - Name and Links */}
              <header className="mb-12">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>Hugh Kim</h1>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/huijuhnkim/" target="_blank" rel="noopener noreferrer"
                       className="text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/huijuhnkim" target="_blank" rel="noopener noreferrer"
                       className="text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/huijkim_/" target="_blank" rel="noopener noreferrer"
                       className="text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                      </svg>
                    </a>
                    <a href="mailto:hugh.hj.kim@gmail.com"
                       className="text-gray-600 hover:text-gray-900 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </header>

              {/* Intro Section - Profile Picture and Summary */}
              <section className="mb-24">
                <div className="grid grid-cols-3 gap-8">
                  <div className="col-span-1 flex justify-center items-center">
                    <img
                        src="https://huijuhnkim-portfolio-website.s3.us-east-2.amazonaws.com/profile-pic.JPG"
                        alt="Hugh Kim"
                        className="w-40 h-40 rounded-full object-cover shadow-md"
                    />
                  </div>
                  <div className="col-span-2 flex items-center">
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Audio engineer turned software developer with a passion for creating intuitive music software that empowers creativity. Graduated
                      Summa Cum Laude from Berklee College of Music in music production and audio engineering, now pursuing MS in Computer
                      Science. Bringing deep understanding of musician workflows and technical audio challenges to build innovative iOS and macOS
                      applications. Experienced in Swift development, real-time audio processing, and creating accessible music education tools.
                    </p>
                  </div>
                </div>
              </section>

              {/* Filter Section - Tags and Search Bar */}
              <section className="mb-12">
                <div className="grid grid-cols-3 gap-8">
                  {/* Left Column - Tags (1/3 width) */}
                  <div className="col-span-1">
                    <div className="grid grid-cols-2 gap-2">
                      {tags.map(tag => (
                          <button
                              key={tag.name}
                              onClick={() => toggleTag(tag.name)}
                              className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 transform hover:scale-105"
                              style={{
                                backgroundColor: selectedTags.includes(tag.name) ? tag.color : 'transparent',
                                color: selectedTags.includes(tag.name) ? 'white' : tag.color,
                                border: `1px solid ${tag.color}`,
                              }}
                          >
                            {tag.name}
                          </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Search Bar (2/3 width) */}
                  <div className="col-span-2 flex items-center">
                    <div className="relative w-full">
                      <input
                          type="text"
                          placeholder="Search projects..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-gray-400 transition-colors"
                      />
                      <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </section>

              {/* Project Card Section - Projects Grid (3 columns) */}
              <section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredProjects.map(project => (
                      <div
                          key={project.id}
                          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer col-span-1"
                          onMouseEnter={() => setHoveredCard(project.id)}
                          onMouseLeave={() => setHoveredCard(null)}
                          onClick={() => setSelectedProject(project)}
                      >
                        <div className="relative h-48 overflow-hidden bg-gray-100">
                          <img
                              src={project.thumbnail}
                              alt={project.title}
                              className={`w-full h-full object-cover transition-transform duration-300 ${
                                  hoveredCard === project.id ? 'scale-110' : ''
                              }`}
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{project.title}</h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3 italic" style={{ fontFamily: 'Inter, sans-serif' }}>{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full text-xs font-medium text-white"
                                    style={{ backgroundColor: getTagColor(tag) }}
                                >
                        {tag}
                      </span>
                            ))}
                          </div>
                        </div>
                      </div>
                  ))}
                </div>

                {/* No results message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-gray-500">No projects found matching your criteria.</p>
                    </div>
                )}
            </div>
          )}
      </div>
  );
};

export default Portfolio;