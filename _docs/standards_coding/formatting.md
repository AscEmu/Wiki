---
title: Formatting
type: codingstandard
layout: single_markdown
position: 2
---
# Formatting

## Tabs/Spaces

Use spaces, not tabs. Tabs should only appear in files that require them for semantic meaning, like Make files.

The indent **size is 4 spaces**.

Right:
{: .success }

```cpp
int main()
{
    return 0;
}
```

Wrong:
{: .error }

```cpp
int main() 
{
       return 0;
}
```

## indent

In a header, code inside a class should be indented.

### keywords

```cpp
public, private, protected and friend should be indented.
Put single blank line after those keywords!
```

Any friend keywords should appear at the bottom of a class definition below any other code.

Right:
{: .success }

```cpp
class CDocumention
{
  public:

     Document();
     ...

  friend class CEffectList;

};
```

Wrong:
{: .error }

```cpp
class CDocumention
{
friend class CEffectList;
public:
Document();
...
};
```

### namespace

In a header (.hpp, .h) file, code inside a namespace should be indented.

Right:
{: .success }

```cpp
namespace Whiptail
{
  class CDocumention
  {
     public:

        Document();
  };
};
```

Wrong:
{: .error }

```cpp
namespace Whiptail
{
class CDocumention
{
public:
  Document();
};
};
```

### case

A case label should be indented from its switch statement.

A case statement's contents are indented from the case.

The colon after a case statement should have no spaces before or after it.

Right:
{: .success }

```cpp
switch (condition)
{
   case mostLikelyCondition:
   case leastLikelyCondition:
      i++;
      break;
   default:
      i--;
}
```

Wrong:
{: .error }

```cpp
switch (condition) {
case leastLikelyCondition:
case mostLikelyCondition:
  i++;
  break;
default:
  i--;
}
```

## parenthesis

Use parenthesis in complex mathmatical formulae and expressions.

It is important to make it easy for future readers of this code to visualize and modify order of operations.

Right:
{: .success }

```cpp
pfloat32 myValue = (pV0->vx \* w0) + ( pV1->vx \* w1) + (pV2->vx \* w2) + (pV3->vx \* w3);
```

Wrong:
{: .error }

```cpp
pfloat32 myValue = pV0->vx \* w0 + pV1->vx \* w1 + pV2->vx \* w2 + pV3->vx \* w3;
```

Use parenthesis in complex logic and conditional expressions.

It is important to make it easy for future readers of this code to visualize and modify order of operations.

Right:
{: .success }

```cpp
if ((pAudio->pBuffer[0] == 'R') && (pAudio->pBuffer[1] == 'I') && (pAudio->pBuffer[2] == 'F') && (pAudio->pBuffer[3] == 'F'))
```

Wrong:
{: .error }

```cpp
if (pAudio->pBuffer[0] == 'R' && pAudio->pBuffer[1] == 'I' && pAudio->pBuffer[2] == 'F' && pAudio->pBuffer[3] == 'F')
```
