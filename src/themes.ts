export type ThemeName = "Standard" | "Violet" | "Meconopsis" | "Temari";

export const themes: Record<ThemeName, Record<string, string>> = {
  Standard: {
    "--lightdark": "#F3EDFF",
    "--inai-purple": "#A198B3",
    "--ina-orange": "#FBA147",
    "--ika-purple": "#564F68",
    "--ink-black": "#000000",
    "--background-image": "url('./Pattern.png')",
    "--text-color": "#F3EDFF",
    "--background": "#F3EDFF",
  },
  Violet: {
    "--lightdark": "#f0eeffff",
    "--inai-purple": "#B8A3E6",
    "--ina-orange": "#48A4CB",
    "--ika-purple": "#1D1B20",
    "--ink-black": "#2D1B3B",
    "--background-image": "url('./Pattern2.png')",
    "--text-color": "#ffffffff",
    "--background": "#eefaffff",
  },
  Meconopsis: {
    "--lightdark": "#23242B",
    "--inai-purple": "#23242B",
    "--ina-orange": "#0066ccff",
    "--ika-purple": "#8bb0ffff",
    "--ink-black": "#000000",
    "--background-image": "none",
    "--text-color": "#1E90FF",
    "--background": "#0100D1",
  },
  Temari: {
    "--lightdark": "#181818",
    "--inai-purple": "#23242B",
    "--ina-orange": "#E53935",
    "--ika-purple": "#a3a3a3ff",
    "--ink-black": "#000000",
    "--background-image": "none",
    "--text-color": "#E53935",
    "--background": "#5a5a5aff",
  },
};