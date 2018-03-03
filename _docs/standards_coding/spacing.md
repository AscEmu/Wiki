---
title: Spacing
type: codingstandard
layout: single_markdown
position: 3
---
# Spacing

## operators

### unary

Do not place spaces around unary operators.

Right:

```cpp
i++;
```

Wrong:

```cpp
i++;
```

### binary

Do place spaces around binary operators

Right:

```cpp
    y = m \* x + b / n;
    f(a, b);
    c = a | b;
```

Wrong:

```cpp
    y=m\*x+b/n;
    f(a,b);
    c = a|b;
```

### ternary

Do place spaces around ternary operators

Right:

```cpp
return condition ? 1 : 0;
```

Wrong:

```cpp
return condition ? 1:0;
```

## control statements

Do Place spaces between control statements and their parentheses.

Right:

```cpp
if (condition)
```

Wrong:

```cpp
if(condition)
```

## functions parameters

Do Place spaces between each of a functions parameters.

Right:

```cpp
    f(a, b, c, d);
```

Wrong:

```cpp
    f(a,b,c,d);
```

Do not place spaces between a function and its parentheses, or between a parenthesis and its content.

Right:

```cpp
    f(a, b);
```

Wrong:

```cpp
    f (a, b);
    f( a, b );
```
