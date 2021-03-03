import { GameObjectScript } from "./GameObjectScript";

export class GameObjectData{
    id:number;
    name:string;
    scripts:GameObjectScript[];
    meshPathPreloadList:string[];
    texturePathPreloadList:string[];

    constructor(){
        this.id=-1;
        this.name='';
        this.scripts=[];
        this.meshPathPreloadList=[];
        this.texturePathPreloadList=[];
    }
}