import {Component, Input} from '@angular/core'

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html',
    styleUrls: ['hero.component.css'],
})
export class Hero {
    @Input()
    heading1: string = 'Welcome to Apex Construction Company'
    @Input()
    content1: string =
        'We are dedicated to providing top-quality construction services for all your needs. From residential to commercial projects, we have the expertise to bring your vision to life. We build dreams, not just homes.'
    @Input()
    services: string[] = [
        'Construction of all types of residential and commercial buildings',
        'Building structural works and finishing works',
        'Building repair and renovation work'
    ];
    @Input()
    experienceText: string = 'With 20+ years of experience, we’re the trustworthy builder you can rely on. We don’t just build structures; we build your home.';
    @Input()
    action2: string = 'Contact Us'
    @Input()
    action1: string = 'Explore Our Services'

    //Images
    @Input()
    image1Alt: string = 'Under construction home 1'
    @Input()
    image1Src: string = '/assets/images/1.jpeg'
    @Input()
    image2Alt: string = 'Under construction home 2'
    @Input()
    image2Src: string = '/assets/images/2.jpeg'
    @Input()
    image3Alt: string = 'Under construction home 3'
    @Input()
    image3Src: string = '/assets/images/3.jpeg'
    @Input()
    image4Alt: string = 'Under construction home 4'
    @Input()
    image4Src: string = '/assets/images/4.jpeg'
    @Input()
    image5Alt: string = 'Under construction home 5'
    @Input()
    image5Src: string = '/assets/images/Under%20Construction%201/1.jpeg'
    @Input()
    image6Alt: string = 'Under construction home 6'
    @Input()
    image6Src: string = '/assets/images/Under%20Construction%201/2.jpeg'
    @Input()
    image7Alt: string = 'Under construction home 7'
    @Input()
    image7Src: string = '/assets/images/Under%20Construction%201/9.jpeg'
    @Input()
    image8Alt: string = 'Under construction home 8'
    @Input()
    image8Src: string = '/assets/images/Under%20Construction%201/3.jpeg'
    @Input()
    image9Alt: string = 'Under construction home 9'
    @Input()
    image9Src: string = '/assets/images/Under%20Construction%201/12.jpeg'
    @Input()
    image10Alt: string = 'Under construction home 10'
    @Input()
    image10Src: string = '/assets/images/Under%20Construction%202/7.jpeg'
    @Input()
    image11Alt: string = 'Under construction home 11'
    @Input()
    image11Src: string = '/assets/images/Under%20Construction%202/9.jpeg'
    @Input()
    image12Alt: string = 'Under construction home 12'
    @Input()
    image12Src: string = '/assets/images/Under%20Construction%202/5.jpeg'
    @Input()
    image13Alt: string = 'Under construction home 13'
    @Input()
    image13Src: string = '/assets/images/Under%20Construction%203/1.jpeg'

    @Input()
    details: string = 'Looking for the best construction company in Bhopal? At Apex Construction, we are proud to be the top choice for building homes and commercial projects with unmatched quality and dedication. With over 100 trusted clients, we’ve been making your dreams come true for decades. We don’t just build structures—we create homes that bring joy, comfort, and a sense of security. Our skilled team delivers exceptional results on every project. Choose Apex Construction for reliability, craftsmanship, and peace of mind in every brick laid.'

    constructor() {
    }
}
