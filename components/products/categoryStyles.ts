import type { ComponentType } from 'react'
import type { CategoryId } from '@/lib/products'
import {
  BoardsIllustration,
  DoorIllustration,
  GlassIllustration,
  PantryIllustration,
} from '@/components/home/Illustrations'

// Same colour per category as the home page. Class names are written out in full for Tailwind.
export const categoryStyles: Record<CategoryId, { Art: ComponentType; art: string; label: string; dot: string }> = {
  glass: {
    Art: GlassIllustration,
    art: 'bg-gradient-to-br from-brand-soft to-[#cfe7e5]',
    label: 'text-brand',
    dot: 'bg-brand',
  },
  'door-hardware': {
    Art: DoorIllustration,
    art: 'bg-gradient-to-br from-sun-soft to-[#ffe2b0]',
    label: 'text-sun-deep',
    dot: 'bg-sun',
  },
  'aluminum-pantry': {
    Art: PantryIllustration,
    art: 'bg-gradient-to-br from-sky-soft to-[#cbe3fb]',
    label: 'text-sky-deep',
    dot: 'bg-sky',
  },
  boards: {
    Art: BoardsIllustration,
    art: 'bg-gradient-to-br from-coral-soft to-[#ffd5c4]',
    label: 'text-coral-deep',
    dot: 'bg-coral',
  },
}
