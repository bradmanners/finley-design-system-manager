// Finley AI Design System Manager
// Combined plugin for token management and screen generation

import designTokens from '../tokens/design-tokens.json';
import helloWorldScreen from '../screens/hello-world-screen.json';
import loginScreen from '../screens/login-screen.json';
import onboardingWelcome from '../screens/onboarding-welcome.json';
import profileScreen from '../screens/profile-screen.json';
import dashboardScreen from '../screens/dashboard-screen.json';

// Wealth Navigator screens
import welcomeScreen from '../screens/01-welcome-screen.json';
import onboardingAge from '../screens/02-onboarding-age.json';
import onboardingIncome from '../screens/03-onboarding-income.json';
import onboardingAssets from '../screens/04-onboarding-assets.json';
import onboardingSuper from '../screens/05-onboarding-super.json';
import dashboardWealth from '../screens/06-dashboard-wealth.json';
import progressTracking from '../screens/18-progress-tracking.json';
import wealthProjection from '../screens/20-wealth-projection.json';
import socialComparison from '../screens/22-social-comparison.json';
import goalSetting from '../screens/23-goal-setting.json';
import financialOverview from '../screens/financial-overview.json';

// Screen templates map
const screenTemplates: Record<string, any> = {
  'hello-world-screen': helloWorldScreen,
  'login-screen': loginScreen,
  'onboarding-welcome': onboardingWelcome,
  'profile-screen': profileScreen,
  'dashboard-screen': dashboardScreen,
  // Wealth Navigator app
  '01-welcome-screen': welcomeScreen,
  '02-onboarding-age': onboardingAge,
  '03-onboarding-income': onboardingIncome,
  '04-onboarding-assets': onboardingAssets,
  '05-onboarding-super': onboardingSuper,
  '06-dashboard-wealth': dashboardWealth,
  '18-progress-tracking': progressTracking,
  '20-wealth-projection': wealthProjection,
  '22-social-comparison': socialComparison,
  '23-goal-setting': goalSetting,
  'financial-overview': financialOverview
};

// Show UI
figma.showUI(__html__, { width: 450, height: 700, themeColors: true });

// Track current theme
let currentTheme = { name: 'classic-teal-lemon', mode: 'light' };

// Handle messages from UI
figma.ui.onmessage = async (msg) => {
  try {
    if (msg.type === 'import-tokens') {
      await importAllTokens();
      figma.ui.postMessage({ type: 'import-complete' });
    }

    if (msg.type === 'set-theme') {
      currentTheme = { name: msg.themeName, mode: msg.mode };
      figma.ui.postMessage({ type: 'theme-set', themeName: msg.themeName, mode: msg.mode });
    }

    if (msg.type === 'generate-screen') {
      const theme = { name: msg.themeName, mode: msg.mode };
      let screenSpec = msg.screenSpec;

      // Load template if specified
      if (screenSpec.template && screenTemplates[screenSpec.template]) {
        screenSpec = screenTemplates[screenSpec.template];
      }

      await generateScreen(screenSpec, theme);
      figma.ui.postMessage({ type: 'screen-generated' });
    }

    if (msg.type === 'generate-all-themes') {
      let screenSpec = msg.screenSpec;

      // Load template if specified
      if (screenSpec.template && screenTemplates[screenSpec.template]) {
        screenSpec = screenTemplates[screenSpec.template];
      }

      await generateAllThemes(screenSpec);
      figma.ui.postMessage({ type: 'all-themes-generated' });
    }

    if (msg.type === 'close') {
      figma.closePlugin();
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    figma.notify('❌ Error: ' + errorMessage);
    console.error(error);
    figma.ui.postMessage({ type: 'error', message: errorMessage });
  }
};

// Import all design tokens into Figma
async function importAllTokens() {
  figma.notify('Importing design tokens...');

  // Create color variables for all themes
  await createColorVariablesForAllThemes();

  // Create spacing variables
  await createSpacingVariables();

  // Create border radius variables
  await createBorderRadiusVariables();

  // Create border width variables
  await createBorderWidthVariables();

  // Create opacity variables
  await createOpacityVariables();

  // Load fonts and create text styles
  await createTextStyles();

  // Create effect styles for shadows
  await createEffectStyles();

  // Create text shadow effect styles
  await createTextShadowStyles();

  figma.notify('✅ All tokens imported successfully!');
}

// Create color variables for all themes
async function createColorVariablesForAllThemes() {
  const themes = Object.keys(designTokens.themes);

  for (const themeName of themes) {
    const themeData = designTokens.themes[themeName];

    if (themeData.light) {
      await createColorCollection(themeName, 'light', themeData.light);
    }

    if (themeData.dark) {
      await createColorCollection(themeName, 'dark', themeData.dark);
    }
  }
}

// Create a color variable collection for a theme
async function createColorCollection(themeName: string, mode: string, colorData: any) {
  const collectionName = `${themeName}-${mode}`;

  let collection = figma.variables.getLocalVariableCollections().find(c => c.name === collectionName);
  if (!collection) {
    collection = figma.variables.createVariableCollection(collectionName);
  }

  const modeId = collection.modes[0].modeId;

  if (colorData.color) {
    await createColorVarsRecursive(collection, modeId, colorData.color, []);
  }
}

// Recursively create color variables
async function createColorVarsRecursive(collection: VariableCollection, modeId: string, obj: any, path: string[]) {
  for (const [key, value] of Object.entries(obj)) {
    if (value && typeof value === 'object') {
      if ((value as any).value && (value as any).type === 'color') {
        const varName = [...path, key].join('/');
        const colorValue = (value as any).value;

        // Find existing variable in this collection
        const allVariables = figma.variables.getLocalVariables();
        let variable = allVariables.find(v => v.name === varName && v.variableCollectionId === collection.id);

        if (!variable) {
          variable = figma.variables.createVariable(varName, collection, 'COLOR');
        }

        const rgb = hexToRgb(colorValue);
        if (rgb) {
          variable.setValueForMode(modeId, rgb);
        }
      } else {
        await createColorVarsRecursive(collection, modeId, value, [...path, key]);
      }
    }
  }
}

// Create spacing variables
async function createSpacingVariables() {
  const spacing = designTokens.global.spacing;
  const collectionName = 'Spacing';

  let collection = figma.variables.getLocalVariableCollections().find(c => c.name === collectionName);
  if (!collection) {
    collection = figma.variables.createVariableCollection(collectionName);
  }

  const modeId = collection.modes[0].modeId;

  for (const [key, value] of Object.entries(spacing)) {
    if (value && typeof value === 'object' && (value as any).value) {
      const varName = key;
      const numValue = parseFloat((value as any).value);

      // Find existing variable in this collection
      const allVariables = figma.variables.getLocalVariables();
      let variable = allVariables.find(v => v.name === varName && v.variableCollectionId === collection.id);

      if (!variable) {
        variable = figma.variables.createVariable(varName, collection, 'FLOAT');
      }

      variable.setValueForMode(modeId, numValue);
    }
  }
}

// Create border radius variables
async function createBorderRadiusVariables() {
  const borderRadius = designTokens.global.borderRadius;
  const collectionName = 'Border Radius';

  let collection = figma.variables.getLocalVariableCollections().find(c => c.name === collectionName);
  if (!collection) {
    collection = figma.variables.createVariableCollection(collectionName);
  }

  const modeId = collection.modes[0].modeId;

  for (const [key, value] of Object.entries(borderRadius)) {
    if (value && typeof value === 'object' && (value as any).value) {
      const varName = key;
      const numValue = parseFloat((value as any).value);

      // Find existing variable in this collection
      const allVariables = figma.variables.getLocalVariables();
      let variable = allVariables.find(v => v.name === varName && v.variableCollectionId === collection.id);

      if (!variable) {
        variable = figma.variables.createVariable(varName, collection, 'FLOAT');
      }

      variable.setValueForMode(modeId, numValue);
    }
  }
}

// Create border width variables
async function createBorderWidthVariables() {
  const borderWidth = designTokens.global.borderWidth;
  const collectionName = 'Border Width';

  let collection = figma.variables.getLocalVariableCollections().find(c => c.name === collectionName);
  if (!collection) {
    collection = figma.variables.createVariableCollection(collectionName);
  }

  const modeId = collection.modes[0].modeId;

  for (const [key, value] of Object.entries(borderWidth)) {
    if (value && typeof value === 'object' && (value as any).value) {
      const varName = key;
      const numValue = parseFloat((value as any).value);

      // Find existing variable in this collection
      const allVariables = figma.variables.getLocalVariables();
      let variable = allVariables.find(v => v.name === varName && v.variableCollectionId === collection.id);

      if (!variable) {
        variable = figma.variables.createVariable(varName, collection, 'FLOAT');
      }

      variable.setValueForMode(modeId, numValue);
    }
  }
}

// Create opacity variables
async function createOpacityVariables() {
  const opacity = designTokens.global.opacity;
  const collectionName = 'Opacity';

  let collection = figma.variables.getLocalVariableCollections().find(c => c.name === collectionName);
  if (!collection) {
    collection = figma.variables.createVariableCollection(collectionName);
  }

  const modeId = collection.modes[0].modeId;

  for (const [key, value] of Object.entries(opacity)) {
    if (value && typeof value === 'object' && (value as any).value) {
      const varName = key;
      const numValue = (value as any).value;

      // Find existing variable in this collection
      const allVariables = figma.variables.getLocalVariables();
      let variable = allVariables.find(v => v.name === varName && v.variableCollectionId === collection.id);

      if (!variable) {
        variable = figma.variables.createVariable(varName, collection, 'FLOAT');
      }

      variable.setValueForMode(modeId, numValue);
    }
  }
}

// Create text styles for typography
async function createTextStyles() {
  const typography = designTokens.global.typography;
  let fontFamily = typography.fontFamily.primary.value.split(',')[0].trim().replace(/['"]/g, '');

  // Font weight to style name mapping
  const fontWeightToStyle: Record<number, string> = {
    300: 'Light',
    400: 'Regular',
    500: 'Medium',
    600: 'SemiBold',
    700: 'Bold',
    800: 'ExtraBold'
  };

  // Try to load the font weights, fall back to Inter if it fails
  let availableFontWeights: Record<number, string> = {};
  for (const [weight, style] of Object.entries(fontWeightToStyle)) {
    try {
      await figma.loadFontAsync({ family: fontFamily, style });
      availableFontWeights[parseInt(weight)] = style;
    } catch (e) {
      // Skip unavailable weights
    }
  }

  // If no weights available, fall back to Inter
  if (Object.keys(availableFontWeights).length === 0) {
    console.log(`Font ${fontFamily} not available, using Inter instead`);
    fontFamily = 'Inter';
    for (const [weight, style] of Object.entries(fontWeightToStyle)) {
      try {
        await figma.loadFontAsync({ family: fontFamily, style });
        availableFontWeights[parseInt(weight)] = style;
      } catch (e) {
        // Skip unavailable weights
      }
    }
  }

  // Create text styles for each font size and weight combination
  for (const [sizeName, sizeData] of Object.entries(typography.fontSize)) {
    if (sizeData && typeof sizeData === 'object' && (sizeData as any).value) {
      const fontSize = parseFloat((sizeData as any).value);

      for (const [weightName, weightData] of Object.entries(typography.fontWeight)) {
        if (weightData && typeof weightData === 'object' && (weightData as any).value) {
          const weightValue = (weightData as any).value;
          const fontStyle = availableFontWeights[weightValue];

          if (fontStyle) {
            const styleName = `${sizeName}/${weightName}`;

            let textStyle = figma.getLocalTextStyles().find(s => s.name === styleName);
            if (!textStyle) {
              textStyle = figma.createTextStyle();
              textStyle.name = styleName;
            }

            // Set font name and size
            textStyle.fontName = { family: fontFamily, style: fontStyle };
            textStyle.fontSize = fontSize;

            // Set line height if available (using normal as default)
            if (typography.lineHeight?.normal) {
              const lineHeightValue = typography.lineHeight.normal.value;
              textStyle.lineHeight = { value: lineHeightValue, unit: 'PERCENT' };
            }
          }
        }
      }
    }
  }
}

// Create effect styles for shadows
async function createEffectStyles() {
  const shadows = designTokens.global.shadow;

  for (const [shadowName, shadowData] of Object.entries(shadows)) {
    if (shadowData && typeof shadowData === 'object' && (shadowData as any).value) {
      const styleName = `Shadow/${shadowName}`;
      const shadowValue = (shadowData as any).value;

      let effectStyle = figma.getLocalEffectStyles().find(s => s.name === styleName);
      if (!effectStyle) {
        effectStyle = figma.createEffectStyle();
        effectStyle.name = styleName;
      }

      const effect = parseShadowToEffect(shadowValue);
      if (effect) {
        effectStyle.effects = [effect];
      }
    }
  }
}

// Create text shadow effect styles
async function createTextShadowStyles() {
  const textShadows = designTokens.global.textShadow;

  for (const [shadowName, shadowData] of Object.entries(textShadows)) {
    if (shadowData && typeof shadowData === 'object' && (shadowData as any).value) {
      const styleName = `TextShadow/${shadowName}`;
      const shadowValue = (shadowData as any).value;

      let effectStyle = figma.getLocalEffectStyles().find(s => s.name === styleName);
      if (!effectStyle) {
        effectStyle = figma.createEffectStyle();
        effectStyle.name = styleName;
      }

      const effect = parseShadowToEffect(shadowValue);
      if (effect) {
        effectStyle.effects = [effect];
      }
    }
  }
}

// Generate a screen with the current theme
async function generateScreen(screenSpec: any, theme: { name: string; mode: string }) {
  figma.notify(`Generating screen with ${theme.name} - ${theme.mode}...`);

  // Get theme colors
  const themeData = designTokens.themes[theme.name]?.[theme.mode];
  if (!themeData) {
    throw new Error(`Theme ${theme.name} ${theme.mode} not found`);
  }

  // Create frame
  const frame = figma.createFrame();
  frame.name = `${screenSpec.name} - ${theme.name} ${theme.mode}`;
  const width = typeof screenSpec.width === 'number' ? screenSpec.width : parseFloat(screenSpec.width) || 390;
  const height = typeof screenSpec.height === 'number' ? screenSpec.height : parseFloat(screenSpec.height) || 844;
  frame.resize(width, height);

  // Set background
  const bgColor = themeData.color?.background?.primary?.value;
  if (bgColor) {
    const rgb = hexToRgb(bgColor);
    if (rgb) {
      frame.fills = [{ type: 'SOLID', color: rgb }];
    }
  }

  // Load font from tokens
  const typography = designTokens.global.typography;
  let fontFamily = typography.fontFamily.primary.value.split(',')[0].trim().replace(/['"]/g, '');

  // Try to load Comfortaa font with different weights
  const fontsToLoad = [
    { family: fontFamily, style: 'Regular' },
    { family: fontFamily, style: 'Light' },
    { family: fontFamily, style: 'Medium' },
    { family: fontFamily, style: 'SemiBold' },
    { family: fontFamily, style: 'Bold' }
  ];

  let fontLoaded = false;
  for (const font of fontsToLoad) {
    try {
      await figma.loadFontAsync(font);
      fontLoaded = true;
    } catch (e) {
      // Continue trying other weights
    }
  }

  // Fall back to Inter if Comfortaa is not available
  if (!fontLoaded) {
    console.log(`Font ${fontFamily} not available, using Inter instead`);
    fontFamily = 'Inter';
    await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
    await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
  }

  // Generate elements
  for (const element of screenSpec.elements || []) {
    await createElementWithTheme(frame, element, themeData, fontFamily);
  }

  // Center in viewport
  figma.viewport.scrollAndZoomIntoView([frame]);
}

// Create element with theme colors
async function createElementWithTheme(parent: FrameNode, element: any, themeData: any, fontFamily: string = 'Inter') {
  if (element.type === 'text') {
    const text = figma.createText();

    // Set font first before setting characters
    try {
      await figma.loadFontAsync({ family: fontFamily, style: 'Regular' });
      text.fontName = { family: fontFamily, style: 'Regular' };
    } catch (e) {
      // Fall back to Inter if font not available
      await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
      text.fontName = { family: 'Inter', style: 'Regular' };
    }

    text.characters = element.content || '';

    // Parse numeric values
    const x = typeof element.x === 'number' ? element.x : parseFloat(element.x) || 0;
    const y = typeof element.y === 'number' ? element.y : parseFloat(element.y) || 0;
    text.x = x;
    text.y = y;

    if (element.fontSize) {
      const fontSize = typeof element.fontSize === 'number' ? element.fontSize : parseFloat(element.fontSize);
      text.fontSize = fontSize;
    }

    // Apply theme color
    const textColor = element.colorToken ? getTokenValue(themeData, element.colorToken) : element.color;
    if (textColor) {
      const rgb = hexToRgb(textColor);
      if (rgb) {
        text.fills = [{ type: 'SOLID', color: rgb }];
      }
    }

    parent.appendChild(text);
  }

  if (element.type === 'rectangle' || element.type === 'button') {
    const rect = figma.createRectangle();

    // Parse numeric values
    const x = typeof element.x === 'number' ? element.x : parseFloat(element.x) || 0;
    const y = typeof element.y === 'number' ? element.y : parseFloat(element.y) || 0;
    const width = typeof element.width === 'number' ? element.width : parseFloat(element.width) || 100;
    const height = typeof element.height === 'number' ? element.height : parseFloat(element.height) || 40;

    rect.x = x;
    rect.y = y;
    rect.resize(width, height);

    // Apply theme color
    const fillColor = element.colorToken ? getTokenValue(themeData, element.colorToken) : element.backgroundColor;
    if (fillColor) {
      const rgb = hexToRgb(fillColor);
      if (rgb) {
        rect.fills = [{ type: 'SOLID', color: rgb }];
      }
    }

    if (element.borderRadius) {
      const borderRadius = typeof element.borderRadius === 'number' ? element.borderRadius : parseFloat(element.borderRadius);
      rect.cornerRadius = borderRadius;
    }

    // Apply shadow effect if specified
    if (element.shadowToken) {
      const shadowValue = getShadowTokenValue(element.shadowToken);
      if (shadowValue) {
        const effect = parseShadowToEffect(shadowValue);
        if (effect) {
          rect.effects = [effect];
        }
      }
    }

    parent.appendChild(rect);
  }

  if (element.type === 'circle') {
    const ellipse = figma.createEllipse();

    // Parse numeric values
    const x = typeof element.x === 'number' ? element.x : parseFloat(element.x) || 0;
    const y = typeof element.y === 'number' ? element.y : parseFloat(element.y) || 0;
    const width = typeof element.width === 'number' ? element.width : parseFloat(element.width) || 100;
    const height = typeof element.height === 'number' ? element.height : parseFloat(element.height) || 100;

    ellipse.x = x;
    ellipse.y = y;
    ellipse.resize(width, height);

    // Apply theme color
    const fillColor = element.colorToken ? getTokenValue(themeData, element.colorToken) : element.backgroundColor;
    if (fillColor) {
      const rgb = hexToRgb(fillColor);
      if (rgb) {
        ellipse.fills = [{ type: 'SOLID', color: rgb }];
      }
    }

    // Handle arc segments for donut charts
    if (element.arcLength !== undefined) {
      const arcLength = typeof element.arcLength === 'number' ? element.arcLength : parseFloat(element.arcLength);
      // Use arc data to create a segment
      ellipse.arcData = {
        startingAngle: 0,
        endingAngle: (arcLength / 360) * 2 * Math.PI,
        innerRadius: 0.67 // Creates donut effect
      };
    }

    parent.appendChild(ellipse);
  }
}

// Generate screen in all 4 themes
async function generateAllThemes(screenSpec: any) {
  figma.notify('Generating in all 4 themes...');

  const themes = [
    'classic-teal-lemon', 'ocean-breeze', 'soft-pastels', 'cool-professional'
  ];

  let xOffset = 0;
  for (const themeName of themes) {
    for (const mode of ['light', 'dark']) {
      await generateScreen(screenSpec, { name: themeName, mode });

      // Position frames side by side
      const frames = figma.currentPage.children.filter(n => n.type === 'FRAME');
      const lastFrame = frames[frames.length - 1] as FrameNode;
      if (lastFrame) {
        lastFrame.x = xOffset;
        xOffset += lastFrame.width + 50;
      }
    }
  }

  figma.notify('✅ Generated in all 8 theme variations!');
}

// Helper: Get token value from path
function getTokenValue(obj: any, path: string): string | null {
  const parts = path.split('.');
  let current = obj;

  for (const part of parts) {
    if (current && current[part]) {
      current = current[part];
    } else {
      return null;
    }
  }

  return current?.value || null;
}

// Helper: Get shadow token value from global tokens
function getShadowTokenValue(tokenPath: string): string | null {
  // Shadow tokens are in global.shadow (e.g., "shadow.button")
  const parts = tokenPath.split('.');

  // If path starts with "shadow", look in global.shadow
  if (parts[0] === 'shadow' && parts.length >= 2) {
    const shadowName = parts[1]; // e.g., "button"
    const shadowData = designTokens.global.shadow[shadowName];
    return shadowData?.value || null;
  }

  // Otherwise try to get from global tokens path
  let current: any = designTokens.global;
  for (const part of parts) {
    if (current && current[part]) {
      current = current[part];
    } else {
      return null;
    }
  }

  return current?.value || null;
}

// Helper: Convert hex color to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : null;
}

// Helper: Parse CSS shadow to Figma effect
function parseShadowToEffect(shadowString: string): DropShadowEffect | null {
  try {
    const parts = shadowString.trim().split(/\s+/);
    const x = parseFloat(parts[0]);
    const y = parseFloat(parts[1]);
    const blur = parseFloat(parts[2]);

    const colorMatch = shadowString.match(/rgba?\(([^)]+)\)/);
    let r = 0, g = 0, b = 0, a = 1;

    if (colorMatch) {
      const colorParts = colorMatch[1].split(',').map(p => parseFloat(p.trim()));
      r = colorParts[0] / 255;
      g = colorParts[1] / 255;
      b = colorParts[2] / 255;
      a = colorParts[3] !== undefined ? colorParts[3] : 1;
    }

    return {
      type: 'DROP_SHADOW',
      color: { r, g, b, a },
      offset: { x, y },
      radius: blur,
      visible: true,
      blendMode: 'NORMAL'
    };
  } catch (e) {
    return null;
  }
}
