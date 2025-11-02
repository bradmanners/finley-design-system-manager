# Finley AI Design System Manager

A comprehensive Figma plugin that combines design token management with intelligent screen generation across 10 unique themes.

## Features

### Token Management
- One-click import of all design tokens
- 10 color themes × 2 modes (light/dark) = 20 variations
- Typography styles (10 sizes)
- Spacing variables (8 sizes)
- Border radius variables (6 sizes)
- Shadow effect styles (5 sizes)

### Screen Generation
- Generate screens from JSON specifications
- Apply any of the 20 theme variations
- Choose from pre-built templates
- Or use custom JSON specs
- Automatic theme color application

### Batch Generation
- Generate the same screen across all 20 theme variations
- Side-by-side positioning for easy comparison
- Perfect for testing theme consistency

## Quick Start

### 1. Install the Plugin

1. Open Figma Desktop app
2. Go to **Plugins** → **Development** → **Import plugin from manifest**
3. Navigate to and select:
   ```
   finley-design-system-manager/manifest.json
   ```
4. Plugin is now available in Dev mode!

### 2. Run the Plugin

1. In Figma, go to **Plugins** → **Development** → **Finley AI Design System Manager**
2. The plugin panel will open with 3 tabs: Setup, Generate, and Batch

## Usage Guide

### Setup Tab - Import Design Tokens

1. Click **"Import All Design Tokens"**
2. Wait a few seconds while the plugin creates:
   - Color variables for all 20 theme variations
   - Spacing and border radius variables
   - Text styles for typography
   - Effect styles for shadows
3. Done! All tokens are now in Figma

**What Gets Created:**

**Color Variables (per theme):**
- `color/background/primary`
- `color/background/secondary`
- `color/accent/primary`
- `color/accent/secondary`
- `color/card/start` & `color/card/end`
- `color/header/start` & `color/header/end`
- `color/text/primary`, `secondary`, `onColor`, `button`

**Spacing Variables:**
- xs (4px), sm (8px), md (16px), lg (24px)
- xl (32px), 2xl (40px), 3xl (60px), 4xl (80px)

**Border Radius:**
- sm (8px), md (12px), lg (16px), xl (20px), 2xl (24px), full (50px)

**Text Styles:**
- Body/xs through Body/6xl (12px to 58px)

**Shadow Styles:**
- Shadow/sm through Shadow/2xl

### Generate Tab - Create Themed Screens

1. **Select a Theme** from the dropdown
   - Choose from 20 variations (10 themes × light/dark)

2. **Choose a Screen**
   - Select from pre-built templates:
     - Hello World
     - Login Screen
     - Onboarding Welcome
     - Profile Screen
     - Dashboard
   - OR paste custom JSON spec in the textarea

3. **Click "Generate Screen"**
   - Screen will be created with your selected theme
   - All colors automatically applied from theme tokens

### Batch Tab - Generate All Variations

1. **Choose a Screen** (template or custom JSON)
2. **Click "Generate in All 20 Themes"**
3. Confirm the action (creates 20 frames)
4. All 20 theme variations will be generated side-by-side

**Use Cases:**
- Compare how a screen looks across all themes
- Test design consistency
- Present multiple theme options to stakeholders
- Quickly iterate on screen designs

## Available Themes

Each theme has both Light and Dark modes:

1. **Classic Teal Lemon** - Refreshing teal and lemon combination
2. **Golden Hour** - Warm sunset-inspired palette
3. **Ocean Breeze** - Cool oceanic blues
4. **Mint Fresh** - Clean mint and aqua tones
5. **Vibrant Energy** - Bold and energetic colors
6. **Soft Pastels** - Gentle pastel palette
7. **Deep Waters** - Rich deep blues and purples
8. **Sunshine Bright** - Cheerful yellows and oranges
9. **Balanced Harmony** - Balanced neutral tones
10. **Cool Professional** - Professional slate and blue

## Custom Screen Specifications

You can create custom screens using JSON. Here's the format:

```json
{
  "name": "My Custom Screen",
  "width": 390,
  "height": 844,
  "elements": [
    {
      "type": "text",
      "content": "Hello World",
      "x": 50,
      "y": 100,
      "fontSize": 24,
      "colorToken": "color.text.primary"
    },
    {
      "type": "rectangle",
      "x": 50,
      "y": 200,
      "width": 290,
      "height": 60,
      "borderRadius": 12,
      "colorToken": "color.accent.primary"
    },
    {
      "type": "button",
      "x": 50,
      "y": 300,
      "width": 290,
      "height": 48,
      "borderRadius": 8,
      "colorToken": "color.accent.secondary"
    }
  ]
}
```

**Element Types:**
- `text` - Text elements with color from theme
- `rectangle` - Rectangles/cards with fill color
- `button` - Button-style rectangles

**Color Token Paths:**
Use dot notation to reference theme colors:
- `color.background.primary`
- `color.accent.primary`
- `color.text.primary`
- etc.

The plugin will automatically apply the correct color from the selected theme.

## Using Design Tokens in Figma

After importing tokens, use them in your designs:

**Colors:**
1. Select any element
2. In the Fill section, click the variable icon (🔗)
3. Choose from your theme colors

**Spacing:**
- Use Spacing variables for consistent padding/margins
- Apply to auto-layout spacing

**Typography:**
1. Select text
2. Apply Text Styles (Body/base, Body/lg, etc.)

**Shadows:**
1. Select an element
2. Go to Effects panel
3. Choose from Shadow styles

## Development

**Build the plugin:**
```bash
npm run build
```

**Watch mode (auto-rebuild on changes):**
```bash
npm run watch
```

**Update design tokens:**
1. Edit `tokens/design-tokens.json`
2. Run `npm run build`
3. In Figma: Right-click plugin → "Reload" or re-run it

**Add new screen templates:**
1. Create JSON file in `screens/` directory
2. Add import in `src/code.ts`
3. Add to `screenTemplates` object
4. Rebuild

## File Structure

```
finley-design-system-manager/
├── manifest.json           # Figma plugin manifest
├── package.json           # Node dependencies
├── tsconfig.json          # TypeScript config
├── src/
│   ├── code.ts           # Plugin logic (TypeScript)
│   └── ui.html           # Plugin UI
├── tokens/
│   └── design-tokens.json # All design tokens
├── screens/              # Screen templates
│   ├── hello-world-screen.json
│   ├── login-screen.json
│   ├── onboarding-welcome.json
│   ├── profile-screen.json
│   └── dashboard-screen.json
└── dist/                 # Built files (generated)
    ├── code.js
    └── ui.html
```

## Tips & Best practices

**Re-importing Tokens:**
- You can run "Import All Design Tokens" multiple times
- It will update existing variables/styles
- Safe to re-run after token updates

**Theme Consistency:**
- Always use variables instead of hard-coded colors
- Use colorToken references in screen specs
- Test designs across multiple themes early

**Performance:**
- Batch generation creates 20 frames - ensure you have space
- Consider generating fewer themes initially for testing
- Use viewport zoom to see all generated frames

**Iteration:**
- Start with template screens to understand the format
- Customize JSON specs for your specific needs
- Save successful specs for reuse

## Integration with Claude Code

This plugin is designed to work seamlessly with Claude Code for multi-platform development:

1. **Design in Figma** - Use this plugin to create themed screens
2. **Export Designs** - Use Figma's design specs
3. **Generate Code** - Use Claude Code to generate:
   - Android apps (Kotlin/Jetpack Compose)
   - iOS apps (Swift/SwiftUI)
   - Web apps (React/Vue/etc.)
4. **Consistent Theming** - All platforms use the same design tokens

The same tokens can be exported for:
- **Android**: `colors.xml`, `dimens.xml`
- **iOS**: SwiftUI Color extensions
- **Web**: CSS variables, Tailwind config, Styled Components

## Troubleshooting

**Plugin won't load:**
- Make sure you're using Figma Desktop (not web)
- Check manifest.json path is correct
- Look for errors in Figma → Plugins → Development

**Import fails:**
- Check console for errors (Plugins → Development → Open Console)
- Ensure design-tokens.json is valid JSON
- Try rebuilding: `npm run build`

**Screen generation issues:**
- Verify theme is selected
- Check screen JSON format
- Ensure colorToken paths match token structure
- Check console for detailed error messages

**Variables not showing:**
- Make sure you've run "Import All Design Tokens"
- Check Variables panel in Figma
- Variables are organized by collection (one per theme)

## Next Steps

1. **Import tokens** - Get all 20 themes into Figma
2. **Explore themes** - Try generating screens in different themes
3. **Build components** - Create a component library using the tokens
4. **Design screens** - Create your app screens with consistent tokens
5. **Export & Code** - Use Claude Code to generate multi-platform apps

## Credits

**Made with ❤️ for Finley AI Design System**

Built with:
- TypeScript
- esbuild
- Figma Plugin API
- 10 beautiful color themes

---

**Version:** 1.0.0
**License:** MIT
**Author:** Finley AI Team
