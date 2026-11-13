/**
 * CENTRAL BRAND CONFIGURATION
 * ---------------------------------------------------------------
 * Everything you need to replace lives in this one file.
 * Leave a contact value as '' until you have the real one — the site
 * handles empty values gracefully (buttons scroll to the enquiry form).
 */

export const brand = {
  name: 'RUDRA',
  fullName: 'RUDRA TAEKWONDO',
  tagline: 'Build Strength. Build Confidence.',
  message: 'More than martial arts. A stronger, more confident generation.',
  region: 'Hyderabad',
  siteUrl: '',
}

export const contact = {
  /** Country code + number, digits only. Example: '919876543210'. */
  whatsappNumber: '919676258329',
  /** Display version shown on the page, e.g. '+91 98765 43210'. */
  phoneDisplay: '+91 96762 58329',
  email: 'rudrataekwondo12@gmail.com',
  youtube: '',   // optional
}

/**
 * Media. Files in /public/media are used automatically; if a file is
 * missing the site shows a placeholder. Replace the paths or just drop
 * files with these names into /public/media.
 */
export const media = {
  logo: '/media/logo.png',
  hero: '/media/hero.jpeg',
  clubhouse: '/media/clubhouse.jfif',
  coach: '/media/coach.png',
  newspaper: '/media/newspaper.jpg',
  reelThumb: '/media/reel-thumb.jpeg',
  certificate: '/media/certificate.jpeg',
}

export const achievements = {
  /** Paste the link to the Student Tribe Instagram reel. */
  reelUrl: 'https://www.instagram.com/reel/DUtLOLXEugZ/?obrf=bDBoMDNmZ2VwY2c1',
  /** Optional: only fill in once you have real details. Left blank, nothing is shown. */
  newspaperCredit: '', // e.g. 'Name of publication · date'
  newspaperHeadline: '',
}

export const coach = {
  name: 'Yeshwanth Goud V.',
  title: '1st Dan Taekwondo Black Belt | National Medallist | Coach',
  credentials: [
    '9 years of Taekwondo experience',
    '1st Dan Black Belt',
    'National Medallist',
    'State Gold Medallist',
    'Represented India at an international G1-level Taekwondo tournament',
    'Active Taekwondo Coach and Referee',
    'National Referee affiliation with Taekwondo Federation of India',
  ],
  quote:
    'Taekwondo has played an important role in shaping my fitness, confidence and resilience. I believe every child deserves the opportunity to experience the benefits of sports. Through RUDRA, my goal is to bring structured martial arts training into residential communities and help children develop skills that extend beyond the training floor.',
}

export const nav = [
  { label: 'Why Taekwondo', href: '#why' },
  { label: 'How it works', href: '#community' },
  { label: 'Program', href: '#program' },
  { label: 'Coach', href: '#coach' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Safety', href: '#safety' },
]
