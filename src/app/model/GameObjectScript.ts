import { ScriptConfig } from "./ScriptConfig";

export class GameObjectScript{
    path:string;
    scriptConfig:ScriptConfig;

    constructor(){
        this.path='';
        this.scriptConfig=new ScriptConfig();
    }
}