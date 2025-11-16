'use client';
import { useState, useEffect, useRef } from 'react';
import Sketch from '@uiw/react-color-sketch';
import * as culori from 'culori';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useClick } from '@/hooks/useAudio';
import { ThemeDefinition } from '@/static/themes/types';
import { getTheme } from '@/static/themes';
import usePreferencesStore from '@/store/usePreferencesStore';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ColorPickerIcon as PaletteIcon,
  Download01Icon as DownloadIcon,
  Upload01Icon as UploadIcon,
  Tick01Icon as CheckIcon,
} from '@hugeicons/core-free-icons';

// Convert OKLCH to hex using culori
function oklchToHex(oklchStr: string): string {
  try {
    const hex = culori.formatHex(oklchStr);
    if (!hex) return '#000000';
    return hex;
  } catch (e) {
    console.error('Error converting OKLCH to hex:', e);
    return '#000000';
  }
}

// Convert hex to OKLCH using culori
function hexToOklch(hex: string): string {
  try {
    const color = culori.oklch(hex);
    if (!color) return 'oklch(0 0 0)';
    const { l, c, h } = color;
    return `oklch(${l?.toFixed(3) || 0} ${c?.toFixed(3) || 0} ${h?.toFixed(3) || 0})`;
  } catch (e) {
    console.error('Error converting hex to OKLCH:', e);
    return 'oklch(0 0 0)';
  }
}

interface ColorInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function ColorInput({ label, value, onChange }: ColorInputProps) {
  const [hexValue, setHexValue] = useState(oklchToHex(value));
  const [showPicker, setShowPicker] = useState(false);
  const isUserInteractionRef = useRef(false);

  useEffect(() => {
    // Only update hexValue if it's not a user interaction
    if (!isUserInteractionRef.current) {
      setHexValue(oklchToHex(value));
    }
    isUserInteractionRef.current = false;
  }, [value]);

  const handleColorChange = (newColor: { hex: string }) => {
    try {
      const newHex = newColor.hex;
      setHexValue(newHex);
      isUserInteractionRef.current = true;
      onChange(hexToOklch(newHex));
    } catch (e) {
      console.error('Error handling color change:', e);
    }
  };

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="flex gap-2">
        <div className="relative">
          <button
            type="button"
            className="w-10 h-10 rounded border border-[var(--border)] cursor-pointer hover:opacity-80 transition-opacity"
            style={{ backgroundColor: hexValue }}
            onClick={() => setShowPicker(!showPicker)}
          />
          {showPicker && (
            <>
              <div
                className="fixed inset-0 z-[100]"
                onClick={() => setShowPicker(false)}
              />
              <div className="absolute left-0 top-12 z-[101]">
                <Sketch
                  color={hexValue}
                  onChange={handleColorChange}
                  disableAlpha
                  style={{
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)',
                  }}
                />
              </div>
            </>
          )}
        </div>
        <Input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="flex-1 font-mono text-xs"
          placeholder="oklch(0.5 0.1 180)"
        />
      </div>
    </div>
  );
}

export default function ThemeBuilder() {
  const { playClick } = useClick();
  const currentThemeId = usePreferencesStore(state => state.theme);
  const customThemes = usePreferencesStore(state => state.customThemes);
  const setCustomThemeInStore = usePreferencesStore(state => state.setCustomTheme);

  const [open, setOpen] = useState(false);
  const [customTheme, setCustomTheme] = useState<Partial<ThemeDefinition>>({});
  const [themeName, setThemeName] = useState('');
  const [themeDescription, setThemeDescription] = useState('');
  const [editingThemeId, setEditingThemeId] = useState<string>('');

  // Load current theme when sheet opens
  useEffect(() => {
    if (open) {
      const currentTheme = getTheme(currentThemeId, customThemes);
      if (currentTheme) {
        setCustomTheme({ ...currentTheme });
        setThemeName(currentTheme.name);
        setThemeDescription(currentTheme.description || '');
        setEditingThemeId(currentThemeId);
      }
    }
  }, [open, currentThemeId, customThemes]);

  // Load selected theme for editing
  const loadThemeForEdit = (themeId: string) => {
    const theme = getTheme(themeId, customThemes);
    if (theme) {
      setCustomTheme({ ...theme });
      setThemeName(theme.name);
      setThemeDescription(theme.description || '');
      setEditingThemeId(themeId);
    }
  };

  const updateColor = (key: keyof ThemeDefinition, value: string) => {
    setCustomTheme(prev => ({ ...prev, [key]: value }));
  };

  const handleExport = () => {
    playClick();
    const exportData = {
      ...customTheme,
      name: themeName,
      description: themeDescription,
      id: customTheme.id || 'custom-theme',
      creator: {
        name: 'Custom',
      },
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${exportData.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    playClick();
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = event => {
        try {
          const imported = JSON.parse(event.target?.result as string);
          setCustomTheme(imported);
          setThemeName(imported.name || '');
          setThemeDescription(imported.description || '');
        } catch (error) {
          console.error('Error importing theme:', error);
          alert('Error importing theme. Please check the file format.');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const handleApply = () => {
    playClick();
    if (customTheme.background && customTheme.foreground) {
      // Create the complete custom theme
      const customThemeData: ThemeDefinition = {
        id: editingThemeId,
        name: themeName || 'Custom Theme',
        description: themeDescription,
        background: customTheme.background || 'oklch(1 0 0)',
        foreground: customTheme.foreground || 'oklch(0 0 0)',
        card: customTheme.card || 'oklch(1 0 0)',
        cardForeground: customTheme.cardForeground || 'oklch(0 0 0)',
        popover: customTheme.popover || 'oklch(1 0 0)',
        popoverForeground: customTheme.popoverForeground || 'oklch(0 0 0)',
        primary: customTheme.primary || 'oklch(0.5 0.2 200)',
        primaryForeground: customTheme.primaryForeground || 'oklch(1 0 0)',
        secondary: customTheme.secondary || 'oklch(0.9 0 0)',
        secondaryForeground: customTheme.secondaryForeground || 'oklch(0 0 0)',
        muted: customTheme.muted || 'oklch(0.9 0 0)',
        mutedForeground: customTheme.mutedForeground || 'oklch(0.4 0 0)',
        accent: customTheme.accent || 'oklch(0.9 0 0)',
        accentForeground: customTheme.accentForeground || 'oklch(0 0 0)',
        destructive: customTheme.destructive || 'oklch(0.5 0.2 20)',
        border: customTheme.border || 'oklch(0.9 0 0)',
        input: customTheme.input || 'oklch(0.9 0 0)',
        ring: customTheme.ring || 'oklch(0.5 0.2 200)',
        radius: customTheme.radius || '0.5rem',
        chart1: customTheme.chart1,
        chart2: customTheme.chart2,
        chart3: customTheme.chart3,
        chart4: customTheme.chart4,
        chart5: customTheme.chart5,
      };

      // Save to local storage
      setCustomThemeInStore(editingThemeId, customThemeData);

      // Apply colors to document
      const root = document.documentElement;
      Object.entries(customThemeData).forEach(([key, value]) => {
        if (
          typeof value === 'string' &&
          ![
            'id',
            'name',
            'description',
            'preview',
            'radius',
            'backgroundColor',
            'cardColor',
            'borderColor',
            'mainColor',
            'secondaryColor',
          ].includes(key)
        ) {
          const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
          root.style.setProperty(`--${cssKey}`, value);
        }
      });

      if (customThemeData.radius) {
        root.style.setProperty('--radius', customThemeData.radius);
      }

      root.setAttribute('data-theme', customThemeData.id);

      // Close the sheet after saving
      setOpen(false);
    }
  };

  const colorFields: { key: keyof ThemeDefinition; label: string }[] = [
    { key: 'background', label: 'Background' },
    { key: 'foreground', label: 'Foreground' },
    { key: 'card', label: 'Card' },
    { key: 'cardForeground', label: 'Card Foreground' },
    { key: 'popover', label: 'Popover' },
    { key: 'popoverForeground', label: 'Popover Foreground' },
    { key: 'primary', label: 'Primary' },
    { key: 'primaryForeground', label: 'Primary Foreground' },
    { key: 'secondary', label: 'Secondary' },
    { key: 'secondaryForeground', label: 'Secondary Foreground' },
    { key: 'muted', label: 'Muted' },
    { key: 'mutedForeground', label: 'Muted Foreground' },
    { key: 'accent', label: 'Accent' },
    { key: 'accentForeground', label: 'Accent Foreground' },
    { key: 'destructive', label: 'Destructive' },
    { key: 'border', label: 'Border' },
    { key: 'input', label: 'Input' },
    { key: 'ring', label: 'Ring' },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          onClick={() => playClick()}
          className="w-full md:w-auto"
        >
          <HugeiconsIcon icon={PaletteIcon} size={16} className="mr-2" />
          Customize Theme
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:max-w-xl overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle>Theme Builder</SheetTitle>
          <SheetDescription>
            Customize your theme colors and export or import theme configurations
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Custom Theme Selector */}
          {Object.keys(customThemes).length > 0 && (
            <div className="space-y-2">
              <Label htmlFor="edit-theme">Edit Saved Theme</Label>
              <Select value={editingThemeId} onValueChange={loadThemeForEdit}>
                <SelectTrigger id="edit-theme">
                  <SelectValue placeholder="Select a theme to edit" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(customThemes).map(theme => (
                    <SelectItem key={theme.id} value={theme.id}>
                      {theme.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Theme Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="theme-name">Theme Name</Label>
              <Input
                id="theme-name"
                value={themeName}
                onChange={e => setThemeName(e.target.value)}
                placeholder="My Custom Theme"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="theme-description">Description</Label>
              <Input
                id="theme-description"
                value={themeDescription}
                onChange={e => setThemeDescription(e.target.value)}
                placeholder="A beautiful custom theme"
              />
            </div>
          </div>

          {/* Color Inputs */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Colors</h3>
            <div className="grid grid-cols-1 gap-4">
              {colorFields.map(({ key, label }) => (
                <ColorInput
                  key={key}
                  label={label}
                  value={(customTheme[key] as string) || 'oklch(0.5 0 0)'}
                  onChange={value => updateColor(key, value)}
                />
              ))}
            </div>
          </div>

          {/* Radius */}
          <div className="space-y-2">
            <Label htmlFor="radius">Border Radius</Label>
            <Input
              id="radius"
              value={(customTheme.radius as string) || '0.5rem'}
              onChange={e => updateColor('radius', e.target.value)}
              placeholder="0.5rem"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-4 border-t border-[var(--border)]">
            <Button onClick={handleApply} className="w-full">
              <HugeiconsIcon icon={CheckIcon} size={16} className="mr-2" />
              Save and Apply Theme
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <Button onClick={handleExport} variant="outline">
                <HugeiconsIcon icon={DownloadIcon} size={16} className="mr-2" />
                Export
              </Button>
              <Button onClick={handleImport} variant="outline">
                <HugeiconsIcon icon={UploadIcon} size={16} className="mr-2" />
                Import
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
