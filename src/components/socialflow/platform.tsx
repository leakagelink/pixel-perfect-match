import { Facebook, Instagram, Youtube, Zap } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import type { PlatformName } from '@/lib/socialflow';

export function Brand() { return <Link to="/" className="brand" aria-label="SocialFlow home"><span className="brand-mark"><Zap fill="currentColor" /></span>SocialFlow<span className="text-primary">.</span></Link>; }
export function PlatformIcon({ name }: { name: PlatformName }) {
  return <span className={`platform-icon ${name.toLowerCase()}`} aria-label={name}>{name === 'Instagram' ? <Instagram /> : name === 'Facebook' ? <Facebook fill="currentColor" /> : name === 'YouTube' ? <Youtube fill="currentColor" /> : name === 'Pinterest' ? 'p' : '𝕏'}</span>;
}