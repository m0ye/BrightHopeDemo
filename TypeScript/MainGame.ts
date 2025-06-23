import {argv} from "puerts";
import * as UE from "ue";

//获取游戏实例对象 
const GameInstance = argv.getByName("GameInstance") as UE.BHGameInstanceBase;

/** 绑定TS函数，之后只需要通过GI调用即可。
 *  这里通过GI中的委托绑定了一个匿名函数，该匿名函数通过参数调用对应函数。
 *  @FunctionName 函数名称
 *  @Obj 函数所在对象
 */
GameInstance.FTSFuncCall.Bind((FunctionName, Obj) =>
    (Obj as any)[FunctionName]());

/**
 * 导入模块（mixin蓝图脚本）
 */
// import "./Blueprints/Test/BP_Test2"
import "./Blueprints/Core/BP_BHPlayer"
import "./Blueprints/Core/BP_BHPlayerController"