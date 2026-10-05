---
title: quest_properties_currencies
type: worlddb
category: Q
layout: single_markdown
---

# quest_properties_currencies
This table stores currency rewards for quests. It is used for Cata+ quest data.

## Structure

Field                                                       | Type              | Default | Comment
----------------------------------------------------------- | ----------------- | ------- | -------
[entry](#entry)                                             | int unsigned      | 0       |
[build](#build)                                             | smallint          | 12340   |
[RewardCurrencyId1](#rewardcurrencyid1)                     | int unsigned      | 0       |
[RewardCurrencyId2](#rewardcurrencyid2)                     | int unsigned      | 0       |
[RewardCurrencyId3](#rewardcurrencyid3)                     | int unsigned      | 0       |
[RewardCurrencyId4](#rewardcurrencyid4)                     | int unsigned      | 0       |
[RewardCurrencyCount1](#rewardcurrencycount1)               | int unsigned      | 0       |
[RewardCurrencyCount2](#rewardcurrencycount2)               | int unsigned      | 0       |
[RewardCurrencyCount3](#rewardcurrencycount3)               | int unsigned      | 0       |
[RewardCurrencyCount4](#rewardcurrencycount4)               | int unsigned      | 0       |

### entry

The quest entry ID from the [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties") table.

### build

The client build for which the quest currency reward data applies.

The loader selects the highest available build that is less than or equal to the current server build.

### RewardCurrencyId1

Currency ID for the first currency reward.

The ID corresponds to a currency defined by the client currency data.

### RewardCurrencyId2

Currency ID for the second currency reward.

### RewardCurrencyId3

Currency ID for the third currency reward.

### RewardCurrencyId4

Currency ID for the fourth currency reward.

### RewardCurrencyCount1

Amount of the first currency reward granted by the quest.

### RewardCurrencyCount2

Amount of the second currency reward granted by the quest.

### RewardCurrencyCount3

Amount of the third currency reward granted by the quest.

### RewardCurrencyCount4

Amount of the fourth currency reward granted by the quest.
