<div id="top"></div>

**KanaDojo is available in multiple languages thanks to community contributions:**

[English](../../README.md)  **/**  [Español](docs/translations/README.es.md) **/** [Français (in progress)](docs/translations/README.fr.md)  **/** [Deutsch](docs/translations/README.de.md) **/** [Português](docs/translations/README.pt-br.md) **/** [Türkçe](docs/translations/README.tr.md) **/** [中文（简体）](docs/translations/README.zh-CN.md) **/** [中文（繁體）](docs/translations/README.zh-tw.md) **/**  [हिन्दी](docs/translations/README.hin.md)  **/**  <span dir="ltr">[العربية](docs/translations/README.ar.md)</span>  **/** [Русский](docs/translations/README.ru.md)

# KanaDojo かな道場

<div align="center">

![KanaDojo Banner](https://github.com/user-attachments/assets/b7931764-be5e-43c7-b1b3-9d2568b2fecf)
![GitHub Stars](https://github.com/user-attachments/assets/de26975d-ce19-4a56-be00-84470d4607e2)

**An aesthetic, minimalist, and highly customizable platform for mastering Japanese**

[![Live Demo](https://img.shields.io/badge/demo-kanadojo.com-blue?style=for-the-badge)](https://kanadojo.com)
[![License](https://img.shields.io/badge/license-AGPL--v3-blue)](LICENSE.md)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

</div>

## 📖 About KanaDojo

KanaDojo is an engaging web-based Japanese learning platform that makes mastering Hiragana, Katakana, Kanji, and Vocabulary fun and intuitive. Built with a focus on aesthetics, customization, and effective learning, KanaDojo provides an immersive training environment for Japanese language learners at all levels.

Whether you're just starting with the basic kana syllabaries or preparing for the JLPT exams with advanced kanji and vocabulary, KanaDojo offers a streamlined, distraction-free learning experience that adapts to your preferences and learning style.

### ✨ Key Features

#### 🎯 **Three Training Dojos**

- **Kana Dojo** - Master Hiragana and Katakana syllabaries with base, dakuon, yoon, and foreign sound groups
- **Kanji Dojo** - Learn essential kanji characters organized by JLPT levels (N5, N4, N3, N2)
- **Vocabulary Dojo** - Build your Japanese vocabulary with curated word collections by proficiency level

#### 🎮 **Four Dynamic Game Modes**

Each dojo supports four engaging training modes to reinforce learning:

1. **Pick** - Multiple choice: Select the correct romanization/translation for the shown character
2. **Reverse-Pick** - Reverse multiple choice: Select the correct character for the given romanization/translation
3. **Input** - Text input: Type the correct romanization/translation
4. **Reverse-Input** - Reverse text input: Type the correct character

#### 🎨 **Extensive Customization**

- **100+ Themes** - Choose from a vast collection of beautiful light and dark themes, or use the random theme feature
- **28 Japanese Fonts** - Select from a variety of authentic Japanese typefaces to suit your aesthetic preferences
- **Sound Effects** - Enjoy satisfying UI feedback sounds that can be toggled on/off
- **Display Options** - Toggle between Romaji/English and Kana/Kanji displays in selection menus
- **Hotkeys** - Keyboard shortcuts for efficient training (can be disabled)

#### 📊 **Progress Tracking**

- Real-time feedback with correct/incorrect counters
- Streak tracking to maintain motivation
- Statistics to monitor your learning progress

#### 🌐 **Modern Web Experience**

- Fully responsive design that works on desktop, tablet, and mobile
- No installation required - train anywhere with an internet connection
- Clean, minimalist interface that keeps you focused on learning
- Smooth animations and transitions powered by Framer Motion

## 🖼️ Screenshots

<div align="center">

### Home Page

![Home](https://github.com/user-attachments/assets/cac78e72-4d31-43e8-8160-104c431e55be)

### Kanji Selection Menu

![Kanji Selection Menu](https://github.com/user-attachments/assets/a3c591ca-125a-4f79-b758-fb6423f7ec12)

### Training Page

![Training](https://github.com/user-attachments/assets/053020ef-77c7-492b-b8db-c381d1ec7db8)

### Customization & Themes

![Themes](https://github.com/user-attachments/assets/f664a280-0344-4ff9-8639-83f9c1c4223b)

![Fonts](https://github.com/user-attachments/assets/cf0be4c6-7d43-46e4-8939-0df6c40b83d9)

</div>

## 🎨 UI & Design Philosophy

KanaDojo embraces a **minimalist aesthetic** combined with **maximum flexibility**. The design philosophy centers around:

### Minimalism First

- Clean interfaces with minimal distractions
- Focus on the learning content
- Intuitive navigation and clear information hierarchy
- Purposeful use of whitespace

### Aesthetic Customization

- Extensive theme library (100+ options) ranging from soft pastels to vibrant neons
- Support for both light and dark modes
- Carefully curated color palettes that are easy on the eyes during extended study sessions
- Seamless theme transitions

### User Experience

- Smooth animations and micro-interactions for delightful feedback
- Responsive design that adapts beautifully to any screen size
- Audio feedback for interactions (optional)
- Consistent visual language across all sections

### Japanese Typography

- 28 authentic Japanese fonts covering various styles
- Proper rendering of complex kanji characters
- Clear distinction between similar-looking characters
- Font previews with real Japanese text samples

## 🛠️ Tech Stack

KanaDojo is built with modern web technologies for optimal performance and developer experience:

### Core Framework

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router for server-side rendering and optimal performance
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality, accessible component library
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations and transitions
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icon library
- **[FontAwesome](https://fontawesome.com/)** - Additional icon support

### State Management

- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management with minimal boilerplate
- **Zustand Persist** - Local storage persistence for user preferences

### Utilities & Features

- **[use-sound](https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/)** - Audio feedback system
- **[canvas-confetti](https://www.npmjs.com/package/canvas-confetti)** - Celebration effects
- **[react-timer-hook](https://www.npmjs.com/package/react-timer-hook)** - Timer functionality
- **[react-markdown](https://github.com/remarkjs/react-markdown)** - Markdown rendering for educational content
- **[random-js](https://www.npmjs.com/package/random-js)** - Cryptographically strong random number generation
- **[clsx](https://www.npmjs.com/package/clsx) + [tailwind-merge](https://www.npmjs.com/package/tailwind-merge)** - Conditional styling utilities

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[next-sitemap](https://www.npmjs.com/package/next-sitemap)** - Automatic sitemap generation

### Analytics & Performance

- **[@vercel/analytics](https://vercel.com/analytics)** - Web analytics
- **[@vercel/speed-insights](https://vercel.com/docs/speed-insights)** - Performance monitoring

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 10.x or higher (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/lingdojo/kanadojo.git
   cd kanadojo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

### Other Commands

```bash
# Run ESLint
npm run lint

# Generate sitemap (runs automatically after build)
npm run postbuild
```

### Troubleshooting

If you encounter issues during development, try these solutions:

#### Clear Next.js Cache

**macOS/Linux:**
```bash
rm -rf .next
npm run dev
```

**Windows (PowerShell):**
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

**Windows (Command Prompt):**
```cmd
rmdir /s /q .next
npm run dev
```

#### Clear Node Modules and Reinstall

**macOS/Linux:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Windows (PowerShell):**
```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

**Windows (Command Prompt):**
```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

#### Clear All Caches (Nuclear Option)

**macOS/Linux:**
```bash
rm -rf .next node_modules package-lock.json
npm cache clean --force
npm install
npm run dev
```

**Windows (PowerShell):**
```powershell
Remove-Item -Recurse -Force .next, node_modules, package-lock.json
npm cache clean --force
npm install
npm run dev
```

**Windows (Command Prompt):**
```cmd
rmdir /s /q .next
rmdir /s /q node_modules
del package-lock.json
npm cache clean --force
npm install
npm run dev
```

#### Port Already in Use

If port 3000 is already in use:

**macOS/Linux:**
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process (replace PID with actual process ID)
kill -9 PID
```

**Windows (PowerShell/Command Prompt):**
```cmd
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /PID PID /F
```

Or simply run on a different port:
```bash
# macOS/Linux/Windows
PORT=3001 npm run dev
```

## 📁 Project Structure

```
kanadojo/
├── app/                          # Next.js App Router pages
│   ├── kana/                    # Kana dojo pages
│   │   └── train/[gameMode]/   # Training pages for each game mode
│   ├── kanji/                   # Kanji dojo pages
│   │   └── train/[gameMode]/
│   ├── vocabulary/              # Vocabulary dojo pages
│   │   └── train/[gameMode]/
│   ├── preferences/             # Settings and customization page
│   ├── academy/                 # Educational content
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Home page
│
├── components/                   # React components
│   ├── Dojo/                    # Training-specific components
│   │   ├── Kana/               # Kana selection and cards
│   │   ├── Kanji/              # Kanji selection and cards
│   │   └── Vocab/              # Vocabulary selection and cards
│   ├── reusable/                # Shared components
│   │   ├── Menu/               # Navigation and menu components
│   │   └── ...                 # Other reusable components
│   ├── Settings/                # Preference components
│   └── ui/                      # shadcn/ui components
│
├── lib/                         # Utilities and helper functions
│   ├── hooks/                   # Custom React hooks
│   │   ├── useAudio.ts         # Audio feedback hooks
│   │   └── ...
│   ├── interfaces.ts            # TypeScript interfaces
│   └── utils.ts                 # Utility functions
│
├── i18n/                        # Translation management system
│   └── request.ts               # Translated text retrieve helper
│
├── store/                       # Zustand state management
│   ├── useKanaKanjiStore.ts    # Kana/Kanji selection state
│   ├── useVocabStore.ts        # Vocabulary selection state
│   ├── useStatsStore.ts        # Statistics and progress
│   └── useThemeStore.ts        # Theme and preferences
│
├── static/                      # Static data and configuration
│   ├── kana.ts                 # Kana character data
│   ├── kanji/                  # Kanji data by JLPT level
│   ├── vocab/                  # Vocabulary data
│   ├── themes.ts               # Theme definitions
│   ├── fonts.ts                # Font configurations
│   └── info.tsx                # Informational content
│
├── translations/               # Translated text content
│   ├── en.json                 # English text content
│   └── es.json                 # Spanish text content
│
├── public/                      # Static assets
│   ├── sounds/                 # Audio files
│   └── wallpapers/             # Background images
│
├── CLAUDE.md                    # Developer documentation
├── next.config.ts              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

### Key Concepts

---

#### State Management Flow

1. User selects content in menu components
2. Selections stored in Zustand stores (`useKanaKanjiStore`, `useVocabStore`)
3. Training components read from stores to generate questions
4. Stats tracked and persisted in `useStatsStore`
5. User preferences saved in `useThemeStore` with localStorage persistence

#### Component Architecture

- **Dojo Components**: Handle character/word selection for each content type
- **Training Components**: Render game modes and handle user interactions
- **Reusable Components**: Shared UI elements (buttons, cards, modals, etc.)
- **Menu Components**: Navigation, info sections, and dojo selection

#### Data Organization

- **Kana**: Organized by type (hiragana/katakana) and groups (base, dakuon, yoon, foreign)
- **Kanji**: Organized by JLPT level (N5-N2), with readings and meanings
- **Vocabulary**: Organized by JLPT level and word type (nouns, verbs, etc.)

#### Game Mode Implementation

Each game mode is a dynamic route (`/[contentType]/train/[gameMode]`) that:

1. Reads selected content from the appropriate store
2. Generates random questions from the selection
3. Provides immediate feedback
4. Tracks statistics (correct, incorrect, streak)

## 🤝 Contributing

Contributions are welcome! KanaDojo is an open-source project built by the community, for the community. Check out [CONTRIBUTING.md](CONTRIBUTING.md) for more detailed information on how to contribute.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Use TypeScript for type safety
- Test your changes thoroughly
- Update documentation as needed
- Keep components focused and reusable

## 📄 License

This project is licensed under the AGPL 3.0 License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Japanese language data and character information
- Open-source community for the amazing tools and libraries
- All contributors who help make KanaDojo better

## 📞 Contact & Links

- **Website**: [kanadojo.com](https://kanadojo.com)
- **Repository**: [github.com/lingdojo/kanadojo](https://github.com/lingdojo/kanadojo)
- **Email**: lingdojo.dev@gmail.com

---

<div align="center">

**Made with ❤️ for Japanese language learners worldwide**

がんばって！ (Ganbatte! - Do your best!)

[⬆ Back to top](#top)

</div>
