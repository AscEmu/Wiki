---
title: Types & Values
type: codingstandard
layout: single_markdown
position: 6
---
# Types & Values

## null pointer

The null pointer value should be never written as NULL/0.

**Use nullptr**!

```cpp
CWEntity\* pEntity;
```

Right:

```cpp
pEntity = nullptr;
```

Wrong:

```cpp
pEntity = 0;
```

## bool values

bool values should be written as true and false.

```cpp
bool isValid;
```

Right:

```cpp
isValid = true;
```

Wrong:

```cpp
isValid = 1;
```

Do not use the Objective-C style BOOL type.

Right:

```cpp
bool isValid;
```

Wrong:

```cpp
BOOL isValid;
```

## tests

Tests for true/false and zero/non-zero should all be done without equality comparisons.

Right:

```cpp
if (bCondition)
```

Wrong:

```cpp
if (bCondition == true)
```

## explicit init

Do not add explicit initializations to temporary variables if you assign to them before testing their value.

Right:

```cpp
bool bTest;
    ...
    bTest = GetStatus();
```

Wrong:

```cpp
bool bTest = true;
    ...
    bTest = GetStatus();
```
