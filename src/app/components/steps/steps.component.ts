import {Component, Input} from '@angular/core'

@Component({
    selector: 'app-steps',
    templateUrl: 'steps.component.html',
    styleUrls: ['steps.component.css'],
})
export class Steps {
    @Input()
    step1Title: string = 'Initial Consultation'
    @Input()
    step1Description: string = 'Schedule a meeting with our team to discuss your construction requirements, timeline, budget, etc'
    @Input()
    step2Title: string = 'Design Phase'
    @Input()
    step2Description: string = 'Our experts will create detailed plans and designs tailored to your specifications.'
    @Input()
    step3Title: string = 'Construction Process'
    @Input()
    step3Description: string = 'Our skilled team will bring the designs to life with precision and efficiency.'
    @Input()
    step4Title: string = 'Final Inspection'
    @Input()
    step4Description: string = 'We conduct a thorough inspection to ensure that every detail meets our high standards.'

    constructor() {
    }
}
