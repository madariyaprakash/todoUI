import { Component, OnInit } from '@angular/core';
// import { title } from 'process';
//1)importing the SharedService
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  //2)instantiating the service in constructor
  constructor(private service:SharedService) { }

  //3) it will take the data and it will replicate the number of records we have
  TaskList:any=[];

  //Other 3 variables defined here
  ModalTitle: string = ''
  ActivateAddEditTaskComp:boolean=false;
  task:any;


  // this is the first method is executed when component in scope
  ngOnInit(): void {
    //5) calling the refreshTaskList the function
    this.refreshTaskList();
  }

  //Function to close modal
  closeClick(){
    this.ActivateAddEditTaskComp = false;
    this.refreshTaskList();
  }

  // // function to add task
  addClick(){
    this.task = {
      id:0,
      title:""
    }
    this.ModalTitle = "Add Task";
    this.ActivateAddEditTaskComp = true;
  }

  //edit task and passing the task object as argument
  editClick(item: any){
    //we have to send the task object details to edit screen
    this.task=item;
    this.ModalTitle="Edit Task";
    this.ActivateAddEditTaskComp=true;

  }

  //4) writing function to get the list of tasks
  refreshTaskList(){
    // subscribe method take care of the time taken to load the data
    this.service.getTaskList().subscribe(data => {
      this.TaskList=data;
      console.log(data);
    });
  }

  //delete task
  deleteClick(id:any){
    console.log(id)
    if(confirm('Are you sure?')){
      this.service.deleteTask(id).subscribe(data=>{
        alert(data.toString());
        this.refreshTaskList();
      })
      
    }
  }


  //mark in complete
  marInComplete(task:any) {
    var val = {
      id:task.id,
      title:task.title,
      completed:false,
      created:task.created,
    }
    console.log(val)
    this.service.updateTask(task.id, val).subscribe(res=>{
      alert('Task not yet completed');
      this.refreshTaskList();
    });
  }

  // mark complete
  marComplete(task:any) {
    var val = {
      id:task.id,
      title:task.title,
      completed:true,
      created:task.created,
    }
    console.log(val)
    this.service.updateTask(task.id, val).subscribe(res=>{
      alert('Task completed');
      this.refreshTaskList();
    });
  }

  // // reschedule task
  // reSchedule(task:any){
  //   console.log(task)
  // }

}
