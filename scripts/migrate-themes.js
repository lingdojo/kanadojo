const fs = require('fs');
const path = require('path');

/**
 * Convert HSLA color to OKLCH format
 * This is a simplified conversion - for production use a proper color library
 */
function hslaToOklch(hsla) {
  // For now, return a placeholder - we'll use similar colors from shadcn
  // This is a simple mapping based on lightness
  const match = hsla.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%/);
  if (!match) return 'oklch(0.5 0 0)';

  const [, h, s, l] = match.map(Number);
  const lightness = l / 100;

  // Simple conversion: preserve relative lightness
  if (s === 0) {
    // Grayscale
    return `oklch(${lightness.toFixed(3)} 0 0)`;
  } else {
    // Colored - preserve hue roughly
    const chroma = (s / 100) * 0.3; // Approximate chroma
    return `oklch(${lightness.toFixed(3)} ${chroma.toFixed(3)} ${h})`;
  }
}

/**
 * Migrate a single theme file
 */
function migrateThemeFile(filePath) {
  console.log(`Processing: ${filePath}`);

  const content = fs.readFileSync(filePath, 'utf8');

  // Extract the theme object using regex
  const bgMatch = content.match(/backgroundColor:\s*['"]([^'"]+)['"]/);
  const cardMatch = content.match(/cardColor:\s*['"]([^'"]+)['"]/);
  const borderMatch = content.match(/borderColor:\s*['"]([^'"]+)['"]/);
  const mainMatch = content.match(/mainColor:\s*['"]([^'"]+)['"]/);
  const secondaryMatch = content.match(/secondaryColor:\s*['"]([^'"]+)['"]/);

  if (!bgMatch || !cardMatch || !borderMatch || !mainMatch || !secondaryMatch) {
    console.log(`  Skipping - missing properties`);
    return;
  }

  const bg = bgMatch[1];
  const card = cardMatch[1];
  const border = borderMatch[1];
  const main = mainMatch[1];
  const secondary = secondaryMatch[1];

  // Convert to OKLCH
  const background = hslaToOklch(bg);
  const foreground = hslaToOklch(main);
  const cardBg = hslaToOklch(card);
  const cardFg = hslaToOklch(main);
  const borderColor = hslaToOklch(border);
  const inputColor = hslaToOklch(border);

  // Determine if it's a dark or light theme based on background lightness
  const bgLightness = parseFloat(bg.match(/(\d+)%(?!.*\d+%)/)[1]);
  const isDark = bgLightness < 50;

  // Create shadcn-compatible theme properties
  const shadcnProps = isDark ? {
    background,
    foreground,
    card: cardBg,
    cardForeground: cardFg,
    popover: cardBg,
    popoverForeground: cardFg,
    primary: 'oklch(0.922 0 0)',
    primaryForeground: background,
    secondary: hslaToOklch(card),
    secondaryForeground: foreground,
    muted: hslaToOklch(card),
    mutedForeground: hslaToOklch(secondary),
    accent: hslaToOklch(card),
    accentForeground: foreground,
    destructive: 'oklch(0.704 0.191 22.216)',
    border: borderColor,
    input: inputColor,
    ring: hslaToOklch(secondary),
  } : {
    background,
    foreground,
    card: cardBg,
    cardForeground: cardFg,
    popover: cardBg,
    popoverForeground: cardFg,
    primary: 'oklch(0.205 0 0)',
    primaryForeground: 'oklch(0.985 0 0)',
    secondary: hslaToOklch(card),
    secondaryForeground: foreground,
    muted: hslaToOklch(card),
    mutedForeground: hslaToOklch(secondary),
    accent: hslaToOklch(card),
    accentForeground: foreground,
    destructive: 'oklch(0.577 0.245 27.325)',
    border: borderColor,
    input: inputColor,
    ring: hslaToOklch(secondary),
  };

  // Find where to insert the new properties (after tags line)
  const tagsLineMatch = content.match(/(tags:\s*\[[^\]]+\],?\n)/);
  if (!tagsLineMatch) {
    console.log(`  Skipping - couldn't find tags line`);
    return;
  }

  const insertPosition = content.indexOf(tagsLineMatch[0]) + tagsLineMatch[0].length;

  // Create the new properties string
  const newProps = `
  // shadcn/ui color properties (oklch format)
  background: '${shadcnProps.background}',
  foreground: '${shadcnProps.foreground}',
  card: '${shadcnProps.card}',
  cardForeground: '${shadcnProps.cardForeground}',
  popover: '${shadcnProps.popover}',
  popoverForeground: '${shadcnProps.popoverForeground}',
  primary: '${shadcnProps.primary}',
  primaryForeground: '${shadcnProps.primaryForeground}',
  secondary: '${shadcnProps.secondary}',
  secondaryForeground: '${shadcnProps.secondaryForeground}',
  muted: '${shadcnProps.muted}',
  mutedForeground: '${shadcnProps.mutedForeground}',
  accent: '${shadcnProps.accent}',
  accentForeground: '${shadcnProps.accentForeground}',
  destructive: '${shadcnProps.destructive}',
  border: '${shadcnProps.border}',
  input: '${shadcnProps.input}',
  ring: '${shadcnProps.ring}',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
`;

  // Insert the new properties
  const newContent = content.slice(0, insertPosition) + newProps + content.slice(insertPosition);

  // Write the updated file
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`  ✓ Updated`);
}

/**
 * Find all theme files recursively
 */
function findThemeFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory() && entry.name !== 'node_modules') {
      findThemeFiles(fullPath, files);
    } else if (entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts' && entry.name !== 'types.ts') {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
const themesDir = path.join(__dirname, '..', 'static', 'themes');
console.log(`Migrating themes in: ${themesDir}\n`);

const themeFiles = findThemeFiles(themesDir);
console.log(`Found ${themeFiles.length} theme files\n`);

// Skip base themes as they're already updated
const filesToMigrate = themeFiles.filter(f =>
  !f.includes('base/light.ts') && !f.includes('base/dark.ts')
);

console.log(`Migrating ${filesToMigrate.length} themes...\n`);

for (const file of filesToMigrate) {
  migrateThemeFile(file);
}

console.log(`\nMigration complete!`);
