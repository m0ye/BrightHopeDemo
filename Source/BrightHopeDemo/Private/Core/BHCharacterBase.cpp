// Copyright © m0ye. All rights reserved.


#include "Core/BHCharacterBase.h"


// Sets default values
ABHCharacterBase::ABHCharacterBase()
{
	// Set this character to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = true;
}

// Called when the game starts or when spawned
void ABHCharacterBase::BeginPlay()
{
	Super::BeginPlay();
	
}

// Called every frame
void ABHCharacterBase::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
}

// Called to bind functionality to input
void ABHCharacterBase::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
	Super::SetupPlayerInputComponent(PlayerInputComponent);
}

