# 🌍 WanderLust UI

A premium travel landing page with a dark, cinematic aesthetic, glassmorphism, and smooth motion-driven sections.

The experience is built around polished storytelling, scroll-linked canvas visuals, and mobile-friendly navigation.

## ✨ Features

- **Scroll-Linked Animations:** An image-sequence canvas animation tied directly to scroll position for a more immersive experience.
- **Glassmorphism UI:** Translucent components with backdrop blur (`backdrop-blur-xl`) for a layered premium feel.
- **Dynamic Theming:** Built-in support for a stark "Minimalism" mode and a classic "Reference" look.
- **Smooth Entrances:** Framer Motion powers staggered, elegant entrance animations (`fadeInUp`).
- **Modern Typography:** A mix of sans-serif, serif, and monospace fonts tailored for a luxury travel aesthetic.

## 🚀 Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **Framer Motion** (`motion/react`)
- **Lucide Icons**

## ♿ Accessibility

- Keyboard-friendly navigation with visible focus states.
- Mobile menu dismisses with Escape and is marked as a dialog.
- Hero and testimonial imagery uses descriptive alt text and lazy loading where appropriate.

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ayush4307/WanderLust.git
   ```
2. Navigate into the directory:
   ```bash
   cd WanderLust
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server, run:
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

## 🤝 AI Integration
This project is pre-configured with the `@google/genai` SDK. To enable experimental AI features locally, copy `.env.example` into `.env.local` and add your Gemini API key.
