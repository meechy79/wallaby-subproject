import { Component } from '@angular/core';

@Component({
    selector: 'app-subproject',
    template: '<h1>{{ text }}</h1>',
})
export class SubProjectComponent {
    public text = 'SUBPROJECT';
}
