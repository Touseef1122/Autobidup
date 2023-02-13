// routes
import Routes from '../../routes';
// _data
import { _tours, _jobs, _courses } from '../../../_data/mock';

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '1',
    subheader: 'Premium transport',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: '1IGS Royal Fleet', path: '/travel/1IGS/BentleyMulsanne' }, 
      { title: 'Intercity rides', path: '/travel/Premium/cityToCity' },  
      { title: 'Armed exceutive portion', path: '/travel/Premium/RoyalFleetlicense/' },
      { title: 'Royal chauffeurs', path: '/travel/Premium/RoyalChauffeurs/' },
      { title: 'Airport transport', path: '/travel/Premium/airportTransfer/' },
      { title: 'Exibitions & events', path: '/travel/Premium/Exibitions/' },
      { title: 'Secured transport', path: '/travel/Premium/SecureTransports/' },
      { title: 'Private/family chauffeurs', path: '/travel/Premium/FamilyChauffeurs/' },
      { title: 'Sprint class', path: '/travel/Premium/SprintClass/' },
    ],
  },
  {
    order: '7',
    subheader: 'For business',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Overview', path: '/travel/forBusiness/overview' },
      { title: 'Corporation', path: '/travel/forBusiness/corporation' },
      { title: 'Travel agenices', path: '/travel/forBusiness/travelAgencies' },
      { title: 'Event services', path: '/travel/forBusiness/eventServices' },
      { title: 'Strategic partnerships', path: '/travel/forBusiness/strategicPartnerships' },
    ],
  },
  {
    order: '8',
    subheader: 'Car rentals',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Make a reservation', path: '/travel/carRentals/MakeReservation' },
      { title: 'View modify cancel', path: '/travel/carRentals/viewModifyCancel' },
      { title: 'Get e-receipt', path: '/travel/carRentals/getReciept' },
      { title: '1IGs pre-check', path: '/travel/carRentals/preCheck' },
      { title: 'Popular rental cars', path: '/travel/carRentals/PopularRentalCars' },
    ],
  },
  // {
  //   order: '2',
  //   subheader: 'Royal fleet for Business',
  //   cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_career.jpg',
  //   items: [
  //     { title: 'Overview', path: Routes.career.landing },
  //     { title: 'Corporations', path: Routes.career.jobs },
  //     { title: 'Travel agencies', path: Routes.career.job(_jobs[0].id) },
  //     { title: 'Event services', path: Routes.career.posts },
  //     { title: 'Strategic partnerships', path: Routes.career.post('post-01') },
  //     // { title: 'About', path: Routes.career.about },
  //     // { title: 'Contact', path: Routes.career.contact },
  //   ],
  // },
  // {
  //   order: '4',
  //   subheader: 'Common',
  //   cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_career.jpg',
  //   items: [
  //     { title: 'Overview', path: Routes.loginIllustration },
  //     { title: 'Corporations', path: Routes.loginCover },
  //     { title: 'Travel agencies', path: Routes.registerIllustration },
  //     { title: 'Event services', path: Routes.registerCover },
  //     { title: 'Strategic partnerships', path: Routes.resetPassword },
  //     // { title: 'Verify Code', path: Routes.verifyCode },
  //     // { title: '404 Error', path: Routes.page404 },
  //     // { title: '500 Error', path: Routes.page500 },
  //     // { title: 'Maintenance', path: Routes.maintenance },
  //     // { title: 'ComingSoon', path: Routes.comingsoon },
  //     // { title: 'Pricing 01', path: Routes.pricing01 },
  //     // { title: 'Pricing 02', path: Routes.pricing02 },
  //     // { title: 'Checkout', path: Routes.checkout },
  //     // { title: 'Support', path: Routes.support },
  //   ],
  // },
  // {
  //   order: '5',
  //   subheader: 'Intercity rides',
  //   cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_course.jpg',
  //   items: [
  //     { title: 'East Hampton - NewY York', path: Routes.eLearning.landing },
  //     { title: 'New York - Washington', path: Routes.eLearning.courses },
  //     { title: 'New York - Phialdelphia', path: Routes.eLearning.course(_courses[0].id) },
  //     { title: 'Abu Dhabi - Dubai', path: Routes.eLearning.posts },
  //     { title: 'London - Birmingham', path: Routes.eLearning.post('post-01') },
  //     { title: 'London - Bristol', path: Routes.eLearning.about },
  //     // { title: 'Contact', path: Routes.eLearning.contact },
  //   ],
  // },
  {
    order: '3',
    subheader: 'Top Cities',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_travel.jpg',
    items: [
      { title: 'Houston', path: '/travel/Premium/cityToCity' },
      { title: 'Galveston', path: '/travel/Premium/cityToCity' },
      { title: 'Dallas', path: '/travel/Premium/cityToCity' },
      { title: 'Forth Worth', path: '/travel/Premium/cityToCity' },
      { title: 'Austin', path: '/travel/Premium/cityToCity' },
      // { title: 'Blog Posts', path: Routes.travel.posts },
      // { title: 'Blog Post', path: Routes.travel.post('post-01') },
      // { title: 'About', path: Routes.travel.about },
      // { title: 'Contact', path: Routes.travel.contact },
    ],
  },
  // {
  //   order: '6',
  //   subheader: 'Coming Soon',
  //   items: [
  //     { title: 'Item1', path: '' },
  //     { title: 'Item2', path: '' },
  //   ],
  // },
];

export const navConfig = [
  // { title: 'Home', path: '/' },
  // { title: 'Components', path: Routes.componentsUI },
  // {
  //   title: 'Pages',
  //   path: Routes.pages,
  //   children: [PageLinks[0], PageLinks[4], PageLinks[1], PageLinks[3], PageLinks[2], PageLinks[5]],
  // },
  // { title: 'Documentation', path: Routes.docs },

  {
    title: 'Premium Transport',
    path: Routes.pages,
    children: [PageLinks[0]],
  },
  {
    title: 'For Buisness',
    path: Routes.pages,
    children: [PageLinks[1]],
  },
  {
    title: 'Car Rentals',
    path: Routes.pages,
    children: [PageLinks[2]],
  },
  { title: 'For Chauffeurs', path: '/travel/forChauffeurs' },
  // { title: 'About Us', path: '/' },
  { title: 'Sign In', path: '/auth/login-cover' },
];
