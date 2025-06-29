/**
 * 玩家控制器基类蓝图
 */
import * as UE from "ue";
import {blueprint} from 'puerts';

//加载蓝图类，直接在引擎编辑器复制obj路径即可，需要在末尾加对应类_C
const ucls_BHPCBase = UE.Class.Load("/Game/Blueprints/Core/BP_BHPlayerControllerBase.BP_BHPlayerControllerBase_C");
//获取对应js类，mixin要用到
const jsCls_BHPCBase = blueprint.tojs
    < typeof UE.Game.Blueprints.Core.BP_BHPlayerControllerBase.BP_BHPlayerControllerBase_C > (ucls_BHPCBase);

//创建继承蓝图类的ts类接口，用来获取类型提示
export interface TS_BHPCBase extends UE.Game.Blueprints.Core.BP_BHPlayerControllerBase.BP_BHPlayerControllerBase_C {
}

/**
 * TS控制器基类
 */
export class TS_BHPCBase implements TS_BHPCBase {
    ReceiveBeginPlay() {
    }
}

//mixin蓝图
blueprint.mixin(jsCls_BHPCBase, TS_BHPCBase);