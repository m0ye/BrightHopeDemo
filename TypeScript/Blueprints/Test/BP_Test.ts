import * as UE from 'ue';
import {blueprint} from 'puerts';

console.log("this is TS_Test");

const ucls = UE.Class.Load("/Game/Blueprints/Test/BP_Test.BP_Test_C");
const jsClass = blueprint.tojs<typeof UE.Game.Blueprints.Test.BP_Test.BP_Test_C>(ucls);

interface TS_Test extends UE.Game.Blueprints.Test.BP_Test.BP_Test_C {}
class TS_Test implements TS_Test {
    ReceiveBeginPlay() {0
        console.log("111")
    }

    TS_Bigger() {
        this.Sphere.SetRelativeScale3D(new UE.Vector(2));
    }
}

blueprint.mixin(jsClass,TS_Test);