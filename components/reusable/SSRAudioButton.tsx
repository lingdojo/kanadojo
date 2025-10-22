'use client';
import { useState, useEffect } from 'react';
import AudioButton from './AudioButton';
import useThemeStore from '@/store/useThemeStore';

interface SSRAudioButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'icon-only';
  disabled?: boolean;
  onPlay?: () => void;
  onStop?: () => void;
}

const SSRAudioButton: React.FC<SSRAudioButtonProps> = (props) => {
  const [isClient, setIsClient] = useState(false);
  const pronunciationEnabled = useThemeStore(state => state.pronunciationEnabled);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render during SSR to prevent hydration mismatches
  if (!isClient) {
    return null;
  }

  // If pronunciation is disabled, show a placeholder
  if (!pronunciationEnabled) {
    return (
      <div className="p-2 text-xs text-gray-400 border rounded">
        Audio disabled
      </div>
    );
  }

  return <AudioButton {...props} />;
};

export default SSRAudioButton;
