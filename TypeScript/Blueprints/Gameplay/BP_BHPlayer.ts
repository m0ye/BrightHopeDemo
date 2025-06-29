/**
 * 玩家类蓝图
 */
import * as UE from "ue";
import {blueprint} from 'puerts';
import {TS_BHCharBase} from "../Core/BP_BHCharacterBase";

//加载蓝图类，直接在引擎编辑器复制obj路径即可，需要在末尾加对应类_C
const ucls_BHPlayer = UE.Class.Load("/Game/Blueprints/Gameplay/BP_BHPlayer.BP_BHPlayer_C");
//获取对应js类，mixin要用到
const jsCls_BHPlayer = blueprint.tojs
    < typeof UE.Game.Blueprints.Gameplay.BP_BHPlayer.BP_BHPlayer_C > (ucls_BHPlayer);

//创建继承蓝图类的ts类接口，用来获取类型提示
export interface TS_BHPlayer extends UE.Game.Blueprints.Gameplay.BP_BHPlayer.BP_BHPlayer_C {
}

/**
 * TS玩家类
 */
export class TS_BHPlayer extends TS_BHCharBase implements TS_BHPlayer {
    ReceiveBeginPlay() {
        super.ReceiveBeginPlay();
    }
}

//mixin蓝图
blueprint.mixin(jsCls_BHPlayer, TS_BHPlayer);