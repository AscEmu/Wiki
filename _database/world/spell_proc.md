---
title: spell_proc
type: worlddb
category: S
layout: single_markdown
---

# spell_proc
This table defines the spell procs. 

## Structure

Field                                                                                             | Type         | Default | Comment
------------------------------------------------------------------------------------------------- | ------------ | ------- | -------
[spellID](#spellID)                          | int(30)      | 0       |        
[ProcOnNameHash](#ProcOnNameHash)            | int(30)      | 0       |        
[ProcFlag](#ProcFlag)                        | int(30)      | 0       |        
[TargetSelf](#TargetSelf)                    | tinyint(1)   | 0       |        
[ProcChance](#ProcChance)                    | int(30)      |  -1     |        
[ProcCharges](#ProcCharges)                  | smallint(30) |  -1     |        
[ProcInterval](#ProcInterval)                | int(30)      | 0       |        
[EffectTriggerSpell[0]](#EffectTriggerSpell) | smallint(10) |  -1     |        
[EffectTriggerSpell[1]](#EffectTriggerSpell) | smallint(10) |  -1     |        
[EffectTriggerSpell[2]](#EffectTriggerSpell) | smallint(10) |  -1     |        

### spellID

The spell entry ID

### ProcOnNameHash

...

### ProcFlag

<pre>
   PROC_NULL                           = 0x0,          //0
   PROC_ON_ANY_HOSTILE_ACTION          = 0x1,          //1
   PROC_ON_GAIN_EXPIERIENCE            = 0x2,          //2
   PROC_ON_MELEE_ATTACK                = 0x4,          //4
   PROC_ON_CRIT_HIT_VICTIM             = 0x8,          //8
   PROC_ON_CAST_SPELL                  = 0x10,         //16
   PROC_ON_PHYSICAL_ATTACK_VICTIM      = 0x20,         //32
   PROC_ON_RANGED_ATTACK               = 0x40,         //64
   PROC_ON_RANGED_CRIT_ATTACK          = 0x80,         //128
   PROC_ON_PHYSICAL_ATTACK             = 0x100,        //256
   PROC_ON_MELEE_ATTACK_VICTIM         = 0x200,        //512
   PROC_ON_SPELL_HIT                   = 0x400,        //1024
   PROC_ON_RANGED_CRIT_ATTACK_VICTIM   = 0x800,        //2048
   PROC_ON_CRIT_ATTACK                 = 0x1000,       //4096
   PROC_ON_RANGED_ATTACK_VICTIM        = 0x2000,       //8192
   PROC_ON_PRE_DISPELL_AURA_VICTIM     = 0x4000,       //16384
   PROC_ON_SPELL_LAND_VICTIM           = 0x8000,       //32768
   PROC_ON_CAST_SPECIFIC_SPELL         = 0x10000,      //65536
   PROC_ON_SPELL_HIT_VICTIM            = 0x20000,      //131072
   PROC_ON_SPELL_CRIT_HIT_VICTIM       = 0x40000,      //262144
   PROC_ON_TARGET_DIE                  = 0x80000,      //524288
   PROC_ON_ANY_DAMAGE_VICTIM           = 0x100000,     //1048576
   PROC_ON_TRAP_TRIGGER                = 0x200000,     //2097152 triggers on trap activation)
   PROC_ON_AUTO_SHOT_HIT               = 0x400000,     //4194304
   PROC_ON_ABSORB                      = 0x800000,     //8388608
   PROC_ON_RESIST_VICTIM               = 0x1000000,    //16777216
   PROC_ON_DODGE_VICTIM                = 0x2000000,    //33554432
   PROC_ON_DIE                         = 0x4000000,    //67108864
   PROC_REMOVEONUSE                    = 0x8000000,    //134217728 remove prochcharge only when it is used
   PROC_MISC                           = 0x10000000,   //268435456 our custom flag to decide if proc dmg or shield
   PROC_ON_BLOCK_VICTIM                = 0x20000000,   //536870912
   PROC_ON_SPELL_CRIT_HIT              = 0x40000000,   //1073741824
   PROC_TARGET_SELF                    = 0x80000000,   //-2147483648 our custom flag to decide if proc target is self or victim
</pre>

### TargetSelf

Boolean, if this is set to 1 it adds the proc flag PROC_TARGET_SELF.

### ProcChance

The percent chance when the spell procs.

### ProcCharges

Charges how many times can the spell proc.

### ProcInterval

Time in ms, defines when the spell procs.

### EffectTriggerSpell

Spell entry ID for the triggered spell on proc. If this is set EffectApplyAuraName SPELL_AURA_PROC_TRIGGER_SPELL is set automatical.