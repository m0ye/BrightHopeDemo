/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: 
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
// __TYPE_DECL_START: 
    namespace Game.Blueprints.Test.BP_Test2 {
        class BP_Test2_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Sphere: UE.StaticMeshComponent;
            DefaultSceneRoot: UE.SceneComponent;
            ExecuteUbergraph_BP_Test2(EntryPoint: number) : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_Test2_C;
            static Load(InName: string): BP_Test2_C;
        
            __tid_BP_Test2_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 
    namespace Game.Blueprints.Core.BP_BHGameMode {
        class BP_BHGameMode_C extends UE.BHGameModeBase {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_BHGameMode_C;
            static Load(InName: string): BP_BHGameMode_C;
        
            __tid_BP_BHGameMode_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 
    namespace Game.Blueprints.Test.BP_Test {
        class BP_Test_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Sphere: UE.StaticMeshComponent;
            DefaultSceneRoot: UE.SceneComponent;
            ExecuteUbergraph_BP_Test(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_Test_C;
            static Load(InName: string): BP_Test_C;
        
            __tid_BP_Test_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 
    namespace Game.Blueprints.Core.BP_BHCharacterBase {
        class BP_BHCharacterBase_C extends UE.BHCharacterBase {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ExecuteUbergraph_BP_BHCharacterBase(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_BHCharacterBase_C;
            static Load(InName: string): BP_BHCharacterBase_C;
        
            __tid_BP_BHCharacterBase_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 
    namespace Game.Blueprints.Gameplay.BP_BHPlayer {
        class BP_BHPlayer_C extends UE.Game.Blueprints.Core.BP_BHCharacterBase.BP_BHCharacterBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Camera: UE.CameraComponent;
            ExecuteUbergraph_BP_BHPlayer(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_BHPlayer_C;
            static Load(InName: string): BP_BHPlayer_C;
        
            __tid_BP_BHPlayer_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 
    namespace Game.Blueprints.Core.BP_BHPlayerControllerBase {
        class BP_BHPlayerControllerBase_C extends UE.BHPlayerControllerBase {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_BHPlayerControllerBase_C;
            static Load(InName: string): BP_BHPlayerControllerBase_C;
        
            __tid_BP_BHPlayerControllerBase_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 
    namespace Game.Blueprints.Gameplay.BP_BHPlayerController {
        class BP_BHPlayerController_C extends UE.Game.Blueprints.Core.BP_BHPlayerControllerBase.BP_BHPlayerControllerBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            BaseInputMapping: UE.InputMappingContext;
            MoveAction: UE.InputAction;
            ExecuteUbergraph_BP_BHPlayerController(EntryPoint: number) : void;
            GetEnhanceInputSubsystem() : UE.EnhancedInputLocalPlayerSubsystem;
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_BHPlayerController_C;
            static Load(InName: string): BP_BHPlayerController_C;
        
            __tid_BP_BHPlayerController_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
}
