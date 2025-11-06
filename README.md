# VGym 🏋️

An educational and informative 3D web application built with Astro, React, and Three.js that allows users to explore gym equipment in an interactive virtual gym environment.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Code Standards](#code-standards)

## 🎯 Overview

This project provides an immersive 3D gym experience where users can:
- Explore a virtual gym environment with 8 different equipment pieces
- Click on equipment to enter detailed showcase mode
- Rotate equipment 360° and zoom for detailed inspection
- Learn proper usage, form, and muscle groups targeted
- Access comprehensive safety information and alternatives

**Target Audience:**
- Gym beginners learning equipment
- Fitness enthusiasts studying proper form
- Personal trainers for client education
- Gym owners for member orientation
- Students in sports science/kinesiology

## ✨ Features

### 1. Main Gym View
- Interactive 3D gym environment with multiple equipment pieces
- Clickable equipment with hover effects (highlight/glow)
- Smooth camera navigation
- Equipment list sidebar for quick navigation
- Realistic ambient gym lighting

### 2. Showcase/Detail Mode
- Smooth camera transition when equipment is clicked
- Isolated view with spotlight effect
- 360° orbital rotation (mouse drag or touch)
- Zoom in/out (mouse wheel/pinch gesture)
- Reset view button
- Back to gym navigation

### 3. Information Display
Each equipment shows:
- Equipment name and category
- Primary and secondary muscle groups targeted
- Step-by-step usage instructions
- Proper form tips and common mistakes
- Difficulty level (Beginner/Intermediate/Advanced)
- Alternative exercises
- Safety warnings and precautions

### 4. Interactive Features
- Click or hover on equipment for interaction
- Equipment list sidebar with categories
- Smooth camera transitions
- Real-time hover effects with glow
- Responsive design for desktop and mobile

### 5. Equipment Included

**Cardio:**
- Treadmill
- Stationary Bike

**Strength:**
- Bench Press
- Squat Rack
- Cable Machine
- Dumbbells

**Functional:**
- Pull-up Bar
- Kettlebell

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) v5.15.3
- **UI Library:** [React](https://react.dev/) v19.2.0
- **3D Rendering:** [Three.js](https://threejs.org/) v0.181.0
- **3D React:** [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) v9.4.0
- **3D Helpers:** [@react-three/drei](https://github.com/pmndrs/drei) v10.7.6
- **Animation:** [GSAP](https://gsap.com/) v3.13.0
- **TypeScript:** Strict mode enabled
- **Code Quality:** [Ultracite](https://ultracite.dev/) (Biome preset)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd vgym

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The application will be available at `http://localhost:4321/`

## 📁 Project Structure

```
vgym/
├── src/
│   ├── components/         # React components
│   │   ├── Equipment.tsx   # Individual equipment 3D objects
│   │   ├── Scene.tsx       # Main 3D scene with Three.js
│   │   ├── InfoPanel.tsx   # Equipment information sidebar
│   │   ├── EquipmentList.tsx # Navigation sidebar
│   │   └── GymExperience.tsx # Main app component
│   ├── data/
│   │   └── equipmentData.ts # Equipment information database
│   ├── types/
│   │   └── equipment.ts    # TypeScript type definitions
│   ├── utils/
│   │   └── equipmentGeometry.ts # 3D geometry creation
│   ├── styles/
│   │   └── global.css      # Global CSS variables and styles
│   └── pages/
│       └── index.astro     # Main entry point
├── public/                 # Static assets
└── package.json
```

## 📝 Code Standards

This project uses **Ultracite**, a zero-config Biome preset for strict code quality:

- Automatic formatting and linting on save
- Pre-commit hooks with Lefthook
- TypeScript strict mode
- Modern React best practices

### Commands

```bash
# Check code quality
npx ultracite check

# Fix auto-fixable issues
npx ultracite fix

# Diagnose setup
npx ultracite doctor
```

## 🎨 Features in Detail

### Camera Controls

- **Gym View:** Free orbital camera movement
- **Showcase Mode:** Restricted orbit around equipment
- **Mouse/Touch:** Drag to rotate, scroll to zoom
- **Smooth Transitions:** Animated camera movement between modes

### Equipment Information

Each piece of equipment includes:
- Detailed step-by-step instructions (6-8 steps)
- Proper form guidelines (4-5 tips)
- Common mistakes to avoid (3-4 points)
- Primary and secondary muscle groups
- Difficulty level indication
- Alternative exercises
- Safety warnings and precautions

### Visual Design

- Dark theme with blue/purple accents
- Glassmorphism UI elements
- Smooth animations and transitions
- Responsive typography
- Accessible color contrast
