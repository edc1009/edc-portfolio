/**
 * Utility function to handle image paths for GitHub Pages deployment
 * Adds the basePath prefix when needed
 */
export function getImagePath(path: string): string {
  // If it's already an absolute URL (http/https), return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // If it's a relative path starting with '/', add basePath for GitHub Pages
  if (path.startsWith('/')) {
    // In production (GitHub Pages), add the basePath
    if (process.env.NODE_ENV === 'production') {
      return `/edc-portfolio${path}`;
    }
    // In development, return as is
    return path;
  }
  
  // For other relative paths, return as is
  return path;
}