import { GameObject } from "./GameObject";

export class Scene{
    name:string;
    gameObjects:GameObject[];
    idGenerator:number;

    constructor(){
        this.name='untitled';
        this.gameObjects=[];
        this.idGenerator=0;
    }
}