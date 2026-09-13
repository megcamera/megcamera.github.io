export type Photo = {
  id: number;
  title: string;
  category: 'sports' | 'portraits' | 'details';
  alt: string;
  width: number;
  height: number;
};

export const photos: Photo[] = [
  {id: 11, title: 'Between earth & sky', category: 'sports', alt: 'A pole vaulter suspended above the bar against a pale blue sky', width: 2048, height: 1365},
  {id: 18, title: 'Crossing over', category: 'portraits', alt: 'A student standing at the entrance to a tree-lined footbridge', width: 2048, height: 1511},
  {id: 1, title: 'Flight', category: 'sports', alt: 'A diver stretched horizontally above a swimming pool', width: 2048, height: 1365},
  {id: 23, title: 'In step', category: 'portraits', alt: 'Black-and-white photograph of two friends walking and laughing in a garden', width: 2048, height: 1664},
  {id: 40, title: 'A little dramatic', category: 'portraits', alt: 'Studio portrait of a student making a playful heart around one eye', width: 2048, height: 1477},
  {id: 4, title: 'One breath', category: 'sports', alt: 'A swimmer turning to breathe during a freestyle race', width: 2048, height: 1365},
  {id: 13, title: 'Clear', category: 'sports', alt: 'A hurdler clearing a barrier during an outdoor meet', width: 2048, height: 1365},
  {id: 27, title: 'Her own way', category: 'portraits', alt: 'A student walking away down a quiet road with her arms out', width: 2048, height: 1735},
  {id: 34, title: 'Blue court', category: 'sports', alt: 'A tennis player reaching for a forehand on a blue court', width: 2048, height: 1365},
  {id: 19, title: 'After practice', category: 'portraits', alt: 'Black-and-white portrait of a student in a tie standing on a path', width: 2048, height: 1564},
  {id: 8, title: 'Still water', category: 'sports', alt: 'A swimmer gliding through a lane in warm reflected light', width: 2048, height: 1365},
  {id: 29, title: 'Summer green', category: 'portraits', alt: 'A student lying in bright grass and looking toward the camera', width: 2048, height: 1438},
  {id: 45, title: 'Match point', category: 'sports', alt: 'A tennis player serving beneath a vivid blue sky', width: 1365, height: 2048},
  {id: 17, title: 'Go', category: 'sports', alt: 'Sprinters launching from the starting blocks', width: 2048, height: 1365},
  {id: 32, title: 'Quiet confidence', category: 'portraits', alt: 'A seated studio portrait against a warm neutral background', width: 2048, height: 1541},
  {id: 37, title: 'Reach', category: 'sports', alt: 'A tennis player extending upward for a high ball', width: 2048, height: 1365},
  {id: 42, title: 'Tools of the trade', category: 'details', alt: 'A camera, long lens, phone, and accessories arranged on a white surface', width: 2048, height: 1365},
  {id: 47, title: 'Focus', category: 'details', alt: 'Close view of a tennis player holding a racket beside a bright ball', width: 2048, height: 1365},
];

export const categoryLabels = {
  all: 'All work',
  sports: 'In motion',
  portraits: 'People',
  details: 'Details',
} as const;

export const categoryInfo = {
  sports: {
    title: 'In motion',
    eyebrow: 'Sports',
    description: 'The split-second geometry of effort: water, courts, tracks, and the moment an athlete commits.',
    cover: 11,
  },
  portraits: {
    title: 'Being here',
    eyebrow: 'Portraits',
    description: 'Friends, classmates, and the expressions that happen once everyone stops trying to pose.',
    cover: 27,
  },
  details: {
    title: 'A closer look',
    eyebrow: 'Details',
    description: 'Small studies of the tools, textures, and gestures that hold the rest of a story together.',
    cover: 42,
  },
} as const;
