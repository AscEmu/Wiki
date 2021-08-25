---
title: Lua_GetRandomEnemy
type: unit_methods
layout: single_markdown
position: 49
---

# Lua GetRandomEnemy

## Description

Will get a random 'enemy' near the unit. That means get a random unit seen as 'hostile'.

## Syntax

```
pRandomEnemy = pUnit:GetRandomEnemy()
```

## Usage/Example

```
function OnEnterCombat(pUnit, event, pAttacker)
  if(pUnit:GetRandomEnemy() and pAttacker:IsGm() == true) then
    pUnit:SendChatMessageToPlayer(14, 0, "Oh my god.. You're the gm!!!", pAttacker)
  end
end

function DodgedAttack(pUnit, event, pTarget)
  if(pUnit:GetHealthPct >= 30) then
    pUnit:SendChatMessageToPlayer(14, 0, "I can keep dodging all my time!!!", pAttacker)
  elseif(pUnit:GetHealthPct <= 30) then
    pUnit:SendChatMessageToPlayer(14, 0, "I'm gonna kill you !!!", pUnit:GetRandomEnemy())
  end
end
```
