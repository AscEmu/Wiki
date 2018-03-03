---
title: Comments
type: codingstandard
layout: single_markdown
position: 9
---
# Comments

## Seperator

The standard seperator is 90 slash characters.

Right:

```cpp
//////////////////////////////////////////////////////////////////////////////////////////
```

Wrong:

```cpp
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
//----------------------------
//***********************************************************
```

Functions should be separated by ONE empty lines.

Right:

```cpp
//////////////////////////////////////////////////////////////////////////////////////////
bool ReturnTrue()
{
   return true;
}

//////////////////////////////////////////////////////////////////////////////////////////
/// Next function description
```

Wrong:

```cpp
///////////////////////////////////////////////////////////////////////////////////////////////////////////
bool ReturnTrue()
{
   return true;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Next function description
```

## Comment single line

The standard is a tripple slash with one space "/// "

## Mark the code

Use the following style to describe.

```cpp
///\todo Mark a todo like this
///- Mark a point like this
```

See in Doxygen Manual [[1]](http://www.stack.nl/~dimitri/doxygen/manual/commands.html#cmddefgroup)
