import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nested-navbar',
  templateUrl: './nested-navbar.component.html',
  styleUrls: ['./nested-navbar.component.css']
})
export class NestedNavbarComponent implements OnInit {
  /* - .sticky-top bg-transparent in nav
   - transition: all 3s  ease-out;
  */
  @ViewChild("navbar",{ read: ElementRef})
  child!: ElementRef;
  constructor(private window: Window) { }

  isScrolled: boolean | undefined;

  ngOnInit(): void {
    this.window.addEventListener('scroll',  () => {
      this.isScrolled = this.window.scrollY > this.child.nativeElement.scrollTop;
    });
  }

}
