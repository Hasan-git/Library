import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DriveFile } from 'src/app/blocks/interface/file';

@Component({
  selector: 'app-drive-file-table',
  templateUrl: './drive-file-table.component.html',
  styleUrls: ['./drive-file-table.component.scss'],
})
export class DriveFileTableComponent implements OnInit {

  files: DriveFile[] = []
  constructor(
    private db: AngularFirestore
  ) {

  }

  ngOnInit(): void {
    this.db.collection("Uploads").valueChanges()
      .subscribe((files: any[]) => {
        this.files = files
      });
  }

  getIconByExt(ext: string) {
    ext = ext.toLowerCase();

    if (ext == 'png' || ext == 'jpeg' || ext == 'jpg')
      return 'img-48.png'
    else if (ext == 'xlsx' || ext == 'xls')
      return 'excel-64.png'
    else if (ext == 'doc' || ext == 'docx')
      return 'word-64.png'
    else if (ext == 'ppt')
      return 'ppt-64.png'
    else
      return 'file-64.png'

  }

}
