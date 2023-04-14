import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  productForm!: FormGroup;
  addProductMessage: string | undefined;
  submited:boolean=false
  btnText:boolean=true
  productId:any
  constructor(private fb: FormBuilder, private studentService: StudentService,private router:Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
     this.productId = this.route.snapshot.paramMap.get('id');

    this.productForm = this.fb.group({
      id:[],
      name: ['',Validators.compose([Validators.required])],
      Price: ['',Validators.compose([Validators.required])],
      discription: ['',Validators.compose([Validators.required])],
      url: ['',Validators.compose([Validators.required])]

    })

 
this.get()


  }


  addProduct() {
 
    
    this.studentService.addproduct(this.productForm.value).subscribe((res) => {

     if (res) {

    alert("Product added Successfully ..!")
        this.productForm.reset()
        this.router.navigate(['/'])
      }

  })
  }



get(){
  if (this.productId) {
    this.studentService.getRecordProdt(this.productId).subscribe((res: any[]) => {
      this.productForm.patchValue(res) 
      this.btnText=false

      
      })
  }else{
    return; 
  }
}

updateProduct(){

  this.studentService.productUpdate(this.productForm.value).subscribe((res:any)=>{
if (res) {
  alert("Product Updated Successfully...!")
  this.router.navigate(['/'])
  this.productForm.reset()
}
  })
}

}
