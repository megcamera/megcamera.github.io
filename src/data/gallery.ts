export type Photo = {
  id: number;
  title: string;
  category: 'sports' | 'portraits' | 'details';
  alt: string;
  position?: string;
};

export const photos: Photo[] = [
  {id: 11, title: 'Between earth & sky', category: 'sports', alt: 'A pole vaulter suspended above the bar against a pale blue sky'},
  {id: 18, title: 'Crossing over', category: 'portraits', alt: 'A student standing at the entrance to a tree-lined footbridge'},
  {id: 1, title: 'Flight', category: 'sports', alt: 'A diver stretched horizontally above a swimming pool'},
  {id: 23, title: 'In step', category: 'portraits', alt: 'Black-and-white photograph of two friends walking and laughing in a garden'},
  {id: 40, title: 'A little dramatic', category: 'portraits', alt: 'Studio portrait of a student making a playful heart around one eye'},
  {id: 4, title: 'One breath', category: 'sports', alt: 'A swimmer turning to breathe during a freestyle race'},
  {id: 13, title: 'Clear', category: 'sports', alt: 'A hurdler clearing a barrier during an outdoor meet'},
  {id: 27, title: 'Her own way', category: 'portraits', alt: 'A student walking away down a quiet road with her arms out'},
  {id: 34, title: 'Blue court', category: 'sports', alt: 'A tennis player reaching for a forehand on a blue court'},
  {id: 19, title: 'After practice', category: 'portraits', alt: 'Black-and-white portrait of a student in a tie standing on a path'},
  {id: 8, title: 'Still water', category: 'sports', alt: 'A swimmer gliding through a lane in warm reflected light'},
  {id: 29, title: 'Summer green', category: 'portraits', alt: 'A student lying in bright grass and looking toward the camera'},
  {id: 45, title: 'Match point', category: 'sports', alt: 'A tennis player serving beneath a vivid blue sky'},
  {id: 17, title: 'Go', category: 'sports', alt: 'Sprinters launching from the starting blocks'},
  {id: 32, title: 'Quiet confidence', category: 'portraits', alt: 'A seated studio portrait against a warm neutral background'},
  {id: 37, title: 'Reach', category: 'sports', alt: 'A tennis player extending upward for a high ball'},
  {id: 42, title: 'Tools of the trade', category: 'details', alt: 'A camera, long lens, phone, and accessories arranged on a white surface'},
  {id: 47, title: 'Focus', category: 'details', alt: 'Close view of a tennis player holding a racket beside a bright ball'},
];

export const categoryLabels = {
  all: 'All work',
  sports: 'In motion',
  portraits: 'People',
  details: 'Details',
} as const;
