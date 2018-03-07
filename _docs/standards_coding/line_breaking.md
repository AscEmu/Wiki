---
title: Line breaking
type: codingstandard
layout: single_markdown
position: 4
---
# Line breaking

## statements

Each statement should get its own line.

Right:
{: .success }

```cpp
x++;
y++;
if (condition)
{
   DoSomething();
}
```

Wrong:
{: .error }

```cpp
x++; y++;
if (condition) DoSomething();
```

### else

An else statement should go on it's own line separate from closing and opening braces.

Right:
{: .success }

```cpp
if (condition)
{
    ...
}
else
{
    ...
}
```

Wrong:
{: .error }

```cpp
if (condition) {
    ...
}
else {
    ...
}
```

An else if statement should be written as an if statement when the prior if concludes with a return statement.

Right:
{: .success }

```cpp
if (condition)
{
    ...
    return someValue;
}
if (condition)
{
    ...
}
```

Wrong:
{: .error }

```cpp
if (condition) {
   ...
    return someValue;
} else if (condition) {
   ...
}
```
