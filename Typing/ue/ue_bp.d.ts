/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: 1542ACB8467E30E2EFE548808D1A345C
    namespace Game.Blueprints.BP_BHGI {
        class BP_BHGI_C extends UE.BHGameInstanceBase {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_BHGI_C;
            static Load(InName: string): BP_BHGI_C;
        
            __tid_BP_BHGI_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 21E39E104CAAE9E5691294BC73A7EBBE
    namespace Game.Blueprints.Test.BP_Test2 {
        class BP_Test2_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            Sphere: UE.StaticMeshComponent;
            DefaultSceneRoot: UE.SceneComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_Test2_C;
            static Load(InName: string): BP_Test2_C;
        
            __tid_BP_Test2_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
}
