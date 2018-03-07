---
title: Braces
type: codingstandard
layout: single_markdown
position: 5
---
# Braces

## function definitions

Function definitions should have each brace on its own line.

Right:
{: .success }

```cpp
int main()
{
   ...
}
```

Wrong:
{: .error }

```cpp
int main() {
   ...
}
```

## class definitions

Class definitions should have each brace on its own line and the final brace should be followed by a semicolon.

Right:
{: .success }

```cpp
class CDocumentation
{
   ...
};
```

Wrong:
{: .error }

```cpp
class CDocumentation {
   ...
}
```

## namespaces

Namespaces should have each brace on its own line and the final brace should be followed by a semicolon.

Right:
{: .success }

```cpp
Namespace Whiptail
{
   ...
};
```

Wrong:
{: .error }

```cpp
Namespace Whiptail {
   ...
}
```

## one-line control

One-line control clauses **can** use braces. For a better overview use braces.

Optimal:

```cpp
if (condition)
{
   DoSomething();
}
```

Disadvantageous:

```cpp
if (condition)
       DoSomething();
```

## bodyless clauses

Control clauses without a body should be avoided but when used should use an empty set of braces and not a trailing semicolon.

Right:
{: .success }

```cpp
for (; current; current = current->next) { }
```

Wrong:
{: .error }

```cpp
for (; current; current = current->next);
```
