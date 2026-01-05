# Character Management Guide

This guide explains how to easily add, edit, and manage characters in the Grok?! website.

## Overview

The character system is designed to be simple and configurable. All character data is stored in a single JSON file (`data/characters.json`), making it easy to add new characters without touching any code.

## File Structure

```
grok-web/
├── data/
│   └── characters.json          # All character data
├── assets/images/art/Characters/ # Character images
├── characters.html              # Character list page
├── character-detail.html        # Individual character page
├── characters.js                # JavaScript for list page
└── character-detail.js          # JavaScript for detail page
```

## Adding a New Character

### Step 1: Add the Character Image

1. Place your character image in `assets/images/art/Characters/`
2. Use lowercase with underscores (e.g., `my_character_name.png`)

### Step 2: Add Character Data

Open `data/characters.json` and add a new entry:

```json
{
  "id": "my-character-name",
  "name": "My Character Name",
  "image": "assets/images/art/Characters/my_character_name.png",
  "description": "A detailed description of your character.",
  "type": "Character",
  "relatedCharacters": []
}
```

**Field Definitions:**

- **id**: Unique identifier (lowercase with hyphens, used in URLs)
- **name**: Display name shown on the website
- **image**: Path to character image
- **description**: Full description shown on detail page
- **type**: Either "Character" or "Item" (affects filtering)
- **relatedCharacters**: Array of character IDs to link (e.g., `["cassie", "mason-the-mallet"]`)

### Example: Complete Entry

```json
{
  "id": "shadow-knight",
  "name": "Shadow Knight",
  "image": "assets/images/art/Characters/shadow_knight.png",
  "description": "A mysterious warrior cloaked in darkness, wielding ancient shadow magic passed down through generations.",
  "type": "Character",
  "relatedCharacters": ["the-martian-blade", "blademortis"]
}
```

## Editing Existing Characters

1. Open `data/characters.json`
2. Find the character by searching for their `id`
3. Update any field you want to change
4. Save the file

The changes will appear immediately when you refresh the page.

## Linking Related Characters

To create connections between characters:

1. Note the `id` values of related characters
2. Add them to the `relatedCharacters` array:

```json
{
  "id": "cassie",
  "name": "Cassie",
  "relatedCharacters": ["mason-the-mallet", "henry-the-harpooned"]
}
```

Related characters will appear at the bottom of each character's detail page.

## Character Types

Currently supported types:
- **Character**: Living beings, NPCs, creatures
- **Item**: Weapons, potions, artifacts, equipment

You can filter by type on the characters page.

## Tips for Best Results

### Images
- **Format**: PNG or JPG
- **Recommended size**: 800x800 pixels or larger
- **Aspect ratio**: Square images work best
- **File size**: Keep under 500KB for faster loading

### Descriptions
- Write 1-3 sentences for the main description
- Focus on what makes the character unique
- Keep it engaging and mysterious

### Naming
- **File names**: Use lowercase with underscores (`dark_elf_warrior.png`)
- **IDs**: Use lowercase with hyphens (`dark-elf-warrior`)
- **Display names**: Use proper capitalization (`Dark Elf Warrior`)

## Common Tasks

### Adding Multiple Characters at Once

1. Open `data/characters.json`
2. Add all new entries, separated by commas:

```json
[
  {
    "id": "character-1",
    ...
  },
  {
    "id": "character-2",
    ...
  },
  {
    "id": "character-3",
    ...
  }
]
```

3. Make sure the last entry doesn't have a trailing comma
4. Save the file

### Removing a Character

1. Open `data/characters.json`
2. Delete the entire character object (including braces)
3. Remove the comma if it's the last entry
4. Save the file

### Reordering Characters

Characters appear in the order they're listed in the JSON file. Simply rearrange the entries to change the display order.

## Troubleshooting

### Character not showing up
- Check that the JSON is valid (no missing commas or quotes)
- Verify the image path is correct
- Make sure the `id` is unique

### Image not loading
- Check the file path matches exactly (case-sensitive)
- Verify the image exists in `assets/images/art/Characters/`
- Check file extension matches (`.png` vs `.PNG`)

### Related characters not appearing
- Verify the related character IDs exist in the JSON
- Check spelling of IDs (must match exactly)
- Make sure IDs are in an array: `["id1", "id2"]`

## JSON Validation

Before saving changes, ensure your JSON is valid:
1. Check all strings are in quotes
2. All entries except the last have commas
3. All braces and brackets are closed
4. Use a JSON validator online if unsure

## Future Enhancements

You can easily extend the character system by:
- Adding new fields to the JSON (e.g., "stats", "abilities", "faction")
- Updating `character-detail.js` to display new fields
- Adding new filtering options in `characters.js`

## Need Help?

If you encounter issues:
1. Check browser console for errors (F12)
2. Validate your JSON at jsonlint.com
3. Ensure all file paths are correct
4. Review this guide for proper formatting
