module.exports = {
  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': () => [`npx eslint --fix .`, `npx prettier --write .`],

  // Format MarkDown and JSON
  '**/*.(md|json)': () => `npx prettier --write .`,
};
