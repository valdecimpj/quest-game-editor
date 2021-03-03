import { GameObjectData } from "./GameObjectData";

export class GameObject{
    data:GameObjectData;
    copperObject:any;

    constructor(){
        this.data=new GameObjectData;
    }
}