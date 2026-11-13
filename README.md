# Rudra Taekwondo — Community Partnership Website

React + Vite + TypeScript + Tailwind CSS + Framer Motion + Lucide.
A single-page site aimed at apartment associations, RWAs and parents in Hyderabad.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into /dist
npm run preview    # serve the production build
```

## Replace placeholders (all in two places)
1. **`src/config/brand.ts`** — WhatsApp number, phone, email, the Student Tribe reel URL, and (only when you have real details) newspaper headline/credit. Coach details and the nav also live here.
   - `contact.whatsappNumber`: country code + number, digits only. Currently configured for +91 96762 58329.
2. **`public/media/`** — the supplied photos and Rudra logo are in place; see `public/media/README.txt` for the image-to-section mapping. Update `src/config/brand.ts` when replacing them with different filenames. Newspaper and certificate images can be clicked to enlarge.

Nothing in the site invents contact details, newspaper names, dates, counts or testimonials. Empty values show "To be added" or fall back gracefully.

## How the enquiry forms work (no backend)
Both forms (Community/RWA and Parent) validate input, then open **WhatsApp with the details pre-filled** to the configured number. The page tells the visitor to press *Send*; it never claims the enquiry was delivered.

To add a real backend later (Formspree, Google Sheets, etc.), replace the `window.open(...)` call in `src/components/Contact.tsx` `onSubmit` with a `fetch` and show success only after a `response.ok`.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project → Import** the repo. Framework preset: *Vite* (detected; `vercel.json` is included). Build command `npm run build`, output `dist`.
3. Click **Deploy**. Add your custom domain under *Settings → Domains*.

Or with the CLI: `npm i -g vercel && vercel --prod`.

## Structure
```
src/
  config/brand.ts        all editable content & media paths
  lib/                   whatsapp helpers, image-loading hook
  components/            Navbar, Hero, Benefits, CommunityProgram, TrainingProgram,
                         CoachProfile, AchievementsGallery, CommunityPartnership,
                         Safety, PartnershipCTA, Contact, Footer
  components/ui/         Button, Reveal, SectionHeading, ImageSlot, Lightbox, Logo
```

## Before sharing publicly
- Add real photos (clean, safe, children with instructor) — the hero and clubhouse shots matter most.
- Confirm wording about belt examinations with the authorised body you test through.
- Ensure parental consent for any photos of children.
