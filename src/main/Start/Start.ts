import path from 'path';
import fileUtil from '@main/util/FileUtil';

class Start {
  dirPath:string = path.resolve(__dirname, 'src/renderer/src/assets/images');

  getStartImagePath = ():Promise<string[]> => {
    console.log(__dirname,'__dirname')
    return fileUtil.getImagePaths(this.dirPath);
  }
}

export default new Start();