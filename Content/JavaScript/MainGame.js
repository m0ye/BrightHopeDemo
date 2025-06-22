"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
console.log("This is Puerts" + "Hello World!" + "UE5.6" + "v8_9");
//获取游戏实例对象 
const GameInstance = puerts_1.argv.getByName("GameInstance");
console.log(GameInstance.GetName());
// // 绑定TS函数
// GameInstance.FTSFuncCall.Bind((FunctionName, Obj) =>
//     (Obj as any)[FunctionName]);
require("./Blueprints/Test/BP_Test");
//# sourceMappingURL=MainGame.js.map