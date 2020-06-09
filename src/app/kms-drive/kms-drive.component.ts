import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Upload, FileUploaded } from '../uploads/shared/upload';
import { UploadService } from '../uploads/shared/upload.service';
import * as _ from "lodash";
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-kms-drive',
  templateUrl: './kms-drive.component.html',
  styleUrls: ['./kms-drive.component.scss']
})
export class KmsDriveComponent implements OnInit {
  datatoupload: any;
  uploadclicked: boolean = false;
  uploadeddata: boolean = false;
  selectedFiles: FileList;
  currentUpload: Upload;
  public dtuploaded: Array<any> = [];
  public pptimage = "./assets/images/ppt.png";
  @ViewChild('labelImport', { static: true })
  labelImport: ElementRef;
  constructor(
    private upSvc: UploadService,
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.db.collection("Uploads").valueChanges()
      .subscribe(event => {
        console.log(event)
      });

    // this.db.collection('Uploads').get().subscribe(querySnapshot => {
    //   querySnapshot.forEach(doc => {
    //   console.log(doc.data())

    //     this.dtuploaded.push(doc.data())
    //   })
    // })
  }

  uploadMulti() {
    this.uploadclicked = true;
    if (this.datatoupload >= 1) {
      this.uploadeddata = false;
    }
    let files = this.selectedFiles
    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.upSvc.pushUpload(this.currentUpload)
    })

  }

  DownloadFirebase(item) {

    this.dtuploaded.forEach(x => {
      // doc.data() is never undefined for query doc snapshots
      if (x == item) {
        // window.location.assign(doc.data().path);
        window.open(x.path);
      }
    });
  }

  detectFiles(event) {
    this.datatoupload = event.target.files.length;
    if (event.target.files.length >= 1 && this.uploadclicked == false) {
      this.uploadeddata = true;
    }
    this.selectedFiles = event.target.files;
    this.labelImport.nativeElement.innerText = Array.from(this.selectedFiles)
      .map(f => f.name)
      .join(', ');

  }

}
