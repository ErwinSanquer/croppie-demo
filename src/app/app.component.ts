import { Component, ViewChild } from '@angular/core';
import {CroppieDirective} from 'angular-croppie-module';
import {CroppieOptions} from 'croppie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

    @ViewChild('croppie')
    public croppieDirective: CroppieDirective;

    public croppieOptions: CroppieOptions = {
        boundary: { width: 512, height: 521 },
        viewport: { width: 128, height: 128 },
        showZoomer: true,
        enableOrientation: true,
        enforceBoundary: false
    };

    public handleUpdate(data) {
        console.log(data); // -> { points: number[], zoom: number }
    }

    onChange(event) {
        console.log(event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (eventReader: any) => {
                this.croppieDirective.croppie.bind({url: eventReader.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
}
