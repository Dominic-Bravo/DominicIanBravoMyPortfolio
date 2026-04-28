interface ImageModule {
  default: string;
}

// Helper function to process a glob result into a dictionary
const processImages = (modules: Record<string, ImageModule>) => {
  const result: Record<string, string> = {};
  Object.entries(modules).forEach(([path, module]) => {
    const fileName = path.split('/').pop()?.replace('.png', '');
    if (fileName) {
      result[fileName] = module.default;
    }
  });
  return result;
};

// Import both folders
const fdsModules = import.meta.glob<ImageModule>('../assets/FDSAPPImages/*.png', { eager: true });
const habHAModules = import.meta.glob<ImageModule>('../assets/habHAImages/*.png', { eager: true });

// Export separate objects
export const fdsImages = processImages(fdsModules);
export const habHAImages = processImages(habHAModules);