import { Component, OnInit } from '@angular/core';

import { ExampleApiService } from './exampleApi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Disybo';

  constructor(private exampleService: ExampleApiService) {}

  ngOnInit(): void {
    //this.exampleService.hello();
  }
}
