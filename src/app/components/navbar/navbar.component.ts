import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class Navbar {
  @Input()
  email:string = 'apexconstructioncompany0310@gmail.com'
  @Input()
  phone:string = '+91 9131910363'
  @Input()
  link1: string = 'Home'
  @Input()
  link2: string = 'Services'
  @Input()
  logoSrc: string =
    '/assets/images/logo.png'
  @Input()
  action2: string = '#services'
  @Input()
  logoAlt: string = 'Construction Company Logo'
  @Input()
  link3: string = 'Projects'
  @Input()
  action1: string = '#home'
  @Input()
  link4: string = 'About Us'
  constructor() {}
}
