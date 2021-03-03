import { Injectable } from '@angular/core';
import { WindowRef } from './WindowRef';


@Injectable({
  providedIn: 'root'
})
export class GameEngineService {

  gameEngine:any;

  constructor(private winRef:WindowRef) {
    
   }

   startGameEngine(canvasId:string){
      this.gameEngine=new this.winRef.nativeWindow.GameEngine(canvasId,"assets/QuestGameEngine/");
      this.gameEngine.startScreen();
   }
}
