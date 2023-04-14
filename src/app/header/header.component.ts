import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  productList=[]
  countCart!:number;
  constructor(private studentService:StudentService){}

  ngOnInit(): void {
    this.getCartRecord()
    this.getCart()

  }

  getCartRecord(){  
    this.studentService.cartData.subscribe((res:any)=>{
      this.countCart=res.length;
      
    })
  }



  getCart(){
    this.studentService.getAllcart().subscribe((result:any)=>{      
      this.countCart=result.length;
  
    })
  }

}
