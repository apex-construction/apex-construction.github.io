import {Component, Input} from '@angular/core'

@Component({
    selector: 'app-pricing',
    templateUrl: 'pricing.component.html',
    styleUrls: ['pricing.component.css'],
})
export class Pricing {
    @Input()
    content1: string = 'Why Choose Us ?'
    @Input()
    heading1: string = 'Our Primary Services'
    @Input()
    content2: string = 'We do all kinds of construction work in any part of Bhopal, Madhya Pradesh.'

    @Input()
    residentialImageAlt: string = 'Residential'
    @Input()
    residentialImage1: string = '/assets/images/residential1.jpg'
    @Input()
    residentialImage2: string = '/assets/images/residential2.jpeg'
    @Input()
    residential: string = 'Residential'
    @Input()
    residentialDesc: string = 'We build Vastu compliant Dream homes.'
    @Input()
    commercialImageAlt: string = 'Commercial'
    @Input()
    commercialImage1: string = '/assets/images/commercial1.jpg'
    @Input()
    commercialImage2: string = '/assets/images/commercial2.png'
    @Input()
    commercial: string = 'Commercial'
    @Input()
    commercialDesc: string = 'We do all types of commercial works like retail shops, restaurants, hotels, etc.'
    @Input()
    renovationImageAlt: string = 'Renovation'
    @Input()
    renovationImage1: string = '/assets/images/rennovation1.jpg'
    @Input()
    renovationImage2: string = '/assets/images/rennovation2.png'
    @Input()
    renovation: string = 'Renovation'
    @Input()
    renovationDesc: string = 'We do all kinds of renovation works. Small repairs to overall renovation.'

    @Input()
    moreDetailsp1: string = 'Apex Construction is one of the best and most trusted construction companies in Bhopal. With over a decade of experience in the construction industry, we specialize in delivering high-quality residential and commercial projects. Our team consists of highly skilled engineers from top colleges like NITs, ensuring that we bring the latest technologies and engineering practices to every project we undertake.'
    @Input()
    moreDetailsp2: string =
        'We take immense pride in our work, having built homes, office spaces, and commercial structures that stand the test of time. Our commitment to superior construction practices and attention to detail is what sets us apart from others in the industry.'
    @Input()
    moreDetailsp3: string =
        'Our services range from residential construction, including the building of dream homes, to large-scale commercial projects, and we’ve established a reputation for delivering top-notch quality and innovation. We offer customized solutions for each project, ensuring that it aligns perfectly with our clients’ specific needs.'
    @Input()
    moreDetailsp4: string =
        'What sets us apart is our unwavering dedication to trust and long-term relationships. Over 100+ trusted customers have experienced the satisfaction of working with us, and our clients continue to choose us for their future projects. This trust stems from our transparency, commitment to deadlines, and the unmatched quality of our work.'
    @Input()
    moreDetailsp5: string =
        'In every project, we prioritize quality, safety, and efficiency, ensuring that the job is done right the first time. Our team of architects, engineers, and designers works collaboratively to deliver homes and offices that are not only structurally sound but also aesthetically pleasing.'
    @Input()
    moreDetailsp6: string =
        'We understand that building or renovating a property can be a stressful process, which is why we focus on building long-lasting relationships with our clients. We listen carefully to your needs and offer expert guidance throughout the process, from conceptualization to final construction.'
    @Input()
    moreDetailsp7: string =
        'Whether you’re looking to build a new home or a commercial property, our expertise and experience will ensure that your project exceeds your expectations. We bring your dreams to life with precision, dedication, and passion, offering you peace of mind and exceptional value at every step of the way.'

    constructor() {
    }
}
