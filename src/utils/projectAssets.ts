// Define the interface for the imported modules
interface ImageModule {
  default: string;
}

// Use ImportMetaGlob to get the correct typing from Vite
const imageModules = import.meta.glob<ImageModule>('../assets/FDSAPPImages/*.png', { eager: true });

// Convert the object into a simple lookup map
export const fdsImages: Record<string, string> = {};

Object.entries(imageModules).forEach(([path, module]) => {
  // Extract filename to use as a key
  const fileName = path.split('/').pop()?.replace('.png', '');
  if (fileName) {
    fdsImages[fileName] = module.default;
  }
});