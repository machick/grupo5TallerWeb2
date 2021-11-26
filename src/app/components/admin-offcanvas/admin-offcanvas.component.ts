import { Component, OnInit } from '@angular/core';
import { ProductoserviceService } from 'src/app/services/productoservice.service';
import { FileService } from 'src/app/services/file.service';
import { environment } from 'src/environments/environment';
import { Producto } from 'src/app/models/producto/producto';

@Component({
  selector: 'app-admin-offcanvas',
  templateUrl: './admin-offcanvas.component.html',
  styleUrls: ['./admin-offcanvas.component.css'],
})
export class AdminOffcanvasComponent implements OnInit {
  public producto: Producto | undefined;
  public newNombre: any;
  public newDescripcion: any;
  public newTipo: any;
  public newPrecio: any;
  public Modelvalue = 'select';
  public selectedTags = [];
  public imageFile:any;
  public fileRoute = environment.API_URL_IMAGE;
  public fileSize = Number(environment.FILE_SIZE);
  public fileSizeText = environment.FILE_SIZE_TEXT;
  public deletedImage = false;
  public deletedImageData : any;
  public error = {
    message: '',
    show: false,
  };

  constructor(
    private productoService: ProductoserviceService,
    private fileService: FileService
    ) {}

  ngOnInit(): void {}

  public agregarProducto() {
    return this.productoService
      .agregarProducto(
        this.newNombre,
        this.newDescripcion,
        this.newTipo,
        this.newPrecio
      )
      .then(() => {
        window.location.reload();
      });
  }


  public validateFile(mime: any, size: number) {
    const validateFile = {
      mime: false,
      size: false
    };
    if (!mime || !size) {
      return validateFile;
    }
    if (size < this.fileSize) {
      validateFile.size = true;
    }
    switch (mime) {
      case 'image/jpeg': validateFile.mime = true; break;
      case 'image/jpg': validateFile.mime = true; break;
      case 'image/png': validateFile.mime = true; break;
      default: validateFile.mime = false;
    }
    return validateFile;
  }

  public onUploadImage(event: any) {
    this.producto = new Producto(undefined,
      this.newNombre,
      this.newDescripcion,
      this.newTipo,
      this.newPrecio
    );
    console.log(this.producto);
    const file = event.target.files[0];
    const validateFile = this.validateFile(file.type, file.size);
    if (!validateFile.mime) {
      this.error.message = 'Formato de archivo no válido';
      this.error.show = true;
      return false;
    }
    if (!validateFile.size) {
      this.error.message = 'El tamaño del archivo no puede superar los '+ this.fileSizeText + ' mb';
      this.error.show = true;
      return false;
    }
    return this.fileService.fileUpload(file, 'producto')
    .then((fileToSave: any) => {
      console.log('todo bien');
      this.imageFile = fileToSave;
      this.imageFile.path = this.imageFile.path.replace('.','');
      console.log(this.imageFile);
      //this.product.image = fileToSave;
      this.error.show = false;
    })
    .catch((error: any) => {
      console.log('todo maaaal');
      this.error.message = 'Ocurrió un error al cargar el archivo';
      this.error.show = true;
      console.error(error);
    });
  }



}
