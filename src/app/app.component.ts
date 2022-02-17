import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCollapsed = false;
  isCollapseds = true;
  isVisible = false;
  isLogin = false;
  isRegister = false;
  showModal(option: number): void {
    this.isVisible = true;
    if (option === 1) {
      this.isLogin = true;
      this.isRegister = false;
    }else if (option === 2) {
      this.isLogin = false;
      this.isRegister = true;
    }
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
