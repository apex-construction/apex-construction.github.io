import {Component, Input} from '@angular/core'

@Component({
    selector: 'app-features1',
    templateUrl: 'features1.component.html',
    styleUrls: ['features1.component.css'],
})
export class Features1 {
    @Input()
    feature1Title: string = 'Safety First'
    @Input()
    feature1Description: string = 'Ensuring safety measures are in place at all times'
    @Input()
    feature1ImgAlt: string = 'Construction worker with hard hat'
    @Input()
    feature1ImgSrc: string = '/assets/images/safety.jpg'

    @Input()
    feature2Title: string = 'Skilled Team'
    @Input()
    feature2Description: string = 'Experienced and skilled construction team'
    @Input()
    feature2ImgAlt: string = 'Construction team working together'
    @Input()
    feature2ImgSrc: string = '/assets/images/skilled_team.jpg'

    @Input()
    feature3Title: string = 'Quality Materials'
    @Input()
    feature3Description: string = 'High-quality materials used for construction'
    @Input()
    feature3ImgAlt: string = 'Construction materials'
    @Input()
    feature3ImgSrc: string = '/assets/images/qualityMaterial.webp'

    activeTab: number = 0

    constructor() {
    }
}
