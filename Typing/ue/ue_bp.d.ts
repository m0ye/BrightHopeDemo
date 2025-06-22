/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: 
    namespace Game.Blueprints.GI_BH {
        class GI_BH_C extends UE.BHGameInstanceBase {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GI_BH_C;
            static Load(InName: string): GI_BH_C;
        
            __tid_GI_BH_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 
    namespace Game.Blueprints.Test.BP_Test {
        class BP_Test_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            Sphere: UE.StaticMeshComponent;
            DefaultSceneRoot: UE.SceneComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_Test_C;
            static Load(InName: string): BP_Test_C;
        
            __tid_BP_Test_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
}
