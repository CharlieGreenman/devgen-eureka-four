import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'devgen-eureka-four-global-sidenav',
  templateUrl: './global-sidenav.component.html',
  styleUrls: ['./global-sidenav.component.scss']
})
export class GlobalSidenavComponent {
  events: string[] = [];
  opened = false;
  @Output() sideNavToggle = new EventEmitter();

  emitSideNavToggle(): void {
    this.sideNavToggle.emit();
  }
    
  constructor() {}
}

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  declarations: [GlobalSidenavComponent],
  exports: [GlobalSidenavComponent],
})
export class GlobalSidenavModule {}
