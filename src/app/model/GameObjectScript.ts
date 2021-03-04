import { ScriptParameter } from "./ScriptParameter";

export class GameObjectScript{
    path:string;
    scriptParameters:ScriptParameter[];
    constructor(){
        this.path='';
        this.scriptParameters=[];
    }
}