import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubProjectComponent } from './component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ SubProjectComponent ],
    exports: [ SubProjectComponent ]
})
export class SubProjectModule {}
