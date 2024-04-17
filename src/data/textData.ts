import { aboutFact, testimonial } from './types'

export const aboutFacts: aboutFact[] = [
  {
    key: 1,
    image: '/assets/icon-person.svg',
    title: 'Experienced Individuals',
    description:
      'Our network is made up of highly experienced professionals who are passionate about what they do.',
  },
  {
    key: 2,
    image: '/assets/icon-cog.svg',
    title: 'Easy to Implement',
    description:
      'Our processes have been refined over years of implementation meaning our teams always deliver.',
  },
  {
    key: 3,
    image: '/assets/icon-chart.svg',
    title: 'Enhanced Productivity',
    description:
      'Our customized platform with in-built analytics helps you manage your distributed teams.',
  },
]

export const testimonials: testimonial[] = [
  {
    key: 1,
    image: '/assets/avatar-kady.jpg',
    name: 'Kady Baker',
    position: 'Product Manager at Bookmark',
    quote:
      '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
  },
  {
    key: 2,
    image: '/assets/avatar-aiysha.jpg',
    name: 'Aiysha Reese',
    position: 'Founder of Manage',
    quote:
      '“We need to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
  },
  {
    key: 3,
    image: '/assets/avatar-arthur.jpg',
    name: 'Arthur Clarke',
    position: 'Co-founder of MyPhysio',
    quote:
      '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
  },
]
