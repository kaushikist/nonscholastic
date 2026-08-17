# Nonscholastic 
A platform connecting learners with non-scholastic courses, local activities, and mentors near them.

---

## 📌 Features & Workflow

1. **Onboarding & Auth**
   - Welcoming screen & role-based authentication (Student/Educator).
   - Interactive interest picker (*Performing Arts, Music, Sports, Crafts*).

2. **Explore & Discover**
   - **New & Popular** spotlight section.
   - **Popular Near You** localized course finder with integrated maps.
   - Tabbed Navigation: `Home` | `Map` | `Explore` | `Profile`.

3. **Courses & Classes**
   - Detailed course breakdown (*Difficulty, Duration, Fees, Ratings*).
   - Instructor dashboard to create, manage, and delete listings.

4. **User & Instructor Profiles**
   - View profile stats, active schedules, course reviews, and upcoming sessions.

---

## 📂 File Structure & Overview

```text
nonscholastic/
├── assets/                  # Shared static assets (images, icons, custom background textures)
├── src/
│   ├── components/          # Reusable UI elements (buttons, inputs, cards, status tags)
│   ├── navigation/          # Routing config, tab bar navigation, and screen transitions
│   ├── screens/             # Full-page views organized by feature
│   │   ├── auth/            # Login, signup, and authentication screens
│   │   ├── courses/         # Course details, curriculum breakdown, and booking views
│   │   ├── home/            # Main student feed and educator dashboard
│   │   ├── onboarding/      # Welcome walkthrough and interest selection picker
│   │   └── profile/         # User stats, active schedules, and instructor profiles
│   ├── services/            # Supabase database client, API handlers, and data fetchers
│   └── styles/              # Styling configurations
│       └── global.css       # Tailwind CSS imports and global styling rules
├── .env                     # Private environment variables (API keys & Supabase URLs)
├── .gitignore               # Config to prevent pushing sensitive files/node_modules to Git
└── README.md                # Project documentation and team onboarding guide
# Install dependencies
npm install

# Start the development server
npm start
