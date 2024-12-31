import fs from 'fs';
import path from 'path'

class FileUtil {

  getImagePaths = async (dirPath:string): Promise<string[]> => {
    try {
      const files = await fs.promises.readdir(dirPath);
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'];
      const imagePaths = files
        .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
        .map(file => path.join(dirPath, file));
      return imagePaths;
    } catch (error) {
      console.error('Error reading directory:', error);
      throw error;
    }
  };
}

export default new FileUtil();