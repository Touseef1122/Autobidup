import corporation1 from '../../src/assets/images/corporation1.jpg';
import corporation2 from '../../src/assets/images/corporation2.jpg';

import icon2 from '../../src/assets/images/chauffeur.svg';
import icon5 from '../../src/assets/images/clock.svg';
import icon6 from '../../src/assets/images/check.svg';

import overview from '../../src/assets/images/corporationBg.jpg';

export const title=[
  {title:"Seamless transportation solutions for global business travel  "}
]

export const image = [
  {
    bg: overview,
  },
];

export const services = [
  {
    title: 'Global ground transportation made easy',
    list1: 'Easy booking via website, mobile app, or third-party booking tools',
    list2:
      'Available in 50+ countries with a global supply of locally licensed and insured chauffeurs.',
    list3: 'Quickly, easily, and intuitively take care of expense reporting and management.',
    list4: 'Receive support from a dedicated account management team',
    image: corporation1,
    direction: 'left',
    exist: 'false',
  },
  {
    title: 'Customized solutions with attention to detail',
    list1:
      'Travel confidently knowing that duty of care and safety-driven practices are our top guest priority.',
    list2:
      'Driven by sustainability, we offset all of our ride and business carbon emissions, continue to expand our electric fleet, and more.',
    list3:
      'Enjoy corporate rebates, login access for 500+ travelers, and a support team with global tender expertise.',
    list4: 'Volume-based competitive pricing that best fits your business travel needs',
    image: corporation2,
    direction: 'right',
    exist: 'false',
  },
];

export const summary = [
  {
    title: 'Duty of care',
    description: 'Count on 24/7 service control, with real time status updates, for every journey.',
    icon: icon5,
  },
  {
    title: 'Reliable professionals',
    description: 'Discover peace of mind with a professional chauffeur behind the wheel.',
    icon: icon2,
  },
  {
    title: 'Simplified travel management',
    description: `Dedicated account management and robust reporting.`,
    icon: icon6,
  },
];

export const buttons = [
  {
    question: 'Have questions about becoming a AutoBidup client?',
    paragraph: 'Get in touch with us to learn more!',
    button: 'Contact Us',
  },
];

export const buttons1 = [
  {
    question: 'Ready to create your own account?',
    paragraph:
      'Our system is intuitive and easy to use, so you can get started on making your own account right away!',
    button: 'Create Account',
    path: '/auth/register-cover',
  },
];

export const text = [
  {
    title: 'Testimonials',
    desc: `"Blacklane's instant email confirmation and the streamlined online booking process makes it very convenient for me to book rides for my travelers. I know that I can rely on Blacklane's high quality standards worldwide and in the rare case of an incident, Blacklane contacts me directly to solve the issue. I feel like the customer is the main focus of Blacklane, which makes me feel taken care of."`,
    point: 'Tom Grover, European VSP, Smith & Nephew',
  },
];
