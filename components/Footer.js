import { profile } from '../config/profile';

export default function Footer() {
  return <footer className="site-footer"><span>{profile.name} <span className="name-accent">/</span> Backend · Full-stack · Agentic AI</span><a href="#top">Back to top <span aria-hidden="true">↑</span></a></footer>;
}
