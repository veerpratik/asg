import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Display Student Details Console';
  
  displayStudentDetails(name,address,gender,mobile,cname,email,bname)
  {
    
    //address,gender,mobile,cname,email,bname
    console.log("Student Name = "+name.value);
    console.log("Address = "+address.value);
    console.log("Gender = "+gender.value);
    console.log("Mobile = "+mobile.value);
    console.log("College Name = "+cname.value);
    console.log("Email = "+email.value);
    console.log("Batch Name = "+bname.value);
  }


}
