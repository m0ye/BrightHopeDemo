"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * mixin模板，需要在入口模块导入
 * 为了避免一次性导入过多模块，可以在需要用到的时候调用require()导入
 */
const UE = require("ue");
const puerts_1 = require("puerts");
//加载蓝图类，直接在引擎编辑器复制obj路径即可，需要在末尾加对应类_C
const ucls = UE.Class.Load("/Game/Blueprints/Test/BP_Test2.BP_Test2_C");
//获取对应js类，mixin要用到
const jsCls = puerts_1.blueprint.tojs(ucls);
/**
 * 创建继承并实现ts类接口的本体类，在这里编写类成员方法
 * 建议在蓝图创建类的成员字段，在脚本编写类的成员方法
 */
class TS_Test2 {
    ReceiveBeginPlay() {
        0;
        console.log("111");
    }
    ReceiveTick(DeltaSeconds) {
        // this.Sphere.K2_AddLocalOffset(new UE.Vector(DeltaSeconds * 30, 0, 0), false,$ref<UE.HitResult>(), false)
    }
    //这是一个自定义ts方法，可以通过GI调用
    TS_Bigger() {
        this.Sphere.K2_AddLocalOffset(new UE.Vector(1000, 0, 0), false, (0, puerts_1.$ref)(), false);
    }
}
//mixin蓝图
puerts_1.blueprint.mixin(jsCls, TS_Test2);
//# sourceMappingURL=BP_Test2.js.map