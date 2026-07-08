# 🎮 CHAOTIC GOOD

A fun and chaotic party game collection built with React, TypeScript, and Vite. Perfect for game nights with friends!

## 📋 Table of Contents

- [Features](#features)
- [Games](#games)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Project Structure](#project-structure)

## ✨ Features

- **Multiple Game Modes**: Choose from various party games designed for group fun
- **Customizable Questions**: Create custom question sets for your games
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Retro Arcade Aesthetic**: Stylish UI with arcade-inspired visuals
- **Dark Theme**: Easy on the eyes with a modern dark interface
- **Local Storage Support**: Your preferences and disclaimers are saved

## 🎯 Games

### Battle Royale
Battle it out with challenges, dares, and questions to see who will take the most penalties. Features multiple difficulty levels:
- **Classic**: Standard prompts
- **Chaotic**: Wild and unpredictable challenges
- **Boys Night**: Gender-specific prompts
- **Girls Night**: Gender-specific prompts
- **Two Players**: Optimized for head-to-head gameplay

Supports 2-18 players with gameplay mechanics including:
- Regular prompts and challenges
- Circle naming games
- Memory chain games
- Charades and action jokes
- Split the room questions
- Virus effects and curses

### Wavelength
A number-guessing game where players compete to think of clues for a secret number within a range. Features:
- Multiple categories (sports, entertainment, animals, food, and more)
- Adjustable player count
- Optional drinking mode for adult parties
- Skip functionality for each round

### In Other Words (IOW)
A team-based word guessing game with:
- Multiple category options
- Configurable timer per turn
- Skip functionality
- Scoreboard tracking
- Multiple rounds of play

### Kings Cup
A classic drinking game with interactive card prompts and rules.

### Custom Questions
Edit and manage custom question sets to personalize your gameplay experience.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with PostCSS
- **UI Components**: shadcn/ui (Radix UI based)
- **Routing**: React Router
- **Form Management**: React Hook Form
- **State Management**: TanStack React Query
- **Icons**: Lucide React
- **Build Tool**: Bun package manager

## 📦 Installation

### Prerequisites
- Node.js 16+ or Bun

### Setup

1. Clone the repository:
```bash
git clone https://github.com/sambramahuang/chaoticgood.git
cd chaoticgood
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

## 🚀 Development

Start the development server:
```bash
bun dev
# or
npm run dev
```

The app will be available at `http://localhost:8080`

### Linting
Run ESLint to check code quality:
```bash
bun run lint
# or
npm run lint
```

## 🏗️ Build

Create a production build:
```bash
bun run build
# or
npm run build
```

Development build (with source maps):
```bash
bun run build:dev
# or
npm run build:dev
```

Preview the production build:
```bash
bun run preview
# or
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components (accordion, buttons, cards, etc.)
│   └── hooks/           # Custom React hooks
├── pages/               # Page components for each game
│   ├── Index.tsx        # Home/menu page
│   ├── BattleRoyale.tsx # Battle Royale game
│   ├── WavelengthGame.tsx # Wavelength game
│   ├── iow.tsx          # In Other Words game
│   ├── kingscup.tsx     # Kings Cup game
│   ├── fibbage.tsx      # Fibbage game
│   ├── CustomQuestions.tsx
│   └── NotFound.tsx     # 404 page
├── data/                # Game data and questions
│   ├── br/              # Battle Royale question sets
│   │   ├── classic.tsx
│   │   ├── chaotic.tsx
│   │   ├── boysnight.tsx
│   │   ├── girlsnight.tsx
│   │   └── twoplayer.tsx
│   ├── iow.tsx          # In Other Words data
│   └── questions.tsx
├── lib/                 # Utility functions and helpers
├── styles/              # Global styles
├── App.tsx              # Main app component with routing
└── main.tsx             # Entry point
```

## 🎨 Styling

The project uses Tailwind CSS for styling with a dark theme. Key colors:
- Primary: Orange (#fb923c)
- Secondary: Yellow
- Background: Dark gray/black

Custom components use shadcn/ui patterns with Radix UI for accessibility.

## 📝 License

This project is open source. Check LICENSE for details.

## 👥 Contributing

Feel free to submit issues and enhancement requests!

---

**Have fun and stay chaotic! 🎉**