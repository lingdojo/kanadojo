# How to Create README Translation Issues

## Overview

This guide explains how to create GitHub issues for translating the README.md file into different languages.

## ⚠️ Important Note

Due to environment limitations, I cannot create GitHub issues directly. However, I've prepared complete issue templates in the `TRANSLATION_ISSUES.md` file that you can use to create the issues manually.

## 📝 Issues to Create

The following **4 issues** need to be created for README translations:

1. **French (France)** → `README.fr-fr.md`
2. **Spanish (Spain)** → `README.es-es.md`
3. **Chinese (Simplified)** → `README.zh-cn.md`
4. **German (Germany)** → `README.de-de.md`

## 🚀 How to Create the Issues

### Option 1: Manual Creation (Recommended)

1. Open the repository on GitHub: https://github.com/lingdojo/kanadojo
2. Navigate to the **Issues** tab
3. Click **New Issue**
4. For each language, copy the corresponding issue content from `TRANSLATION_ISSUES.md`:
   - **Issue Title**: Copy from the "Title:" line
   - **Issue Description**: Copy everything under "Description:"
   - **Labels**: Add the suggested labels: `documentation`, `translation`, `help wanted`, `good first issue`
5. Click **Submit new issue**
6. Repeat for all 4 languages

### Option 2: Using GitHub CLI (if available)

If you have the GitHub CLI (`gh`) installed and authenticated, you can run these commands:

```bash
# French (France)
gh issue create \
  --title "Translate README to French (France)" \
  --label "documentation,translation,help wanted,good first issue" \
  --body-file <(sed -n '/## Issue 1/,/^## Issue 2/p' TRANSLATION_ISSUES.md | sed '1d;$d')

# Spanish (Spain)
gh issue create \
  --title "Translate README to Spanish (Spain)" \
  --label "documentation,translation,help wanted,good first issue" \
  --body-file <(sed -n '/## Issue 2/,/^## Issue 3/p' TRANSLATION_ISSUES.md | sed '1d;$d')

# Chinese (Simplified)
gh issue create \
  --title "Translate README to Chinese (Simplified)" \
  --label "documentation,translation,help wanted,good first issue" \
  --body-file <(sed -n '/## Issue 3/,/^## Issue 4/p' TRANSLATION_ISSUES.md | sed '1d;$d')

# German (Germany)
gh issue create \
  --title "Translate README to German (Germany)" \
  --label "documentation,translation,help wanted,good first issue" \
  --body-file <(sed -n '/## Issue 4/,/^## 📌/p' TRANSLATION_ISSUES.md | sed '1d;$d')
```

### Option 3: Using GitHub API

You can also use the GitHub REST API to create issues programmatically. See the [GitHub API documentation](https://docs.github.com/en/rest/issues/issues#create-an-issue) for details.

## 📋 Issue Checklist

After creating the issues, verify that each issue has:

- [ ] Clear, descriptive title indicating the language
- [ ] Complete description with acceptance criteria
- [ ] Appropriate labels: `documentation`, `translation`, `help wanted`, `good first issue`
- [ ] Reference to the `TRANSLATION_ISSUES.md` file (if needed)

## 🎯 Expected Outcome

Once all 4 issues are created, contributors can:
- Pick a language they're fluent in
- Follow the detailed guidelines in each issue
- Submit high-quality translations as Pull Requests

## 📚 Additional Resources

- **Complete Issue Templates**: See `TRANSLATION_ISSUES.md` in this repository
- **Existing Translation Example**: Check `README.pt-br.md` for Portuguese (Brazil) translation
- **Original README**: `README.md` is the source document

## 💡 Tips for Issue Management

1. **Pin Important Issues**: Consider pinning these translation issues to make them more visible
2. **Project Board**: Create a "Translations" project board to track progress
3. **Milestones**: Create an "Internationalization" milestone and add these issues to it
4. **Assignees**: Let contributors self-assign when they start working on a translation
5. **Review**: Ensure translations are reviewed by native speakers before merging

---

## ❓ Questions?

If you have any questions about creating these issues or managing translations, please refer to the `CONTRIBUTING.md` file or reach out to the maintainers.
