"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TS_BHCharBase = void 0;
/**
 * 角色基类蓝图
 */
const UE = require("ue");
const puerts_1 = require("puerts");
//加载蓝图类，直接在引擎编辑器复制obj路径即可，需要在末尾加对应类_C
const ucls_BHCharBase = UE.Class.Load("/Game/Blueprints/Core/BP_BHCharacterBase.BP_BHCharacterBase_C");
//获取对应js类，mixin要用到
const jsCls_BHCharBase = puerts_1.blueprint.tojs(ucls_BHCharBase);
/**
 * TS角色基类
 */
class TS_BHCharBase {
    ReceiveBeginPlay() {
    }
}
exports.TS_BHCharBase = TS_BHCharBase;
//mixin蓝图
puerts_1.blueprint.mixin(jsCls_BHCharBase, TS_BHCharBase);
//# sourceMappingURL=BP_BHCharacterBase.js.map