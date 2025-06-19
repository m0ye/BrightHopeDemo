// Fill out your copyright notice in the Description page of Project Settings.


#include "BHGameInstanceBase.h"

#include "JsEnv.h"

void UBHGameInstanceBase::Init()
{
	Super::Init();

	GameScript=MakeShared<puerts::FJsEnv>();

	GameScript->Start("MainGame");
}

void UBHGameInstanceBase::Shutdown()
{
	Super::Shutdown();

	GameScript.Reset();
}
