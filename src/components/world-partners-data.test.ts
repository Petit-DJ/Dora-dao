import { describe, expect, it } from 'vitest';
import { cities, continents, countries, hostEventHref, searchCities } from './world-partners-data';

describe('city partnership map', () => {
  it('contains seven countries on each of the six inhabited continents', () => {
    expect(continents).toHaveLength(6);
    for (const continent of continents) expect(countries.filter(country => country.continent === continent)).toHaveLength(7);
  });
  it('contains six real subdivisions per country except Fiji, which has five first-level divisions', () => {
    for (const country of countries) expect(country.states).toHaveLength(country.code === 'FJ' ? 5 : 6);
    expect(countries.find(country => country.code === 'FJ')?.states.map(state => state.name).sort()).toEqual(['Central', 'Eastern', 'Northern', 'Rotuma', 'Western']);
  });
  it('contains five cities per subdivision, with unique IDs and valid coordinates', () => {
    for (const country of countries) for (const state of country.states) expect(state.cities).toHaveLength(5);
    expect(cities).toHaveLength(1255);
    expect(new Set(cities.map(city => city.id)).size).toBe(1255);
    for (const city of cities) { expect(city.lat).toBeGreaterThanOrEqual(-90); expect(city.lat).toBeLessThanOrEqual(90); expect(city.lng).toBeGreaterThanOrEqual(-180); expect(city.lng).toBeLessThanOrEqual(180); }
  });
  it('finds cities by city, subdivision and country', () => {
    expect(searchCities('Mumbai India').some(city => city.name === 'Mumbai')).toBe(true);
    expect(searchCities('no-such-place')).toEqual([]);
  });
  it('addresses the event invitation to the supplied email and includes the selected city', () => {
    const city = searchCities('Mumbai India')[0];
    expect(city).toBeDefined();
    if (!city) return;
    expect(hostEventHref(city).split('?')[0]).toBe('mailto:Connectdoradao@gmail.com');
    expect(decodeURIComponent(hostEventHref(city))).toContain('Host an event in Mumbai, India');
  });
});