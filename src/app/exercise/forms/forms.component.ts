import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

interface UserCreatePayload {
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  private readonly http: HttpClient = inject(HttpClient);

  public saveUser(newUser: UserCreatePayload): void {
    this.http
      .post<void>('https://dummyjson.com/users/add', {
        newUser,
      })
      .subscribe();
  }
}
