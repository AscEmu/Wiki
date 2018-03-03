---
title: gm_survey
type: characterdb
category: G
layout: single_markdown
---

# gm_survey
This table contains the submitted survey data.

## Structure

Field                       | Type     | Default | Comment
--------------------------- | -------- | ------- | -------
[survey_id](#survey_id)     | int(10)  |         |        
[guid](#guid)               | int(10)  | 0       |        
[main_survey](#main_survey) | int(10)  | 0       |        
[comment](#comment)         | longtext |         |        
[create_time](#create_time) | int(10)  |         |        

### survey_id

The ID of the survey.

### guid

The player guid.

### main_survey

Value from dbc.

### comment

The submitted comment for this survey.

### create_time

Unix timestamp.