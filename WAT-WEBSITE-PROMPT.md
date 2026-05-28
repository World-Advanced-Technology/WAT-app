# WORLD ADVANCED TECHNOLOGY (WAT) — COMPLETE WEBSITE REBUILD PROMPT

> Use this prompt to fully recreate or upgrade the WAT company website from scratch.
> Every detail, section, service, color, font, feature, and piece of content is documented here.

---

## 1. PROJECT OVERVIEW

Build a **single-file HTML website** (`index.html`) for **World Advanced Technology (WAT)** — a premium IT company based in Yaoundé, Cameroon. The design must be **conversion-focused**, **mobile-first**, with **smooth animations**, **3D transitions**, and a **cinematic page-load preloader**. The site must support **dark mode** (default) and **light mode**, and be fully **multilingual** (EN, FR, ES, DE, PT, ZH).

---

## 2. COMPANY INFORMATION

| Field | Value |
|---|---|
| Company Name | World Advanced Technology |
| Abbreviation | WAT |
| Tagline | Cameroon's Premier IT Company |
| Founded | 2016 |
| Address | NKOLBISSON L'Caramba, Yaoundé, Cameroon |
| Phone / WhatsApp | +237 651 798 173 |
| Emergency Support | +237 651 798 173 |
| Orange Money | +237 693 638 404 |
| Company Email | worldadvancedtechnology23@gmail.com |
| CEO Personal Email | ngwaco23@gmail.com |
| Website Region | CM-CE (Yaoundé, Cameroon) |
| Schema Type | LocalBusiness |
| Opening Hours | Mon–Thu 08:00–12:00 / 13:00–17:00 · Fri 08:00–12:00 / 13:00–16:00 · Sat–Sun Closed |
| VoIP Support | 24 / 7 |

---

## 3. CEO PROFILE

| Field | Value |
|---|---|
| Full Name | NGWA CLOVIS OCHANG |
| Title | CEO & Founder |
| Certifications | Cisco Certified Network Engineer · AWS Cloud Engineer · Docker · Kubernetes · Terraform · Ansible · Python · IT Consultant |
| Photo path | images/team/ceo.jpg |
| Mission quote | "Our mission is to empower every Cameroonian business with world-class technology. From VoIP to DevOps, we deliver solutions that matter." |

---

## 4. DESIGN SYSTEM

### 4.1 Dark Mode (default) CSS Variables
```css
:root {
  --bg:     #07101f;
  --bg2:    #0c1828;
  --bgc:    rgba(255,255,255,0.045);   /* glass card */
  --bgch:   rgba(20,45,80,0.85);
  --gold:   #FFD700;
  --goldd:  rgba(255,215,0,0.18);
  --goldb:  rgba(255,215,0,0.4);
  --teal:   #00D4FF;
  --teald:  rgba(0,212,255,0.15);
  --neon:   #00FF88;
  --cyber:  #BD00FF;
  --txt:    #ffffff;
  --txt2:   #A8B8D8;
  --txt3:   #8898B8;
  --bdr:    rgba(255,215,0,0.14);
  --bdr2:   rgba(255,255,255,0.08);
  --shad:   0 8px 32px rgba(0,0,0,0.4);
  --shadg:  0 0 28px rgba(255,215,0,0.3);
  --shadt:  0 0 28px rgba(0,212,255,0.25);
}
```

### 4.2 Light Mode CSS Variable Overrides
```css
.theme-light {
  --bg:    #ffffff;
  --bg2:   #F8FAFF;
  --bgc:   rgba(255,255,255,0.96);
  --txt:   #0A1628;
  --txt2:  #1C2E50;
  --txt3:  #4A5F7E;
  --teal:  #0052B4;
  --gold:  #B8920A;
  --neon:  #006633;
  --cyber: #5500BB;
  --bdr:   rgba(10,22,40,0.10);
  --bdr2:  rgba(10,22,40,0.07);
  --shad:  0 8px 32px rgba(0,0,0,0.07);
}
```

### 4.3 Typography
| Variable | Font | Weights |
|---|---|---|
| `--fh` | Montserrat | 700, 900 |
| `--fb` | Inter | 400, 600 |
| `--fm` | JetBrains Mono | 400 |

Load via Google Fonts — **non-blocking** using `media="print" onload="this.media='all'"` pattern. Fallback: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`.

### 4.4 Border Radii & Spacing
```
--r8: 8px  --r12: 12px  --r16: 16px  --r24: 24px  --rf: 9999px (pill)
--tr: 300ms cubic-bezier(.4,0,.2,1)   (standard transition)
--trf: 150ms cubic-bezier(.4,0,.2,1)  (fast)
--trs: 600ms cubic-bezier(.4,0,.2,1)  (slow)
```

### 4.5 UI Components
- **Glass card:** `backdrop-filter:blur(22px) saturate(170%)` + `border:1px solid var(--bdr)` + `border-radius:var(--r16)`
- **Gradient text:** `background:linear-gradient(135deg,var(--gold),var(--teal))` + `-webkit-background-clip:text`
- **Button shimmer:** `::before` pseudo-element sweeps left→right on hover
- **Scroll progress bar:** Fixed top, gradient teal→gold→purple
- **Custom cursor:** Gold dot + lagging ring (desktop only)
- **Back-to-top button:** Bottom-right, appears after scroll
- **WhatsApp float button:** Bottom-right green bubble
- **Emergency call button:** Bottom-left red pulse button `+237 651 798 173`
- **Cookie consent bar:** Bottom of screen on first visit
- **Noise texture overlay:** `body::after` with SVG fractalNoise, opacity 0.028
- **Rotating conic gradient border** on service cards (CSS `@property --ang`)

---

## 5. PAGE LOAD PRELOADER (Ultra Premium)

Show on **every page load and refresh**. Duration: **3 seconds minimum**.

### HTML Structure
```html
<div id="preloader">
  <div class="pl-glow pl-g1"></div>
  <div class="pl-glow pl-g2"></div>
  <div class="pl-glow pl-g3"></div>
  <div class="pl-grid-bg"></div>
  <div class="pl-ptcl pl-p1"></div> <!-- × 6 floating particles -->
  <div class="pl-inner">
    <div class="pl-name-wrap">
      <div class="pl-name-bg-glow"></div>
      <div class="pl-hl pl-hl-top"></div>
      <div class="pl-hl pl-hl-bot"></div>
      <span class="pl-c pl-c-tl"></span> <!-- HUD corner brackets × 4 -->
      <span class="pl-c pl-c-tr"></span>
      <span class="pl-c pl-c-bl"></span>
      <span class="pl-c pl-c-br"></span>
      <div class="pl-scanline"></div>
      <div class="pl-name-inner">
        <p class="pl-nm-eyebrow">— Est. 2016 · Yaoundé, Cameroon —</p>
        <h1 class="pl-nm-w">WORLD</h1>
        <h1 class="pl-nm-a">ADVANCED</h1>
        <h1 class="pl-nm-t">TECHNOLOGY</h1>
      </div>
    </div>
    <div class="pl-bar-wrap">
      <div class="pl-bar-row-lbl">
        <span class="pl-lbl-brand">W·A·T</span>
        <span class="pl-lbl-pct" id="pl-pct">0%</span>
      </div>
      <div class="pl-bar"><div class="pl-fill"></div></div>
    </div>
    <p class="pl-status-txt">Initializing system<span class="pl-blink-dots">...</span></p>
  </div>
</div>
```

### Preloader Design Rules
- Background: `#030810` (near-black deep space)
- Three stacked words rise up with staggered timing (0.32s / 0.58s / 0.84s)
- WORLD = pure white gradient
- ADVANCED = gold-to-teal gradient + glow drop-shadow
- TECHNOLOGY = teal gradient + glow drop-shadow
- Letter-spacing: 0.25em / 0.28em / 0.34em (increasing per word)
- Scan line sweeps top→bottom every 2.8s
- HUD corner brackets snap in with spring animation
- Progress bar: teal→gold→purple gradient, 2.2s fill with shimmer
- Percentage counter: 0%→100% eased cubic-out, synced to bar
- Status text cycles: "Initializing system" → "Loading assets" → "Configuring modules" → "Establishing connection" → "Almost ready" → "Ready"
- Exit: fade out after 3s minimum; `pl-hide` class (opacity:0, visibility:hidden)
- **Never use inline `style.opacity` or `style.visibility`** — only toggle the `pl-hide` class. Always call `pl.style.removeProperty('opacity')` before adding `pl-hide`.
- Handle `pageshow` event for browser back/forward cache (bfcache) — reset and replay
- Hard fallback: 6 seconds max

---

## 6. NAVIGATION BAR

Fixed top, transparent on hero, glassmorphic on scroll.

**Logo:** 3D tilt card with `logowat.docx` image (convert to PNG/JPG), floating animation, corner glow dots (teal top-left, gold bottom-right), glossy shine overlay.

**Nav links (with active underline animation):**
About · Services · VoIP · Team · Careers · Payment · Contact

**Nav controls:**
- Language dropdown (EN / FR / ES / DE / PT / ZH) with flag emoji
- Dark/Light theme toggle (moon/sun + animated track)
- Mobile hamburger menu (collapses links on ≤900px)

---

## 7. SECTIONS IN ORDER

### 7.1 HERO
- Full-viewport height, centered content
- Animated particle canvas (floating dots connected by lines)
- Badge: "🌍 Est. 2016 · Yaoundé, Cameroon" (floating animation)
- Headline: **"World Advanced Technology"** (Montserrat 900, 4.2rem–6vw)
- Typing effect subheadline cycles: "IT Consultancy" · "DevOps & Cloud" · "VoIP Solutions" · "Network & Security" · "Web & Mobile Dev"
- CTAs: [Our Services] [Get in Touch] [Book Appointment]
- Hero stats strip (animated count-up on scroll):
  - **200+** Clients Served
  - **8+** Years Experience
  - **24/7** Support
  - **500+** Projects Done
- Scroll-down chevron (bouncing)
- Ticker strip below hero: scrolling marquee of tech keywords

### 7.2 ABOUT
- Two-column grid (text left, CEO card right)
- Company description:
  > "World Advanced Technology (WAT) is Cameroon's premier IT solutions company, founded with a singular vision: to bring enterprise-grade technology to African businesses at accessible prices."
- CEO photo frame with photo at `images/team/ceo.jpg`
- CEO: **NGWA CLOVIS OCHANG** — CEO & Founder · Network Engineer
- Certification badges (teal pill style): Cisco · AWS · Docker · Kubernetes · Terraform · Ansible · Python
- About stats: **200+** Clients · **8+** Years · **99.9%** Uptime
- Section has `data-animate-left` (text) and `data-animate-right` (card) reveal

### 7.3 WHY WAT
- 4-column grid of "Why choose us" cards
- Each card: large number stat + icon + heading + description
- Content:
  1. **Certified Experts** — Cisco, AWS, Docker, Kubernetes, Terraform certified team
  2. **Local Presence** — Based in Yaoundé, on-site support across Cameroon
  3. **24/7 Support** — Round-the-clock technical support for all deployments
  4. **Enterprise Grade** — Solutions used by banks, microfinances and large corporates

### 7.4 SERVICES
Grid of 8 service cards (glass morphism, rotating border glow on hover, 3D tilt).

Each card has: numbered badge (01–08) · SVG hero illustration · icon · title · description · tech pills · "Learn More" button.

| # | Title | Description | Tech Pills |
|---|---|---|---|
| 01 | IT Consultancy | Expert IT consultation, infrastructure assessment, technology planning, strategic guidance. Help businesses modernise IT landscape and optimise performance. | Cisco · AWS · Terraform · Ansible · ITIL |
| 02 | DevOps Services | Docker, Kubernetes, AWS Cloud, CI/CD pipelines, Ansible, Terraform, Python automation, Prometheus monitoring, Grafana dashboards, ELK stack, Tomcat, Maven and more. | Docker · K8s · AWS · CI/CD · Python |
| 03 | VoIP Solutions | Private telephone systems for banks, microfinances & multi-branch companies. ViciBox, Grandstream, Zoiper, MicroSIP. National & international interconnection. Call centres. | Asterisk · SIP · WebRTC · ViciBox |
| 04 | Network & Security | Network installation & configuration, CCTV camera systems, time & attendance machines, access control, anti-intrusion alarms, structured cabling and WiFi infrastructure. | Cisco · Fortinet · WiFi6 · CCTV |
| 05 | Web & Mobile Dev | Custom websites, web applications, and mobile apps (Android & iOS). From landing pages to full-stack enterprise platforms. | React · Node.js · Android · PostgreSQL |
| 06 | Starlink Installation | Supply, configuration & installation of Starlink satellite internet kits. Dish mounting, optimal alignment, router integration, and network configuration for homes, offices, hotels & remote sites across Cameroon. | Starlink · Satellite · TCP/IP · Routing |
| 07 | WiFi Zone Setup | Design & configuration of professional WiFi hotspot zones for hotels, offices, campuses, and multi-floor buildings. Captive portal login, bandwidth management, VLAN segmentation, seamless roaming & guest access. | MikroTik · UniFi · Captive Portal · VLAN |
| 08 | ISP Services | High-speed internet connectivity for homes, businesses, schools & hotels. Fiber optic, wireless broadband & LTE solutions with SLA-backed 99.9% uptime, bandwidth management, and 24/7 local support across Cameroon. | Fiber Optic · LTE/4G · Wireless · MikroTik · BGP |

**Learn More buttons link to Google Search** about each respective service (open in new tab).

### 7.5 HOW IT WORKS
4-step horizontal flow (arrows between steps on desktop):
1. **Consult** — Free consultation to understand business needs, current infrastructure and goals
2. **Plan** — Custom solution with clear timelines, costs, and technology recommendations
3. **Deploy** — Expert team implements the solution with minimal business disruption
4. **Support** — Ongoing 24/7 technical support, monitoring and maintenance

### 7.6 VOIP SOLUTIONS
Full-width dark section (gradient `#050e1f → #0a1628`).

**Left panel — Network diagram SVG:** Shows IP PBX (Asterisk/SIP/WebRTC) hub connected to: Grandstream GXP2160 desk phone, Zoiper softphone (mobile), MicroSIP softphone (Windows), call centre, international globe.

**Right panel — Benefits:**
- Your Own Private Network — Dedicated SIP server, zero third-party eavesdropping
- International Reach — Connect all branches nationally & internationally
- Massive Cost Savings — Up to 70% reduction on communication costs
- Call Centre Ready — IVR, queue management, call recording
- 24/7 Support — Round-the-clock support from certified VoIP engineers

**Client tags:** Banks · Microfinances · Multi-branch Companies · International

**VoIP Stats strip:** 500+ Phones Deployed · 99.9% Uptime · 40% Avg Cost Saving · 24/7 Support

**Device showcase (3 cards):**
- Grandstream GXP2160 — Enterprise IP desk phone, HD voice, 6 SIP accounts
- Zoiper (Mobile) — Softphone for Windows, Mac, Android & iOS; TLS encrypted
- MicroSIP (PC) — Lightweight Windows SIP softphone, TLS encryption

**CTAs:** [Get a Quote → #contact] [WhatsApp Us → wa.me/237651798173]

### 7.7 TEAM
**Lead team (photo cards):**
| Name | Role | Photo |
|---|---|---|
| NGWA CLOVIS OCHANG | CEO & Founder | images/team/ceo.jpg |
| MR JACKSON | IT Manager | images/team/jackson.jpg |
| OCHANG SPARENSA | HR Manager | images/team/sparensa.jpg |
| MR HIM | Team Leader | images/team/him.jpg |
| MR THEM | Team Leader | images/team/them.jpg |

**Development team (smaller cards):**
MR DIN · MR GIN · MRS KING · MR ZIN · MRS CLEO · MR TAD · MRS FAY · MR RON
(All role: Developer — images at `images/team/[firstname].jpg`)

### 7.8 TESTIMONIALS
3 testimonial cards (gradient border, italic quote, 5 stars):

1. ⭐⭐⭐⭐⭐
   > "WAT completely transformed our branch communication. Their VoIP system saved us 40% on costs and our 12 branches are now seamlessly interconnected."
   — **Jean-Paul Mbarga**, IT Director · Afriland Bank

2. ⭐⭐⭐⭐⭐
   > "The DevOps pipeline WAT built reduced our deployment time from 3 days to 15 minutes. Their Kubernetes expertise is world-class."
   — **Dr. Aisha Kamara**, CTO · FinTech Cameroon

3. ⭐⭐⭐⭐⭐
   > "Best IT company in Cameroon. Network, CCTV, access control installed in record time. Their 24/7 support gives us peace of mind."
   — **Pierre Fongang**, Operations Manager · CamTel Group

**Trust bar above testimonials:** 500+ Happy Clients · 4.9/5 Average Rating · 8+ Years Experience

### 7.9 WHY WAT / MEGA CTA
Full-width call-to-action section:

**Headline:** "Let's Build Something **Extraordinary**"

**Subtext:** "From VoIP infrastructure to DevOps pipelines — WAT delivers enterprise-grade technology at prices that make sense for African businesses. Let's talk."

**CTAs:** [Start a Project → #contact] [Call Us Now → tel:+237651798173]

**Trust items:** ✓ Free Initial Consultation · ✓ No Lock-in Contracts · ✓ 24/7 Support Included

### 7.10 PAYMENT METHODS
3 premium payment cards:

| Provider | Number / Details | Colors |
|---|---|---|
| MTN MoMo | +237 651 798 173 | Yellow #FFCC00 |
| Orange Money | +237 693 638 404 | Orange #FF6600 |
| Afriland First Bank | Account details on invoice | Red #C8102E |

Each card has: ambient glow · provider logo SVG · "Tap to Pay" hint · WhatsApp action button · Copy button.

### 7.11 CAREERS
5 open positions:

| # | Role | Type | Skills |
|---|---|---|---|
| 1 | Senior DevOps Engineer | Full-time · Yaoundé/Remote | Docker · K8s · CI/CD · AWS · Terraform · 3+ yrs |
| 2 | AWS Cloud Engineer | Full-time · Yaoundé | EC2 · S3 · Lambda · CloudFormation · Cognito |
| 3 | Network Engineer (Cisco) | Full-time · Yaoundé | CCNA/CCNP · LAN/WAN · Fortinet · Cabling · CCTV |
| 4 | VoIP Technician | Full-time · Yaoundé/Field | Asterisk · ViciBox · SIP/WebRTC · Grandstream · Zoiper |
| 5 | Full-Stack Web Developer | Full-time · Yaoundé | React · Node.js · PostgreSQL · Android/iOS |

Apply button opens a modal with: Name, Email, Phone, Position selector, Cover letter textarea, CV file upload (drag & drop), Submit.

Application email: `worldadvancedtechnology23@gmail.com`

### 7.12 CONTACT
Two-column layout:

**Left — Contact form fields:**
- Full Name (required)
- Email (required)
- Phone (optional)
- Service interest (select): IT Consultancy · DevOps · VoIP · Network & Security · Web & Mobile Dev · Starlink · WiFi Zone · ISP Services · Other
- Subject
- Message (textarea)
- [Send Message] button

Form submits via **EmailJS** (`service_g85sij8`, `template_t53a77u`, public key `Ua478CaISYyVag5N6`). Also sends a welcome email back to the client.

**Right — Contact info cards:**
- 📧 worldadvancedtechnology23@gmail.com
- 📞 +237 651 798 173
- 📍 NKOLBISSON L'Caramba, Yaoundé, Cameroon
- 🕐 Opening hours table
- OpenStreetMap embed (lazy loaded): bbox=11.4489,3.8311,11.5089,3.8911 · marker=3.8611,11.4789

### 7.13 REVIEWS
- Star rating widget (1–5 stars, click to rate)
- Name + comment text input
- Submit review → stores in `localStorage` → displays as cards below
- Show average rating and total count

### 7.14 FOOTER
Four-column grid:

**Col 1 — Brand:**
WAT 3D logo · company description · social links (WhatsApp, Email, Call, LinkedIn, Facebook) · Newsletter email input + Subscribe button

**Col 2 — Quick Links:** About · Services · VoIP · Team · Testimonials · Reviews

**Col 3 — Services:** All 8 services listed as links

**Col 4 — Contact:** Email · Phone · Address · [Book Appointment] button · Business registration number

**Bottom bar:** © 2016–[year] World Advanced Technology. All rights reserved. · Privacy Policy · Terms of Service · Legal Notice · GDPR

---

## 8. INTERACTIVE FEATURES

### 8.1 Multilingual (i18n)
6 languages in a JS object: `en`, `fr`, `es`, `de`, `pt`, `zh`.
~96 translation keys covering every visible text string.
Language stored in `localStorage('wat-lang')`.
Toggle via navbar language dropdown with flag emojis: 🇬🇧 EN · 🇫🇷 FR · 🇪🇸 ES · 🇩🇪 DE · 🇵🇹 PT · 🇨🇳 ZH

### 8.2 Dark / Light Theme
Toggle button in navbar (moon/sun + animated track thumb).
Theme stored in `localStorage('wat-theme')`.
Transitions all CSS variables with `transition: background 300ms, color 300ms`.

### 8.3 Chatbot (WAT AI Assistant)
Floating button bottom-right (lightning bolt icon, gold gradient).
Chat panel: dark glass background, WAT branding header.
Responds to keywords: services · voip · devops · network · price · location · hours · jobs · appointment · starlink · wifi · isp · hello · contact.
Powered by a local JS keyword-matching function (no external API needed).

### 8.4 Appointment Booking
Modal triggered by "Book Appointment" button.
Fields: Name, Email, Phone, Service type, Date, Time slot, Message.
Submits via EmailJS.

### 8.5 Job Application Modal
Triggered by "Apply Now" on each career card.
Fields: Full Name, Email, Phone, Position (pre-filled), Cover Letter, CV upload (drag & drop with file type validation).
Submits via EmailJS.

### 8.6 User Registration / Login
Auth modal with tabs: Register / Login.
Fields: Name, Email, Password (with strength meter), Confirm Password.
Stores session in `localStorage`.

### 8.7 Animations
- **Scroll reveal:** `IntersectionObserver` on `[data-animate]`, `[data-animate-left]`, `[data-animate-right]` → adds `.in-view` class
- **Hero stats count-up:** Numbers animate 0 → final value on first scroll into view
- **Parallax:** Mouse-move parallax on hero background blobs
- **Particle canvas:** requestAnimationFrame-driven floating connected dots
- **3D card tilt:** Mouse-move perspective transform on service and testimonial cards
- **Typing effect:** Hero subheadline cycles through service names
- **Ticker strip:** CSS `animation: ticker 28s linear infinite`

---

## 9. PERFORMANCE REQUIREMENTS

- **No blocking scripts in `<head>`** — all third-party JS must use `async` or `defer`
- **AWS SDK must NOT be included** — it is 2 MB and is not used
- **EmailJS** loaded with `async` attribute
- **Google Fonts** loaded non-blocking via `media="print" onload="this.media='all'"` + `<noscript>` fallback
- **Font weights:** Only Inter 400/600 · Montserrat 700/900 · JetBrains Mono 400
- **System font fallback:** `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **All images** use `loading="lazy"`
- **Map iframe** uses `loading="lazy"`
- **DNS prefetch** for `cdn.jsdelivr.net`, `fonts.googleapis.com`, `fonts.gstatic.com`
- **`text-rendering: optimizeSpeed`** on `html`
- **`-webkit-font-smoothing: antialiased`** on `body`

---

## 10. FILE STRUCTURE

```
WAT-app/
├── index.html          ← Single-file website (all CSS + JS inline)
├── images/
│   └── team/
│       ├── ceo.jpg
│       ├── jackson.jpg
│       ├── sparensa.jpg
│       ├── him.jpg
│       ├── them.jpg
│       ├── din.jpg
│       ├── gin.jpg
│       ├── king.jpg
│       ├── zin.jpg
│       ├── cleo.jpg
│       ├── tad.jpg
│       ├── fay.jpg
│       └── ron.jpg
├── logowat.docx        ← Logo source (convert to PNG for web use)
├── Dockerfile
├── Jenkinsfile
├── deployment.yml
├── pom.xml
├── cloudformation.yml
├── netlify.toml
├── _redirects
└── WAT-WEBSITE-PROMPT.md  ← This file
```

---

## 11. DEVOPS FILES

### Dockerfile
```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY images/ /usr/share/nginx/html/images/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### deployment.yml (Kubernetes)
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: wat-website
spec:
  replicas: 2
  selector:
    matchLabels:
      app: wat-website
  template:
    metadata:
      labels:
        app: wat-website
    spec:
      containers:
      - name: wat-website
        image: wat-website:latest
        ports:
        - containerPort: 80
```

### Jenkinsfile
Stages: Checkout → Build Docker Image → Test → Push to Registry → Deploy to K8s

---

## 12. SEO META TAGS

```html
<title>World Advanced Technology | IT Consultancy, DevOps & VoIP | Yaoundé, Cameroon</title>
<meta name="description" content="World Advanced Technology (WAT) — Premier IT consultancy, DevOps, VoIP solutions, and network infrastructure in Yaoundé, Cameroon. AWS, Docker, Kubernetes, Cisco certified experts.">
<meta name="keywords" content="IT consultancy Cameroon, DevOps Yaoundé, VoIP solutions Cameroon, Docker Kubernetes, AWS Cloud Africa, network installation Yaoundé, CCTV Cameroon, World Advanced Technology, WAT">
<meta name="geo.region" content="CM-CE">
<meta name="geo.placename" content="Yaoundé, Cameroon">
<meta property="og:type" content="website">
<meta property="og:title" content="World Advanced Technology | IT Solutions Cameroon">
<meta name="twitter:card" content="summary_large_image">
```

**JSON-LD Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "World Advanced Technology",
  "description": "IT Consultancy, DevOps, VoIP Solutions, Network Installation",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "NKOLBISSON L'Caramba",
    "addressLocality": "Yaoundé",
    "addressCountry": "CM"
  },
  "telephone": "+237651798173",
  "email": "worldadvancedtechnology23@gmail.com",
  "openingHours": ["Mo-Fr 08:00-17:00"],
  "founder": {"@type": "Person", "name": "NGWA CLOVIS OCHANG"}
}
```

---

## 13. EMAILJS CONFIGURATION

| Field | Value |
|---|---|
| Public Key | `Ua478CaISYyVag5N6` |
| Service ID | `service_g85sij8` |
| Contact Template | `template_t53a77u` |
| Welcome Template | `template_t53a77u` |
| CDN | `https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js` |
| Load method | `async` attribute (non-blocking) |

---

## 14. KEY CODING RULES

1. **Single HTML file** — all CSS in `<style>` tag in `<head>`, all JS in `<script>` tag before `</body>`
2. **No external CSS frameworks** — pure custom CSS only
3. **No React/Vue/Angular** — vanilla JS only
4. **Minified CSS** — keep all CSS rules compact (one rule per line)
5. **Dark mode default** — `<body data-theme="dark" data-lang="en">`
6. **Glass morphism cards** — `.glass` utility class
7. **Preloader MUST always show on refresh** — never skip, never get stuck
8. **Preloader hide:** Only toggle `.pl-hide` class; never set inline `style.opacity` or `style.visibility`
9. **All animations use CSS `@keyframes`** — not JS-driven where avoidable
10. **IntersectionObserver** for scroll reveals — not scroll event listeners
11. **Service card SVG illustrations** — inline SVGs with dark background gradients and neon-colored tech diagrams
12. **Responsive breakpoints:** 900px (tablet), 768px (mobile), 560px (small mobile)
13. **`font-display: swap`** in Google Fonts URL parameter
14. **AWS SDK must NOT be loaded** — it is unused and adds 2 MB

---

## 15. WHATSAPP INTEGRATION

All WhatsApp links use: `https://wa.me/237651798173?text=Hello%20WAT%2C%20I%20need%20your%20services`

Custom pre-filled messages per service:
- VoIP: `?text=Hello%2C%20I%20need%20a%20VoIP%20solution`
- General: `?text=Hello%20WAT%2C%20I%20need%20your%20services`

---

*End of WAT Website Prompt — Version 1.0 — Generated 2026-05-09*
*Store this file at: C:\Users\NGWA\Desktop\WAT-app\WAT-WEBSITE-PROMPT.md*
