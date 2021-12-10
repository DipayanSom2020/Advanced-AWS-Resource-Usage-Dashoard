# CloudOMeter

## This repository will contain the codebase for CloudOmeter Dashboard .


-----------

## Description 

This dashboard aims to focus on cost optimization in cloud by pointing out aggresive use of resources on Project, Subject area, service and even instance level details.

As a future scope we will add a notification system which predicts and warns about any possible risks based on current usage trend. 


---------------------

## Architecture Diagram

![alt text](https://github.com/Dipayan-Som/Architecture-Diag/blob/main/Design.png?raw=true)

-------------------

## General Discussion

### Prerequisites and its cost

1. AWS Amplify - 
    Consider a scenario where our website is used by 1000 people per month and is weekly redeployed with 5 mins of build time.

    then
    
    <u>Monthly build & deploy charges </u>
    
    build cost = 5*4 * 0.01 = 0.2 $ per month

    <u>Monthly hosting charges</u>

    Web app size = 400 MB, average size of page requested = 1.5 MB

    Monthly GB served = Daily active users * average page size * days = 1000 * (1.5/1024) * 30 = 43.45 GB

    Monthly GB stored = web app size * number of monthly builds = (400/1024)*2 = 0.76 GB

    Monthly hosting charges = 43.45*$0.15 + 0.76*$0.023= $6.53


    <u>Total monthly charges</u>
    Total charges = Build & deploy charges + Hosting charges = $0.2+$6.53 = $6.73 per month

2.  AWS Cognito 

    For 50,000 users per month $0.035

3. AWS API Gateway 

    REST API - $3.50 per 1M calls

    If we have 1000 users ,  each of them calls that api 7 times per min for 8 hours per day for 30 days, then it would cost 3.50$

4. Lambda 

    $.20 for 1M request. 

    If we have 1000 users ,  each of them calls that lambda 7 times per min for 8 hours per day for 30 days, then it would cost 0.20$

5. DynamoDB

    It can be around 2-4 $ per table if RCU and WCU kept at min. However it will vary a lot depending on the amount of data stored. In other words if we try to render more historical data then cost wil increase and vice versa.

    








