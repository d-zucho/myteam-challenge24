import { aboutFact, testimonial, director, client, contactTopic } from './types'

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

export const directors: director[] = [
  {
    key: 1,
    image: '/assets/avatar-nikita.jpg',
    name: 'Nikita Marks',
    position: 'Founder & CEO',
    description:
      '“It always amazes me how much talent there is in every corner of the globe.”',
  },
  {
    key: 2,
    image: '/assets/avatar-christian.jpg',
    name: 'Cristian Duncan',
    position: 'Co-founder & COO',
    description:
      '“Distributed teams required unique processes. You need to approach work in a new way.”',
  },
  {
    key: 3,
    image: '/assets/avatar-cruz.jpg',
    name: 'Cruz Hamer',
    position: 'Co-founder & CTO',
    description:
      '“Technology is at the forefront of enabling distributed teams. That’s where we come in.”',
  },
  {
    key: 4,
    image: '/assets/avatar-drake.jpg',
    name: 'Drake Heaton',
    position: 'Business Development Lead',
    description:
      '“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”',
  },
  {
    key: 5,
    image: '/assets/avatar-griffin.jpg',
    name: 'Griffin Wise',
    position: 'Lead Marketing',
    description:
      '“Unique perspectives shape unique products, which is what you need to survive these days.”',
  },
  {
    key: 6,
    image: '/assets/avatar-aden.jpg',
    name: 'Aden Allan',
    position: 'Head of Talent',
    description:
      '“Empowered teams create truly amazing products. Set the north star and let them follow it.”',
  },
]

export const clients: client[] = [
  {
    name: 'The verge',
    image: '/assets/logo-the-verge.png',
    key: 1,
  },
  {
    name: 'Jakarta Post',
    image: '/assets/logo-jakarta-post.png',
    key: 2,
  },
  {
    name: 'The guardian',
    image: '/assets/logo-the-guardian.png',
    key: 3,
  },
  {
    name: 'Tech Radar',
    image: '/assets/logo-tech-radar.png',
    key: 4,
  },
  {
    name: 'Gadgets now',
    image: '/assets/logo-gadgets-now.png',
    key: 5,
  },
]

export const contactTopics: contactTopic[] = [
  {
    key: 1,
    topic: 'The quality of our talent network',
    image: '/assets/icon-person.svg',
  },
  {
    key: 2,
    topic: 'Usage & implementation of our software',
    image: '/assets/icon-cog.svg',
  },
  {
    key: 3,
    topic: 'How we help drive innovation',
    image: '/assets/icon-chart.svg',
  },
]
