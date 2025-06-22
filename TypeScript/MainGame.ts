import {argv} from "puerts";
import * as UE from "ue";

console.log("This is Puerts" + "Hello World!" + "UE5.6" + "v8_9");

//获取游戏实例对象 
const GameInstance = argv.getByName("GameInstance") as UE.BHGameInstanceBase;

console.log(GameInstance.GetName());


// // 绑定TS函数
// GameInstance.FTSFuncCall.Bind((FunctionName, Obj) =>
//     (Obj as any)[FunctionName]);

import "./Blueprints/Test/BP_Test"