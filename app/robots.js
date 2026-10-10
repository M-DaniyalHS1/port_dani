import { siteUrl } from '../config/site';

export default function robots() {
  return { rules: { userAgent: '*', allow: '/' }, ...(siteUrl && { sitemap: `${siteUrl}/sitemap.xml` }) };
}
