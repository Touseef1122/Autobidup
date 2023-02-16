import agency1 from '../../src/assets/images/forchauffeaur.jpg';
import agency2 from '../../src/assets/images/forchauffeur2.jpg';
import corporation1 from '../../src/assets/images/corporation1.jpg';

import icon1 from '../../src/assets/images/bank.svg';
import icon2 from '../../src/assets/images/currency.svg';
import icon3 from '../../src/assets/images/time-flexible.svg';
import icon4 from '../../src/assets/images/web-app.svg';
import icon5 from '../../src/assets/images/buildings.svg';

export const title = [{ title: 'Become a chauffeur partner' }];

export const services = [
    {
      title: 'Requirements',
      list1: 'Valid company registration plus licenses and insurance for all chauffeurs and vehicles.',
      list2: 'Vehicles must be clean, undamaged, smoke-free, and in full compliance with local regulations.',
      list3: 'Companies must keep up-to-date with new standards and policies and ensure excellent quality.',
      image: agency1,
      link: 'Local Requirements',
      direction: "left",
      description:'Specifics vary, so please check the complete list for your location here:',
      path:'/travel/registerChauffeur'
    },
    {
      title: 'Onboarding',
      point: 'Get driving in four steps:',
      list1: 'Apply',
      list2: 'Wait for our team to check your documents',
      list3: 'Once approved, complete the training sessions and a short interview',
      list4: 'Accept your first ride!',
      image: agency2,
      exist: 'true',
      link: 'Local Requirements',
      direction: "right",
      description: 'Specifics vary, so please check the complete list for your location here:',
      path:'/travel/registerChauffeur'
    },
  ];
  
  export const service = [
    {
      title: 'Driving a sustainable future',
      paragraph:'We’re committed to reducing our environmental impact, which is why we are moving toward making all of our rides electric. Our acquisition of London-based, all-electric chauffeur service Havn has been one of our first major steps, as well as incorporating more electric vehicles into our fleets globally. Plus, every ride since 2017 is carbon neutral and we’re working on offsetting all of our carbon emissions since the company’s founding in 2011.',
      image: corporation1,
      link: 'Learn more',
      direction: "left",
      path:'/auth/register-cover'
    },
  ];

 export const summary = [
    {
      title: 'Multiple bonus opportunities',
      description: 'Top-performing chauffeurs can earn a Service Excellence Bonus each month. If they maintain it for 3+ consecutive months, they enter our Partner Prestige Club and can earn even more!',
      icon: icon1,
    },
    {
      title: 'Reliable payments',
      description: 'The amount shown with each offer is the minimum that will be transferred to your account — we deduct no further fees or taxes. Monthly payments for your completed rides will be deposited directly to your PayPal or bank account.',
      icon: icon2,
    },
    {
      title: 'Flexible scheduling',
      description: `Select your rides through our reverse auction. There's no minimum or maximum, simply take the rides that best fit your schedule, location, vehicle type, etc. Most rides are booked ahead of time, but we now also offer on-demand rides in select cities.`,
      icon: icon3,
    },
    {
      title: 'Superior account management',
      description: 'Whether you’re a dispatcher assigning rides to your crew or a chauffeur on the go with some spare time, our app and online Partner Portal are designed to make your life easier. Easily manage all your rides with a few taps or clicks.',
      icon: icon4,
    },
    {
      title: 'Join an international crew',
      description: 'As a member of the Blacklane Crew, you’ll be able to say you’re a part of an international service, since we arrange rides for our partners and their guests in over 50 countries.',
      icon: icon5,
    },
  ];