import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Project } from '../project';
import { UsagesService } from '../usages.service';

@Component({
  selector: 'app-usages-list',
  templateUrl: './usages-list.component.html',
  styleUrls: ['./usages-list.component.css']
})
export class UsagesListComponent {

  projects: Project[];
  year: number;

  constructor(private route: ActivatedRoute, private usagesService: UsagesService){}

  ngOnInit(): void{
    
    this.year = Number(this.route.snapshot.paramMap.get("year"));
    this.getUsages(this.year);
    
    /*teszt
    this.projects = [{
      "name": "teszt_1",
      "supporthours": [],
      "usages": [1,2,3,4,5,6,7,8,9,10,11,12],
      "numbersofusers": [1,2,3,4,5,6,7,8,9,10,11,12],
      "namesofusers": []
    },
    {
      "name": "teszt_2",
      "supporthours": [],
      "usages": [1,2,3,4,5,6,7,8,9,10,11,12],
      "numbersofusers": [1,2,3,4,5,6,7,8,9,10,11,12],
      "namesofusers": []
    }
    ];
    */

  }
  
  private getUsages(year: number){
    this.usagesService.getUsages(year).subscribe(data => {
      this.projects = data;
    });
  };

}
