import { createFileRoute } from '@tanstack/react-router';
import { AuthPage } from '@/components/socialflow/auth';
import { pageHead } from '@/lib/socialflow';
export const Route = createFileRoute('/sign-up')({ head: () => pageHead('Create Your Social Content Planning Account | SocialFlow', 'Create a SocialFlow account for a calmer social content workflow. Set up your profile and explore scheduling, captions and reels in our growing product workspace.', '/sign-up'), component: () => <AuthPage signup /> });