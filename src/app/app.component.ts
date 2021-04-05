import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading$ = this.loader.loading$;

  constructor(public loader: LoadingService, private http: HttpClient) {}

  fetchData() {
    this.http
      .get('https://api.github.com/users/thisiszoaib')
      .subscribe((res) => {
        console.log(res);
      });
  }
}
