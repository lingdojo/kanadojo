'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import useSRSStore from '@/store/useSRSStore';
import { SRSCard } from '@/lib/interfaces';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { getStageColor } from '@/lib/srsUtils';

export default function PracticePage() {
  const srsEnabled = useSRSStore(state => state.srsEnabled);
  const cards = useSRSStore(state => state.cards);
  const newCardsPerDay = useSRSStore(state => state.newCardsPerDay);
  const todayNewCount = useSRSStore(state => state.todayNewCount);
  const todayReviewCount = useSRSStore(state => state.todayReviewCount);
  const setSRSEnabled = useSRSStore(state => state.setSRSEnabled);

  const [dueCards, setDueCards] = useState<{
    hiragana: SRSCard[];
    katakana: SRSCard[];
    kanji: SRSCard[];
    vocabulary: SRSCard[];
  }>({ hiragana: [], katakana: [], kanji: [], vocabulary: [] });

  useEffect(() => {
    const now = new Date();
    const allCards = Object.values(cards);

    const due = {
      hiragana: allCards.filter(card =>
        card.contentType === 'hiragana' && card.nextReview <= now && card.stage !== 'new'
      ),
      katakana: allCards.filter(card =>
        card.contentType === 'katakana' && card.nextReview <= now && card.stage !== 'new'
      ),
      kanji: allCards.filter(card =>
        card.contentType === 'kanji' && card.nextReview <= now && card.stage !== 'new'
      ),
      vocabulary: allCards.filter(card =>
        card.contentType === 'vocabulary' && card.nextReview <= now && card.stage !== 'new'
      ),
    };

    setDueCards(due);
  }, [cards]);

  const totalDue = dueCards.hiragana.length + dueCards.katakana.length +
                   dueCards.kanji.length + dueCards.vocabulary.length;

  if (!srsEnabled) {
    return (
      <div className="container mx-auto p-4 sm:p-8">
        <Card>
          <CardHeader>
            <CardTitle>SRS Practice Mode</CardTitle>
            <CardDescription>
              Enable Spaced Repetition System to start practicing with intelligent scheduling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-[var(--muted-foreground)]">
              The Spaced Repetition System helps you learn more efficiently by showing you
              characters at optimal intervals based on how well you know them.
            </p>
            <Button onClick={() => setSRSEnabled(true)}>
              Enable SRS
            </Button>
            <div className="text-sm text-[var(--muted-foreground)]">
              You can also enable SRS in{' '}
              <Link href="/preferences" className="text-[var(--primary)] underline">
                Preferences
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-8 space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Practice</h1>
        <p className="text-[var(--muted-foreground)]">
          Review due cards using spaced repetition
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Due Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalDue}</div>
            <p className="text-xs text-[var(--muted-foreground)] mt-1">
              Cards ready for review
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">New Cards Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{todayNewCount} / {newCardsPerDay}</div>
            <Progress
              value={(todayNewCount / newCardsPerDay) * 100}
              className="mt-2"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Reviews Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{todayReviewCount}</div>
            <p className="text-xs text-[var(--muted-foreground)] mt-1">
              Cards reviewed
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Start Practicing</h2>

        {dueCards.hiragana.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Hiragana</span>
                <Badge variant="secondary">{dueCards.hiragana.length} due</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2 flex-wrap">
                {dueCards.hiragana.slice(0, 10).map(card => (
                  <div
                    key={card.id}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="text-2xl font-medium">{card.character}</div>
                    <div className="h-1 w-full rounded" style={{ backgroundColor: getStageColor(card.stage) }} />
                  </div>
                ))}
                {dueCards.hiragana.length > 10 && (
                  <div className="flex items-center text-[var(--muted-foreground)]">
                    +{dueCards.hiragana.length - 10} more
                  </div>
                )}
              </div>
              <Link href="/kana/train/pick">
                <Button className="w-full">Practice Hiragana</Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {dueCards.katakana.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Katakana</span>
                <Badge variant="secondary">{dueCards.katakana.length} due</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2 flex-wrap">
                {dueCards.katakana.slice(0, 10).map(card => (
                  <div
                    key={card.id}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="text-2xl font-medium">{card.character}</div>
                    <div className="h-1 w-full rounded" style={{ backgroundColor: getStageColor(card.stage) }} />
                  </div>
                ))}
                {dueCards.katakana.length > 10 && (
                  <div className="flex items-center text-[var(--muted-foreground)]">
                    +{dueCards.katakana.length - 10} more
                  </div>
                )}
              </div>
              <Link href="/kana/train/pick">
                <Button className="w-full">Practice Katakana</Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {dueCards.kanji.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Kanji</span>
                <Badge variant="secondary">{dueCards.kanji.length} due</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2 flex-wrap">
                {dueCards.kanji.slice(0, 10).map(card => (
                  <div
                    key={card.id}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="text-2xl font-medium">{card.character}</div>
                    <div className="h-1 w-full rounded" style={{ backgroundColor: getStageColor(card.stage) }} />
                  </div>
                ))}
                {dueCards.kanji.length > 10 && (
                  <div className="flex items-center text-[var(--muted-foreground)]">
                    +{dueCards.kanji.length - 10} more
                  </div>
                )}
              </div>
              <Link href="/kanji/train/pick">
                <Button className="w-full">Practice Kanji</Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {dueCards.vocabulary.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Vocabulary</span>
                <Badge variant="secondary">{dueCards.vocabulary.length} due</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2 flex-wrap">
                {dueCards.vocabulary.slice(0, 10).map(card => (
                  <div
                    key={card.id}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="text-xl font-medium">{card.character}</div>
                    <div className="h-1 w-full rounded" style={{ backgroundColor: getStageColor(card.stage) }} />
                  </div>
                ))}
                {dueCards.vocabulary.length > 10 && (
                  <div className="flex items-center text-[var(--muted-foreground)]">
                    +{dueCards.vocabulary.length - 10} more
                  </div>
                )}
              </div>
              <Link href="/vocabulary/train/pick">
                <Button className="w-full">Practice Vocabulary</Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {totalDue === 0 && (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-lg text-[var(--muted-foreground)]">
                No cards due for review right now. Great job! 🎉
              </p>
              <p className="text-sm text-[var(--muted-foreground)] mt-2">
                Come back later or practice any mode to build your SRS deck.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
