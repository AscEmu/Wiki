---
title: Lua_SetMaxMana
type: unit_methods
layout: single_markdown
position: 86
---

# Lua SetMaxMana

## Description

Sets player's or NPC's maximum mana.

## Syntax

```
pUnit:SetMaxMana(value)
```

## Usage/Example

```
function SetMaxMana(pPlayer)
  if(pPlayer:GetPlayerLevel() <= 10 and pPlayer:GetPowerType() == 0) then -- If the user is level 10 or lower and uses mana.
    pPlayer:SetMaxMana(1000) -- the player can now have a maximum of 1000 mana
  end
end
```

```
-- Now we first check how much maximum mana the character already uses and then put 1000 max mana on top of that.
-- I have a maximum mana of 4.000, after this effect I will have a max mana of 5.000 !
 
function SetMaxMana(pPlayer)
  if(pPlayer:GetPlayerLevel() <= 10 and pPlayer:GetPowerType() == 0) then -- If the user is level 10 or lower and uses mana.
    pPlayer:SetMaxMana(pPlayer:GetMaxMana()+1000)  -- increase the mana by 1000
  end
end
```
