---
title: Lua_GetGmRank
type: standards_lua
layout: single_markdown
position: 23
---

# Lua GetGmRank

## Description

Returns a value based on the GM level of the account (a, az etc.). Returns nil if the account is not a GM.

##Usage/Example

```
function GMCheck(event, player)
if player:GetGMRank() then -- checks if he is a GM
-- do something
end
```