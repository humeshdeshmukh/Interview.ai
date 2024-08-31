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

  it('should handle dates at the start of the year', () => {
    const date = new Date('2024-01-01');
    expect(formatDate(date)).toBe('2024-01-01');
  });

  it('should handle dates at the end of the year', () => {
    const date = new Date('2024-12-31');
    expect(formatDate(date)).toBe('2024-12-31');
  });

  it('should handle invalid date inputs gracefully', () => {
    const invalidDate = new Date('Invalid Date');
    expect(formatDate(invalidDate)).toBe('Invalid Date');
  });

  it('should handle empty inputs gracefully', () => {
    const emptyDate = new Date('');
    expect(formatDate(emptyDate)).toBe('Invalid Date');
  });

  it('should handle null and undefined inputs gracefully', () => {
    // Assuming the function should handle null and undefined as invalid dates
    expect(formatDate(null as unknown as Date)).toBe('Invalid Date');
    expect(formatDate(undefined as unknown as Date)).toBe('Invalid Date');
  });

  it('should format current date correctly', () => {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    const [year, month, day] = formattedDate.split('-');
    expect(formattedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(Number(month)).toBeGreaterThan(0);
    expect(Number(month)).toBeLessThanOrEqual(12);
    expect(Number(day)).toBeGreaterThan(0);
    expect(Number(day)).toBeLessThanOrEqual(31);
  });
});
