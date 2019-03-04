---
title: Lua_GetAddTank
type: standards_lua
layout: single_markdown
position: 2
---

# Lua GetAddTank 

## Description

This method returns the Unit that has the second most threat on the Unit's AI (Threat) table. It returns a pointer to that Unit - therefore you can invoke methods upon it.

## Example / Usage

```
-- This script will check if the person with the second highest threat on the AI table and will kill it if it is within 7 yards of the Unit.
function OnAIUpdate(pUnit)
    if pUnit:GetAddTank() then
        if pUnit:GetAddTank():GetDistanceYards(pUnit) < 7 then
            pUnit:CastSpellOnTarget(5, pUnit:GetAddTank())
        end
    end
end
```