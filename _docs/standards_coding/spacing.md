---
title: Spacing
type: codingstandard
layout: single_markdown
position: 3
---
# Spacing

## operators

### binary

Do place spaces around binary operators

Right:
{: .success }

```cpp
    y = m * x + b / n;
    f(a, b);
    c = a | b;
```

Wrong:
{: .error }

```cpp
    y=m*x+b/n;
    f(a,b);
    c = a|b;
```

### ternary

Do place spaces around ternary operators

Right:
{: .success }

```cpp
return condition ? 1 : 0;
```

Wrong:
{: .error }

```cpp
return condition ? 1:0;
```

## control statements

Do Place spaces between control statements and their parentheses.

Right:
{: .success }

```cpp
if (condition)
```

Wrong:
{: .error }

```cpp
if(condition)
```

## functions parameters

Do Place spaces between each of a functions parameters.

Right:
{: .success }

```cpp
    f(a, b, c, d);
```

Wrong:
{: .error }

```cpp
    f(a,b,c,d);
```

Do not place spaces between a function and its parentheses, or between a parenthesis and its content.

Right:
{: .success }

```cpp
    f(a, b);
```

Wrong:
{: .error }

```cpp
    f (a, b);
    f( a, b );
```
