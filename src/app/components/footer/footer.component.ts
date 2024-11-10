import {Component, Input} from '@angular/core'

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css'],
})
export class Footer {
    @Input()
    content3: string = '© 2024 Apex Construction Company. All Rights Reserved.'

    constructor() {
    }
}
