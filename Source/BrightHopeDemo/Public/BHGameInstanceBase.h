// Copyright © m0ye. All rights reserved.

#pragma once

#include "CoreMinimal.h"
#include "Engine/GameInstance.h"
#include "JsEnv/Private/ContainerWrapper.h"
#include "BHGameInstanceBase.generated.h"

namespace puerts
{
	class FJsEnv;
}

/**
 * 
 */
UCLASS()
class BRIGHTHOPEDEMO_API UBHGameInstanceBase : public UGameInstance
{
	GENERATED_BODY()

public:
	//是否开启debug
	UPROPERTY(EditAnywhere,BlueprintReadWrite,Category="Debug | Puerts")
	bool bDebugMode;

	//是否让编辑器等待debugger
	UPROPERTY(EditAnywhere,BlueprintReadWrite,Category="Debug | Puerts")
	bool bWaitForDebugger;
	
private:
	//puerts
	TSharedPtr<puerts::FJsEnv> GameScript;

public:
	virtual void Init() override;
	virtual void OnStart() override;
	virtual void Shutdown() override;
};
