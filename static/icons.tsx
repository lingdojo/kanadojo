import { HugeiconsIcon } from '@hugeicons/react';
import { CircleIcon as BirdIcon, Bug01Icon as BugIcon, CircleIcon as CatIcon, CircleIcon as DogIcon, CircleIcon as FishIcon, CircleIcon as OrigamiIcon, CircleIcon as PawIcon, CircleIcon as RabbitIcon, CircleIcon as MouseIcon, CircleIcon as SnailIcon, CircleIcon as SquirrelIcon, CircleIcon as TurtleIcon, CircleIcon as WormIcon } from '@hugeicons/core-free-icons';

export const animalIcons = [
  <HugeiconsIcon icon={BirdIcon} color="currentColor" className="text-[var(--muted-foreground)]" key='bird' />,
  <HugeiconsIcon icon={BugIcon} color="currentColor" className="text-[var(--muted-foreground)]" key='bug' />,
  <HugeiconsIcon icon={CatIcon} color="currentColor" className="text-[var(--muted-foreground)]" key='cat' />,
  <HugeiconsIcon icon={DogIcon} color="currentColor" className="text-[var(--muted-foreground)]" key='dog' />,
  <HugeiconsIcon icon={FishIcon} color="currentColor" className="text-[var(--muted-foreground)]" key='fish' />,
  <HugeiconsIcon icon={OrigamiIcon} color="currentColor" className="text-[var(--muted-foreground)]" key='origami' />,
  <HugeiconsIcon icon={PawIcon} color="currentColor" className="text-[var(--muted-foreground)]" key='paw-print' />,
  <HugeiconsIcon icon={RabbitIcon} color="currentColor" className="text-[var(--muted-foreground)]" key='rabbit' />,
  <HugeiconsIcon icon={MouseIcon} color="currentColor" className="text-[var(--muted-foreground)]" key='rat' />,
  <HugeiconsIcon icon={SnailIcon} color="currentColor" className="text-[var(--muted-foreground)]" key='snail' />,
  <HugeiconsIcon icon={SquirrelIcon} color="currentColor" className="text-[var(--muted-foreground)]" key='squirrel' />,
  <HugeiconsIcon icon={TurtleIcon} color="currentColor" className="text-[var(--muted-foreground)]" key='turtle' />,
  <HugeiconsIcon icon={WormIcon} color="currentColor" className="text-[var(--muted-foreground)]" key='worm' />
];

export const animalIconsLength = animalIcons.length;