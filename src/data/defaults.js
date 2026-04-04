export const DEFAULT_VANS = [
  {
    id: 'v1', name: 'Van Escapade', type: 'compact', seats: 2, price: 80,
    img: '/images/van-location.jpg',
    description: 'Van compact idéal pour un couple, entièrement équipé pour l\'aventure.',
    available: true, icalYescapa: '', icalWikicampers: '', icalBooking: '', icalAutre: '',
  },
  {
    id: 'v2', name: 'Van Aventure', type: 'familial', seats: 4, price: 110,
    img: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=600&h=400&fit=crop',
    description: 'Van familial spacieux, tout confort pour 4 personnes.',
    available: true, icalYescapa: '', icalWikicampers: '', icalBooking: '', icalAutre: '',
  },
  {
    id: 'v3', name: 'Van Grand Large', type: 'grand', seats: 4, price: 130,
    img: 'https://images.unsplash.com/photo-1609859363253-78af22f34e5a?w=600&h=400&fit=crop',
    description: 'Fourgon grand volume pour les longs voyages en liberté.',
    available: true, icalYescapa: '', icalWikicampers: '', icalBooking: '', icalAutre: '',
  },
]

export const DEFAULT_DEVIS = {
  'Food Truck & Véhicules': {
    icon: '🚚',
    sections: [
      { title: 'Type de véhicule', type: 'radio', items: [
        { label: 'Food Truck (camion)', price: 15000 },
        { label: 'Food Truck (remorque)', price: 8000 },
        { label: 'Van aménagé (Sprinter)', price: 12000 },
        { label: 'Van compact (Transporter)', price: 9000 },
        { label: 'Fourgon L2H2+', price: 14000 },
      ]},
      { title: 'Aménagements intérieurs', type: 'checkbox', items: [
        { label: 'Isolation thermique complète', price: 2500 },
        { label: 'Habillage bois intérieur', price: 3000 },
        { label: 'Lit fixe / convertible', price: 1800 },
        { label: 'Coin cuisine équipé', price: 2200 },
        { label: 'Salle d\'eau / douche', price: 3500 },
        { label: 'Rangements sur mesure', price: 1500 },
      ]},
      { title: 'Équipements techniques', type: 'checkbox', items: [
        { label: 'Installation électrique 12V/220V', price: 2000 },
        { label: 'Panneau solaire + batterie lithium', price: 3500 },
        { label: 'Chauffage Webasto/Planar', price: 2800 },
        { label: 'Réservoir eau', price: 800 },
        { label: 'Lanterneau / fenêtre de toit', price: 600 },
        { label: 'Galerie de toit', price: 900 },
      ]},
      { title: 'Spécifique Food Truck', type: 'checkbox', items: [
        { label: 'Comptoir de service avec volet', price: 2500 },
        { label: 'Équipement cuisson pro', price: 4000 },
        { label: 'Hotte aspirante + extraction', price: 1800 },
        { label: 'Réfrigération professionnelle', price: 2200 },
        { label: 'Branchement électrique externe', price: 800 },
        { label: 'Covering / flocage', price: 1500 },
      ]},
    ],
  },
  'Tiny House': {
    icon: '🏡',
    sections: [
      { title: 'Surface & Structure', type: 'radio', items: [
        { label: 'Tiny House 15m² (6m)', price: 35000 },
        { label: 'Tiny House 20m² (7.2m)', price: 45000 },
        { label: 'Tiny House 25m² (8.5m)', price: 55000 },
        { label: 'Studio de jardin 12m²', price: 25000 },
      ]},
      { title: 'Finitions & Confort', type: 'checkbox', items: [
        { label: 'Bardage bois naturel', price: 3000 },
        { label: 'Toiture végétalisée', price: 4500 },
        { label: 'Mezzanine chambre', price: 3500 },
        { label: 'Terrasse intégrée', price: 2800 },
        { label: 'Double vitrage renforcé', price: 2000 },
        { label: 'Poêle à bois', price: 2500 },
      ]},
      { title: 'Équipements', type: 'checkbox', items: [
        { label: 'Cuisine complète équipée', price: 5000 },
        { label: 'Salle de bain complète', price: 4500 },
        { label: 'Installation solaire autonome', price: 6000 },
        { label: 'Récupération eau de pluie', price: 2000 },
        { label: 'Toilettes sèches', price: 1200 },
        { label: 'Chauffage plancher radiant', price: 3500 },
      ]},
    ],
  },
}

export const DEFAULT_PROJECTS = [
  { id: 'p1', img: '/images/foodtruck.jpg', title: 'Food Truck Le Nomade', cat: 'foodtruck', tag: 'Food Truck' },
  { id: 'p2', img: 'https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?w=600&h=400&fit=crop', title: 'Camion Pizza Napoli', cat: 'foodtruck', tag: 'Food Truck' },
  { id: 'p3', img: '/images/van-location.jpg', title: 'Van Escapade', cat: 'van', tag: 'Van Aménagé' },
  { id: 'p4', img: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=600&h=400&fit=crop', title: 'Sprinter Aventure', cat: 'van', tag: 'Van Aménagé' },
  { id: 'p5', img: '/images/tiny-house.jpg', title: 'Tiny House Forêt', cat: 'tiny', tag: 'Tiny House' },
  { id: 'p6', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop', title: 'Studio de Jardin', cat: 'tiny', tag: 'Tiny House' },
]

export const IMAGES = {
  heroVan: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop',
  lifestyle1: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&h=500&fit=crop',
  lifestyle2: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=500&fit=crop',
  lifestyle3: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop',
  lifestyle4: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=500&fit=crop',
  parallax1: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=1600&h=600&fit=crop',
  parallax2: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1600&h=600&fit=crop',
  why1: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=700&fit=crop',
  why2: 'https://images.unsplash.com/photo-1596394723269-e15bed2a1d2e?w=600&h=700&fit=crop',
  why3: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&h=700&fit=crop',
  foodtruck: '/images/foodtruck.jpg',
  tiny: '/images/tiny-house.jpg',
  van: '/images/van-location.jpg',
}
