---
title: Lua_GetMaxSkill
type: standards_lua
layout: single_markdown
position: 40
---

# Lua GetMaxSkill

## Description

Will return the level of the given skill. A skill ID must be used, not skill names!

## Syntax

```
int MaxSkill = pPlayer:GetMaxSkill(int SkillID)
```

## Usage/Example

Will return the level for 'Swords' (id = 43)

```
function OnEnterCombat(pUnit, event, pAttacker)
  if(pAttacker:IsGm() == true) then
    AEMaxSkill = pAttacker:GetMaxSkill(43)
    pUnit:SendChatMessageToPlayer(14, 0, "Oh my god.. Your defense level is " .. AEMaxSkill .., pAttacker)
  end
end
```
