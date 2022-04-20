import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

constructor(private api: ApiService){}

    ngOnInit(): void {
      this.getAllEmployees();


    }
    getAllEmployees(){
      this.api.getEmployeeList()
      .subscribe({
        next:(res)=>{
        console.log(res);
      } ,
      error:(err)=>{alert('Error while Fetching')}



     } )
      }
    }








function err(arg0: { next: (res: any) => void; }, err: any) {
  throw new Error('Function not implemented.');
}

