// Set the final public origin in hosting configuration. No invented domain.
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null);
export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : null;
export const siteTitle = 'Daniyal — Backend, Full-stack & Agentic AI';
export const siteDescription = 'Building systems. Connecting intelligence. Explore Daniyal’s full-stack products, backends, and AI applications.';
