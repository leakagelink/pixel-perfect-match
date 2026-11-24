import { createServerFn } from '@tanstack/react-start';
import { queryOptions } from '@tanstack/react-query';
import { z } from 'zod';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';

export const profileInput = z.object({ display_name: z.string().trim().min(1).max(80), avatar_url: z.union([z.literal(''), z.string().url().refine(url => url.startsWith('https://'), 'Use an HTTPS photo URL')]) });
export const automationInput = z.object({ niche: z.string().trim().min(1).max(200), tone: z.enum(['Friendly', 'Professional', 'Playful', 'Inspiring']), timezone: z.enum(['Asia/Kolkata', 'America/New_York', 'Europe/London', 'UTC']), time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/), captions: z.boolean(), hashtags: z.boolean(), autopost: z.boolean(), reels: z.boolean() });
export const getProfile = createServerFn({ method: 'GET' }).middleware([requireSupabaseAuth]).handler(async ({ context }) => {
  const { data, error } = await context.supabase.from('profiles').select('id, display_name, avatar_url, preferences').eq('id', context.userId).single();
  if (error) throw new Error('Your profile could not be loaded. Please try again.');
  return data;
});
export const saveProfile = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth]).inputValidator(profileInput).handler(async ({ context, data }) => {
  const result = await context.supabase.from('profiles').update(data).eq('id', context.userId).select('id').single();
  if (result.error) throw new Error('Your profile could not be saved. Please try again.');
  return { saved: true };
});
export const saveAutomation = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth]).inputValidator(automationInput).handler(async ({ context, data }) => {
  const result = await context.supabase.from('profiles').update({ preferences: data }).eq('id', context.userId).select('id').single();
  if (result.error) throw new Error('Your preferences could not be saved. Please try again.');
  return { saved: true };
});
export const profileQuery = queryOptions({ queryKey: ['profile'], queryFn: () => getProfile(), staleTime: 30_000 });