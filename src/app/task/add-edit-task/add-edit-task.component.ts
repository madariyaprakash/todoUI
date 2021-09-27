import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {

  constructor(private service:SharedService) { }

  // we need to use input directive to get the input from user
  @Input() task:any;
  id:string= "";
  title:string= "";
  created:string = "";

  ngOnInit(): void {
    //when add and edit component is activated, ngOnInit will be called which will initialize id and task title variables.
    this.id=this.task.id;
    this.title = this.task.title;
    this.created = this.task.created;
  }

  // add the data to db
  addTask(){
    var val = {
      id:this.id,
      title:this.title,
      created:this.created,
    }
    this.service.addTask(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  //update the data into db
  updateTask(){
    var val = {
      id:this.id,
      title:this.title,
      created:this.created,
    }
    console.log(val)
    this.service.updateTask(this.id, val).subscribe(res=>{
      alert(res.toString());
    });

  }


}
