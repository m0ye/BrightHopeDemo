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
	//JS入口文件
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Puerts | Default")
	FString JsEntryFile;

#pragma region JsDebug
	//debug端号
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Puerts | Debug")
	int JsDebugPort = 8080;

	//是否开启debug
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Puerts | Debug")

	bool bDebugMode;

	//是否让编辑器等待debugger
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Puerts | Debug")

	bool bWaitForDebugger;
#pragma endregion

private:
	//puerts
	TSharedPtr<puerts::FJsEnv> GameScript;

public:
	virtual void Init() override;
	virtual void Shutdown() override;
};
