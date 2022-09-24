import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="you are perfect banking partner"
  acnm="Enter your ac number"

  acno=''
  psw=''

  userDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:100000},
    1001:{acno:1001,username:"ammu",password:345,balance:120000},
    1002:{acno:1002,username:"bijith",password:567,balance:140000},
    1003:{acno:1003,username:"aswin",password:789,balance:160000},

  }

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    var acnum=this.acno
    var psw=this.psw
    let userDetails=this.userDetails
    if(acnum in userDetails){
      if(psw==userDetails[acnum]['password']){
        alert('login success')
      }
      else{
        alert('incorrect password')
      }
      }
      else{
        alert('user not exist')
      }
    }
  
  acnoChange(event:any){
    this.acno=event.targrt.value
    console.log(this.acno)
  }
  pswChange(event:any){
    this.psw=event.target.value
    console.log(this.psw)
  }

}
