import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  productList:any=[]

  productQuentity=1
constructor(private studentService:StudentService,private router:Router){}



ngOnInit(): void {
  this.getCartRecord()
}

getCartRecord(){
  this.studentService.getAllcart().subscribe((result:any)=>{
    console.log(result);
    
    this.productList=result;

  })
}

removeCartItem(id:any){
this.studentService.removeCartProduct(id).subscribe((res:any)=>{
alert("Cart Item Removed")
this.studentService.getcountcart()
this.getCartRecord()
})

}


decrease(){
  if (this.productQuentity>1) {  
  this.productQuentity -=1;
}
}


increase(){
  
    this.productQuentity +=1

}


productDetail(id:any){
this.router.navigate([`item/${id}`])

}





}
