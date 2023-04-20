import { Component } from '@angular/core';
import { Project } from '../project';
import { SupporthoursService } from '../supporthours.service';

@Component({
  selector: 'app-supporthours-list',
  templateUrl: './supporthours-list.component.html',
  styleUrls: ['./supporthours-list.component.css']
})
export class SupporthoursListComponent {

  projects: Project[];

  constructor(private supporthoursService: SupporthoursService){}

  ngOnInit(): void{

    this.getSupporthours();
    
    /*teszt
    this.reportrows = [{
      "project": "teszt_1",
      "usages": [1,2,3,4,5,6,7,8,9,10,11,12]
    },
    {
      "project": "teszt_2",
      "usages": [1,2,3,4,5,6,7,8,9,10,11,12]
    }
    ];
    */

  }
  
  private getSupporthours(){
    this.supporthoursService.getSupporthours().subscribe(data => {
      this.projects = data;
    });
  };
  
}
