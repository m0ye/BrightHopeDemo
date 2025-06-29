"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TS_BHPlayerController = void 0;
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
 * TS玩家控制器类
 */
class TS_BHPlayerController extends BP_BHPlayerControllerBase_1.TS_BHPCBase {
    ReceiveBeginPlay() {
        super.ReceiveBeginPlay();
        let EnhancedInputSubsystem = this.GetEnhanceInputSubsystem();
        if (EnhancedInputSubsystem) {
            EnhancedInputSubsystem.AddMappingContext(this.BaseInputMapping, 0);
        }
        this.InputBindActions();
    }
    //绑定输入处理函数
    InputBindActions() {
        let InputComp = this.GetComponentByClass(UE.EnhancedInputComponent.StaticClass());
        InputComp.BHBindAction(this.MoveAction, UE.ETriggerEvent.Triggered, this, "HandleMove");
        InputComp.BHBindAction(this.TestAction, UE.ETriggerEvent.Started, this, "HandleTest");
    }
    HandleMove() {
        console.log("Handle move from TS_BHPlayerController");
    }
    HandleTest() {
        console.log("Handle test from TS_BHPlayerController");
    }
}
exports.TS_BHPlayerController = TS_BHPlayerController;
//mixin蓝图
puerts_1.blueprint.mixin(jsCls_BHPlayerController, TS_BHPlayerController);
//# sourceMappingURL=BP_BHPlayerController.js.map