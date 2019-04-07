---
title: Lua_DBQuery
type: standards_lua
layout: single_markdown
position: 1
---

# Lua DBQuery

## Description

### WorldDBQuery() and CharDBQuery()           
Performs a query on the world database or on the char database. Returns a "QueryResult" object.

```
pResult = WorldDBQuery(string sql)
```

```
pResult = CharDBQuery(string sql)
```

This command can be used for SQL queries like SELECT, INSERT, UPDATE, DELETE etc.

[See MySQL Reference Manual](https://dev.mysql.com/doc/#manual) for details about SQL Syntax.
{: .info }

### :GetColumn()

Returns the column at the specified place (starting from 0 for the first column). Will return an error if you specify a number greater than the amount of columns in the selected table.

## Syntax

```
pCol = pResult:GetColumn(int column_index)
```

### :Get<DataType>()

Using :Get<DataType>() after a :GetColumn(number) will return the value in the column as the specified data type.

Example data types

```
:GetString()
:GetUInt16()
:GetUInt32()
:GetUInt64()
:GetULong()
:GetUShort()
:GetBool()
:GetFloat()
```

### :GetRowCount()

Get number of rows in the query result.

## Syntax

```
int rows = pResult:GetRowCount()
```

### :GetColumnCount()

Get number of columns in the query result.

## Syntax

```
int cols = pResult:GetColumnCount()
```

## :NextRow()

Fetches the next row of the SQL query. Returns false if no more row exist.

## Syntax

```
bool = pResult:NextRow()
```

## Usage/Example

```
function SQLTest( event, player, message, type, language )
  if( message == "#sql" ) then
    local result = WorldDBQuery( "SELECT `entry`, `name` FROM `creature_properties` LIMIT 5" );
    if( result ~= NIL ) then
      local rowcount = result:GetRowCount();
      local colcount = result:GetColumnCount();
 
      print( "rows:" .. rowcount .. "  columns:" .. colcount );
 
      repeat
        for col = 0, colcount-1, 1 do
          io.write( result:GetColumn( col ):GetString() .. "  " );
        end
        print();
      until result:NextRow() ~= true;
    end
  end
end
RegisterServerHook( 16, "SQLTest" );   -- Register OnChatMessage
```