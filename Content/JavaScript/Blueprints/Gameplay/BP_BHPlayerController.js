"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 玩家控制器蓝图
 */
const UE = require("ue");
const puerts_1 = require("puerts");
const BP_BHPlayerControllerBase_1 = require("../Core/BP_BHPlayerControllerBase");
//加载蓝图类，直接在引擎编辑器复制obj路径即可，需要在末尾加对应类_C
const ucls_BHPlayerController = UE.Class.Load("/Game/Blueprints/Gameplay/BP_BHPlayerController.BP_BHPlayerController_C");
//获取对应js类，mixin要用到
const jsCls_BHPlayerController = puerts_1.blueprint.tojs(ucls_BHPlayerController);
/**
 * 创建继承并实现ts类接口的本体类，在这里编写类成员方法
 * 建议在蓝图创建类的成员字段，在脚本编写类的成员方法
 */
class TS_BHPlayerController extends BP_BHPlayerControllerBase_1.TS_BHPCBase {
    ReceiveBeginPlay() {
        super.ReceiveBeginPlay();
        // console.log("This message from TS_BHPlayerController!");
        let EnhancedInputSubsystem = this.GetEnhanceInputSubsystem();
        if (EnhancedInputSubsystem) {
            EnhancedInputSubsystem.AddMappingContext(this.BaseInputMapping, 0);
        }
    }
}
//mixin蓝图
puerts_1.blueprint.mixin(jsCls_BHPlayerController, TS_BHPlayerController);
//# sourceMappingURL=BP_BHPlayerController.js.map