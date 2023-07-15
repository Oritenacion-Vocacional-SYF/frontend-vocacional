import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [RegisterComponent, LoginUserComponent],
  imports: [CommonModule, MaterialModule],
})
export class LoginModule {}
