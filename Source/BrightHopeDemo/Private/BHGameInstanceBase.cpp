// Copyright © m0ye. All rights reserved.


#include "BHGameInstanceBase.h"

#include "JsEnv.h"

void UBHGameInstanceBase::Init()
{
	Super::Init();

	if (bDebugMode)
	{
		GameScript = MakeShared<puerts::FJsEnv>(
			std::make_unique<puerts::DefaultJSModuleLoader>(TEXT("JavaScript")),
			std::make_shared<puerts::FDefaultLogger>(),
			JsDebugPort
		);
		if (bWaitForDebugger)
		{
			GameScript->WaitDebugger();
		}
	}
	else
	{
		GameScript = MakeShared<puerts::FJsEnv>();
	}
	
	if (!JsEntryFile.IsEmpty())
	{
		//进入JS入口程序
		GameScript->Start(JsEntryFile);
	}
}

void UBHGameInstanceBase::Shutdown()
{
	Super::Shutdown();

	GameScript.Reset();
}
