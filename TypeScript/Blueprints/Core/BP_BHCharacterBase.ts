import * as UE from "ue";
import {blueprint} from 'puerts';

//加载蓝图类，直接在引擎编辑器复制obj路径即可，需要在末尾加对应类_C
const ucls_BHCharBase = UE.Class.Load("/Game/Blueprints/Core/BP_BHCharacterBase.BP_BHCharacterBase_C");
//获取对应js类，mixin要用到
const jsCls_BHCharBase = blueprint.tojs
    < typeof UE.Game.Blueprints.Core.BP_BHCharacterBase.BP_BHCharacterBase_C > (ucls_BHCharBase);

//创建继承蓝图类的ts类接口，用来获取类型提示
export interface TS_BHCharBase extends UE.Game.Blueprints.Core.BP_BHCharacterBase.BP_BHCharacterBase_C {
}

/**
 * 创建继承并实现ts类接口的本体类，在这里编写类成员方法
 * 建议在蓝图创建类的成员字段，在脚本编写类的成员方法
 */
export class TS_BHCharBase implements TS_BHCharBase {
    ReceiveBeginPlay() {
        console.log("This message from TS_BHCharBase!");
    }
}

//mixin蓝图
blueprint.mixin(jsCls_BHCharBase, TS_BHCharBase);