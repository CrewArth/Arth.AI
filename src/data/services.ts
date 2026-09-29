export interface Service {
  number: string
  title: string
  description: string
  specialties: string[]
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Web Development',
    description: 'Modern, scalable and responsive websites and web applications built for performance, usability and long-term growth.',
    specialties: ['Business websites', 'Web applications', 'APIs & integrations'],
  },
  {
    number: '02',
    title: 'Android Apps',
    description: 'Custom Android applications with clean interfaces, reliable backend integration and business-focused workflows.',
    specialties: ['Business apps', 'Operational apps', 'Connected experiences'],
  },
  {
    number: '03',
    title: 'Software & CRM',
    description: 'Customized CRM and operational software designed around the exact processes your business uses every day.',
    specialties: ['Booking systems', 'Billing & reporting', 'Workflow automation'],
  },
  {
    number: '04',
    title: 'AI / ML',
    description: 'AI-powered solutions that automate repetitive work, understand data and create smarter digital experiences.',
    specialties: ['AI agents', 'NLP', 'Computer vision'],
  },
]
