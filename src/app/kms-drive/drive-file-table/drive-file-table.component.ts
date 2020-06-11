import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DriveFile } from 'src/app/blocks/interface/driveFile';
import { Gallery, ImageSize, ThumbnailsPosition, GalleryItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { UploadService } from 'src/app/uploads/shared/upload.service';

declare var $;

@Component({
  selector: 'app-drive-file-table',
  templateUrl: './drive-file-table.component.html',
  styleUrls: ['./drive-file-table.component.scss'],
})
export class DriveFileTableComponent implements OnInit {

  private _unsubscribeAll: Subject<any>;


  items: GalleryItem[];
  @ViewChild('itemTemplate', { static: true }) itemTemplate: TemplateRef<any>;
  images$: BehaviorSubject<DriveFile[]> = new BehaviorSubject<DriveFile[]>([]);


  files: DriveFile[] = []
  doc = null
  currentFileView = null

  constructor(
    private db: AngularFirestore,
    public gallery: Gallery,
    public lightbox: Lightbox,
    private upSvc: UploadService,

  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {

    this.db.collection("Uploads").valueChanges()
      .pipe(
        takeUntil(this._unsubscribeAll),
      )
      .subscribe((files: DriveFile[]) => {

        console.log("Files:", files)

        this.files = files;

        let filteredImages = files.filter(f => this.isImage(f.extension))
        this.images$.next(filteredImages)
      });

    this.gallerySetup()
  }

  getIconByExt(ext: string) {
    ext = ext.toLowerCase();

    if (ext == 'png' || ext == 'jpeg' || ext == 'jpg')
      return 'img-48.png'
    else if (ext == 'xlsx' || ext == 'xls')
      return 'excel-64.png'
    else if (ext == 'pdf')
      return 'pdf-48.png'
    else if (ext == 'doc' || ext == 'docx')
      return 'word-64.png'
    else if (ext == 'ppt')
      return 'ppt-64.png'
    else
      return 'file-64.png'

  }

  viewer(file: DriveFile) {
    if (!file.extension) return
    const ext = file.extension.toLowerCase();
    this.doc = null;
    this.currentFileView = ''

    if (ext == 'png' || ext == 'jpeg' || ext == 'jpg') {
      const imageIndex = this.getCurrentImageIndex(file.path)
      if (imageIndex != null)
        this.lightbox.open(imageIndex)
    } else {
      this.currentFileView = file.name
      this.doc = file.path;
      setTimeout(() => {
        $('#doc-popup').modal('hide')
        $('#doc-popup').modal('show')
      }, 500);
    }
  }


  gallerySetup() {

    this.images$
      .pipe(
        takeUntil(this._unsubscribeAll),
        // map(f => f.filter(e => this.isImage(e.extension)))
      )
      .subscribe(files => {

        // Creat gallery items
        this.items = files.map(item => {
          return {
            type: 'imageViewer',
            data: {
              src: item.path,
              thumb: item.path
            }
          };
        });

        // Get a lightbox gallery ref
        const lightboxRef = this.gallery.ref('lightbox');

        // Add custom gallery config to the lightbox (optional)
        lightboxRef.setConfig({
          imageSize: ImageSize.Cover,
          thumbPosition: ThumbnailsPosition.Top,
          itemTemplate: this.itemTemplate,
          gestures: false
        });

        // Load items into the lightbox gallery ref
        lightboxRef.load(this.items);
      })

  }

  /**
  * On destroy
  */
  ngOnDestroy(): void {

    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  isImage(ext: string) {
    ext = ext.toString().toLowerCase();

    if (ext == 'png' || ext == 'jpeg' || ext == 'jpg')
      return true

    return false
  }

  getCurrentImageIndex(path: string) {
    let index = this.images$.getValue().findIndex(i => i.path == path)

    if (index > -1)
      return index

    return null

  }

  deleteFile(file: DriveFile) {
    this.db.collection('Uploads').doc(file.id).delete()
      .then(_ => {
        this.upSvc.deleteFile(`${file.name}.${file.extension}`)
      })
  }

}
