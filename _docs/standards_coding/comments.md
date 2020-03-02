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
{: .success }

```cpp
//////////////////////////////////////////////////////////////////////////////////////////
```

Wrong:
{: .error }

```cpp
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
//----------------------------
//***********************************************************
```

Functions should be separated by ONE empty lines.

Right:
{: .success }

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
{: .error }

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
