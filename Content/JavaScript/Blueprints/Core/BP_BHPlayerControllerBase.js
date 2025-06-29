"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TS_BHPCBase = void 0;
/**
 * 玩家控制器基类蓝图
 */
const UE = require("ue");
const puerts_1 = require("puerts");
//加载蓝图类，直接在引擎编辑器复制obj路径即可，需要在末尾加对应类_C
const ucls_BHPCBase = UE.Class.Load("/Game/Blueprints/Core/BP_BHPlayerControllerBase.BP_BHPlayerControllerBase_C");
//获取对应js类，mixin要用到
const jsCls_BHPCBase = puerts_1.blueprint.tojs(ucls_BHPCBase);
/**
 * TS控制器基类
 */
class TS_BHPCBase {
    ReceiveBeginPlay() {
    }
}
exports.TS_BHPCBase = TS_BHPCBase;
//mixin蓝图
puerts_1.blueprint.mixin(jsCls_BHPCBase, TS_BHPCBase);
//# sourceMappingURL=BP_BHPlayerControllerBase.js.map