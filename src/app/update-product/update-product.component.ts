import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
  constructor(private studentService: StudentService, private route: ActivatedRoute) { }


ngOnInit(): void {
  let productId = this.route.snapshot.paramMap.get('id');
  console.log(productId);
  
}
  
}
