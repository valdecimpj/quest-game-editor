import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GameEngineService } from '../game-engine.service';
import { GameObject } from '../model/GameObject';
import { GameObjectScript } from '../model/GameObjectScript';
import { Scene } from '../model/Scene';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent implements OnInit {

  scene:Scene;
  selectedObject:GameObject;
  btnAddScript:FormControl = new FormControl('');

  constructor(private gameEngineServer: GameEngineService) {
    this.scene=new Scene();
    this.selectedObject=new GameObject();
   }

  ngOnInit(): void {
    this.scene=this.gameEngineServer.gameEngine.scene;
  }

  newGameObject(){
    let newObj = new GameObject()
    let newId = this.scene.idGenerator++;
    newObj.data.id=newId;
    newObj.data.name="NewObject"+newId;
    this.scene.gameObjects.push(newObj);
    this.selectedObject=newObj;
  }

  saveGameObject(){

  }

  loadGameObject(){

  }

  changeGameObjectName(event:any,object:GameObject){
    object.data.name=event.target.value;
  }

  changeParameterValue(event:any,parameter:any){
    parameter.value=event.target.value;
    this.gameEngineServer.gameEngine.loadSceneDependencies();
  }

  deleteGameObject(){
    if(this.selectedObject.data.id!=-1){
      let id:number = this.selectedObject.data.id;
      let indexAsIntOrString = this.findGameObjectIndexById(id);
      let index:number = +indexAsIntOrString;
      this.scene.gameObjects.splice(index,1);
      this.gameEngineServer.gameEngine.loadSceneDependencies();
      if(this.scene.gameObjects.length>0)
        this.selectedObject=this.scene.gameObjects[0];
      else
        this.selectedObject = new GameObject();
    }
    else
      alert("No object selected!!!");
    
  }

  selectGameObject(id:number){
    this.selectedObject=this.findGameObjectById(id);
  }

  findGameObjectIndexById(id:number){
    for(let index in this.scene.gameObjects){
      let gameObject:GameObject=this.scene.gameObjects[index];
      if(gameObject.data.id==id)
        return index
    }
    return -1;
  }

  findGameObjectById(id:number){
    let indexAsIntOrString = this.findGameObjectIndexById(id);
    let index:number=+indexAsIntOrString;
    if(index==-1)
      return new GameObject();
    else
      return this.scene.gameObjects[index];
  }

  addScript(target:any){
    if(this.selectedObject.data.id!=-1){
      let file:any=target.files[0];
      const reader = new FileReader()
      reader.onload = (e:any) => {
        let LoadedClass=Function("return "+e.target.result)();
        let gameObjectScript = new GameObjectScript();
        gameObjectScript.path=file.name;
        gameObjectScript.scriptConfig=LoadedClass.defaultScriptConfig;
        this.selectedObject.data.scripts.push(gameObjectScript);
        this.gameEngineServer.gameEngine.loadSceneDependencies();
      }
      reader.onerror = error => console.log(error);
      reader.readAsText(file)
    }
    else
      alert("No object selected!!!");
    this.btnAddScript.setValue('');
  }

}
