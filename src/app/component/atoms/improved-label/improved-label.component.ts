import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'improved-label',
    inputs: ['label', 'value'],
    templateUrl: './improved-label.component.html',
    styleUrls: ['./improved-label.component.scss']
})
export class ImprovedLabelComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}