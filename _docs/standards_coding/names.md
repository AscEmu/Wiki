---
title: Names
type: codingstandard
layout: single_markdown
position: 7
---
# Names

Do not use underscores unless specified by another guideline

## variable/data members

Use lowerCamelCase for public/protected variables and data members.
Use an "_" before private data members.

## class/struct/function/namespace

Use UpperCamelCase aka PascalCamel for a class, struct and namespace names.
Use lowerCamelCase for class functions.

Right:
{: .success }

```cpp
class Gameobject;
GameObject::setState(true);
struct CreatureData;
size_t bufferSize;
char characterDelimiter;
```

Wrong:
{: .error }

```cpp
class gameobject;
gameobject::SetState(true);
struct _creature_data;
size_t buffer_size;
char Characterdelimiter;
```

## class-/ structure data members

Prefix class and struct data members with "m_".

Right:
{: .success }

```cpp
class CWString
{
    ...
    short m_length;
};
```

Wrong:
{: .error }

```cpp
class CWString
{
    ...
    short length;
};
```

## procede boolean

Precede boolean values with words like "is", "has" and "did".

Right:
{: .success }

```cpp
bool isValid;
bool didSendData;
bool hasChildren;
```

Wrong:
{: .error }

```cpp
bool valid;
bool sentData;
bool children;
```

## use full words

Use full words, for all variables except in the rare cases where an abbreviation would be more canonical and easier to understand.

Right:
{: .success }

```cpp
size_t charSize;
size_t length;
short tabIndex;
```

Wrong:
{: .error }

```cpp
size_t characterSize;
size_t len;
short tabulationIndex;
```

## cross meaning iterator

Avoid using cross meaning iterator variable names in loops, for example do not use i,j or k as iterator variables when working on a Quaternion or x,y and z when working with a vector as these types can contain data members of the same names causing confusion.

## function names

Use descriptive verbs in function names.

Right:
{: .success }

```cpp
bool convertToASCII(short*, size_t);
```

Wrong:
{: .error }

```cpp
bool toASCII(short*, size_t);
```

## meaningless variable names

Leave meaningless variable names out of function declarations.

Right:
{: .success }

```cpp
void setCount(size_t);
```

Wrong:
{: .error }

```cpp
void SetCount(size_t count);
```

## unused names

Comment unused variable names out of function definitions.

Right:
{: .success }

```cpp
void CWHeap::Free(void* /*pAddr*/)
{
}
```

Wrong:
{: .error }

```cpp
void CWHeap::Free(void* pAddr)
{
}
```

## readwrite variable

Use "Get"/"Set" for readwrite variable.

Right:
{: .success }

```cpp
size_t getCount();
...
size_t setCount();
```

Wrong:
{: .error }

```cpp
size_t Count();
```

## mutators

Precede mutators with the word "set" and should match the name of the variable being accessed.

Right:
{: .success }

```cpp
void setCount(size_t);
```

Wrong:
{: .error }

```cpp
void count(size_t);
```

## defined

```cpp
#defined constants should use all uppercase names with words separated by underscores.
```

Right:
{: .success }

```cpp
#define KEY_ALT_MASK 0x04
```

Wrong:
{: .error }

```cpp
#define KeyAltMask 0x04
```

Macros that expand to function calls or other non-constant computation. These should be named like functions, and should have parentheses at the end, even if they take no arguments (with the exception of some special macros like STD_ASSERT). Note that usually it is preferable to use an inline function in such cases instead of a macro.

Right:
{: .success }

```cpp
#define WBStopButtonTitle()  NSLocalizedString(@"Stop", @"Stop button title")
```

Wrong:
{: .error }

```cpp
#define WB_STOP_BUTTON_TITLE  NSLocalizedString("Stop", "Stop button title")

#define WBStopButtontitle  NSLocalizedString("Stop", "Stop button title")
```

## ifndef, define, endif

```cpp
#ifndef, #define "header guards" should be named as for example _FILENAME replacing the '.' with a '_' and capitalizing the text.
```

Right:
{: .success }

```cpp
#ifndef _GAMEOBJECT_H
#define _GAMEOBJECT_H
```

Wrong:
{: .error }

```cpp
#ifndef _GameObject_H_
#define _GameObject_H_
```

The #endif for the header guard at the end of the header file should have a double slash comment appended after it showing the macro name
The line above the header guard endif should be the standard seperator comment.
This closing comment should have a space before and after the comment double slash.

Right:
{: .success }

```cpp
#endif // _GAMEOBJECT_H
```

Wrong:
{: .error }

```cpp
#endif
```
