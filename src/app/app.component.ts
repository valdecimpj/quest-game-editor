import { Component } from '@angular/core';
import { GameEngineService } from './game-engine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Quest Game Editor';

  constructor(private gameEngineService: GameEngineService){
    
  }

  ngOnInit(): void {
    this.gameEngineService.startGameEngine("canvas3d");
  }

}
