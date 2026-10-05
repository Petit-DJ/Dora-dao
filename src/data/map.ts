export type City = { city: string; country: string; lat: number; lng: number; members: number; partners: number };

export const cities: City[] = [
  { city: "New York", country: "USA", lat: 40.7, lng: -74, members: 5200, partners: 6 },
  { city: "São Paulo", country: "Brazil", lat: -23.5, lng: -46.6, members: 3100, partners: 3 },
  { city: "London", country: "UK", lat: 51.5, lng: -0.1, members: 4300, partners: 5 },
  { city: "Lagos", country: "Nigeria", lat: 6.5, lng: 3.4, members: 2800, partners: 2 },
  { city: "Cape Town", country: "South Africa", lat: -33.9, lng: 18.4, members: 1500, partners: 2 },
  { city: "Dubai", country: "UAE", lat: 25.2, lng: 55.3, members: 1900, partners: 4 },
  { city: "Bengaluru", country: "India", lat: 12.97, lng: 77.6, members: 9800, partners: 8 },
  { city: "Jakarta", country: "Indonesia", lat: -6.2, lng: 106.8, members: 2400, partners: 2 },
  { city: "Tokyo", country: "Japan", lat: 35.7, lng: 139.7, members: 2100, partners: 3 },
  { city: "Sydney", country: "Australia", lat: -33.9, lng: 151.2, members: 1300, partners: 2 },
  { city: "Mexico City", country: "Mexico", lat: 19.4, lng: -99.1, members: 1700, partners: 1 },
  { city: "Berlin", country: "Germany", lat: 52.5, lng: 13.4, members: 2200, partners: 3 },
];
