import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {
  webUser: boolean = false;
  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.responsive.observe([Breakpoints.Web])
    .subscribe(result => {
      this.webUser = false;
      if (result.matches) {
        this.webUser = true;
      }
    })
  }

}
