import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
})
export class PipesComponent {
  public persons: Array<{
    name: string;
    age: number;
  }> = [
    { name: 'Toto', age: 10 },
    { name: 'Jack', age: 15 },
    { name: 'John', age: 30 },
  ];

  public showName(name: string, index: number): string {
    console.log('showName');
    // very heavy computation
    return `${name} - ${index}`;
  }

  public isAllowed(age: number, isFirst: boolean): string {
    console.log('isAllowed');
    if (isFirst) {
      return 'always allowed';
    }

    return age > 25 ? 'allowed' : 'declined';
  }
}
