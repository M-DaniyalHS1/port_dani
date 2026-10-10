/**
 * Project content supplied by Daniyal. Add only real, approved projects.
 * Each entry needs: id, name, category, description, role, features and technologies (string arrays).
 * Optional: image { src: '/projects/file.webp', alt: 'Meaningful description' },
 * liveUrl and repositoryUrl (full https URLs). Screenshots belong in public/projects.
 */
export const projects = [
  {
    id: 'dani-blogs',
    name: 'Dani Blogs',
    category: 'FULL-STACK / AI',
    description: 'A full-stack blogging platform that brings publishing, author profiles, and AI-assisted writing into one product.',
    role: 'Full-stack development',
    features: ['Publish posts, save drafts, and create author profiles.', 'Comment on and like posts.', 'Explore articles with a RAG chatbot and get AI help with titles, summaries, and writing.'],
    technologies: ['React', 'FastAPI', 'Supabase', 'OpenAI Agents SDK', 'Gemini'],
    deployment: 'Vercel / FastAPI Cloud',
    liveUrl: 'https://blog-api-project-zeta.vercel.app/',
  },
  {
    id: 'jarvis',
    name: 'Jarvis',
    category: 'VOICE / AGENTIC AI',
    description: 'A Python voice assistant that listens for “Jarvis,” understands spoken commands, and answers aloud with Gemini.',
    role: 'Python and AI development',
    features: ['Wake-word activation and speech recognition.', 'Spoken answers using Microsoft Edge TTS.', 'Open websites, read news headlines, and play music from a personal library.'],
    technologies: ['Python', 'Google Speech Recognition', 'Gemini 2.5 Flash Lite', 'OpenAI Agents SDK', 'Edge TTS', 'Pygame', 'NewsAPI'],
  },
  {
    id: 'physical-ai-textbook',
    name: 'Physical AI & Humanoid Robotics',
    category: 'EDUCATION / RAG',
    description: 'An AI-native digital textbook connecting software intelligence with physical robotics through a content-grounded tutor and hands-on learning.',
    role: 'Full-stack and AI development',
    features: ['A textbook-grounded tutor with chapter and section citations.', 'Highlight text to request contextual explanations.', 'Hands-on learning with ROS 2, Gazebo, and NVIDIA Isaac Sim.'],
    technologies: ['React', 'Docusaurus', 'FastAPI', 'Qdrant', 'PostgreSQL', 'Groq'],
    deployment: 'Vercel',
  },
];
