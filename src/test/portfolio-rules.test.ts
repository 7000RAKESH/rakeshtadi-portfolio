import { describe, expect, it } from 'vitest';
import { projects, social, experience } from '@/lib/portfolio';

describe('Verified portfolio facts', () => {
  it('does not expose public demo or repository links for internal company work', () => {
    const internal = projects.find(project => project.visual === 'operations');
    expect(internal).toBeDefined();
    expect(internal?.live).toBeUndefined();
    expect(internal?.source).toBeUndefined();
  });
  it('uses the supplied Job Hunter repository and demo only', () => {
    const job = projects.find(project => project.title === 'Job Hunter');
    expect(job?.source).toBe('https://github.com/7000RAKESH/Job-Hunter');
    expect(job?.live).toBe('https://job-hunter-eight-sigma.vercel.app/');
  });
  it('uses the verified contact address', () => {
    expect(social.email).toBe('mailto:rakeshmca222@gmail.com');
  });
  it('keeps the specified current role dates', () => {
    expect(experience[0]?.dates).toBe('April 2026 — Present');
  });
});