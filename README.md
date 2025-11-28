# VGym - Virtual Gym Experience

An immersive 3D web application that provides an interactive virtual gym experience. Explore gym equipment, learn proper form, and understand muscle groups targeted by different exercises—all from your browser. Check out the live demo [here](https://vgym.ahargunyllib.dev).

![VGym](https://img.shields.io/badge/Status-Active-success)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Astro](https://img.shields.io/badge/Astro-5.15-orange)
![React](https://img.shields.io/badge/React-19.2-61dafb)
![Three.js](https://img.shields.io/badge/Three.js-0.181-black)

## 🎯 Overview

VGym provides an immersive first-person 3D gym experience where users can:

- **Walk through** a virtual gym using WASD controls
- **Explore** 8 different gym equipment pieces in a realistic 3D environment
- **Learn** proper usage, form, and muscle groups targeted by each equipment
- **Interact** with equipment by looking at them to reveal detailed information
- **Navigate** freely in first-person perspective with mouse look controls

**Target Audience:**

- Gym beginners learning equipment before their first visit
- Fitness enthusiasts studying proper form and technique
- Personal trainers for client education and demonstration
- Gym owners for virtual tours and member orientation
- Students in sports science, kinesiology, and physical education

## ✨ Features

### 🎮 First-Person Exploration

- **WASD Controls**: Navigate through the virtual gym using intuitive keyboard controls
  - `W` / `↑`: Move forward
  - `S` / `↓`: Move backward
  - `A` / `←`: Strafe left
  - `D` / `→`: Strafe right
- **Mouse Look**: Control camera direction with mouse (click to lock pointer)
- **ESC Key**: Unlock cursor to interact with UI elements
- **Collision Detection**: Physical boundaries prevent walking through walls
- **Realistic Perspective**: Camera positioned at 1.65m eye height

### 🏋️ Interactive Equipment System

Experience **8 different gym equipment pieces**:

| Equipment   | Category   | Difficulty   | Primary Muscles |
| ----------- | ---------- | ------------ | --------------- |
| Kettlebell  | Functional | Intermediate | Full Body       |
| Dumbbell    | Strength   | Beginner     | Arms, Shoulders |
| Barbell     | Strength   | Advanced     | Multiple Groups |
| Bench Press | Strength   | Intermediate | Chest, Triceps  |
| Squat Rack  | Strength   | Advanced     | Legs, Core      |
| Pull-Up Bar | Functional | Advanced     | Back, Arms      |
| Dip Station | Strength   | Intermediate | Chest, Triceps  |
| Treadmill   | Cardio     | Beginner     | Lower Body      |

### 📚 Educational Content

Each piece of equipment includes:

- **Primary Exercise Name**: The main exercise performed
- **Muscle Groups**: Primary and secondary muscles targeted
- **Step-by-Step Instructions**: How to use the equipment safely
- **Proper Form Tips**: Best practices for effective workouts
- **Common Mistakes**: What to avoid during exercises
- **Safety Warnings**: Important precautions
- **Alternative Exercises**: Similar movements for variety

### 🎨 Immersive 3D Environment

- **Textured Gym Room**: 5m × 3m × 5m virtual space with high-resolution textures
- **Realistic Lighting**: Hemisphere, ambient, directional, and point lights with shadow casting
- **Hover Effects**: Equipment glows subtly when you look at it
- **Smooth Animations**: React Spring animations for UI elements
- **Detail Panel**: Contextual information appears when focusing on equipment (800ms delay)

## 🛠 Tech Stack

### Core Framework

- **[Astro 5.15](https://astro.build)** - Meta-framework for fast, content-focused web apps
- **[React 19.2](https://react.dev)** - UI library for interactive components
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### 3D Graphics

- **[Three.js 0.181](https://threejs.org/)** - WebGL library for 3D rendering
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful utilities and helpers
- **[@react-spring/three](https://www.react-spring.dev/)** - Animation library for 3D

### Styling

- **[Tailwind CSS 4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **OKLCH Colors** - Modern perceptually uniform color space
- **Plus Jakarta Sans** - Google Fonts typography

### Code Quality

- **[Biome](https://biomejs.dev/)** - Fast Rust-based linter and formatter
- **[Ultracite](https://github.com/TheOtterlord/ultracite)** - Zero-config Biome preset with strict standards
- **[Lefthook](https://github.com/evilmartians/lefthook)** - Fast Git hooks manager
- **[lint-staged](https://github.com/okonet/lint-staged)** - Run linters on staged files

### Deployment

- **[Cloudflare Workers](https://workers.cloudflare.com/)** - Serverless edge deployment
- **[Wrangler](https://developers.cloudflare.com/workers/wrangler/)** - Cloudflare CLI

## 📦 Prerequisites

- **Node.js**: 18.x or higher
- **npm** or **pnpm**: Latest version
- **Desktop Browser**: Chrome, Firefox, Safari, or Edge with WebGL support
- **Keyboard & Mouse**: Required for controls

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ahargunyllib/vgym.git
   cd vgym
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 🎯 Usage

### Basic Controls

1. **Click anywhere** on the screen to lock your pointer
2. **Move your mouse** to look around the gym
3. **Use WASD keys** to walk through the space
4. **Look at equipment** (center crosshair) to view details
5. **Press ESC** to unlock cursor and interact with UI

### Equipment Details

When you focus on a piece of equipment for ~800ms, a detail panel will appear showing:

- Equipment information and category
- Difficulty level
- Targeted muscle groups
- Detailed usage instructions
- Form tips and common mistakes
- Safety information

### Navigation Tips

- Walk close to equipment to trigger the detail panel
- Use the equipment list sidebar (desktop only) to see all available equipment
- The crosshair in the center shows what you're looking at
- Walls have collision detection - you can't walk through them

## 📁 Project Structure

```
vgym/
├── src/
│   ├── pages/
│   │   └── index.astro              # Main entry point
│   ├── components/
│   │   ├── scene.tsx                # State management & UI overlay
│   │   ├── scene-content.tsx        # Three.js Canvas & 3D logic
│   │   ├── equipment/               # 3D equipment models
│   │   │   ├── index.tsx            # Equipment wrapper
│   │   │   ├── kettlebell.tsx
│   │   │   ├── dumbbell.tsx
│   │   │   ├── barbell.tsx
│   │   │   ├── bench-press.tsx
│   │   │   ├── squat-rack.tsx
│   │   │   ├── pull-up-bar.tsx
│   │   │   ├── dip-station.tsx
│   │   │   └── treadmill.tsx
│   │   └── ui/                      # UI components
│   │       ├── crosshair.tsx
│   │       ├── equipment-detail-panel.tsx
│   │       ├── equipment-list-panel.tsx
│   │       ├── loading.tsx
│   │       └── mobile-message.tsx
│   ├── data/
│   │   ├── equipment.tsx            # Equipment data & metadata
│   │   └── constant.tsx             # Room dimensions
│   ├── types/
│   │   └── equipment.ts             # TypeScript type definitions
│   └── styles/
│       └── global.css               # Tailwind & CSS variables
├── public/                          # Static assets
│   ├── floor.png
│   ├── ceiling.png
│   ├── front-wall.png
│   ├── back-wall.png
│   ├── left-wall.png
│   ├── right-wall.png
│   └── favicon.svg
├── astro.config.mjs                 # Astro configuration
├── tsconfig.json                    # TypeScript configuration
├── biome.jsonc                      # Biome linter config
├── wrangler.jsonc                   # Cloudflare Workers config
├── lefthook.yml                     # Git hooks configuration
└── package.json                     # Dependencies & scripts
```

## 🌐 Browser Requirements

- **WebGL Support**: Required for Three.js 3D rendering
- **Modern JavaScript**: ES2020+ features support
- **Desktop Only**: Not optimized for mobile devices
- **Keyboard**: WASD controls essential
- **Mouse**: Pointer lock for camera control

### Recommended Browsers

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📚 Educational Use Cases

VGym is designed for:

- **Gym Beginners**: Learn equipment usage before visiting a real gym
- **Fitness Enthusiasts**: Review proper form and technique
- **Personal Trainers**: Educational tool for client instruction
- **Gym Owners**: Virtual tour of gym facilities
- **Sports Science Students**: Study exercise mechanics and muscle groups

## 🙏 Acknowledgments

- **Three.js** - Amazing 3D library
- **Astro** - Fast and flexible meta-framework
- **React Three Fiber** - React renderer for Three.js
- **Ultracite** - Code quality standards
- **Biome** - Fast Rust-based tooling

## 👥 Team Members

| Name                     | NIM             |
| ------------------------ | --------------- |
| Nugraha Billy Viandy     | 235150200111011 |
| Muhammad Danish Alfattah | 235150207111008 |
| Ghufron Bagaskara        | 235150200111012 |
| Yusrizal Harits Firdaus  | 235150207111011 |

---

Built with ❤️ using Astro, React, and Three.js
