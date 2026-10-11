/**
 * Project content supplied by Daniyal. Add only real, approved projects.
 * Each entry needs: id, name, category, description, role, features and technologies (string arrays).
 * Optional: image { src: '/projects/file.webp', alt: 'Meaningful description' },
 * liveUrl and repositoryUrl (full https URLs). Screenshots belong in public/projects.
 */
export const projects = [
  {
    id: 'dani-blogs',
    image: { src: '/projects/dani-blogs.png', alt: 'Dani Blogs homepage with Fresh stories, Different voices headline and article discovery interface.' },
    caseStudy: { goal: 'Bring publishing and article discovery together in a full-stack product.', contribution: 'Built the publishing experience, author profiles, post interactions, and AI-assisted writing features.', solution: 'Connected React and FastAPI with Supabase, plus a RAG chatbot and Agents SDK integration with Gemini.' },
    name: 'Dani Blogs',
    summary: 'A blogging platform with AI writing tools and article discovery.',
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
    video: { src: '/projects/jarvis-demo.mp4', type: 'video/mp4' },
    image: { src: '/projects/jarvis.png', alt: 'Promotional artwork for Jarvis, Daniyal’s Python AI voice assistant.', caption: 'Project artwork' },
    caseStudy: { goal: 'Connect spoken requests to useful answers and everyday actions.', contribution: 'Integrated wake-word activation, speech recognition, LLM responses, and spoken output in Python.', solution: 'Combined Gemini, Edge TTS, and Python integrations for websites, news headlines, and a personal music library.' },
    name: 'Jarvis',
    summary: 'A Python voice assistant for spoken answers and everyday actions.',
    category: 'VOICE / AGENTIC AI',
    description: 'A Python voice assistant that listens for “Jarvis,” understands spoken commands, and answers aloud with Gemini.',
    role: 'Python and AI development',
    features: ['Wake-word activation and speech recognition.', 'Spoken answers using Microsoft Edge TTS.', 'Open websites, read news headlines, and play music from a personal library.'],
    technologies: ['Python', 'Google Speech Recognition', 'Gemini 2.5 Flash Lite', 'OpenAI Agents SDK', 'Edge TTS', 'Pygame', 'NewsAPI'],
  },
  {
    id: 'physical-ai-textbook',
    image: { src: '/projects/physical-ai-textbook.png', alt: 'Physical AI and Humanoid Robotics textbook homepage with learning and sign-in actions.' },
    caseStudy: { goal: 'Bring textbook-based AI assistance into a robotics learning experience.', contribution: 'Built the digital textbook and content-grounded tutor with citations and explanations for highlighted text.', solution: 'Connected Docusaurus and FastAPI with Qdrant, PostgreSQL, and Groq, alongside learning material for ROS 2, Gazebo, and Isaac Sim.' },
    name: 'Physical AI & Humanoid Robotics',
    summary: 'A robotics textbook with a content-grounded AI tutor.',
    category: 'EDUCATION / RAG',
    description: 'An AI-native digital textbook connecting software intelligence with physical robotics through a content-grounded tutor and hands-on learning.',
    role: 'Full-stack and AI development',
    features: ['A textbook-grounded tutor with chapter and section citations.', 'Highlight text to request contextual explanations.', 'Hands-on learning with ROS 2, Gazebo, and NVIDIA Isaac Sim.'],
    technologies: ['React', 'Docusaurus', 'FastAPI', 'Qdrant', 'PostgreSQL', 'Groq'],
    deployment: 'Vercel',
  },
];
