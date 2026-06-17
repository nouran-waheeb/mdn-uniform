/**
 * CHANGE BRAND COLORS HERE
 * Edit these values to update the entire website color scheme.
 * Colors are used in Tailwind (tailwind.config.ts) and CSS variables.
 */
export const themeColors = {
  /** Primary brand color - headers, buttons, accents */
  navy: "#1B2A4A",
  /** Background and text on dark sections */
  white: "#FFFFFF",
  /** Secondary backgrounds, borders */
  lightGrey: "#F4F5F7",
  /** Accent color for highlights and Year 7+ products */
  mintBlueGreen: "#5EC4B6",
  /** CTA buttons and sale badges (from brand materials) */
  orange: "#F5A623",
  /** Tagline and secondary accents */
  maroon: "#8B3A3A",
} as const;

/** CSS custom properties - applied in globals.css */
export const cssVariables = {
  light: {
    background: themeColors.white,
    foreground: themeColors.navy,
    muted: "#6B7280",
    border: "#E5E7EB",
    card: themeColors.white,
    accent: themeColors.mintBlueGreen,
  },
  dark: {
    background: "#0F172A",
    foreground: themeColors.white,
    muted: "#94A3B8",
    border: "#334155",
    card: "#1E293B",
    accent: themeColors.mintBlueGreen,
  },
} as const;
