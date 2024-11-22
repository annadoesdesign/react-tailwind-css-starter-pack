const fs = require('fs');
const path = require('path');

// Path to your CSS file
const cssFilePath = path.join(__dirname, 'src/App.css');
// Path to save generated Tailwind config
const tailwindConfigPath = path.join(__dirname, 'tailwind.config.js');

// Helper function to extract variables from CSS
const extractVariables = (cssContent) => {
  const regex = /--([\w-]+):\s*([^;]+);/g;
  const colors = {};
  let match;

  while ((match = regex.exec(cssContent)) !== null) {
    const [_, key, value] = match;
    const [group, name] = key.split('-');
    if (!colors[group]) colors[group] = {};
    colors[group][name] = value.trim();
  }

  return colors;
};

// Generate Tailwind config
const generateConfig = (colors) => `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: ${JSON.stringify(colors, null, 2)},
    },
  },
  plugins: [],
};
`;

// Read CSS file and generate config
fs.readFile(cssFilePath, 'utf8', (err, cssContent) => {
  if (err) {
    console.error('Error reading CSS file:', err);
    return;
  }

  const colors = extractVariables(cssContent);
  const configContent = generateConfig(colors);

  fs.writeFile(tailwindConfigPath, configContent, (err) => {
    if (err) {
      console.error('Error writing Tailwind config:', err);
    } else {
      console.log('Tailwind config generated successfully!');
    }
  });
});