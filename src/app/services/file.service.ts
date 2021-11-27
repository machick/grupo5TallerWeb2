import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { File } from 'src/app/models/file/file';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private http: HttpClient
  ) { }

  public fileUpload(fileData: any, type: string): Promise<File> {
    const formData = new FormData();
    formData.append('file', fileData);
    formData.append('type', type);
    console.log(formData);
    return this.http.post(`${environment.API}/uploadfile`, formData)
      .toPromise()
      .then((res: any) => {
        return File.fromJson(res);
      });
  }

  public fileDelete(imageId: any, type: String): Promise<any> {
    return this.http.post(`${environment.API}/deletefile`, {imageId,type})
    .toPromise()
    .then((res: any) => {
      return res;
    });
  }

}