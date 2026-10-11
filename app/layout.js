import './globals.css';
import localFont from 'next/font/local';
import SystemVisual from '../components/SystemVisual';
import { siteUrl, siteTitle, siteDescription } from '../config/site';

const displayFont = localFont({ src: './fonts/SpaceGrotesk.ttf', weight: '300 700', variable: '--font-display', display: 'swap' });

export const metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: siteTitle,
  description: siteDescription,
  ...(siteUrl && { alternates: { canonical: '/' } }),
  openGraph: { title: siteTitle, description: siteDescription, type: 'website', locale: 'en_US', siteName: 'Daniyal', ...(siteUrl && { url: siteUrl }) },
  twitter: { card: 'summary_large_image', title: siteTitle, description: siteDescription },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={displayFont.variable}>
      <body>
        <div className="portfolio-shell">
          <div className="site-atmosphere" aria-hidden="true">
            <div className="site-background" />
            <SystemVisual />
          </div>
          <div id="top" className="site-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
