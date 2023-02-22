// routes
import Routes from '../../routes';
// _data
import { _tours, _jobs, _courses } from '../../../_data/mock';

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '1',
    subheader: 'Used Cars',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'HatchBack', path: '/travel/1IGS/BentleyMulsanne' }, 
      { title: 'Sedan', path: '/travel/Premium/cityToCity' },  
      { title: 'SUV', path: '/travel/Premium/RoyalFleetlicense/' },
      { title: 'CrossOver', path: '/travel/Premium/RoyalChauffeurs/' },
      { title: 'MiniVan', path: '/travel/Premium/airportTransfer/' },
    ],
  },
  {
    order: '8',
    subheader: 'Store',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Car Care', path: '/travel/carRentals/MakeReservation' },
      { title: 'Led/Lighting Items', path: '/travel/carRentals/viewModifyCancel' },
      { title: 'Interior', path: '/travel/carRentals/getReciept' },
      { title: 'Performance', path: '/travel/carRentals/preCheck' },
      { title: 'Gadgets', path: '/travel/carRentals/PopularRentalCars' },
    ],
  },
  {
    order: '3',
    subheader: 'Mechanic',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_travel.jpg',
    items: [
      { title: 'Service', path: '/travel/Premium/cityToCity' },
      { title: 'Request', path: '/travel/Premium/cityToCity' },
      { title: 'Contact', path: '/travel/Premium/cityToCity' },
      { title: 'Testimonials', path: '/travel/Premium/cityToCity' },
      { title: 'Location', path: '/travel/Premium/cityToCity' },
      // { title: 'Blog Posts', path: Routes.travel.posts },
      // { title: 'Blog Post', path: Routes.travel.post('post-01') },
      // { title: 'About', path: Routes.travel.about },
      // { title: 'Contact', path: Routes.travel.contact },
    ],
  },
  {
    order: '7',
    subheader: 'Auction',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      // { title: 'Overview', path: '/travel/forBusiness/overview' },
      // { title: 'Corporation', path: '/travel/forBusiness/corporation' },
      // { title: 'Travel agenices', path: '/travel/forBusiness/travelAgencies' },
      // { title: 'Event services', path: '/travel/forBusiness/eventServices' },
      // { title: 'Strategic partnerships', path: '/travel/forBusiness/strategicPartnerships' },
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
    title: 'Used Cars',
    path: Routes.pages,
    children: [PageLinks[0]],
  },
  {
    title: 'Auction',
    path: Routes.pages,
    children: [PageLinks[1]],
  },
  {
    title: 'Store',
    path: Routes.pages,
    children: [PageLinks[2]],
  },
  { title: 'Mechanic', path: '/travel/forChauffeurs' },
  {
    title: 'SignIn/SignUp',
    path: Routes.pages,
    children: [PageLinks[2]],
  },
  // { title: 'About Us', path: '/' },
  // { title: 'Login/Sign In', path: '/auth/login-cover' },
];