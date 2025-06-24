import * as UE from "ue";
import {blueprint} from 'puerts';
import {TS_BHCharBase} from "../Core/BP_BHCharacterBase";

//加载蓝图类，直接在引擎编辑器复制obj路径即可，需要在末尾加对应类_C
const ucls_BHPlayer = UE.Class.Load("/Game/Blueprints/Gameplay/BP_BHPlayer.BP_BHPlayer_C");
//获取对应js类，mixin要用到
const jsCls_BHPlayer = blueprint.tojs
    < typeof UE.Game.Blueprints.Gameplay.BP_BHPlayer.BP_BHPlayer_C > (ucls_BHPlayer);

//创建继承蓝图类的ts类接口，用来获取类型提示
interface TS_BHPlayer extends UE.Game.Blueprints.Gameplay.BP_BHPlayer.BP_BHPlayer_C {
}

/**
 * 创建继承并实现ts类接口的本体类，在这里编写类成员方法
 * 建议在蓝图创建类的成员字段，在脚本编写类的成员方法
 */
class TS_BHPlayer extends TS_BHCharBase implements TS_BHPlayer {
    ReceiveBeginPlay() {
        super.ReceiveBeginPlay();
        console.log("This message from TS_BHPlayer!");
    }
}

//mixin蓝图
blueprint.mixin(jsCls_BHPlayer, TS_BHPlayer);