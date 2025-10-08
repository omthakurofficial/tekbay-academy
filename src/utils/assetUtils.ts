/**
 * Helper function to get the correct URL for assets in both development and production
 * @param relativePath - The relative path to the asset
 * @returns The correct URL for the asset
 */
export const getAssetPath = (relativePath: string): string => {
  // For local development, use relative paths
  // For production with GitHub Pages, use the PUBLIC_URL environment variable
  const basePath = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL || '' : '';
  return `${basePath}${relativePath}`;
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