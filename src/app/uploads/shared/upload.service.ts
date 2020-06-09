import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Upload } from './upload';
import * as firebase from 'firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UploadService {

  constructor(private db: AngularFirestore) { }

  private basePath: string = '/uploads';
  filestobeadded: any[] = [];
  uploads: AngularFireList<Upload[]>;

  pushUpload(upload: Upload) {
    this.filestobeadded = [];
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // upload in progress
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100 // CHANGEMENT IS HERE
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          upload.url = url;

          var filename = upload.file.name.split('.');
          upload.name = filename[0];
          var ext = upload.file.name.substr(upload.file.name.lastIndexOf('.') + 1);
          upload.extension = ext;
          upload.size = upload.file.size
          this.saveFileData(upload)

        });

      }
    );
  }



  // Writes the file details to the realtime db
  public saveFileData(upload) {

    this.db.collection('Uploads').add({
      name: upload.name,
      extension: upload.extension,
      path: upload.url,
      size: upload.size,
      lastModified: new Date().toString()
    });
    this.filestobeadded.push({
      name: upload.name,
      extension: upload.extension,
      path: upload.url,
      size: upload.size,
      lastModified: new Date().toString()
    })
    // this.db.list(`${this.basePath}/`).push(upload);
  }

  // deleteUpload(upload: Upload) {
  //   this.deleteFileData(upload.$key)
  //   .then( () => {
  //     this.deleteFileStorage(upload.name)
  //   })
  //   .catch(error => console.log(error))
  // }

  // Deletes the file details from the realtime db
  // private deleteFileData(key: string) {
  //   return this.db.list(`${this.basePath}/`).remove(key);
  // }

  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name: string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }
}
