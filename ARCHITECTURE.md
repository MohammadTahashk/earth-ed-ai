# EARTH-ED AI - Architecture Diagram

## 🏗️ System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           EARTH-ED AI PLATFORM                               │
│                   Learn Green. Act Green. Prove the Impact.                  │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                              PRESENTATION LAYER                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Desktop    │  │    Tablet    │  │    Mobile    │  │   Browser    │  │
│  │  1920x1080   │  │   768x1024   │  │   375x667    │  │  Chrome/FF   │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                                              │
└──────────────────────────────────────┬───────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           REACT APPLICATION LAYER                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         main.tsx (Entry Point)                       │   │
│  │                   React 18 + TypeScript + Vite                       │   │
│  │                                                                       │   │
│  │  ┌─────────────────────────────────────────────────────────────┐   │   │
│  │  │              BrowserRouter (React Router 7)                  │   │   │
│  │  │                                                               │   │   │
│  │  │  ┌───────────────────────────────────────────────────────┐  │   │   │
│  │  │  │                  App.tsx (Router)                      │  │   │   │
│  │  │  │                                                         │  │   │   │
│  │  │  │  Routes Configuration:                                 │  │   │   │
│  │  │  │  • / → HomePage                                        │  │   │   │
│  │  │  │  • /about → AboutPage                                  │  │   │   │
│  │  │  │  • /features → FeaturesPage                            │  │   │   │
│  │  │  │  • /eco-tasks → EcoTasks (Quiz + Tasks)               │  │   │   │
│  │  │  │  • /community → CommunityPage                          │  │   │   │
│  │  │  │  • /impact → ImpactPage                                │  │   │   │
│  │  │  │  • /get-involved → GetInvolvedPage                     │  │   │   │
│  │  │  │  • /login → Login                                      │  │   │   │
│  │  │  └─────────────────────────────────────────────────────┘  │   │   │
│  │  └───────────────────────────────────────────────────────────┘   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└──────────────────────────────────────┬───────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            COMPONENT HIERARCHY                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                          Shared Components                           │   │
│  ├─────────────────────────────────────────────────────────────────────┤   │
│  │  ┌──────────────┐                               ┌──────────────┐   │   │
│  │  │   Header     │  (Navigation + Branding)      │    Footer    │   │   │
│  │  │   - Logo     │                               │   - Links    │   │   │
│  │  │   - NavMenu  │                               │   - Social   │   │   │
│  │  │   - Auth     │                               │   - Contact  │   │   │
│  │  └──────────────┘                               └──────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                           Page Components                            │   │
│  ├─────────────────────────────────────────────────────────────────────┤   │
│  │                                                                       │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐    │   │
│  │  │   HomePage      │  │   AboutPage     │  │  FeaturesPage   │    │   │
│  │  │                 │  │                 │  │                 │    │   │
│  │  │  • Hero         │  │  • About        │  │  • Features     │    │   │
│  │  │  • Features     │  │  • Mission      │  │  • Tabs UI      │    │   │
│  │  │  • Carousel     │  │  • Audiences    │  │  • Examples     │    │   │
│  │  │  • Impact       │  │  • Stats        │  │                 │    │   │
│  │  │  • Testimonials │  │                 │  │                 │    │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘    │   │
│  │                                                                       │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐    │   │
│  │  │  EcoTasksPage   │  │  CommunityPage  │  │   ImpactPage    │    │   │
│  │  │                 │  │                 │  │                 │    │   │
│  │  │  • 10 Tasks     │  │  • Community    │  │  • Impact       │    │   │
│  │  │  • 20 Quiz Qs   │  │  • Engagement   │  │  • Dashboard    │    │   │
│  │  │  • Points       │  │  • Features     │  │  • Metrics      │    │   │
│  │  │  • CO₂ Calc     │  │                 │  │                 │    │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘    │   │
│  │                                                                       │   │
│  │  ┌─────────────────┐  ┌─────────────────┐                           │   │
│  │  │ GetInvolvedPage │  │   LoginPage     │                           │   │
│  │  │                 │  │                 │                           │   │
│  │  │  • GetInvolved  │  │  • Login Form   │                           │   │
│  │  │  • CTA          │  │  • Validation   │                           │   │
│  │  └─────────────────┘  └─────────────────┘                           │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└──────────────────────────────────────┬───────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          DATA & CONTENT LAYER                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                       Static Content (Embedded)                      │   │
│  ├─────────────────────────────────────────────────────────────────────┤   │
│  │                                                                       │   │
│  │  Eco-Tasks Data:                    Quiz Questions:                  │   │
│  │  ┌────────────────────┐             ┌────────────────────┐          │   │
│  │  │ 1. Recycling       │             │ 1. Greenhouse Gas  │          │   │
│  │  │ 2. Water Saving    │             │ 2. Plastic Decay   │          │   │
│  │  │ 3. LED Bulbs       │             │ 3. Water Saving    │          │   │
│  │  │ 4. Bike Commute    │             │ 4. Home Energy     │          │   │
│  │  │ 5. Plastic-Free    │             │ 5. Recycling       │          │   │
│  │  │ 6. Plant Tree      │             │ ... (20 total)     │          │   │
│  │  │ 7. Meatless Monday │             └────────────────────┘          │   │
│  │  │ 8. Carpool         │                                              │   │
│  │  │ 9. Herb Garden     │                                              │   │
│  │  │ 10. Unplug Devices │                                              │   │
│  │  └────────────────────┘                                              │   │
│  │                                                                       │   │
│  │  Points: 570 total                 CO₂ Savings: 57.5 kg              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└──────────────────────────────────────┬───────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        BACKEND LAYER (Ready for Integration)                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    Supabase Backend (Optional)                       │   │
│  ├─────────────────────────────────────────────────────────────────────┤   │
│  │                                                                       │   │
│  │  Authentication:                    Database Tables:                 │   │
│  │  ┌────────────────┐                ┌─────────────────────┐          │   │
│  │  │ • Sign Up      │                │ • profiles          │          │   │
│  │  │ • Sign In      │                │ • missions          │          │   │
│  │  │ • Sign Out     │                │ • mission_submissions│         │   │
│  │  │ • Sessions     │                │ • quiz_questions    │          │   │
│  │  └────────────────┘                │ • quiz_attempts     │          │   │
│  │                                     │ • points_ledger     │          │   │
│  │  Storage:                           │ • badges            │          │   │
│  │  ┌────────────────┐                │ • user_badges       │          │   │
│  │  │ • Evidence     │                └─────────────────────┘          │   │
│  │  │ • Photos       │                                                  │   │
│  │  │ • Documents    │                                                  │   │
│  │  └────────────────┘                                                  │   │
│  │                                                                       │   │
│  │  Row Level Security (RLS):                                           │   │
│  │  • Users can only access their own data                              │   │
│  │  • Public read for missions and quiz questions                       │   │
│  │  • Authenticated write for submissions                               │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 📂 File Structure Architecture

```
EARTH-ED-AI/
│
├── 📁 public/                          # Static assets
│
├── 📁 src/
│   │
│   ├── 📄 main.tsx                     # Application entry point
│   │   └── BrowserRouter wrapper
│   │
│   ├── 📄 App.tsx                      # Main routing component
│   │   └── Routes configuration
│   │
│   ├── 📁 components/                  # Reusable UI components
│   │   │
│   │   ├── 🔵 Layout Components
│   │   │   ├── Header.tsx             # Navigation (Project 1 + Modified)
│   │   │   └── Footer.tsx             # Site footer (Modified)
│   │   │
│   │   ├── 🟢 Homepage Components
│   │   │   ├── Hero.tsx               # Hero section (Project 1)
│   │   │   ├── FeaturesCarousel.tsx   # Features slider (Project 1)
│   │   │   ├── ImpactCounters.tsx     # Statistics (Project 1)
│   │   │   └── Testimonials.tsx       # Social proof (Project 1)
│   │   │
│   │   ├── 🟡 Application Components
│   │   │   ├── EcoTasks.tsx          # Tasks + Quiz ⭐ (Project 1)
│   │   │   └── Login.tsx             # Authentication UI (Project 1)
│   │   │
│   │   └── 🟣 Content Components
│   │       ├── About.tsx             # About section (Project 2)
│   │       ├── Features.tsx          # Feature showcase ⭐ (Project 2)
│   │       ├── Community.tsx         # Community (Project 2)
│   │       ├── Impact.tsx            # Impact dashboard (Project 2)
│   │       └── GetInvolved.tsx       # CTA page (Project 2)
│   │
│   ├── 📁 pages/                      # (Future: Page components)
│   ├── 📁 lib/                        # (Future: Supabase client)
│   ├── 📁 types/                      # (Future: TypeScript types)
│   ├── 📁 services/                   # (Future: API services)
│   ├── 📁 hooks/                      # (Future: Custom React hooks)
│   │
│   ├── 📄 index.css                   # Global styles + Tailwind
│   └── 📄 vite-env.d.ts              # TypeScript declarations
│
├── 📄 index.html                      # HTML entry point
├── 📄 package.json                    # Dependencies + scripts
├── 📄 vite.config.ts                  # Vite configuration
├── 📄 tailwind.config.js              # Tailwind CSS config
├── 📄 tsconfig.json                   # TypeScript config
│
├── 📄 .env.example                    # Environment variables template
├── 📄 README.md                       # Documentation
├── 📄 LICENSE                         # MIT License
│
└── 📁 dist/                           # Production build output
    ├── index.html
    ├── assets/
    │   ├── index-*.css                # Bundled styles
    │   └── index-*.js                 # Bundled JavaScript
    └── ...
```

## 🔄 Data Flow Architecture

```
┌─────────────┐
│   Browser   │
│   Request   │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│   React Router      │
│   URL Matching      │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│   Route Component   │
│   (Page Wrapper)    │
└──────┬──────────────┘
       │
       ├─────────────────┐
       │                 │
       ▼                 ▼
┌─────────────┐   ┌──────────────┐
│   Header    │   │   Content    │
│  Component  │   │  Components  │
└─────────────┘   └──────┬───────┘
       │                 │
       │                 ▼
       │          ┌──────────────┐
       │          │  Static Data │
       │          │  (Embedded)  │
       │          └──────────────┘
       │
       ▼
┌─────────────┐
│   Footer    │
│  Component  │
└─────────────┘
       │
       ▼
┌─────────────┐
│   Rendered  │
│     DOM     │
└─────────────┘
```

## 🎨 Styling Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Tailwind CSS Framework                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Base Layer:                                                 │
│  • CSS Reset                                                 │
│  • Typography defaults                                       │
│  • Focus styles                                              │
│                                                              │
│  Component Layer:                                            │
│  • Utility classes (bg-*, text-*, flex, grid, etc.)         │
│  • Responsive breakpoints (sm:, md:, lg:, xl:)              │
│  • State variants (hover:, focus:, active:)                 │
│                                                              │
│  Utilities Layer:                                            │
│  • Custom animations (animate-fade-in-up, animate-pulse)    │
│  • Custom scrollbar styles                                   │
│  • Hover effects (hover-lift)                               │
│                                                              │
│  Theme Configuration:                                        │
│  ┌──────────────────────────────────────────┐              │
│  │ Colors:                                   │              │
│  │ • Primary: Emerald (#10b981)             │              │
│  │ • Secondary: Teal (#14b8a6)              │              │
│  │ • Accent: Cyan (#06b6d4)                 │              │
│  │ • Gradients: emerald-to-teal             │              │
│  └──────────────────────────────────────────┘              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## 🔐 Security Architecture (When Supabase Integrated)

```
┌────────────────────────────────────────────────────────────────┐
│                      Security Layers                            │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Client Side:                                                   │
│  ┌───────────────────────────────────────────────────────┐    │
│  │ • HTTPS Only                                           │    │
│  │ • Environment variables for API keys                   │    │
│  │ • No secrets in frontend code                          │    │
│  │ • Input validation                                     │    │
│  │ • XSS prevention (React auto-escaping)                │    │
│  └───────────────────────────────────────────────────────┘    │
│                                                                 │
│  Supabase Backend:                                             │
│  ┌───────────────────────────────────────────────────────┐    │
│  │ • Row Level Security (RLS) policies                   │    │
│  │ • JWT authentication                                   │    │
│  │ • Session management                                   │    │
│  │ • Rate limiting                                        │    │
│  │ • SQL injection prevention                             │    │
│  └───────────────────────────────────────────────────────┘    │
│                                                                 │
│  Data Protection:                                              │
│  ┌───────────────────────────────────────────────────────┐    │
│  │ • Users can only access their own data                │    │
│  │ • Public data is read-only                            │    │
│  │ • Authenticated write operations                       │    │
│  │ • File upload validation (type, size)                 │    │
│  └───────────────────────────────────────────────────────┘    │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

## 🚀 Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      Development Environment                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Local Dev Server:                                               │
│  • Vite Dev Server (http://localhost:5173)                      │
│  • Hot Module Replacement (HMR)                                  │
│  • Fast refresh for React components                             │
│  • TypeScript type checking                                      │
│                                                                  │
└───────────────────────────────┬──────────────────────────────────┘
                                │
                                │ npm run build
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Build Process (Vite)                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. TypeScript Compilation → JavaScript                          │
│  2. CSS Processing → Minified CSS                                │
│  3. Tree Shaking → Remove unused code                            │
│  4. Code Splitting → Optimize bundles                            │
│  5. Minification → Compress files                                │
│  6. Asset Optimization → Images, fonts                           │
│                                                                  │
│  Output: dist/ folder (353 KB total)                             │
│                                                                  │
└───────────────────────────────┬──────────────────────────────────┘
                                │
                                │ Deploy
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Production Hosting Options                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Option 1: Vercel                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ • Git-based deployment                                  │    │
│  │ • Automatic HTTPS                                       │    │
│  │ • CDN distribution                                      │    │
│  │ • Environment variables                                 │    │
│  │ • Zero configuration                                    │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Option 2: Netlify                                               │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ • Drag & drop deployment                                │    │
│  │ • Form handling                                         │    │
│  │ • Serverless functions                                  │    │
│  │ • Split testing                                         │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Option 3: GitHub Pages                                          │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ • Free hosting                                          │    │
│  │ • GitHub Actions CI/CD                                  │    │
│  │ • Custom domain support                                 │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## 📊 Component Dependency Graph

```
                    main.tsx
                       │
                       │ Wraps with BrowserRouter
                       │
                       ▼
                    App.tsx
                       │
                       │ Routes to different pages
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
    HomePage      EcoTasksPage    AboutPage
        │              │              │
        │              │              │
    ┌───┴───┐      ┌───┴───┐      ┌──┴──┐
    │       │      │       │      │     │
    ▼       ▼      ▼       ▼      ▼     ▼
  Hero  Features Tasks  Quiz  About Header
    │       │      │       │      │     │
    │       │      │       │      │     │
    └───┬───┘      └───┬───┘      └─┬───┘
        │              │            │
        ▼              ▼            ▼
     Header         Header       Footer
        │              │
        ▼              ▼
     Footer         Footer

All pages share Header and Footer components
```

## 🎯 Key Architectural Decisions

### ✅ React Router for Navigation
**Why:** Proper URL-based routing, browser back/forward support, refresh support

### ✅ Component Composition
**Why:** Reusable components, separation of concerns, maintainability

### ✅ Static Data First
**Why:** Fast initial development, no backend dependency for demo

### ✅ Supabase Ready
**Why:** Easy backend integration when needed, PostgreSQL database, authentication built-in

### ✅ Tailwind CSS
**Why:** Utility-first styling, consistent design system, responsive out-of-box

### ✅ TypeScript
**Why:** Type safety, better developer experience, catch errors early

### ✅ Vite Build Tool
**Why:** Fast HMR, optimized builds, modern development experience

---

**Architecture designed for scalability, maintainability, and easy backend integration.**

Built with ❤️ for environmental education | October 2026
