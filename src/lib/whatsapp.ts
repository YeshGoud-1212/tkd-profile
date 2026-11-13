import { contact } from '../config/brand'

export const isWhatsAppConfigured = () => /^\d{10,15}$/.test(contact.whatsappNumber)

export function whatsappLink(text: string): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`
}

export const DEFAULT_PARTNER_TEXT =
  "I'm interested in building a community partnership with Rudra Taekwondo."
export const DEFAULT_DEMO_TEXT =
  'I would like to request a demo from Rudra Taekwondo.'
