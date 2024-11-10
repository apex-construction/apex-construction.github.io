import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features2',
  templateUrl: 'features2.component.html',
  styleUrls: ['features2.component.css'],
})
export class Features2 {
  @Input()
  feature3Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature1ImgAlt: string = 'feature 1'
  @Input()
  feature1Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature3ImgAlt: string = 'image'
  @Input()
  feature2Title: string = 'Quality Craftsmanship'
  @Input()
  feature1Title: string = 'Feature #1'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwNnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1525498128493-380d1990a112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2Description: string =
    'Our team of skilled craftsmen ensures that every detail of your project is completed with the highest quality standards.'
  @Input()
  feature3Title: string = 'Feature #3'
  @Input()
  feature2ImgAlt: string = 'Quality Craftsmanship Image'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1653974123689-4eefaa73945d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwOHw&ixlib=rb-4.0.3&q=80&w=1080'
  activeTab: number = 0
  constructor() {}
}
