import path from 'path';
import fileUtil from '@main/util/FileUtil';

class Start {
  resourcesPaths:string = "resources/images";
  dirPath:string = path.resolve(__dirname,'../../',this.resourcesPaths);

  getStartImagePath = ():Promise<string[]> => {
    return fileUtil.getImagePaths(this.dirPath,this.resourcesPaths);
  }
}

export default new Start();