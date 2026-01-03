
import React from 'react';

export const COLORS = {
  primary: '#D4AF37', // Gold
  secondary: '#8E1616', // Deep Red (Nigerian context often uses bold colors)
  accent: '#F5E6E8', // Soft Rose
  background: '#FAF9F6', // Off-white/Cream
  text: '#1A1A1A',
};

export const THEMES = [
  { id: 'classic_elegance', name: 'Classic Elegance', colors: ['#FAF9F6', '#D4AF37'] },
  { id: 'royal_velvet', name: 'Royal Velvet', colors: ['#2D0B0B', '#E6C18E'] },
  { id: 'modern_minimal', name: 'Modern Minimal', colors: ['#FFFFFF', '#333333'] },
  { id: 'tropical_vibes', name: 'Tropical Celebration', colors: ['#E6F4EA', '#2D5A27'] },
];

export const MOCK_WEDDING: any = {
  id: '1',
  slug: 'ada-and-emeka',
  partner1_name: 'Ada',
  partner2_name: 'Emeka',
  wedding_date: '2025-12-24',
  hero_image_url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000',
  how_we_met: {
    title: 'The First Encounter',
    content: 'It started with a simple hello at a tech conference in Lagos. Emeka was struggling with his badge, and Ada offered a hand. Little did we know, that badge was the ticket to our forever.',
    image_url: 'https://images.unsplash.com/photo-1522673607200-16489a3ad59b?auto=format&fit=crop&q=80&w=800'
  },
  our_journey: [
    { date: 'Oct 2022', event: 'First Coffee Date', image_url: 'https://picsum.photos/seed/coffee/400/300' },
    { date: 'Dec 2023', event: 'Meet the Families', image_url: 'https://picsum.photos/seed/family/400/300' },
    { date: 'Mar 2024', event: 'The Yes!', image_url: 'https://picsum.photos/seed/proposal/400/300' },
  ],
  proposal_story: {
    content: 'On the serene beaches of Obudu, under the starlit sky, Emeka got down on one knee. The mountains were our witnesses as we promised forever.',
    image_url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800'
  },
  traditional_wedding: {
    date: 'Dec 20, 2024',
    venue: 'Enugu Event Center',
  },
  white_wedding: {
    date: 'Dec 24, 2024',
    venue: 'St. Paul’s Cathedral, Lagos',
  },
  reception: {
    date: 'Dec 24, 2024',
    venue: 'Eko Hotel Grand Ballroom',
  },
  wedding_party: [
    { name: 'Chidi Okoro', role: 'Best Man', image_url: 'https://i.pravatar.cc/150?u=1' },
    { name: 'Zainab Bello', role: 'Maid of Honor', image_url: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Tunde Lawal', role: 'Groomsman', image_url: 'https://i.pravatar.cc/150?u=3' },
    { name: 'Ngozi Obi', role: 'Bridesmaid', image_url: 'https://i.pravatar.cc/150?u=4' },
  ],
  theme: 'classic_elegance',
  published: true,
  view_count: 1240,
};
