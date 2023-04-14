import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  cartData = new EventEmitter<any[] | []>();

  constructor(private http:HttpClient,private route:Router) { }

  addproduct(data:any){
    return this.http.post('http://localhost:3000/products',data);
   }
   


   getproduct(){
      return this.http.get<any[]>('http://localhost:3000/products');
   }

   getRecordProdt(id:any){
    return this.http.get<any[]>(`http://localhost:3000/products/${id}`);
 }





   addtocart(cartData:any){
    return this.http.post('http://localhost:3000/cart',cartData);
    
    }

    
    getAllcart(){
      return this.http.get<any>(`http://localhost:3000/cart`);
     }

     getcountcart(){
      return this.http.get<any>(`http://localhost:3000/cart`).subscribe((result)=>{
        if (result) {
          
          this.cartData.emit(result)
          console.log(this.cartData)
        }
      });
     }

     removeCartProduct(cartid:number){
      return this.http.delete(`http://localhost:3000/cart/${cartid}`);
    }

    getSingleProduct(id:any){
      return this.http.get<any>(`http://localhost:3000/cart?id=${id}`)
    }


    productUpdate(data:any){
      return this.http.put(`http://localhost:3000/products/${data.id}`,data);
     }


}
