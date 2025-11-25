// Conditional font loading based on environment
// This file acts as a router to prevent font compilation in development

// Use the appropriate fonts file based on environment
const fonts =
  process.env.NODE_ENV === 'production'
    ? require('./fonts.prod').default
    : require('./fonts.dev').default;

export default fonts;
