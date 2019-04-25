---
title: Lua_SetFaction
type: standards_lua
layout: single_markdown
position: 80
---

# Lua SetFaction

## Description

This command sets the units faction to the given number.

## Usage/Example

```
function FactionChange (pUnit, Event)
pUnit:SetFaction(35) -- This will set the unit's faction to 35, which is friendly to all.
end
```

## List of Faction IDs

Faction IDs control faction targets for commands or what faction a creature belongs to.        
(This will be outdated with every patch that adds a faction)

```
1684 - Actor Evil
1771 - Actor Evil
1958 - Actor Evil
1959 - Actor Evil
1934 - Actor Good
1935 - Actor Good
1683 - Actor Good
1770 - Actor Good
1802 - Alliance
84   - Alliance Generic
210  - Alliance Generic
534  - Alliance Generic
694  - Alliance Generic
1054 - Alliance Generic
1055 - Alliance Generic
1315 - Alliance Generic
1732 - Alliance Generic
1733 - Alliance Generic
1819 - Alliance Generic
188  - Ambient
190  - Ambient
1803 - Ambient
1804 - Ambient
1990 - Ambient
1738 - Arakkoa
1869 - Arakkoa
1798 - Arcane Annihilator (DNR)
794  - Argent Dawn
814  - Argent Dawn
1624 - Argent Dawn
1625 - Argent Dawn
1766 - Argent Dawn
1767 - Argent Dawn
370  - Armies of C'Thun
1820 - Ashtongue Deathsworn
1858 - Ashtongue Deathsworn
1866 - Ashtongue Deathsworn
1834 - Azaloth
49   - Basilisk
410  - Basilisk
1194 - Battleground Neutral
411  - Beast - Bat
44   - Beast - Bear
1094 - Beast - Boar
73   - Beast - Carrion Bird
72   - Beast - Gorilla
48   - Beast - Raptor
1909 - Beast - Raptor
22   - Beast - Spider
312  - Beast - Spider
32   - Beast - Wolf
38   - Beast - Wolf
1815 - Beast - Wolf
128  - Blackfathom
350  - Blackfathom
1780 - Bladespire Clan
1782 - Bladespire Clan
1784 - Bladespire Clan
1790 - Bladespire Clan
1781 - Bloodmaul Clan
1783 - Bloodmaul Clan
1785 - Bloodmaul Clan
1791 - Bloodmaul Clan
119  - Bloodsail Buccaneers
1621 - Blue
120  - Booty Bay
121  - Booty Bay
390  - Booty Bay
1679 - Broken
776  - Brood of Nozdormu
1601 - Brood of Nozdormu
554  - Burning Blade
2074 - Caverns of Time
1748 - Caverns of Time Durnholde
1749 - Caverns of Time Southshore Guards
1747 - Caverns of Time Thrall
635  - Cenarion Circle
994  - Cenarion Circle
996  - Cenarion Circle
1254 - Cenarion Circle
1608 - Cenarion Circle
1659 - Cenarion Expedition
1660 - Cenarion Expedition
1661 - Cenarion Expedition
1710 - Cenarion Expedition
1728 - Cenarion Expedition
131  - Centaur - Galak
130  - Centaur - Kolkar
655  - Centaur - Kolkar
1688 - Chess - Alliance
1690 - Chess - Alliance
1689 - Chess - Horde
1691 - Chess - Horde
1852 - Chess - Friendly to All Chess
1936 - Craig's Squirrels
1937 - Craig's Squirrels
1938 - Craig's Squirrels
1939 - Craig's Squirrels
1940 - Craig's Squirrels
1941 - Craig's Squirrels
1942 - Craig's Squirrels
1943 - Craig's Squirrels
1944 - Craig's Squirrels
1945 - Craig's Squirrels
1687 - Crazed Owlkin
7    - Creature - NEUTRAL
15   - Creature
58   - Creature
189  - Creature
1274 - Creature
1275 - Creature
1606 - Creature
1607 - Creature
1995 - CTF
1997 - CTF
1913 - CTF Flag
76   - Dalaran
54   - Dark Iron Dwarves
674  - Dark Iron Dwarves
734  - Dark Iron Dwarves
754  - Dark Iron Dwarves
1752 - Dark Portal Attacker - Legion
1753 - Dark Portal Attacker - Legion
1754 - Dark Portal Attacker - Legion
1755 - Dark Portal Defender - Alliance
1756 - Dark Portal Defender - Alliance
1757 - Dark Portal Defender - Alliance
1758 - Dark Portal Defender - Horde
1759 - Dark Portal Defender - Horde
1760 - Dark Portal Defender - Horde
78   - Darkhowl
1555 - Darkmoon Faire
1896 - Darkmoon Faire
126  - Darkspear Trolls
876  - Darkspear Trolls
877  - Darkspear Trolls
79   - Darnassus
80   - Darnassus
124  - Darnassus
1076 - Darnassus
1097 - Darnassus
1594 - Darnassus
1600 - Darnassus
1951 - Darnassus
17   - Defias Brotherhood
27   - Defias Brotherhood
34   - Defias Brotherhood
90   - Demon
954  - Demon
1768 - Demon
1769 - Demon
1786 - Demon
1825 - Demon
1963 - Demon
103  - Dragonflight - Black
1394 - Dragonflight - Black
1114 - Dragonflight - Black Bait
1605 - Dragonflight - Bronze
50   - Dragonflight - Green
60   - Dragonflight - Red
1864 - Dragonmaw Enemy
1681 - Earth Elemental
1725 - Earthen Ring
1726 - Earthen Ring
1727 - Earthen Ring
91   - Elemental
834  - Elemental
1081 - Elemental
1680 - Elemental
168  - Enemy
1620 - Enemy
10   - Escortee
33   - Escortee
113  - Escortee
231  - Escortee
232  - Escortee
250  - Escortee
290  - Escortee
495  - Escortee
774  - Escortee
775  - Escortee
1678 - Ethereum
1796 - Ethereum
1800 - Ethereum
1823 - Ethereum
1799 - Ethereum- Sparbuddy
854  - Everlook
855  - Everlook
1638 - Exodar
1639 - Exodar
1640 - Exodar
1646 - Exodar
1647 - Exodar
1654 - Exodar
1655 - Exodar
1694 - Exodar
1698 - Exodar
1699 - Exodar
1700 - Exodar
1627 - Farstriders
1636 - Farstriders
1637 - Farstriders
1662 - Fel Orc
1697 - Fel Orc
1704 - Fel Orc
1705 - Fel Orc
1792 - Fel Orc
1663 - Fel Orc Ghost
1682 - Fighting Robots
1961 - Fighting Vanity Pet
1840 - Flayer Hunter
77   - Forlorn Spirit
1878 - Frenzy
35   - Friendly
1080 - Friendly
1774 - Friendly
1806 - Friendly
1812 - Friendly
1816 - Friendly
1857 - Friendly
1214 - Frostwolf Clan
1215 - Frostwolf Clan
1335 - Frostwolf Clan
1554 - Frostwolf Clan
1597 - Frostwolf Clan
1706 - Fungal Giant
82   - Furbolg
934  - Furbolg - Uncorrupted
474  - Gadgetzan
475  - Gadgetzan
132  - Gelkis Clan Centaur
778  - Giant
1294 - Gizlock
86   - Gizlock's Charm
52   - Gizlock's Dummy
61   - Gnoll - Mosshide
95   - Gnoll - Mudsnout
19   - Gnoll - Redridge
20   - Gnoll - Riverpaw
70   - Gnoll - Rothide
39   - Gnoll - Shadowhide
63   - Gnome - Leper
494  - Gnomeregan Bug
23   - Gnomeregan Exiles
64   - Gnomeregan Exiles
875  - Gnomeregan Exiles
735  - Goblin - Dark Iron Bar Patron
736  - Goblin - Dark Iron Bar Patron
81   - Grell
514  - Harpy
88   - Hillsbrad Militia
96   - HIllsbrad - Southshore Mayor
1998 - Holiday Monster
1952 - Holiday Water Barrel
1666 - Honor Hold
1667 - Honor Hold
1671 - Honor Hold
1737 - Honor Hold
1801 - Horde
83   - Horde - Generic
106  - Horde - Generic
714  - Horde - Generic
1034 - Horde - Generic
1314 - Horde - Generic
1494 - Horde - Generic
1495 - Horde - Generic
1496 - Horde - Generic
1734 - Horde - Generic
1735 - Horde - Generic
1835 - Horde - Generic
53   - Human - Night Watch
56   - Human - Night Watch
695  - Hydraxian Waterlords
1716 - Hyjal - Defenders
1717 - Hyjal - Defenders
1718 - Hyjal - Defenders
1719 - Hyjal - Defenders
1720 - Hyjal - Invaders
1761 - Inciter Trigger 1
1762 - Inciter Trigger 2
1763 - Inciter Trigger 3
1764 - Inciter Trigger 4
1765 - Inciter Trigger 5
55   - Ironforge
57   - Ironforge
122  - Ironforge
1611 - Ironforge
1618 - Ironforge
1434 - Jaedenar
1779 - Keepers of Time
1773 - Khadgar's Servant
1808 - Kirin'Var - Belmara
1809 - Kirin'Var - Cohlien
1810 - Kirin'Var - Dathric
1811 - Kirin'Var - Luminrath
25   - Kobold (neutral)
26   - Kobold
1721 - Kurenai
1722 - Kurenai
1723 - Kurenai
1724 - Kurenai
46   - Kurzen's Mercenaries
1842 - Legion Communicator
66   - Leopard
1829 - Leotheras Demon I
1830 - Leotheras Demon II
1831 - Leotheras Demon III
1832 - Leotheras Demon IV
1833 - Leotheras Demon V
51   - Lost Ones
1818 - Lower City
1851 - Lower City
133  - Magram Clan Centaur
1859 - Maiev
1867 - Maiev
1916 - Maiev
129  - Makrura
1772 - Mana Creature
134  - Maraudine
777  - Might of Kalimdor
1613 - Might of Kalimdor
14   - Monster
16   - Monster
93   - Monster
148  - Monster
634  - Monster
1614 - Monster
1751 - Monster
1787 - Monster
1992 - Monster
1692 - Monster - Spar
1847 - Monster - Spar
1965 - Monster - Spar
1693 - Monster - Spar Buddy
1736 - Monster - Spar Buddy
1814 - Monster - Spar Buddy
1848 - Monster - Spar Buddy
1868 - Monster - Spar Buddy
1971 - Monster - Force Reaction
1711 - Monster - Predator
2029 - Monster - Predator
1712 - Monster - Prey
1713 - Monster - Prey
18   - Murloc
1966 - Murloc
74   - Naga
208  - Nethergarde Caravan
209  - Nethergarde Caravan
1824 - Netherwing
1850 - Netherwing
1972 - Object - Force Reaction
45   - Ogre
1374 - Ogre (Captain Kromcrush)
1872 - Ogri'la
1874 - Ogri'la
40   - Orc - Blackrock
62   - Orc - Dragonmaw
1863 - Orc - Dragonmaw
1865 - Orc - Dragonmaw
1877 - Orc - Dragonmaw
1880 - Orc - Dragonmaw
29   - Orgrimmar
65   - Orgrimmar
85   - Orgrimmar
125  - Orgrimmar
1074 - Orgrimmar
1174 - Orgrimmar
1595 - Orgrimmar
1612 - Orgrimmar
1619 - Orgrimmar
1610 - Player - Blood Elf
1629 - Player - Draenei
3    - Player - Dwarf
115  - Player - Gnome
1    - Player - Human
4    - Player - Night Elf
2    - Player - Orc 
6    - Player - Tauren
116  - Player - Troll
5    - Player - Undead
31   - Prey
1794 - Protectorate
1795 - Protectorate
1797 - Protectorate
1807 - Protectorate
111  - Quilboar - Bristleback
112  - Quilboar - Bristleback
154  - Quilboar - Deathshead
152  - Quilboar - Razorfen 1
153  - Quilboar - Razorfen 1
109  - Quilboar - Razormane 2
110  - Quilboar - Razormane 2
1930 - Ram Racing Powerup - DND
1931 - Ram Racing Trap - DND
69   - Ratchet
637  - Ratchet
471  - Ravenholdt
473  - Ravenholdt
1846 - Ravenswood Ancients
1617 - RC Enemies
1616 - RC Objects
1622 - Red
1839 - Rock Flayer
1873 - Rock Flayer
67   - Scarlet Crusade
89   - Scarlet Crusade
413  - Scorpid
1630 - Scourge Invaders
1634 - Scourge Invaders
575  - Searing Spider
1813 - Servant of Illidan
1826 - Servant of Illidan
1843 - Servant of Illidan
1849 - Servant of Illidan
1853 - Servant of Illidan
1882 - Servant of Illidan
1750 - Shadow Council Covert
1841 - Shadowmoon Shade
574  - Shadowsilk Poacher
1856 - Sha'tari Skyguard
1870 - Sha'tari Skyguard
1956 - Shattered Sun Offensive
1957 - Shattered Sun Offensive
1960 - Shattered Sun Offensive
1967 - Shattered Sun Offensive
1014 - Shatterspear Trolls
1015 - Shatterspear Trolls
1354 - Shen'dralar
1355 - Shen'dralar
310  - Silithid
311  - Silithid
1395 - Silithid - Attackers
1602 - Silvermoon City
1603 - Silvermoon City
1604 - Silvermoon City
1656 - Silvermoon City
1657 - Silvermoon City
1658 - Silvermoon City
1695 - Silvermoon City
1745 - Silvermoon City
371  - Silvermoon Remnant
1576 - Silvermoon Remnant
1514 - Silverwing Sentinels
1642 - Silverwing Sentinels
1862 - Skettis Arakkoa
1871 - Skettis Arakkoa
1881 - Skettis Arakkoa
1860 - Skettis Shadowy Arakkoa
1879 - Skyguard Enemy
1664 - Sons of Lothar Ghosts
230  - Southsea Freebooters
92   - Spirit
1414 - Spirit Guide - Alliance
1415 - Spirit Guide - Horde
1821 - Spirits of Shadowmoon 1
1822 - Spirits of Shadowmoon 2
1707 - Sporeggar
1708 - Sporeggar
1709 - Sporeggar
1837 - Sporeggar
1615 - Steamwheedle Cartel
1635 - Steamwheedle Cartel
1685 - Stillpine Furbolg
1686 - Stillpine Furbolg
1216 - Stormpike Guard
1217 - Stormpike Guard
1334 - Stormpike Guard
1534 - Stormpike Guard
1596 - Stormpike Guard
11   - Stormwind
12   - Stormwind
123  - Stormwind
1078 - Stormwind
1575 - Stormwind
1234 - Sulfuron Firelords
1235 - Sulfuron Firelords
1236 - Sulfuron Firelords
1701 - Sunhawks
1702 - Sunhawks
1714 - Sunhawks
1789 - Sunhawks
1793 - Sunhawks
87   - Syndicate
97   - Syndicate
108  - Syndicate
472  - Syndicate
430  - Taskmaster Fizzule
1672 - Test Faction 2
1675 - Test Faction 3
1674 - Test Faction 4
1743 - The Aldor
1776 - The Aldor
1777 - The Aldor
1805 - The Aldor
1844 - The Aldor
1854 - The Aldor
1875 - The Aldor
1730 - The Consortium
1731 - The Consortium
1788 - The Consortium
1836 - The Consortium
412  - The Defilers
1598 - The Defilers
1577 - The League of Arathor
1599 - The League of Arathor
1650 - The Mag'har
1651 - The Mag'har
1652 - The Mag'har
1653 - The Mag'har
1778 - The Scale of the Sands
1744 - The Scryers
1746 - The Scryers
1838 - The Scryers
1845 - The Scryers
1855 - The Scryers
1876 - The Scryers
1741 - The Sha'tar
1775 - The Sha'tar
1644 - The Sons of Lothar
1645 - The Sons of Lothar
1648 - The Sons of Lothar
1649 - The Sons of Lothar
1696 - The Violet Eye
149  - Theramore
150  - Theramore
151  - Theramore
894  - Theramore
1075 - Theramore
1077 - Theramore
1096 - Theramore
1883 - Theramore - Deserter
1474 - Thorium Brotherhood
1475 - Thorium Brotherhood
1668 - Thrallmar
1669 - Thrallmar
1670 - Thrallmar
1729 - Thrallmar
104  - Thunder Bluff
105  - Thunder Bluff
995  - Thunder Bluff
414  - Timbermaw Hold
636  - Timbermaw Hold
415  - Titan
416  - Titan
470  - Titan
1673 - ToWoW Flag
1677 - ToWoW Flag Trigger - Alliance - DND
1676 - ToWoW Flag Trigger - Horde - DND
914  - Training Dummy
1095 - Training Dummy
1703 - Training Dummy
1623 - Tranquillien
1628 - Tranquillien
1828 - Treant
94   - Treasure
100  - Treasure
101  - Treasure
102  - Treasure
114  - Treasure
1375 - Treasure
36   - Trogg
59   - Trogg
594  - Trogg
1890 - Troll - Amani
28   - Troll - Bloodscalp
1643 - Troll - Forest
37   - Troll - Frostmane
107  - Troll - Frostmane
30   - Troll - Skullsplitter
795  - Troll - Vilebranch
654  - Troll - Witherbark
21   - Undead - Scourge
233  - Undead - Scourge
974  - Undead - Scourge
1626 - Undead - Scourge
1962 - Undead - Scourge
1964 - Undead - Scourge
68   - Undercity
71   - Undercity
98   - Undercity
118  - Undercity
1134 - Undercity
1154 - Undercity
47   - Venture Company
42   - Victim
99   - Victim
614  - Victim
1454 - Victim
41   - Villian
43   - Villian
127  - Villian
1715 - Void Anomaly
270  - Wailing Caverns
330  - Wailing Caverns
450  - Wailing Caverns
1515 - Warsong Outriders
1641 - Warsong Outriders
874  - Wintersaber Trainers
24   - Worgen
1827 - Wyrmcult
1574 - Zandalar Tribe
1739 - Zangarmarsh Banner - Alliance
1740 - Zangarmarsh Banner - Horde
1742 - Zangarmarsh Banner - Neutral
```