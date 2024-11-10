import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-testimonial',
  templateUrl: 'testimonial.component.html',
  styleUrls: ['testimonial.component.css'],
})
export class Testimonial {
  @Input()
  author2Position: string = 'COO, Company XYZ'
  @Input()
  author1Position: string = 'CEO, Company ABC'
  @Input()
  author3Alt: string = 'Image of David Johnson'
  @Input()
  author1Name: string = 'John Doe'
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1552915170-73c2330ae617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwNXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Name: string = 'David Johnson'
  @Input()
  review2: string =
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  @Input()
  author2Name: string = 'Jane Smith'
  @Input()
  author4Position: string = 'CTO, Company XYZ'
  @Input()
  author4Name: string = 'Sarah Williams'
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1549816198-3c2704fdf06f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwNXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author1Alt: string = 'Image of John Doe'
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwNnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1472954253026-157558836cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwNnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author2Alt: string = 'Image of Jane Smith'
  @Input()
  author4Alt: string = 'Image of Sarah Williams'
  @Input()
  content1: string =
    'Read what our clients have to say about our construction services.'
  @Input()
  author3Position: string = 'CFO, Company 123'
  @Input()
  review1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum lorem vel, vehicula est.'
  @Input()
  heading1: string = 'Testimonials'
  @Input()
  review3: string =
    'Fusce nec justo eu urna tempor ultricies. Integer eget augue nec libero ultrices varius.'
  @Input()
  review4: string =
    'Sed euismod justo et nisl posuere, vel ullamcorper odio sollicitudin. Donec id metus ac nulla ultrices aliquet.'
  constructor() {}
}
