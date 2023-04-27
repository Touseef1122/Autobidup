import React from 'react';
import Routes from '../../routes';
import { _tours, _jobs, _courses } from '../../../_data/mock';
export const PageLinks = [
  {
    order: '1',
    subheader: 'Used Cars',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'HatchBack', path: '/travel/UsedCars/HatchBack' },
      { title: 'Sedan', path: '/travel/UsedCars/Sedan' },
      { title: 'SUV', path: '/travel/UsedCars/Suv/' },
      { title: 'CrossOver', path: '/travel/UsedCars/CrossOver/' },
      { title: 'MiniVan', path: '/travel/UsedCars/MiniVan/' },
    ],
  },
  {
    order: '3',
    subheader: 'Store',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Car Care', path: '/travel/carRentals/carcare' },
      { title: 'Led/Lighting Items', path: '/travel/carRentals/Lightning' },
      { title: 'Interior', path: '/travel/carRentals/Interior' },
      { title: 'Performance', path: '/travel/carRentals/Performance' },
      { title: 'Gadgets', path: '/travel/carRentals/Gadgets' },
    ],
  },
  {
    order: '4',
    subheader: 'Mechanic',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_travel.jpg',
    path: '/travel/mechanic/mechaniclanding',
    items: [
      { title: 'Request a Mechanic', path: '/travel/mechanic/requestmechanic' },
      { title: 'Call an Expert', path: '/travel/mechanic/callexpert' },
      // { title: 'Mechanic', path: '/travel/mechanic/mechaniclanding' },
      // { title: 'Testimonials', path: '/travel/UsedCars/cityToCity' },
    ],
  },
];

export const navConfig = [
  { title: 'Used Cars', path: Routes.pages, children: [PageLinks[0]] },
  {
    title: 'Store',
    path: Routes.pages,
    children: [PageLinks[1]],
  },
  {
    title: 'Mechanic',
    path: '/travel/mechanic/mechaniclanding',
  },
  {
    title: 'Auction',
    path: '/travel/Auction/Auction',
  },
  { title: 'Login', path: '/auth/logincover' },
];
