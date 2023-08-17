const colorMap = {};

export function getColorForName(name) {
  if (colorMap[name]) {
    return colorMap[name];
  } else {
    const hash = hashCode(name); // Generate a simple hash code for the name
    const color = getRandomColorFromHash(hash);
    colorMap[name] = color;
    return color;
  }
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
const predefinedColors = [
  "FF5733",
  "FFC300",
  "4CAF50",
  "2979FF",
  "9C27B0",
  "F44336",
  "00BCD4",
  "FF9800",
  // Add more color codes to the array as needed
];

function getRandomColorFromHash(seed) {
  const positiveSeed = seed < 0 ? -seed : seed; // Ensure seed is positive
  const randomIndex = positiveSeed % predefinedColors.length;
  return predefinedColors[randomIndex];
}
