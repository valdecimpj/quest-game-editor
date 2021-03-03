import { Component, OnInit } from '@angular/core';
import { GameEngineService } from '../game-engine.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private gameEngineService:GameEngineService) { }

  ngOnInit(): void {
  }

  startEngine(){
    this.gameEngineService.gameEngine.startProcessor();
  }

  stopEngine(){
    this.gameEngineService.gameEngine.stopProcessor();
    this.gameEngineService.gameEngine.loadSceneDependencies();
    console.log("Set default camera to editor's here!")
  }

}
