---
title: Other Punctuation
type: codingstandard
layout: single_markdown
position: 8
---
# Other Punctuation

## initializer

Constructors for classes should initialize all of their members using C++ initializer syntax.
All superclasses should be on the same line as the class name
If there are superclasses (parent classes) Starting on the next line after the class name and superclass list each member with its initialization wrapping at less than or equel to 120 characters further members should be initialized starting with an indent one level past the class name.
If there are no superclasses (parent classes) Starting on the same line as the class name each member should be initialized wrapping at less than or equel to 120 characters then further lines of members are indented one level past the class name.
If there are are so few members and superclasses that the initialization fits under 120 characters Starting on the same line as the class name each member should be initialized.
There should be more than one member on each line making it as compact as is readable without exceeding 120 characters per line including indentation
The initializer list should match the order of class data members precisely

Right:
{: .success }

```cpp
Documentation::Documentation(Document* pDoc): XMLReader(), XMLWriter(),
   m_memberAlpha(0), m_memberBeta(0), m_memberGamma(0),
   m_memberDelta(0), m_memberEpsilon(0), m_memberZeta(0),
{

};

XMLReader::XMLReader() : m_memberAlpha(0), m_memberBeta(0), m_memberGamma(0),
   m_memberDelta(0), m_memberEpsilon(0), m_memberZeta(0),
{

};

XMLWriter::XMLWriter() : FileIO(), m_memberAlpha(0)
{

};
```

Wrong:
{: .error }

```cpp
Documentation::Documentation(Document* pDoc) : XMLReader(), XMLWriter()
{
   m_memberAlpha = 0;
   m_memberBeta = 0;
   m_memberGamma = 0;
   m_memberDelta = 0;
   m_memberEpsilon = 0;
   m_memberZeta = 0;
}
```

## pointer and reference

Pointer and reference types are compound types and should be written with no space between the type name and the * or & followed by spaces and or indents then the variable name.

Right:
{: .success }

```cpp
Image* TextureHandler::DoSomething(Color& tint)
{
   Color* pElement = static_cast<Color*>(node());
   const ColorArray& colors = ColorInputs();
```

Wrong:
{: .error }

```cpp
Image *TextureHandler::DoSomething(Color &tint)
{
   Color *element = static_cast<Color *>(node());
   const ColorArray &colors = ColorInputs();
```

## inline functions

Prefer const to #define.
Prefer inline functions to macros.
Inline functions should be explicitly marked as inline with the inline keyword.

Right:
{: .success }

```cpp
inline Color* GetColor() { return m_pColor; }
```

Wrong:
{: .error }

```cpp
Color *GetColor() { return m_color; }
```

Inline functions consisting of one call or operation should occupy no more than 1 line of code and coexist inside the class definition.

Right:
{: .success }

```cpp
inline Color* GetColor() { return m_pColor; }
```

Wrong:
{: .error }

```cpp
inline Color* GetColor()
{
  return m_color;
}
```

Inline functions that consist of more than one call or operation should be prototyped (declared) in the class definition and implementated (defined) in the same header after the class defenition.
Both the prototype (declaration) and the implementation (definition) of inline functions should have the inline keyword as some compilers use one or the other or both to determine inlining rules.
Implementing intentional infinite loops should be done with a for(;;).

Right:
{: .success }

```cpp
for (;;)
{
   ...
}
```

Wrong:
{: .error }

```cpp
while (true)
{
   ...
}
while (1)
{
   ...
}
```

## enums

Enumerations should always be named so they can be used as type safe parameters.

Right:
{: .success }

```cpp
enum EWTypes
{
   ...
}
```

Wrong:
{: .error }

```cpp
enum
{
   ...
}
```

## const

### not modified objects

If the object you are calling a function on, is not going to be modified durring the functions scope, the function should ALWAYS have the const modifier on the end.

Right:
{: .success }

```cpp
unsignedint GetSize() const { return m_size; }

unsigned int SetSize(unsigned int size) { m_size = size; }
```

Wrong:
{: .error }

```cpp
unsigned int GetSize() { return m_size; }

unsigned SetSize(unsigned int size) const { m_size = size; }
```

### pointer passing

When passing pointers or references to items as function paramaters, and the item being passed should not change, you should mark the parameter as const.

Right:
{: .success }

```cpp
void Print(const char* pString); // pString is not modified

void ModifyString(char* pString); // pString may be modified

void ScanObject(const CObject& obj); // obj is not modified

void ModifyObject(CObject& obj); // obj may be modified
```

Wrong:
{: .error }

```cpp
void Print(char* pString);

void ModifyString(const char* pString);

void ScanObject(CObject& obj)

void ModifyObject(const CObject& obj);
```

There is some times confusion on where the const modifier goes when passing parameters, if you dont want the parameter being pointed/referenced to be modifiable do this.

Right:
{: .success }

```cpp
const CObject* pObj
```

Wrong:
{: .error }

```cpp
CObject\* const pObj
```

If however you do not care if the object being pointed to is modifiable, but want to verify the pointer itself never changes, you do the opposite.

Right:
{: .success }

```cpp
CObject* const pObj
```

Wrong:
{: .error }

```cpp
const CObject* pObj
```

## structures

Structs cannot have any member functions they are reserved for data members only.

Right:
{: .success }

```cpp
struct SWEntityData
{
   unsigned int m_id;   ///< Comment
   unsigned int m_info; ///< Comment
}
```

Wrong:
{: .error }

```cpp
struct SWEntityData
{unsigned int m_id;   ///< Comment
   unsigned int m_info; ///< Comment

   /// Get ID
   unsigned int GetID() { return m_id; }

   /// Set ID
   void SetID(unsigned int id) { m_id = id; }
}
```
