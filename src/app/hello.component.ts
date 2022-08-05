import { Component, Input } from '@angular/core';

@Component({
  selector: 'Ingeniero',
  template: `<h1>Ingeniero {{name}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
