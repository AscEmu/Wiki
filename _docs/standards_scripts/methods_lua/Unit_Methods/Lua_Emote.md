---
title: Lua_Emote
type: unit_methods
layout: single_markdown
position: 121
---

# Lua Emote

## Description

Makes the Unit perform the emote specified. Emotes can be used to create special effects in gossip and scripts.

## Syntax

```
pUnit:Emote(emoteid, milisec)
```

## Usage/Example

The example would make the unit use the emote 3 for 5 seconds. Note that the time argument is required and getting the correct time can be difficult.

```
pUnit:Emote(3, 5000)
```

You plug these into the :Emote function for it to work. ;)
Emotes pre-fixed with a double slash (//) are commented out and may not work.

(../world/Units/UnitDefines.hpp)

```
enum EmoteType
{
    EMOTE_ONESHOT_NONE                  = 0,
    EMOTE_ONESHOT_TALK                  = 1, // DNR
    EMOTE_ONESHOT_BOW                   = 2,
    EMOTE_ONESHOT_WAVE                  = 3, // DNR
    EMOTE_ONESHOT_CHEER                 = 4, // DNR
    EMOTE_ONESHOT_EXCLAMATION           = 5, // DNR
    EMOTE_ONESHOT_QUESTION              = 6,
    EMOTE_ONESHOT_EAT                   = 7,
    EMOTE_STATE_DANCE                   = 10,
    EMOTE_ONESHOT_LAUGH                 = 11,
    EMOTE_STATE_SLEEP                   = 12,
    EMOTE_STATE_SIT                     = 13,
    EMOTE_ONESHOT_RUDE                  = 14, // DNR
    EMOTE_ONESHOT_ROAR                  = 15, // DNR
    EMOTE_ONESHOT_KNEEL                 = 16,
    EMOTE_ONESHOT_KISS                  = 17,
    EMOTE_ONESHOT_CRY                   = 18,
    EMOTE_ONESHOT_CHICKEN               = 19,
    EMOTE_ONESHOT_BEG                   = 20,
    EMOTE_ONESHOT_APPLAUD               = 21,
    EMOTE_ONESHOT_SHOUT                 = 22, // DNR
    EMOTE_ONESHOT_FLEX                  = 23,
    EMOTE_ONESHOT_SHY                   = 24, // DNR
    EMOTE_ONESHOT_POINT                 = 25, // DNR
    EMOTE_STATE_STAND                   = 26,
    EMOTE_STATE_READYUNARMED            = 27,
    EMOTE_STATE_WORK_SHEATHED           = 28,
    EMOTE_STATE_POINT                   = 29, // DNR
    EMOTE_STATE_NONE                    = 30,
    EMOTE_ONESHOT_WOUND                 = 33,
    EMOTE_ONESHOT_WOUNDCRITICAL         = 34,
    EMOTE_ONESHOT_ATTACKUNARMED         = 35,
    EMOTE_ONESHOT_ATTACK1H              = 36,
    EMOTE_ONESHOT_ATTACK2HTIGHT         = 37,
    EMOTE_ONESHOT_ATTACK2HLOOSE         = 38,
    EMOTE_ONESHOT_PARRYUNARMED          = 39,
    EMOTE_ONESHOT_PARRYSHIELD           = 43,
    EMOTE_ONESHOT_READYUNARMED          = 44,
    EMOTE_ONESHOT_READY1H               = 45,
    EMOTE_ONESHOT_READYBOW              = 48,
    EMOTE_ONESHOT_SPELLPRECAST          = 50,
    EMOTE_ONESHOT_SPELLCAST             = 51,
    EMOTE_ONESHOT_BATTLEROAR            = 53,
    EMOTE_ONESHOT_SPECIALATTACK1H       = 54,
    EMOTE_ONESHOT_KICK                  = 60,
    EMOTE_ONESHOT_ATTACKTHROWN          = 61,
    EMOTE_STATE_STUN                    = 64,
    EMOTE_STATE_DEAD                    = 65,
    EMOTE_ONESHOT_SALUTE                = 66,
    EMOTE_STATE_KNEEL                   = 68,
    EMOTE_STATE_USESTANDING             = 69,
    EMOTE_ONESHOT_WAVE_NOSHEATHE        = 70,
    EMOTE_ONESHOT_CHEER_NOSHEATHE       = 71,
    EMOTE_ONESHOT_EAT_NOSHEATHE         = 92,
    EMOTE_STATE_STUN_NOSHEATHE          = 93,
    EMOTE_ONESHOT_DANCE                 = 94,
    EMOTE_ONESHOT_SALUTE_NOSHEATH       = 113,
    EMOTE_STATE_USESTANDING_NOSHEATHE   = 133,
    EMOTE_ONESHOT_LAUGH_NOSHEATHE       = 153,
    EMOTE_STATE_WORK                    = 173,
    EMOTE_STATE_SPELLPRECAST            = 193,
    EMOTE_ONESHOT_READYRIFLE            = 213,
    EMOTE_STATE_READYRIFLE              = 214,
    EMOTE_STATE_WORK_MINING             = 233,
    EMOTE_STATE_WORK_CHOPWOOD           = 234,
    EMOTE_STATE_APPLAUD                 = 253,
    EMOTE_ONESHOT_LIFTOFF               = 254,
    EMOTE_ONESHOT_YES                   = 273, // DNR
    EMOTE_ONESHOT_NO                    = 274, // DNR
    EMOTE_ONESHOT_TRAIN                 = 275, // DNR
    EMOTE_ONESHOT_LAND                  = 293,
    EMOTE_STATE_AT_EASE                 = 313,
    EMOTE_STATE_READY1H                 = 333,
    EMOTE_STATE_SPELLKNEELSTART         = 353,
    EMOTE_STATE_SUBMERGED               = 373,
    EMOTE_ONESHOT_SUBMERGE              = 374,
    EMOTE_STATE_READY2H                 = 375,
    EMOTE_STATE_READYBOW                = 376,
    EMOTE_ONESHOT_MOUNTSPECIAL          = 377,
    EMOTE_STATE_TALK                    = 378,
    EMOTE_STATE_FISHING                 = 379,
    EMOTE_ONESHOT_FISHING               = 380,
    EMOTE_ONESHOT_LOOT                  = 381,
    EMOTE_STATE_WHIRLWIND               = 382,
    EMOTE_STATE_DROWNED                 = 383,
    EMOTE_STATE_HOLD_BOW                = 384,
    EMOTE_STATE_HOLD_RIFLE              = 385,
    EMOTE_STATE_HOLD_THROWN             = 386,
    EMOTE_ONESHOT_DROWN                 = 387,
    EMOTE_ONESHOT_STOMP                 = 388,
    EMOTE_ONESHOT_ATTACKOFF             = 389,
    EMOTE_ONESHOT_ATTACKOFFPIERCE       = 390,
    EMOTE_STATE_ROAR                    = 391,
    EMOTE_STATE_LAUGH                   = 392,
    EMOTE_ONESHOT_CREATURE_SPECIAL      = 393,
    EMOTE_ONESHOT_JUMPLANDRUN           = 394,
    EMOTE_ONESHOT_JUMPEND               = 395,
    EMOTE_ONESHOT_TALK_NOSHEATHE        = 396,
    EMOTE_ONESHOT_POINT_NOSHEATHE       = 397,
    EMOTE_STATE_CANNIBALIZE             = 398,
    EMOTE_ONESHOT_JUMPSTART             = 399,
    EMOTE_STATE_DANCESPECIAL            = 400,
    EMOTE_ONESHOT_DANCESPECIAL          = 401,
    EMOTE_ONESHOT_CUSTOMSPELL01         = 402,
    EMOTE_ONESHOT_CUSTOMSPELL02         = 403,
    EMOTE_ONESHOT_CUSTOMSPELL03         = 404,
    EMOTE_ONESHOT_CUSTOMSPELL04         = 405,
    EMOTE_ONESHOT_CUSTOMSPELL05         = 406,
    EMOTE_ONESHOT_CUSTOMSPELL06         = 407,
    EMOTE_ONESHOT_CUSTOMSPELL07         = 408,
    EMOTE_ONESHOT_CUSTOMSPELL08         = 409,
    EMOTE_ONESHOT_CUSTOMSPELL09         = 410,
    EMOTE_ONESHOT_CUSTOMSPELL10         = 411,
    EMOTE_STATE_EXCLAIM                 = 412,
    EMOTE_STATE_DANCE_CUSTOM            = 413,
    EMOTE_STATE_SIT_CHAIR_MED           = 415,
    EMOTE_STATE_CUSTOM_SPELL_01         = 416,
    EMOTE_STATE_CUSTOM_SPELL_02         = 417,
    EMOTE_STATE_EAT                     = 418,
    EMOTE_STATE_CUSTOM_SPELL_04         = 419,
    EMOTE_STATE_CUSTOM_SPELL_03         = 420,
    EMOTE_STATE_CUSTOM_SPELL_05         = 421,
    EMOTE_STATE_SPELLEFFECT_HOLD        = 422,
    EMOTE_STATE_EAT_NO_SHEATHE          = 423,
    EMOTE_STATE_MOUNT                   = 424,
    EMOTE_STATE_READY2HL                = 425,
    EMOTE_STATE_SIT_CHAIR_HIGH          = 426,
    EMOTE_STATE_FALL                    = 427,
    EMOTE_STATE_LOOT                    = 428,
    EMOTE_STATE_SUBMERGED_NEW           = 429, // NEW
    EMOTE_ONESHOT_COWER                 = 430, // DNR
    EMOTE_STATE_COWER                   = 431,
    EMOTE_ONESHOT_USESTANDING           = 432,
    EMOTE_STATE_STEALTH_STAND           = 433,
    EMOTE_ONESHOT_OMNICAST_GHOUL        = 434, // W/SOUND
    EMOTE_ONESHOT_ATTACKBOW             = 435,
    EMOTE_ONESHOT_ATTACKRIFLE           = 436,
    EMOTE_STATE_SWIM_IDLE               = 437,
    EMOTE_STATE_ATTACK_UNARMED          = 438,
    EMOTE_ONESHOT_SPELLCAST_W_SOUND     = 439,
    EMOTE_ONESHOT_DODGE                 = 440,
    EMOTE_ONESHOT_PARRY1H               = 441,
    EMOTE_ONESHOT_PARRY2H               = 442,
    EMOTE_ONESHOT_PARRY2HL              = 443,
    EMOTE_STATE_FLYFALL                 = 444,
    EMOTE_ONESHOT_FLYDEATH              = 445,
    EMOTE_STATE_FLY_FALL                = 446,
    EMOTE_ONESHOT_FLY_SIT_GROUND_DOWN   = 447,
    EMOTE_ONESHOT_FLY_SIT_GROUND_UP     = 448,
    EMOTE_ONESHOT_EMERGE                = 449,
    EMOTE_ONESHOT_DRAGONSPIT            = 450,
    EMOTE_STATE_SPECIALUNARMED          = 451,
    EMOTE_ONESHOT_FLYGRAB               = 452,
    EMOTE_STATE_FLYGRABCLOSED           = 453,
    EMOTE_ONESHOT_FLYGRABTHROWN         = 454,
    EMOTE_STATE_FLY_SIT_GROUND          = 455,
    EMOTE_STATE_WALKBACKWARDS           = 456,
    EMOTE_ONESHOT_FLYTALK               = 457,
    EMOTE_ONESHOT_FLYATTACK1H           = 458,
    EMOTE_STATE_CUSTOMSPELL08           = 459,
    EMOTE_ONESHOT_FLY_DRAGONSPIT        = 460,
    EMOTE_STATE_SIT_CHAIR_LOW           = 461,
    EMOTE_ONE_SHOT_STUN                 = 462,
    EMOTE_ONESHOT_SPELLCAST_OMNI        = 463,
    EMOTE_STATE_READYTHROWN             = 465,
    EMOTE_ONESHOT_WORK_CHOPWOOD         = 466,
    EMOTE_ONESHOT_WORK_MINING           = 467,
    EMOTE_STATE_SPELL_CHANNEL_OMNI      = 468,
    EMOTE_STATE_SPELL_CHANNEL_DIRECTED  = 469,
    EMOTE_STAND_STATE_NONE              = 470,
    EMOTE_STATE_READYJOUST              = 471,
    EMOTE_STATE_STRANGULATE             = 473,
    EMOTE_STATE_READY_SPELL_OMNI        = 474,
    EMOTE_STATE_HOLD_JOUST              = 475,
    EMOTE_ONESHOT_CRY_JAINA             = 476,
    EMOTE_ONESHOT_SPECIAL_UNARMED       = 477,
    EMOTE_STATE_DANCE_NOSHEATHE         = 478,
    EMOTE_ONESHOT_SNIFF                 = 479,
    EMOTE_ONESHOT_DRAGONSTOMP           = 480,
    EMOTE_ONESHOT_KNOCKDOWN             = 482,
    EMOTE_STATE_READ                    = 483,
    EMOTE_ONESHOT_FLYEMOTETALK          = 485,
    EMOTE_STATE_READ_ALLOWMOVEMENT      = 492,
    EMOTE_STATE_READY1H_ALLOW_MOVEMENT  = 505,
    EMOTE_STATE_READY2H_ALLOW_MOVEMENT  = 506,
    EMOTE_ONESHOT_OPEN                  = 517,
    EMOTE_STATE_READ_CHRISTMAS          = 518
};
```