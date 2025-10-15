# 🕒 Timed Challenge Mode — KanaDojo

The **Timed Challenge Mode** is a fast-paced training feature that tests your kana recognition speed and accuracy under pressure. It complements existing modes like Pick, Reverse-Pick, Input, and Reverse-Input with a time-bound twist.

## ✨ Features

- ⏱ 60-second challenge window
- 🎯 Real-time scoring with streak tracking
- 🧠 Instant feedback on each answer
- 📊 Separate stat tracking for timed mode (correct, incorrect, streak)
- 🔁 Retry option with full stat reset

## 📁 File Structure

| File | Purpose |
|------|---------|
| `lib/generateKanaQuestion.ts` | Utility to randomly select kana from user’s selection |
| `store/useStatsStore.ts` | Extended Zustand store with timed stats |
| `components/Dojo/Kana/TimedChallenge.tsx` | Main game component with timer, input, and scoring |
| `app/kana/train/timed/page.tsx` | App Router entry point for timed mode |

## 🧠 How It Works

1. User selects kana characters from the Kana dojo.
2. On starting the challenge, a 60-second timer begins.
3. One kana character is shown at a time.
4. User types the correct romaji and submits.
5. Stats update in real time.
6. When time runs out, a summary screen appears with retry option.

## 🛠 Developer Notes

- Stats are tracked separately from regular modes to avoid overlap.
- Timer logic is handled via `useChallengeTimer` hook.
- Component is modular and can be extended to Kanji/Vocab dojos easily.
- All state updates are handled via Zustand for consistency.

---

> PR: Adds Timed Challenge mode for Kana training. Includes stat tracking, timer logic, and App Router integration.
