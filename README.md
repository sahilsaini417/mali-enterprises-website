# MALI ENTERPRISES PVT. LTD. / E-Parivahan Website

A modern Next.js + Tailwind website for MALI ENTERPRISES PVT. LTD. with pages for Home, About, Products, Gallery, Dealership, Contact, and Admin.

## Features

- Responsive design for mobile, tablet, and desktop
- Dark + green + white premium EV brand styling
- Home page hero, features, testimonials, dealer callouts
- Products catalog with specifications and inquiry CTA
- Gallery page with upload details for admins
- Dealership page, FAQs, inquiry forms, Google Maps integration
- Admin dashboard with Supabase authentication, inquiry management, product creation, and Cloudinary media upload
- Contact API route to save lead data

## Setup

1. Install dependencies

```bash
npm install
```

Create environment variables

Create a `.env.local` file in the project root with the following values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_URL=https://your-supabase-project-url.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your-unsigned-preset
```

 Run locally

```bash
npm run dev
```

## Supabase database structure

Recommended tables:

### inquiries

- id (uuid)
- name (text)
- email (text)
- phone (text)
- message (text)
- created_at (timestamp with time zone, default now())

### products

- id (uuid)
- category (text)
- name (text)
- short (text)
- battery (text)
- mileage (text)
- chargeTime (text)
- price (text)
- features (text[])
- images (text[])
- created_at (timestamp with time zone, default now())

### gallery

- id (uuid)
- asset_url (text)
- type (text)
- caption (text)
- created_at (timestamp with time zone, default now())

## Admin login

Use Supabase email/password authentication. Create an admin user with the email `admin@eparivahanindia.com` or your preferred email in the Supabase Auth dashboard.

## Deployment

Deploy on Vercel or any Next.js hosting provider. Set the same environment variables in the deployment platform.

## Branding guidelines

- Brand name: **E-Parivahan**
- Company: **MALI ENTERPRISES PVT. LTD.**
- Color palette: Dark navy / green / mint / white
- Logo concept: modern angular EV icon with a premium green highlight
- Favicon: simple dark square with green symbol

## Notes

- Cloudinary upload is enabled for admin gallery uploads using mobile camera access.
- The website is SEO-friendly with metadata and follows modern EV brand styling.
