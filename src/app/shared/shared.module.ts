import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CardComponent
    ],
    providers: [

    ],
})
export class SharedModule { }