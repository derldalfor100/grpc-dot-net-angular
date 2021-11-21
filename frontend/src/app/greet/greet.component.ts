import { Component, OnInit } from '@angular/core';
import { HelloReply, HelloRequest } from 'src/proto/services/greet_pb';
import { GreeterClient, ServiceError } from 'src/proto/services/greet_pb_service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {

  response: string;

  ngOnInit(): void {
    const client = new GreeterClient('https://localhost:5001');
    const req = new HelloRequest();
    req.setName("World!");
    client.sayHello(req, (err: ServiceError, response: HelloReply) => {
      if (err) {
        this.response = `Error: {err.message}`;
        return;
      }
      this.response = response.getMessage();
    });
  }

}
