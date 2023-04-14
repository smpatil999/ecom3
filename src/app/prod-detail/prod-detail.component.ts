import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.css']
})
export class ProdDetailComponent implements OnInit {
  Details:any=[]
  productList:any=[]
  productQuentity=1
  constructor(private studentService: StudentService, private route: ActivatedRoute,) { }

  data=[];
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
  console.log(productId);
  
    this.studentService.getSingleProduct(productId).subscribe((res: any[]) => {
      this.productList = res;
      console.log(res );  
    })


  }


 



}
