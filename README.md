# 🏋️ FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js, TypeScript, and Tailwind CSS. FitLog lets you browse a library of workouts, view full details for each lift, and build a daily training plan — plus save workouts for later.

---

## 🌐 Project Overview

**FitLog** is a workout tracking web app designed to help lifters plan and log their training sessions.

The app is split into three main areas:

- **Workout Library** — browse all available workouts as cards
- **Workout Details** — full breakdown of a single workout (equipment, difficulty, sets/reps, instructions)
- **My Plan** — today's plan and a saved-for-later list, with sorting and progress tracking

---

## 🛠️ Technologies Used

### Frontend

- ⚛️ Next.js (App Router)
- 🔷 TypeScript
- ⚛️ React
- 🎨 Tailwind CSS

### Libraries

- `lucide-react` — Icons
- `react-toastify` — Success and error notifications

### Data

- 🌐 Remote API — Workout data is fetched from an external endpoint (`WORKOUTS_API_URL`)

---

## ✨ Features

### 1. 🔎 Explore Workouts

Browse the workout library with key info at a glance:

- Name and muscle groups
- Equipment required
- Duration, calories burned, and rating

### 2. 📋 Workout Details

Each workout has its own page with:

- Full description and muscle groups
- Specs panel (equipment, difficulty, sets, reps, duration, calories, rating)
- Step-by-step instructions
- Buttons to add the workout to today's plan or save it for later

### 3. 🗓️ Build Your Plan

- Add up to 5 workouts to **Today's Plan**
- Mark workouts as done/incomplete
- Save workouts to a separate **Saved** list and move them into the plan later
- Remove workouts from either list
- Sort by duration, calories burned, or rating
- See totals for exercises, minutes, and calories at a glance

### 4. 🔔 Instant Feedback

Every action — adding to plan, saving for later, marking done, removing, hitting the 5-lift limit — triggers a toast notification, so you always know what just happened.

### 5. 📱 Responsive Design

- Responsive navbar with a mobile hamburger menu
- Responsive workout grid and detail layout
- Mobile-friendly plan/saved tabs

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── page.tsx                 # Home — banner + workout library
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── fitlog/
│   │   └── [workoutId]/
│   │       └── page.tsx         # Workout details page
│   └── my-plan/
│       └── page.tsx             # Today's plan / saved list
│
├── components/
│   ├── Banner.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── PlanCard.tsx
│   ├── WorkoutCard.tsx
│   ├── Workouts.tsx
│   └── workoutDetails/
│       ├── AddToPlanButton.tsx
│       └── SaveForLaterButton.tsx
│
├── context/
│   └── PlanContext.tsx          # Plan, saved, and completed state
│
├── library/
│   └── getWorkouts.ts           # Fetches workout data from the API
│
└── types/
    └── workout.ts
```

---

## ⚙️ Getting Started

First, install dependencies and set up your environment variable:

```bash
npm install
```

Create a `.env.local` file in the project root:

```env
WORKOUTS_API_URL=https://your-api-url.com/workouts
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 📌 Future Improvements

Some features that could be added in the future:

- 💾 Persist plan/saved lists (localStorage or a backend)
- 🔍 Search and filter workouts by muscle group or equipment
- 📊 Weekly/monthly progress history
- 🌙 Light mode toggle
- 👤 User accounts and cross-device sync

---

## 👨‍💻 Author

**MD. SHOHANUR RAHMAN SHOHAN**

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.