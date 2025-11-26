'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [expandedGroups, setExpandedGroups] = useState<{ [key: string]: boolean }>({
    glass: true,
    'door-hardware': true,
    'aluminum-pantry': true,
    board: true
  })

  const categories = [
    {
      id: 'glass',
      number: '1️⃣',
      mainGroup: 'Glass Products',
      image: '/category-glass.jpg',
      subGroups: [
        'Tempered Glass',
        'Clear Glass',
        'Mirrors',
        'Glass Doors',
        'Glass Partitions',
        'Glass Table Tops'
      ]
    },
    {
      id: 'door-hardware',
      number: '2️⃣',
      mainGroup: 'Door Hardware Items',
      image: '/category-door-hardware.jpg',
      subGroups: [
        'Door Locks',
        'Hinges',
        'Door Handles',
        'Tower Bolts',
        'Door Closers',
        'Sliding Door Accessories',
        'Door Stoppers',
        'Screws & Fittings'
      ]
    },
    {
      id: 'aluminum-pantry',
      number: '3️⃣',
      mainGroup: 'Aluminum Pantry Cupboard Items',
      image: '/category-aluminum-pantry.jpg',
      subGroups: [
        'Aluminum Pantry Cupboards',
        'Pantry Frames',
        'Pantry Doors',
        'Sliding Pantry Systems',
        'Aluminum Profiles',
        'Kitchen Glass Panels'
      ]
    },
    {
      id: 'board',
      number: '4️⃣',
      mainGroup: 'Board Items',
      image: '/category-board.jpg',
      subGroups: [
        'Plywood',
        'MDF',
        'Chipboard',
        'Hardboard',
        'Whiteboard'
      ]
    }
  ]

  const filteredCategories = selectedCategory
    ? categories.filter(cat => cat.id === selectedCategory)
    : categories

  const toggleGroup = (categoryId: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-16 text-center">
        <div className="container">
          <h1 className="text-5xl font-extrabold mb-4">Categories</h1>
          <p className="text-xl opacity-95">Browse our wide range of products and services by category</p>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-border sticky top-[73px] z-40 shadow-sm">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === null
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-background-light text-text-dark hover:bg-primary hover:text-white'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-background-light text-text-dark hover:bg-primary hover:text-white'
                }`}
              >
                {category.mainGroup}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-background-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md transition-all hover:shadow-xl overflow-hidden">
                {/* Category Image */}
                <div className="mb-6 w-full h-64 relative rounded-lg overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.mainGroup}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                </div>

                {/* Main Group Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{category.number}</div>
                    <h3 className="text-2xl font-bold text-text-dark">{category.mainGroup}</h3>
                  </div>
                  <button
                    onClick={() => toggleGroup(category.id)}
                    className="text-primary hover:text-primary-dark transition-colors"
                    aria-label={expandedGroups[category.id] ? 'Collapse' : 'Expand'}
                  >
                    {expandedGroups[category.id] ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Sub Groups */}
                {expandedGroups[category.id] && (
                  <div className="mt-4">
                    <p className="text-text-light text-sm font-semibold mb-3 uppercase tracking-wide">
                      Sub Groups:
                    </p>
                    <ul className="list-none p-0 space-y-2">
                      {category.subGroups.map((subGroup, itemIndex) => (
                        <li key={itemIndex} className="text-text-light flex items-center gap-2 py-1">
                          <span className="text-primary font-bold">•</span>
                          <span className="flex-1">{subGroup}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-light text-lg">No categories found. Please try a different filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
