"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TS_BHPlayer = void 0;
/**
 * 玩家类蓝图
 */
const UE = require("ue");
const puerts_1 = require("puerts");
const BP_BHCharacterBase_1 = require("../Core/BP_BHCharacterBase");
//加载蓝图类，直接在引擎编辑器复制obj路径即可，需要在末尾加对应类_C
const ucls_BHPlayer = UE.Class.Load("/Game/Blueprints/Gameplay/BP_BHPlayer.BP_BHPlayer_C");
//获取对应js类，mixin要用到
const jsCls_BHPlayer = puerts_1.blueprint.tojs(ucls_BHPlayer);
/**
 * TS玩家类
 */
class TS_BHPlayer extends BP_BHCharacterBase_1.TS_BHCharBase {
    ReceiveBeginPlay() {
        super.ReceiveBeginPlay();
    }
}
exports.TS_BHPlayer = TS_BHPlayer;
//mixin蓝图
puerts_1.blueprint.mixin(jsCls_BHPlayer, TS_BHPlayer);
//# sourceMappingURL=BP_BHPlayer.js.map