// Biography based only on Daniyal's supplied project descriptions.
export const aboutDraft = [
  'I’m Daniyal. I build full-stack products and AI-powered applications, connecting useful interfaces with the systems behind them.',
  'My projects range from an AI-assisted blogging platform to a Python voice assistant and a digital textbook with a content-grounded tutor. I work with React, FastAPI, databases, and agent frameworks to bring these ideas together.',
];

// Public email supplied by Daniyal; update the label and mailto URL together.
export const profile = {
  name: 'Daniyal',
  about: aboutDraft,
  contact: { label: 'Email', href: 'mailto:m.daniyal93337@gmail.com' },
  socials: [
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/m-daniyal-aslam-hs1/' },
    { label: 'GitHub', icon: 'github', href: 'https://github.com/M-DaniyalHS1' },
  ],
};

export const expertise = [
  {
    id: 'backend', title: 'Backend systems', symbol: '01',
    description: 'APIs, application data, and service integrations behind complete products.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Supabase'],
    evidence: 'Dani Blogs / Physical AI textbook',
  },
  {
    id: 'full-stack', title: 'Full-stack products', symbol: '02',
    description: 'Connected interfaces and services for publishing, interaction, and learning.',
    technologies: ['React','JavaScript','CSS', 'Docusaurus', 'Vercel', 'FastAPI Cloud'],
    evidence: 'Dani Blogs / Physical AI textbook',
  },
  {
    id: 'ai', title: 'AI Agent Development', symbol: '03',
    description: 'AI agent development, RAG chatbots, AI chatbots, and voice agents.',
    technologies: ['OpenAI Agents SDK', 'TTS', 'STT', 'LLM Integration', 'Tool Calling', 'Agent Orchestration'],
    evidence: 'Jarvis / Dani Blogs / Physical AI textbook',
  },
];
