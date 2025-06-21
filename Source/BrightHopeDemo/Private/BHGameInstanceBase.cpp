// Copyright © m0ye. All rights reserved.


#include "BHGameInstanceBase.h"

#include "JsEnv.h"

void UBHGameInstanceBase::Init()
{
	Super::Init();

	if (!bDebugMode)
	{
		GameScript = MakeShared<puerts::FJsEnv>();
		GameScript->Start("MainGame");
	}
}

void UBHGameInstanceBase::OnStart()
{
	Super::OnStart();

	if (bDebugMode) 
	{
		GameScript = MakeShared<puerts::FJsEnv>(
			std::make_unique<puerts::DefaultJSModuleLoader>(TEXT("JavaScript")),
			std::make_shared<puerts::FDefaultLogger>(),
			8080
		);
		if (bWaitForDebugger)
		{
			GameScript->WaitDebugger();
		}
		GameScript->Start("MainGame");
	}
}

void UBHGameInstanceBase::Shutdown()
{
	Super::Shutdown();

	GameScript.Reset();
}
