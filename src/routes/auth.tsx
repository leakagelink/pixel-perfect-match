import { createFileRoute } from '@tanstack/react-router';
import { AuthPage } from '@/components/socialflow/auth';
import { pageHead } from '@/lib/socialflow';
export const Route = createFileRoute('/auth')({ head: () => pageHead('Log in to Your Social Content Workspace | SocialFlow', 'Log in to your SocialFlow workspace to review content plans, manage your profile and explore social automation. Secure email, Google and Lovable sign-in available.', '/auth'), component: () => <AuthPage /> });