---
title: spell_coef_flags
type: worlddb
category: S
layout: single_markdown
---

# spell_coef_flags
This contains custom coef flag definitions for spells.

## Structure

Field                                                                                            | Type         | Default | Comment                          
------------------------------------------------------------------------------------------------ | ------------ | ------- | ---------------------------------
[spell_id](#spell_id)                 | int(11)      |         |                                  
[spell_coef_flags](#spell_coef_flags) | bigint(30)   |         |                                  
[name](#name)                         | varchar(120) | NULL    | Only for db-dev not used in core!
[rank](#rank)                         | int(3)       | 0       | Only for db-dev not used in core!

### spell_id

The entry ID of the spell...

### spell_coef_flags

<pre>
1 = SPELL_FLAG_IS_DOT_OR_HOT_SPELL = 0x00000001 //Damage over Time or Healing over Time Spells
2 = SPELL_FLAG_IS_DD_OR_DH_SPELL = 0x00000002 //Direct Damage or Direct Healing Spells
3 = SPELL_FLAG_IS_DD_DH_DOT_SPELL = SPELL_FLAG_IS_DOT_OR_HOT_SPELL | SPELL_FLAG_IS_DD_OR_DH_SPELL, //DoT+(DD|DH) Spells
4 = SPELL_FLAG_AOE_SPELL = 0x00000004  //AoE Spells
8 = SPELL_FLAG_ADITIONAL_EFFECT = 0x00000008 //Spells with additional effect not DD or DoT or HoT
</pre>