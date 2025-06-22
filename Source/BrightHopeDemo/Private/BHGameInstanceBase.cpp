// Copyright © m0ye. All rights reserved.


#include "BHGameInstanceBase.h"

#include "JsEnv.h"

void UBHGameInstanceBase::Init()
{
	Super::Init();

	if (bDebugMode)
	{
		//创建脚本Debug环境
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
		//创建普通脚本环境
		GameScript = MakeShared<puerts::FJsEnv>();
	}

	if (!JsEntryFile.IsEmpty())
	{
		//传递给入口脚本的参数
		TArray<TPair<FString, UObject*>> args;
		//添加本游戏实例作为参数
		args.Add(TPair<FString, UObject*>(TEXT("GameInstance"), this));

		//进入JS入口脚本
		GameScript->Start(JsEntryFile, args);
	}
}

void UBHGameInstanceBase::Shutdown()
{
	Super::Shutdown();

	GameScript.Reset();
}

void UBHGameInstanceBase::TSFuncCallTS(FString FunctionName, UObject* Obj)
{
	FTSFuncCall.ExecuteIfBound(FunctionName, Obj);
}
