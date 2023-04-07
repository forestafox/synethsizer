export const themes = {
  Harmony: {
    multiplier: 90,
    glowing: 0,
    trailing: 0,
    inverseSpeed: 2000,
    themeX: (ndex, multiplier, num) =>
      Math.cos((2 * Math.PI * ndex) / multiplier + num) * 2,
    themeY: (ndex, multiplier, num) =>
      Math.sin((2 * Math.PI * ndex) / multiplier + num) * 2,
    themeZ: (ndex, multiplier, num) => Math.sin(num * (ndex + 1)),
  },
  Spirals: {
    multiplier: 60,
    inverseSpeed: 800,
    glowing: 0,
    trailing: 0,
    themeX: (ndex, multiplier, num) =>
      Math.sin(num * (multiplier / (ndex + 1))) * Math.sin(num * (ndex + 1)),
    themeY: (ndex, multiplier, num) =>
      Math.cos(num * (multiplier / (ndex + 1))) * Math.sin(num * (ndex + 1)),
    themeZ: (ndex, multiplier, num) =>
      Math.cos(num * (multiplier / (ndex + 1))) * Math.sin(num * (ndex + 1)),
  },
  Gathering: {
    multiplier: 33,
    inverseSpeed: 333,
    glowing: 0,
    trailing: 0,
    themeX: (ndex, multiplier, num) => Math.cos(num * (ndex + 1)),
    themeY: (ndex, multiplier, num) =>
      Math.cos(num * (multiplier / (ndex + 1))) * Math.sin(num * (ndex + 1)),
    themeZ: (ndex, multiplier, num) =>
      Math.cos(num * (multiplier / (ndex + 1))) * Math.sin(num * (ndex + 1)),
  },
  Intersection: {
    multiplier: 33,
    inverseSpeed: 1369,
    glowing: 0,
    trailing: 0,
    themeX: (ndex, multiplier, num) => Math.tan(num * (ndex + 1)),
    themeY: (ndex, multiplier, num) =>
      Math.cos(num * (multiplier / (ndex + 1))) / Math.sin(num * (ndex + 1)),
    themeZ: (ndex, multiplier, num) =>
      Math.cos(num * (multiplier / (ndex + 1))) / Math.sin(num * (ndex + 1)),
  },
  Path: {
    multiplier: 34,
    inverseSpeed: 340,
    glowing: 0,
    trailing: 0,
    themeX: (ndex, multiplier, num) => 3 * Math.sin(num * (ndex + 1)),
    themeY: (ndex, multiplier, num) =>
      (num / 1.8) * ndex + (4 * ndex) / multiplier,
    themeZ: (ndex, multiplier, num) =>
      -Math.abs(num * (ndex + 1) + Math.PI / 2),
  },
};
