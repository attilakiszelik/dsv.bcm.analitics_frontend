import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Project } from '../project';
import { SupporthoursService } from '../supporthours.service';

@Component({
  selector: 'app-supporthours-list',
  templateUrl: './supporthours-list.component.html',
  styleUrls: ['./supporthours-list.component.css']
})
export class SupporthoursListComponent {

  projects: Project[];
  year: number;

  constructor(private route: ActivatedRoute, private supporthoursService: SupporthoursService){}

  ngOnInit(): void{
    
    this.year = Number(this.route.snapshot.paramMap.get("year"));
    this.getSupporthours(this.year);

  }
  
  private getSupporthours(year: number){
    this.supporthoursService.getSupporthours(year).subscribe(data => {
      this.projects = data;
    });
  };
  
}
