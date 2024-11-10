import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
})
export class Contact {
  @Input()
  content2: string =
    'Our team is ready to assist you with any construction project.'
  @Input()
  email1: string = 'apexconstructioncompany0310@gmail.com'
  @Input()
  address1: string = 'Danish Kunj, Bhopal, 462042, India'
  @Input()
  content3: string =
    'Fill out the form below and we will get back to you as soon as possible.'
  @Input()
  content1: string =
    'Get in touch with us for any inquiries or to request a quote.'
  @Input()
  content4: string = 'Follow us on social media for updates and news.'
  @Input()
  heading1: string = 'Contact Us'
  @Input()
  content5: string = 'We look forward to hearing from you!'
  @Input()
  phone1: string = '+91 9131910363'
  constructor() {}
}
