export const digitalProducts = [
  {
    id: 'certify', name: 'DoraCertify', category: 'Certificates & credentials',
    headline: 'Give every achievement its moment.',
    description: 'One certificate design, one spreadsheet, and personalised certificates for your whole community.',
    features: ['Personalised certificates', 'Spreadsheet imports', 'Verification IDs & ZIP exports'],
    url: 'https://doracertifier.lovable.app', tone: 'sage',
  },
  {
    id: 'panelly', name: 'Panelly', category: 'Dora Comic Book',
    headline: 'Your story. A whole new panel.',
    description: 'Turn your stories and photos into a comic book, and give your community a different way to share its journey.',
    features: ['Stories & photo uploads', 'Comic book creation', 'Creative storytelling'],
    url: 'https://doracomicbook.lovable.app', tone: 'gold',
  },
  {
    id: 'hacks', name: 'DoraHacks', category: 'Build & launch together',
    headline: 'Good ideas deserve a launch.',
    description: 'Explore DoraHacks 2.0 and discover a space for builders to create, share and launch together.',
    features: ['Builder community', 'Project discovery', 'Collaborative launches'],
    url: 'https://dorahacks.lovable.app', tone: 'peach',
  },
] as const;