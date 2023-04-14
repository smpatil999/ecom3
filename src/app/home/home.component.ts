import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  Exist:any;
  productList:any=[];
  carttList:any=[];
  constructor(private studentService:StudentService,private route:Router){}

  
  ngOnInit(): void {
this.getCartRecord()
this.getAllProduct()
  }

  getAllProduct(){
    this.studentService.getproduct().subscribe((result)=>{
      
      this.productList=result
    })
  }


  addtocart(product:any){

    this.getCartRecord()
this.Exist=this.carttList.some((e:any)=>{
return e.id===product.id
  
})
console.log(this.Exist);

if(this.Exist){
  alert("product already added in cart")
}
else{
  this.studentService.addtocart(product).subscribe((res)=>{
    if (res) {
      alert("Product Added To Cart ")
      this.studentService.getcountcart()
      this.route.navigate(["/cart"])
      
    }
  })

}
  }


  getCartRecord(){
    this.studentService.getAllcart().subscribe((result:any)=>{     
      this.carttList=result; 
       
    })
  }














}
