// formatDate.test.ts

import { formatDate } from '../utils/formatDate';

describe('formatDate', () => {
  it('should format the date to YYYY-MM-DD', () => {
    const date = new Date('2024-08-28');
    expect(formatDate(date)).toBe('2024-08-28');
  });

  it('should handle single-digit months and days', () => {
    const date1 = new Date('2024-01-05');
    const date2 = new Date('2024-12-15');
    expect(formatDate(date1)).toBe('2024-01-05');
    expect(formatDate(date2)).toBe('2024-12-15');
  });

  it('should handle leap years correctly', () => {
    const date = new Date('2024-02-29'); // Leap year date
    expect(formatDate(date)).toBe('2024-02-29');
  });

  it('should handle invalid date inputs gracefully', () => {
    const date = new Date('Invalid Date');
    expect(formatDate(date)).toBe('NaN-NaN-NaN'); // Based on JavaScript date behavior
  });
});
