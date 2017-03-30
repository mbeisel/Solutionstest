import { Component } from '@angular/core';

export class Solution {
  id: number;
  name: string;
  pattern: string;
  json: string;
  yaml: string;
  relatedSolutions: string;
}

const SOLUTIONS: Solution[] = [
  { id: 1,name: 'Watchdog', pattern: 'Watchdog', json: 'WATCHDOG LONGJSON',yaml: 'WATCHDOG LONGYAML',relatedSolutions: 'Autoscaling'},
  { id: 2,name: 'Autoscaling', pattern: 'Elastic Load Balancing', json: 'AUTOSCALING LONGJSON',yaml: 'AUTOSCALING LONGYAML',relatedSolutions: 'Watchdog'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Solutionrepository';
  solution = SOLUTIONS[0];
  solutions = SOLUTIONS;
  selectedSolution = SOLUTIONS[0];
  onSelect(solution: string): void{
  	for (var i = 0; i < this.solutions.length; i++) {
  		if(this.solutions[i].name == solution){
  			this.selectedSolution = this.solutions[i];
			}			
  	}
  }
}
