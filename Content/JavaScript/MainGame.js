"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
//获取游戏实例对象 
const GameInstance = puerts_1.argv.getByName("GameInstance");
/** 绑定TS函数，之后只需要通过GI调用即可。
 *  这里通过GI中的委托绑定了一个匿名函数，该匿名函数通过参数调用对应函数。
 *  @FunctionName 函数名称
 *  @Obj 函数所在对象
 */
GameInstance.FTSFuncCall.Bind((FunctionName, Obj) => Obj[FunctionName]());
// 导入模块（mixin蓝图脚本）
require("./Blueprints/Test/BP_Test2");
//# sourceMappingURL=MainGame.js.map