---
title: Basic Lua
type: standards_lua
layout: single_markdown
position: 1
---

# General Lua

Hello World! in Lua:

```
print "Hello World"
```

This will print "Hello World" on your screen.             
Factorial in Lua:           

```
function factorial(n)
    if n == 0 then
        return 1
    else
        return n* factorial(n-1)
    end
end
```

Variables in Lua:

global method_1
local method_2
method_1 = nil
method_2 = 1234


The global variable method_1 is being detroyed and method_2 becomes 1234. Variables in Lua are case-sensitive and can only contain letter, numbers, operators, colons & semicolons and underscores!         

## Comments

Basic comments can be written by using two hyphens e.g.

```
local AE = 1 -- "comment here"
```

For multi-line comments, then use

```
-- [[ ''comment''
''here'' ]]
```

# Operators

Lua uses the logical operators 'and', 'or', and 'not'. In Lua, 'nil' and the boolean value 'false' both represent false in a logical expression. Anything that is not false is true.

***true/false***

```
false == nil                       -- false, even though they represent the same, they are not equal.
true == false                      -- false
true ~= false                      -- true
1 == 0                             -- false
example_variable                   -- test to see if the variable 'example_variable' exists, since it is not yet defined, it is nil (or false)
```

***not*** The 'not' keyword inverts a logical expression value:

```
true                               -- true
false                              -- false
not true                           -- false
not false                          -- true
not nil                            -- true, nil represents false
not not true                       -- true, not can be used twice to negate itself (although not needed)
not "abc"                          -- false, anything not false or nil is true
```

***and*** The binary operator 'and' does not necessarily return a boolean value 'true' and 'false' to the expression 'x and y'. In some languages the 'and' operator returns a boolean dependent on the two inputs. In Lua, it returns the first argument if it is false or nil, and returns the second argument if the first is not false or nil. In short, a boolean value is only returned if the first argument is false or nil, or if the second argument is a boolean.

```
false and true                     -- returns false since the first argument is false
nil and true                       -- nil, same as above
nil and false                      -- nil
nil and "hello"                    -- nil
false and "hello"                  -- false
```

All of the above expressions return the first argument. All of the following expressions return the second argument, as the first is true.

```
true and false                     -- false, since the first argument isn't false it returns the second argument!
true and true                      -- true
1 and "hello"                      -- hello
"hello" and "there"                -- there
true and nil                       -- nil
```

As you can see the logical expressions are still evaluated correctly but we have some interesting behaviour because of the values returned. ***or*** The 'or' binary operator also does not necessarily return a boolean value (see notes for 'and' above). If the first argument is not false or nil it is returned, otherwise the second argument is returned. In short, a boolean is only returned if the first argument is true or the second argument is a boolean.

```
true or false                      -- true
true or nil                        -- true
"hello" or "there"                 -- hello
1 or 0                             -- 1
```

All of the above expressions return the first argument. All of the following expressions return the second argument, as the first is false or nil

```
false or true                      -- true
nil or true                        -- true
nil or "hello"                     -- hello
```

Basically, the 'or' operator does the opposite of the 'and' operator in terms of returning boolean values. This can be a very useful property. For example, setting default values in a function:

```
function abc(x)
local value = x or "default"       -- if argument x is false or nil, value becomes "default"
print (value, x)
end

abc()                              -- no arguments, so x is nil
default nil
abc(1)                             -- returns 1 and 1:
abc(true)                          -- true and true
abc(hello)                         -- hello and hello
```

## Arithmetic

They can each be used in the obvious ways, and can also be used as unary negation and powers:

```
-- Negation:
-(-10)                             -- Returns 10
-(10)                              -- Returns -10

-- Powers:
7^2                                -- Returns 49
104^0                              -- Returns 1
2^8                                -- Returns 256
```

## Ternary Operators

Ternary operators are a useful feature in C:

```
int value = x>3 ? 1 : 0;
```

This behavior can be partially emulated in Lua using the logical operators 'and' and 'or'. The C form:

```
value = test ? x : y;
```

roughly translates to the following Lua:

```
value = test and x or y
```

### Example:

```
print( 3>1 and 1 or 0 )            -- 1
print( 3<1 and 1 or 0 )            -- 0
print( 3<1 and "True" or "False" ) -- False
print( 3>1 and true or "false" )   -- true
```

However, there is a caveat: This only works when the first return value is not 'nil' or 'false'.

```
print( 3>1 and 1 or "False" )      -- works and returns 1
print( 3>1 and false or "oops" )   -- failed, should return false, still returns oops
print( 3>1 and nil or "oops" )     -- failed, should return nil, still returns oops
```

## Adding Color

Adding Color to things can make them look much more better.              
You can color the text that comes from Broadcast Messages, Gossip Menu Options, and more! It's done by using *Hexadecimal Color Codes*. [You can find these codes here.](http://html-color-codes.com/)              
Each code corresponds to what color will be displayed. Here is a list of basic colors:            

```
RED     = FF0000
GREEN   = 00FF00
BLUE    = 0000FF
ORANGE  = FFCC00
PURPLE  = CC00CC
YELLOW  = FFFF00
BROWN   = CC6600
BLACK   = 000000
WHITE   = FFFFFF


To color your text in-game you must use ***|c*** to begin the color code and ***|r*** to end it. Also use two ***F***'s after the ***|c*** in order to get the correct color.

## Example:

```
function OnPlayerDied(event, player)
player:SendBroadcastMessage("|cFFFFCC00 You're a winner,|r |cFFCC6600"..player:GetName()..".|r")
end

RegisterServerHook(6, "OnPlayerDied")
```

*Sends you the message* <span style="color:FFFFCC00">You're a winner, </span><span style="color:FFCC6600"><Player Name></span>           

I used two color codes: Orange and Brown. Before writing the color codes I used two F's.             

## Coloring your Console

Coloring your console is very simple and doesn't require *Hexadecimal Color Codes*, it requires the use of the global function called *logcol*.              
There is 3 colors that can be used in logcol and one that brightens the color.          

```
BLUE        = 1
GREEN       = 2 
RED         = 4 
BRIGHTEN    = 8
```

These can be added together though, Example: Red(4) + Blue(1) = Purple(5).

## Example:

```
logcol(5)
print("Purple")
logcol(1)
print("Blue")
logcol(9)
print("Bright Blue")
```
