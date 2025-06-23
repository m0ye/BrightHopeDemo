import * as UE from "ue";
import {blueprint} from 'puerts';

//加载蓝图类，直接在引擎编辑器复制obj路径即可，需要在末尾加对应类_C
const ucls_BHPlayerController = UE.Class.Load("/Game/Blueprints/Core/BP_BHPlayerController.BP_BHPlayerController_C");
//获取对应js类，mixin要用到
const jsCls_BHPlayerController = blueprint.tojs
    <typeof UE.Game.Blueprints.Core.BP_BHPlayerController.BP_BHPlayerController_C>(ucls_BHPlayerController);

//创建继承蓝图类的ts类接口，用来获取类型提示
interface TS_BHPlayerController extends UE.Game.Blueprints.Core.BP_BHPlayerController.BP_BHPlayerController_C {
}

/**
 * 创建继承并实现ts类接口的本体类，在这里编写类成员方法
 * 建议在蓝图创建类的成员字段，在脚本编写类的成员方法
 */
class TS_BHPlayerController implements TS_BHPlayerController {
    ReceiveBeginPlay() {
        console.log("This message from TS_BHPlayerController!");
    }
}

//mixin蓝图
blueprint.mixin(jsCls_BHPlayerController, TS_BHPlayerController);