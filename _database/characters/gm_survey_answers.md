---
title: gm_survey_answers
type: characterdb
category: G
layout: single_markdown
---

# gm_survey_answers
This table contains the submitted answers for surveys.

## Structure

Field                       | Type    | Default | Comment
--------------------------- | ------- | ------- | -------
[survey_id](#survey_id)     | int(10) |         |        
[question_id](#question_id) | int(10) | 0       |        
[answer_id](#answer_id)     | int(10) | 0       |        

## survey_id

The ID of the survey from gm_survey table.

## question_id

General questions:

    35 Based on this customer service experience, how likely are you to recommend Blizz* products and services to a friend?
    36 Was your problem solved?

Comparison to other customer services:

    37 My overall experience wit BLizz* Customer Service was: 
    38 My wait time for Blizz* Customer Service was:
    39 This Blizz* Representative's professionalism was:
    40 This Blizz* Representative's communication skill were:
    41 This Blizz* Representative's overall service was:

## answer_id

### question_id 35

" recommenedn Blizz* products to a friend"

    0 = N/A
    1 = Not a chance
    10 = In a heartbeat

### question_id 36

"Was your problem solved?"

    0 = N/A
    1 = Yes
    2 = No

### question_id 37 - 41

"Comparison to other customer services"

    0 = N/A
    1 = Much worse
    2 = Somewhat worse
    3 = About the same
    4 = Better
    5 = Much better