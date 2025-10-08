/**
 * Helper function to get the correct URL for assets in both development and production
 * @param relativePath - The relative path to the asset (e.g., '/images/logo.png')
 * @returns The correct URL for the asset
 */
export const getAssetPath = (relativePath: string): string => {
  // In Create React App, files in /public are served from the root
  // During development: http://localhost:3000/images/logo.png
  // In production with GitHub Pages: https://username.github.io/repo/images/logo.png
  const publicUrl = process.env.PUBLIC_URL || '';
  // Ensure relativePath starts with /
  const path = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;
  return `${publicUrl}${path}`;
};

/**
 * Get a random Unsplash image with specific dimensions and keywords
 * @param width - The width of the image
 * @param height - The height of the image
 * @param keywords - Keywords related to the image content
 */
export const getUnsplashImage = (width: number, height: number, keywords: string): string => {
  // Format: https://source.unsplash.com/random/1200x800/?cloud,technology
  return `https://source.unsplash.com/random/${width}x${height}/?${keywords.replace(/\s+/g, ',')}`;
};