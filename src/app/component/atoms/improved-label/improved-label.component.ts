import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'improved-label',
    templateUrl: './improved-label.component.html',
    styleUrls: ['./improved-label.component.scss']
})
export class ImprovedLabelComponent implements OnInit {
    @Input() title: string;
    @Input() value: string;

    constructor() {
    }

    ngOnInit() {
    }

}