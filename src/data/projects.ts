export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
}

export const projects: Project[] = [
  {
    id: 'guest-house-booking',
    title: 'Neuvera 1.0',
    description: 'A fully end-to-end hotel CRM for managing bookings, payments, invoices, and customizable hotel operations from one platform.',
    longDescription: 'Neuvera 1.0 is a comprehensive hotel CRM that streamlines the full booking lifecycle, including reservations, payments, and dynamic invoice generation. It supports customizable hotel configurations and separates responsibilities across super admin, hotel admin, and admin roles for clear operational control.',
    image: '/images/projects/guest-house.png'
  },
]
