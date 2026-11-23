import { describe, expect, it } from 'vitest';
import { buildGallery, extractLinks, parseCells, toLink } from './gallery-data';

describe('gallery links', () => {
  it('gives tracking-laden and clean copies of the same post one key', () => {
    expect(toLink('https://www.linkedin.com/posts/asmi-khan_girlswhoyap-activity-7368184468232159232-G4qW?utm_source=x')?.key).toBe('linkedin:7368184468232159232');
    expect(toLink('https://x.com/AsmiiKhan7/status/1962416447348789251?t=D9&s=19')?.url).toBe('https://x.com/AsmiiKhan7/status/1962416447348789251');
    expect(toLink('https://youtu.be/XCFrki38ZQM?si=abc')?.key).toBe(toLink('https://www.youtube.com/shorts/XCFrki38ZQM')?.key);
  });

  it('pulls every link out of a multi-line cell without duplicates', () => {
    const cell = 'LinkedIn: https://www.linkedin.com/posts/a_x-activity-7368183173274365952-xAyx\n\nTwitter: https://x.com/v/status/1962420745180733515 https://x.com/v/status/1962420745180733515?s=1';
    expect(extractLinks(cell).map(l => l.platform)).toEqual(['linkedin', 'x']);
  });

  it('reads only the first column of a headerless CSV export', () => {
    expect(parseCells('"https://x.com/a/status/1",""\n"line1\nhttps://x.com/b/status/2",""\n')).toHaveLength(2);
  });
});

describe('buildGallery', () => {
  const cells = [
    'https://www.linkedin.com/posts/first-person_a-activity-1111111111111111111 https://x.com/first/status/2222',
    'https://youtu.be/XCFrki38ZQM https://x.com/second/status/3333',
    'https://x.com/first/status/2222 https://www.instagram.com/p/AbC123/',
  ];
  const items = buildGallery(cells, { 'x:2222': { image: '/media/gallery/a.webp', author: 'First' } });

  it('lists the newest sheet rows first and folds a repeated row into its earlier card', () => {
    expect(items.map(i => i.id)).toEqual(['x:3333', 'youtube:XCFrki38ZQM', 'x:2222']);
  });

  it('makes each YouTube link a playable video card', () => {
    expect(items[1]).toMatchObject({ kind: 'video', image: 'https://i.ytimg.com/vi/XCFrki38ZQM/hqdefault.jpg' });
  });

  it('leads a post card with the link that has a picture and keeps the rest as "also on"', () => {
    const post = items[2]!;
    expect(post.link.platform).toBe('x');
    expect(post.alsoOn.map(l => l.platform)).toEqual(['linkedin', 'instagram']);
    expect(post.author).toBe('First');
  });

  it('names authors from the link when no preview exists', () => {
    expect(items[0]?.author).toBe('@second');
  });
});
