---
title: Lua_GetDungeonDifficulty
type: standards_lua
layout: single_markdown
position: 17
---

# Lua GetDungeonDifficulty

## Usage/Example

```
function VHC_OnSpawn (Unit, Event)
  if (Unit:GetDungeonDifficulty() == 1) then
    Unit:SetHealth(65165)
    Unit:SetMaxHealth(65165)
  else
    Unit:SetHealth(42540)
    Unit:SetMaxHealth(42540)
  end
end
 
RegisterUnitEvent(30666, 18, "VHC_OnSpawn")
```