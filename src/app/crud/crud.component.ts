import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  fdata:any;
  results:any;
  submitted = false;
  emplye: any;
  searchText;
  constructor(private s: DataService, private fb: FormBuilder) {} 
    form = this.fb.group({
    id: [],
    fname: ['', Validators.required],
    lname: ['', Validators.required] 
  })
ngOnInit() {
     this.getData();
  }

   getData()  {
    this.s.getData().subscribe(res=>this.fdata=res); 
    
  }
    get f() { return this.form.controls; }
    onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
   
    this.s.dataPost(this.form.value).subscribe(res=>this.getData());

}
  delete(d) {
    
    this.s.deleteData(d.id).subscribe(res=>this.getData());
  }
  edit(d) {
    this.form.patchValue({
      id: d.id,
      fname: d.fname,
      lname: d.lname
    })
  }
  update() {

    this.s.updateData(this.form.value).subscribe(res=>this.getData());
     
  }
 
}