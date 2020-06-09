export class Upload {

    $key: string;
    file:File;
    name:string;
    url:string;
    size: number;
    extension:string;
    progress:number;
    createdAt: Date = new Date();

    constructor(file:File) {
      this.file = file;
    }
  }
export class FileUploaded{
  name:string;
  path:string;
}
