import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';
import { UpperCasePipe } from '@angular/common';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public options: any;

    Events: any = [
      {
        id: 'a',
        title: 'my event',
        start: '2021-09-28'
      }
    ];

    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        headerToolbar: { center: 'dayGridMonth,timeGridWeek,timeGridDay',
       }


    };







    constructor(
        private httpClient: HttpClient
    ) { }

    onDateSelect(arg: any) {
      alert('Date clicked: ' + arg.dateStr)
    }

    ngOnInit(){
        setTimeout(() => {
            return this.httpClient.get('http://localhost:8888/dynamic-events.php')
            .subscribe((res: any) => {
                this.Events.push(res);
                console.log(this.Events);
            });
        }, 2500);

        setTimeout(() => {
            this.calendarOptions = {
            dateClick: this.onDateSelect.bind(this),
            events: this.Events
            };
        }, 2500);




    }






}
