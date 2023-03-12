import service1 from '../../src/assets/images/service1.jpg';
import service2 from '../../src/assets/images/service2.jpg';
import service3 from '../../src/assets/images/service3.jpg';
import service4 from '../../src/assets/images/service4.jpg';

import icon1 from '../../src/assets/images/earth.svg';
import icon2 from '../../src/assets/images/chauffeur.svg';
import icon3 from '../../src/assets/images/web-app.svg';
import icon4 from '../../src/assets/images/search.svg';
import icon5 from '../../src/assets/images/clock.svg';
import icon6 from '../../src/assets/images/currency.svg';
import icon7 from '../../src/assets/images/sprinter-van.svg';
import icon8 from '../../src/assets/images/leaf.svg';

import overview from '../../src/assets/images/overviewBg.jpg';

export const title = [{ title: 'Door-to-door chauffeur service for global travelers  ' }];

export const image = [
  {
    bg: overview,
    title: 'Service options tailored to your needs',
  },
];

export const services = [
  {
    title: 'Corporations',
    description:
      'UsedCars, safe, and reliable transportation for all of your corporate travel needs.',
    image: service1,
    link: 'Learn More',
    path: '/travel/forBusiness/corporation',
  },
  {
    title: 'Travel agencies',
    description: 'Offer a memorable door-to-door chauffeured experience for every client.',
    image: service2,
    link: 'Learn More',
    path: '/travel/forBusiness/travelAgencies',
  },
  {
    title: 'Event services',
    description:
      'Every detail matters, which is why our custom transportation & logistics solutions will take your next event to new heights.',
    image: service3,
    link: 'Learn More',
    path: '/travel/forBusiness/eventServices',
  },
  {
    title: 'Strategic partnerships',
    description:
      'Deliver top of the line, reliable chauffeured rides to your most valuable customers, guests, and UsedCars level members.',
    image: service4,
    link: 'Learn More',
    path: '/travel/forBusiness/strategicPartnerships',
  },
];

export const summary = [
  {
    title: 'Global reliability',
    description:
      'Our services are available in 50+ countries to support your team and their travel needs wherever they are located. Our local professionals are dedicated to delivering high-quality service for your clients around the world.',
    icon: icon1,
  },
  {
    title: 'Trusted professionals',
    description:
      'We consistently offer a reliable, safe, comfortable, and UsedCars chauffeured experience. Every chauffeur is background checked and all prospective partners are reviewed for eligibility to ensure top quality service up to our highest standards.',
    icon: icon2,
  },
  {
    title: 'Simplified travel management',
    description:
      'Our quick and intuitive interface makes booking, invoicing, and managing your account easier than ever for travelers, bookers, and admins. Plus, enjoy dedicated account management and customized reporting tailored to your needs.',
    icon: icon3,
  },
  {
    title: 'Monitor activity',
    description:
      'Easily review all booked rides in a quick view and export filtered reports in real time with data on time, location, cost, and more. Bookers and guests can also view bookings through our website or app while at home or on the road.',
    icon: icon4,
  },
  {
    title: 'Real-time updates',
    description:
      'Bookers and guests receive instant updates, and flight-tracking means automatic adjustments for delays.',
    icon: icon5,
    // icon:"material-symbols:nest-clock-farsight-analog-outline"
  },
  {
    title: 'Competitive rates',
    description: `Count on all-inclusive rates — that's all taxes, tips, airport parking, and tolls — confirmed before booking. Plus, rates are fixed at the time of booking, so there are no surprises or hidden costs.`,
    icon: icon6,
    // icon: "ri:money-dollar-box-line",
  },
  {
    title: 'Sprinter Class',
    description: `Get large groups of employees from point A to B with ease. Whether the team is heading to a corporate event, or you just need additional space for luggage or people, you can now book chauffeured sprinter vans seating up to 12 people in select cities.`,
    icon: icon7,
    // icon: "material-symbols:directions-car-rounded",
  },
  {
    title: 'Sustainability',
    description: `AutoBidup is leading the way in growing our electric class vehicle offerings, currently available for booking in select cities. Even if you don’t ride in an electric car, you can breathe easy knowing that all of our rides are 100% carbon neutral.`,
    icon: icon8,
    // icon: "ri:leaf-line",
  },
];

export const buttons = [
  {
    question: 'Have any questions?',
    paragraph: 'Contact Us',
    button: 'Get in touch',
  },
];
