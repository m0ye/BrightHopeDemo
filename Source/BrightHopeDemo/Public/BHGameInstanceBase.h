// Fill out your copyright notice in the Description page of Project Settings.

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
	TSharedPtr<puerts::FJsEnv> GameScript;

	virtual void Init() override;
	virtual void Shutdown() override;
};
