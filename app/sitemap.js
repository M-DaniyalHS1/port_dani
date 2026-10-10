import { siteUrl } from '../config/site';

export default function sitemap() {
  return siteUrl ? [{ url: siteUrl, changeFrequency: 'monthly', priority: 1 }] : [];
}
