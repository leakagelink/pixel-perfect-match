import { describe, expect, it } from 'vitest';
import { plans } from '@/lib/socialflow';
import { automationInput } from '@/lib/profile.functions';

describe('SocialFlow rules', () => {
  it('recommends Growth with all five platforms', () => {
    expect(plans[1]?.name).toBe('Growth');
    expect(plans[1]?.features).toContain('All 5 social platforms');
  });
  it('rejects an empty automation niche', () => {
    expect(automationInput.safeParse({ niche: ' ', tone: 'Friendly', timezone: 'UTC', time: '10:00', captions: true, hashtags: true, autopost: false, reels: false }).success).toBe(false);
  });
});