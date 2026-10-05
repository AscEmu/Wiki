---
title: Basic Lua
type: basic_lua
layout: single_markdown
position: 1
---

# General Lua

## Hello World

A simple "Hello World!" example in Lua:

```lua
print("Hello World")
```

This prints **Hello World** to the console.

## Factorial

A simple recursive factorial function:

```lua
function factorial(n)
    if n == 0 then
        return 1
    else
        return n * factorial(n - 1)
    end
end
```

## Variables

Lua supports global and local variables:

```lua
method_1 = nil
local method_2 = 1234
```

**method_1** is a global variable, while **method_2** is local to the current scope.

Lua variables are case-sensitive. Identifiers can contain letters, digits, and underscores, but cannot begin with a digit.

## Comments

Single-line comments start with two hyphens:

```lua
local AE = 1 -- "comment here"
```

Multi-line comments use **--[[** and **]]**:

```lua
--[[
    Multi-line comment
    can span multiple lines.
]]
```

# Operators

Lua provides the logical operators **and**, **or**, and **not**.

In logical expressions, **nil** and **false** are treated as false. All other values, including **0** and empty strings, are treated as true.

## true and false

```lua
false == nil       -- false: they are both false in a logical expression, but they are different values
true == false      -- false
true ~= false      -- true
1 == 0             -- false
example_variable   -- nil because it has not been defined
```

## not

The **not** operator negates a logical value:

```lua
not true           -- false
not false          -- true
not nil            -- true
not not true       -- true
not "abc"          -- false
```

## and

The **and** operator does not necessarily return a boolean value.

For **x and y**:

* If **x** is **nil** or **false**, **x** is returned.
* Otherwise, **y** is returned.

```lua
false and true     -- false
nil and true       -- nil
nil and false      -- nil
nil and "hello"    -- nil
false and "hello"  -- false
```

When the first value is neither **nil** nor **false**, the second value is returned:

```lua
true and false     -- false
true and true      -- true
1 and "hello"      -- "hello"
"hi" and "there"   -- "there"
true and nil       -- nil
```

## or

The **or** operator also does not necessarily return a boolean value.

For **x or y**:

* If **x** is neither **nil** nor **false**, **x** is returned.
* Otherwise, **y** is returned.

```lua
true or false       -- true
true or nil         -- true
"hello" or "there"  -- "hello"
1 or 0              -- 1
```

If the first value is **nil** or **false**, the second value is returned:

```lua
false or true       -- true
nil or true         -- true
nil or "hello"      -- "hello"
```

This behavior is commonly used to provide default values:

```lua
function abc(x)
    local value = x or "default"
    print(value, x)
end

abc()               -- Returns default, nil
abc(1)              -- Returns 1, 1
abc(true)           -- Returns true, true
abc("hello")        -- Returns hello, hello
```

# Arithmetic

Lua supports the usual arithmetic operators. The **-** operator can also be used for unary negation, and **^** is used for exponentiation.

```lua
-- Negation
-(-10)              -- Returns 10
-(10)               -- Returns -10

-- Powers
7 ^ 2               -- Returns 49
104 ^ 0             -- Returns 1
2 ^ 8               -- Returns 256
```

## Ternary Operators

Lua does not have a dedicated ternary operator like C or C++.

The following C expression:

```cpp
value = test ? x : y;
```

can often be approximated in Lua using **and** and **or**:

```lua
value = test and x or y
```

### Example

```lua
print(3 > 1 and 1 or 0)             -- 1
print(3 < 1 and 1 or 0)             -- 0
print(3 < 1 and "True" or "False")  -- False
print(3 > 1 and true or "false")    -- true
```

There is an important limitation: this pattern does not work correctly when **x** is **nil** or **false**.

```
print( 3>1 and 1 or "False" )       -- works and returns 1
print( 3>1 and false or "oops" )    -- failed, should return false, still returns oops
print( 3>1 and nil or "oops" )      -- failed, should return nil, still returns oops
```

When the true branch must be able to return **false** or **nil**, use an explicit **if** statement instead.

## Adding Color

You can add color to in-game text, such as broadcast messages and gossip menu options, using hexadecimal color codes. [You can find a list of color codes here.](http://html-color-codes.com/)

Each hexadecimal color code defines the color displayed in-game. Here are some basic colors:

A few basic colors:

```text
RED     = FF0000
GREEN   = 00FF00
BLUE    = 0000FF
ORANGE  = FFCC00
PURPLE  = CC00CC
YELLOW  = FFFF00
BROWN   = CC6600
BLACK   = 000000
WHITE   = FFFFFF
```

To color text in-game, use `|c` followed by an 8-digit color value and `|r` to reset the color.

The first two hexadecimal digits represent the alpha channel. For fully opaque text, use **FF**.

## Example

```lua
function OnPlayerDied(event, player)
    player:SendBroadcastMessage("|cFFFFCC00You have died,|r |cFFCC6600" .. player:GetName() .. ".|r")
end

RegisterServerHook(6, "OnPlayerDied")
```

This sends a colored message when the player dies.

![OnPlayerDied](/Wiki/images/standards/example/example_lua_text_color.jpg "Colored broadcast message")

Two color codes are used in this example: orange and brown. Each color begins with `|cFF` followed by the six-digit RGB color code and ends with `|r`.

## Coloring Your Console

Console output can be colored using the global **logcol** function. It uses the following color values:

```text
BLUE      = 1
GREEN     = 2
RED       = 4
BRIGHTEN  = 8
```

These values can be combined. For example, red (**4**) + blue (**1**) produces purple (**5**).

### Example

```lua
logcol(5)
print("Purple")

logcol(1)
print("Blue")

logcol(9)
print("Bright Blue")
```
