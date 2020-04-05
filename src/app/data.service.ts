import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get('http://localhost:3000/posts');
  }
  dataPost(d) {
    return this.http.post('http://localhost:3000/posts', d);
  }
  deleteData(d) {
    return this.http.delete('http://localhost:3000/posts/' + d);
  }
  updateData(d) {
    return this.http.put('http://localhost:3000/posts/' + d.id, d);
  }
}
