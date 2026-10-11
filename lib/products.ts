// Product catalogue for the Products page (/category).
// To show a real photo on a card, put it in /public/products/ and set `image`,
// e.g. image: '/products/tempered-glass.jpg'.

export type CategoryId = 'glass' | 'door-hardware' | 'aluminum-pantry' | 'boards'

export type Product = {
  slug: string
  name: string
  description: string
  category: CategoryId
  image?: string
}

export type Category = {
  id: CategoryId
  name: string // section heading
  short: string // filter chip / card label
  tagline: string
}

export const categories: Category[] = [
  { id: 'glass', name: 'Glass products', short: 'Glass', tagline: 'Cut to size and fitted on request' },
  { id: 'door-hardware', name: 'Door hardware', short: 'Door hardware', tagline: 'For home and commercial doors' },
  { id: 'aluminum-pantry', name: 'Aluminum pantry cupboard items', short: 'Aluminum pantry', tagline: 'Made to your kitchen layout' },
  { id: 'boards', name: 'Board items', short: 'Boards', tagline: 'Sheets for furniture and fit-outs' },
]

export const products: Product[] = [
  // Glass
  { slug: 'tempered-glass', category: 'glass', name: 'Tempered glass', description: 'Toughened safety glass for doors, shower screens and table tops.' },
  { slug: 'clear-glass', category: 'glass', name: 'Clear glass', description: 'Standard clear sheet glass for windows and frames, cut to size.' },
  { slug: 'mirrors', category: 'glass', name: 'Mirrors', description: 'Wall, bathroom and dressing mirrors in any shape and size.' },
  { slug: 'glass-doors', category: 'glass', name: 'Glass doors', description: 'Frameless and framed glass doors for homes and shops.' },
  { slug: 'glass-partitions', category: 'glass', name: 'Glass partitions', description: 'Office and shop partitions that keep spaces bright.' },
  { slug: 'glass-table-tops', category: 'glass', name: 'Glass table tops', description: 'Protective and full glass tops, edges polished.' },

  // Door hardware
  { slug: 'door-locks', category: 'door-hardware', name: 'Door locks', description: 'Mortise, cylinder and padlock-style locks for every door.' },
  { slug: 'hinges', category: 'door-hardware', name: 'Hinges', description: 'Butt, concealed and heavy-duty hinges in several finishes.' },
  { slug: 'door-handles', category: 'door-hardware', name: 'Door handles', description: 'Lever and pull handles for wooden, glass and metal doors.' },
  { slug: 'tower-bolts', category: 'door-hardware', name: 'Tower bolts', description: 'Simple, strong bolts for doors, gates and windows.' },
  { slug: 'door-closers', category: 'door-hardware', name: 'Door closers', description: 'Closers that shut doors smoothly and quietly.' },
  { slug: 'sliding-door-accessories', category: 'door-hardware', name: 'Sliding door accessories', description: 'Rollers, tracks and guides for sliding doors.' },
  { slug: 'door-stoppers', category: 'door-hardware', name: 'Door stoppers', description: 'Floor and wall stoppers that protect walls and doors.' },
  { slug: 'screws-and-fittings', category: 'door-hardware', name: 'Screws and fittings', description: 'Screws, plugs and fixings to finish every job.' },

  // Aluminum pantry
  { slug: 'aluminum-pantry-cupboards', category: 'aluminum-pantry', name: 'Aluminum pantry cupboards', description: 'Complete cupboards built and fitted to your kitchen.' },
  { slug: 'pantry-frames', category: 'aluminum-pantry', name: 'Pantry frames', description: 'Aluminum frames for new or replacement pantry units.' },
  { slug: 'pantry-doors', category: 'aluminum-pantry', name: 'Pantry doors', description: 'Replacement doors in aluminum with glass or panel inserts.' },
  { slug: 'sliding-pantry-systems', category: 'aluminum-pantry', name: 'Sliding pantry systems', description: 'Space-saving sliding doors for tight kitchens.' },
  { slug: 'aluminum-profiles', category: 'aluminum-pantry', name: 'Aluminum profiles', description: 'Profiles for frames, shelves and custom builds.' },
  { slug: 'kitchen-glass-panels', category: 'aluminum-pantry', name: 'Kitchen glass panels', description: 'Glass inserts and splash panels for kitchens.' },

  // Boards
  { slug: 'plywood', category: 'boards', name: 'Plywood', description: 'Strong ply sheets for furniture, shelving and fit-outs.' },
  { slug: 'mdf', category: 'boards', name: 'MDF', description: 'Smooth boards that paint and cut cleanly.' },
  { slug: 'chipboard', category: 'boards', name: 'Chipboard', description: 'Economical boards for cupboards and carcasses.' },
  { slug: 'hardboard', category: 'boards', name: 'Hardboard', description: 'Thin boards for backing panels and drawer bases.' },
  { slug: 'whiteboard', category: 'boards', name: 'Whiteboard', description: 'Writing boards for offices, schools and homes.' },
]
