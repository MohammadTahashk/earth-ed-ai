# EARTH-ED AI

**Learn Green. Act Green. Prove the Impact.**

AI-powered gamified environmental education platform for schools, colleges, and communities.

## 🌍 Overview

EARTH-ED AI combines the best elements from two React projects to create a unified, functional, hackathon-ready environmental education platform. The application features:

- ✅ **React Router navigation** with working routes
- ✅ **10 Eco-Tasks** with points and carbon savings
- ✅ **20-question environmental quiz** with immediate feedback
- ✅ **Comprehensive feature showcase** from the platform approach
- ✅ **Community, Impact, and About sections**
- ✅ **Local demo mode** that works without account setup
- ✅ **Server-side Gemini Eco-Mentor** integration
- ✅ **Responsive design** for all devices
- ✅ **Professional branding** ("EARTH-ED AI")

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# 1. Clone or navigate to the project
cd EARTH-ED-AI

# 2. Install dependencies
npm install

# 3. Create environment file (optional for Gemini)
cp .env.example .env
# Add GEMINI_API_KEY only if live AI responses are needed

# 4. Start development server
npm run dev

# 5. Open in browser
# Visit http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
EARTH-ED-AI/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx       # Navigation header with routing
│   │   ├── Footer.tsx       # Footer with links
│   │   ├── Hero.tsx         # Homepage hero section
│   │   ├── EcoTasks.tsx     # Eco-tasks and quiz page
│   │   ├── Login.tsx        # Login interface
│   │   ├── About.tsx        # About section
│   │   ├── Features.tsx     # Features showcase
│   │   ├── Community.tsx    # Community section
│   │   ├── Impact.tsx       # Impact dashboard
│   │   ├── GetInvolved.tsx  # Get involved section
│   │   ├── FeaturesCarousel.tsx
│   │   ├── ImpactCounters.tsx
│   │   └── Testimonials.tsx
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/
├── .env.example             # Environment variables template
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎯 Available Routes

- `/` - Homepage with hero, features, and testimonials
- `/about` - About EARTH-ED AI
- `/features` - Detailed features showcase
- `/eco-tasks` - Browse eco-tasks and take environmental quiz
- `/community` - Community features
- `/impact` - Impact dashboard
- `/get-involved` - Get involved page
- `/login` - Login interface

## 🔧 Technology Stack

### Core Technologies
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router 7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icons

### Server integration
- **Gemini API** - Accessed through a server-side Vite middleware endpoint

## 🌟 Key Features

### From Project 1 (Application-Oriented)
- ✅ React Router with working URL-based navigation
- ✅ Login interface with form validation
- ✅ **10 comprehensive eco-tasks** with points and carbon savings
- ✅ **20-question environmental quiz** with:
  - Multiple-choice questions
  - Immediate feedback
  - Explanations for each answer
  - Visual indicators for correct/incorrect answers
- ✅ Features carousel
- ✅ Impact counters
- ✅ Testimonials section

### From Project 2 (Platform/Marketing-Oriented)
- ✅ Strong "EARTH-ED AI" branding
- ✅ Comprehensive About section
- ✅ Detailed Features showcase with 6 major features
- ✅ Community section
- ✅ Impact visualization
- ✅ Get Involved section
- ✅ Professional README and documentation

### Unified Platform
- ✅ Consistent emerald/teal/green color scheme
- ✅ Responsive layouts (desktop, tablet, mobile)
- ✅ Smooth transitions and animations
- ✅ Accessible navigation
- ✅ Proper routing structure

## 📊 Eco-Tasks Available

1. **Sort Household Recycling** (50 pts, 2.4 kg CO₂)
2. **Five-Minute Shower Challenge** (40 pts, 1.8 kg CO₂)
3. **Switch to LED Bulbs** (60 pts, 3.2 kg CO₂)
4. **Bike to School Week** (75 pts, 5.6 kg CO₂)
5. **Plastic-Free Grocery Run** (35 pts, 1.1 kg CO₂)
6. **Plant a Native Tree** (100 pts, 21.0 kg CO₂)
7. **Meatless Monday Month** (80 pts, 12.4 kg CO₂)
8. **Carpool Coordination** (55 pts, 7.3 kg CO₂)
9. **Start Kitchen Herb Garden** (45 pts, 0.9 kg CO₂)
10. **Unplug Vampire Electronics** (30 pts, 1.5 kg CO₂)

**Total Available:** 570 points, 57.5 kg CO₂ savings

## 🧪 Environmental Quiz

20 questions covering:
- Climate change and greenhouse gases
- Recycling and waste management
- Water and energy conservation
- Sustainable transportation
- Food systems and carbon footprint
- Biodiversity and ecosystem protection

## 🧪 Local Demo Account and Progress

The submission runs without Supabase or a backend account. Signup and login are
clearly labeled demo flows: they validate form input and create a local browser
session, but they do not provide secure production authentication. Passwords are
never stored in localStorage and cannot be verified securely without a backend.

Dashboard and Eco-Tasks are public. In the local demo, starting a task moves it
to `IN PROGRESS`; submitting a written evidence description moves it to
`PENDING VERIFICATION`. Demo rewards are not awarded from a button click, and
no task is presented as verified without an authenticated review service. Use
the reset control in Eco-Tasks to clear local demonstration progress. Clearing
browser storage also resets the demo.

The repository does not currently include a production database, authenticated
user service, file-upload storage, or administrator review API. Therefore task
evidence, verified rewards, quiz persistence, and shared dashboard statistics
are not claimed as database-backed features. Adding those capabilities requires
an authenticated backend and database migration; do not treat localStorage
demo state as authoritative environmental impact.

## 🤖 AI Eco-Mentor Setup

The AI Eco-Mentor is available at `/eco-mentor`. Its browser UI sends each
message and conversation history to the server-side `/api/chat` endpoint; the
Gemini key is never included in the frontend bundle.

For local development:

1. Create a Gemini API key through [Google AI Studio](https://aistudio.google.com/apikey).
2. Add the key to `.env` using the server-only variable below:

```env
GEMINI_API_KEY=your_gemini_api_key
# Optional model override. The default is gemini-2.5-flash.
# GEMINI_MODEL=gemini-2.5-flash
```

3. Restart Vite after changing `.env`:

```bash
npm run dev
```

If `GEMINI_API_KEY` is missing or invalid, the Eco-Mentor still renders but
clearly reports that live AI responses are unavailable. The `/api/chat`
endpoint validates message size, history, and request rate before calling
Gemini. It is implemented as Vite development-server middleware. A production
deployment needs an equivalent serverless/API route with `GEMINI_API_KEY`
configured in the host's server environment; do not convert it to a `VITE_`
variable.

## ⚠️ Known Limitations

- Demo account and progress data are local to one browser and are not secure or
  shared between users.
- Task submissions stop at pending verification in demo mode; there is no
  authorized administrator workflow until a backend and database are configured.
- Password reset is an explanatory demo flow; it does not send email.
- Live Gemini responses require a configured server-side API key.
- The project build may report a bundle-size advisory from Vite; this does not
  prevent the production build.

## 🎨 Design System

### Colors
- Primary: Emerald (`#10b981`)
- Secondary: Teal (`#14b8a6`)
- Accent: Cyan (`#06b6d4`)
- Background: Emerald-to-teal gradients

### Typography
- System font stack
- Bold headings
- Relaxed line heights
- Responsive font sizes

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚦 Build Status

✅ TypeScript compilation: **Passing**  
✅ Vite production build: **Passing**  
✅ All routes: **Working**  
✅ Component imports: **Valid**  
✅ Responsive layouts: **Functional**

## 📦 Deployment

### Build the app
```bash
npm run build
```

### Deploy to Vercel/Netlify
1. Connect your GitHub repository
2. Configure build command: `npm run build`
3. Configure output directory: `dist`
4. Add `GEMINI_API_KEY` only if live AI responses are needed
5. Deploy!

### Deploy to GitHub Pages
```bash
npm run build
# Upload `dist` folder contents
```

## 🤝 Contributing

This is a hackathon/demo project combining two existing Bolt-generated projects. Feel free to:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a pull request

## 📄 License

This project combines code from two sources. Please ensure you have appropriate rights before using in production. Recommended license: MIT (pending original code verification).

## 🙏 Acknowledgments

- Combined from `project-bolt-sb1-fftankbk` (routing + tasks + quiz)
- And `project-bolt-sb1-trg5zkyf` (branding + features + content)
- Built with React, TypeScript, Vite, and Tailwind CSS
- Icons by Lucide React
- Inspired by the urgent need for environmental education

## 📞 Contact

- GitHub: [Your GitHub Profile]
- Email: hello@earthed.ai
- Twitter: [@earthedai]

---

**Making sustainability fun, social, and impactful - one mission at a time.** 🌱

Built with ❤️ for our planet | October 2026
