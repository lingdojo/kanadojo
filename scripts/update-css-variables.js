const fs = require('fs');
const path = require('path');

/**
 * CSS variable mapping from old to new shadcn format
 */
const variableMapping = {
  '--background-color': '--background',
  '--card-color': '--card',
  '--border-color': '--border',
  '--main-color': '--foreground',
  '--secondary-color': '--muted-foreground',
};

/**
 * Update CSS variable names in a file
 */
function updateCssVariables(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  let hasChanges = false;

  // Replace each old variable with new one
  for (const [oldVar, newVar] of Object.entries(variableMapping)) {
    // Match var(--old-name) patterns
    const regex = new RegExp(`var\\(${oldVar.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\)`, 'g');
    if (regex.test(newContent)) {
      newContent = newContent.replace(regex, `var(${newVar})`);
      hasChanges = true;
    }

    // Also match just the variable name (without var())
    const varOnlyRegex = new RegExp(oldVar.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
    // But be careful not to replace in comments or string literals
    // For now, we'll just do the var() replacement which is safer
  }

  if (hasChanges) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`  ✓ Updated: ${path.relative(process.cwd(), filePath)}`);
    return true;
  }

  return false;
}

/**
 * Find all files to update
 */
function findFilesToUpdate(dir, extensions = ['.tsx', '.ts', '.css', '.jsx', '.js'], files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // Skip certain directories
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.git', 'dist', 'build', 'scripts', 'static/themes'].includes(entry.name)) {
        continue;
      }
      findFilesToUpdate(fullPath, extensions, files);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (extensions.includes(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

// Main execution
const projectRoot = path.join(__dirname, '..');
console.log(`Updating CSS variables in: ${projectRoot}\n`);

console.log('Finding files to update...');
const filesToUpdate = findFilesToUpdate(projectRoot);
console.log(`Found ${filesToUpdate.length} files to check\n`);

console.log('Updating CSS variable names...\n');
let updatedCount = 0;

for (const file of filesToUpdate) {
  if (updateCssVariables(file)) {
    updatedCount++;
  }
}

console.log(`\nMigration complete! Updated ${updatedCount} files.`);
console.log('\nVariable mapping:');
for (const [oldVar, newVar] of Object.entries(variableMapping)) {
  console.log(`  ${oldVar} → ${newVar}`);
}
