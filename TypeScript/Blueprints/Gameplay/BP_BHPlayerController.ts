/**
 * 玩家控制器蓝图
 */
import * as UE from "ue";
import {blueprint} from 'puerts';
import {TS_BHPCBase} from "../Core/BP_BHPlayerControllerBase";

//加载蓝图类，直接在引擎编辑器复制obj路径即可，需要在末尾加对应类_C
const ucls_BHPlayerController = UE.Class.Load("/Game/Blueprints/Gameplay/BP_BHPlayerController.BP_BHPlayerController_C");
//获取对应js类，mixin要用到
const jsCls_BHPlayerController = blueprint.tojs
    < typeof UE.Game.Blueprints.Gameplay.BP_BHPlayerController.BP_BHPlayerController_C > (ucls_BHPlayerController);

//创建继承蓝图类的ts类接口，用来获取类型提示
export interface TS_BHPlayerController extends UE.Game.Blueprints.Gameplay.BP_BHPlayerController.BP_BHPlayerController_C {
}

/**
 * TS玩家控制器类
 */
export class TS_BHPlayerController extends TS_BHPCBase implements TS_BHPlayerController {
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
        let InputComp = this.GetComponentByClass
        (UE.EnhancedInputComponent.StaticClass()) as UE.EnhancedInputComponent;

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

//mixin蓝图
blueprint.mixin(jsCls_BHPlayerController, TS_BHPlayerController);
