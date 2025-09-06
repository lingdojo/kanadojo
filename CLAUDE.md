# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KanaDojo is a Next.js-based Japanese learning application focused on training Kana (Hiragana/Katakana), Kanji, and Vocabulary. The app provides multiple game modes and customizable practice sessions.

## Development Commands

### Core Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run postbuild` - Generates sitemap after build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Testing
No test framework is configured in this project.

## Architecture

### App Structure
This is a Next.js 15 app using the App Router with TypeScript and React 19.

**Key Directories:**
- `/app` - Next.js App Router pages and layouts
- `/components` - React components organized by feature
- `/lib` - Utilities, hooks, interfaces, and helper functions
- `/store` - Zustand stores for global state management
- `/public` - Static assets including sounds and wallpapers

### Routing Structure
- `/` - Main menu
- `/kana` - Kana selection and training
- `/kana/train/[gameMode]` - Kana game modes
- `/kanji` - Kanji selection and training
- `/kanji/train/[gameMode]` - Kanji game modes
- `/vocabulary` - Vocabulary selection and training
- `/vocabulary/train/[gameMode]` - Vocabulary game modes
- `/academy` - Educational content
- `/preferences` - Settings page
- Legal pages: `/terms`, `/privacy`, `/security`

### State Management
Uses Zustand for state management with these main stores:
- `useKanaKanjiStore` - Manages Kana/Kanji selections and game modes
- `useVocabStore` - Manages vocabulary selections and game modes
- `useStatsStore` - Manages game statistics and progress
- `useThemeStore` - Manages UI themes and preferences

### Component Organization
- `components/Dojo/` - Game-specific components for each content type (Kana, Kanji, Vocab)
- `components/reusable/` - Shared components used across the app
- `components/ui/` - Basic UI components (shadcn/ui)
- `components/Settings/` - Preference and configuration components

### Game Modes
Each content type (Kana, Kanji, Vocabulary) supports four game modes:
- **Pick** - Multiple choice selection
- **Reverse-Pick** - Reverse multiple choice
- **Input** - Text input mode
- **Reverse-Input** - Reverse text input mode

### Styling & UI
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **FontAwesome** icons via React FontAwesome
- **Framer Motion** (`motion` package) for animations
- Custom theme system with multiple color schemes

### Audio System
- Custom audio hooks in `lib/hooks/useAudio.ts`
- Sound files organized in `/public/sounds/`
- Supports click sounds, correct/error feedback, and achievement sounds

### Key Libraries
- **Zustand** - State management
- **clsx** + **tailwind-merge** - Conditional styling
- **canvas-confetti** - Celebration effects
- **react-timer-hook** - Timer functionality
- **use-sound** - Audio playback
- **react-markdown** - Markdown rendering for content
- **random-js** - Random number generation

## Development Patterns

### Component Structure
Components follow a consistent pattern:
- Use TypeScript interfaces from `lib/interfaces.ts`
- Leverage Zustand stores for state
- Implement responsive design with Tailwind
- Use custom hooks from `lib/hooks/`

### Path Aliases
- `@/*` maps to project root for clean imports

### Data Flow
1. User selects content in menu components
2. Selections stored in Zustand stores
3. Game components read from stores to render questions
4. Stats tracked and stored for progress monitoring

### File Naming
- Components use PascalCase
- Hooks use camelCase with `use` prefix
- Stores use camelCase with `use` prefix and `Store` suffix
- Pages follow Next.js App Router conventions