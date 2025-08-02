AWS Lambda
====
## What is Lambda
Lambda is a serverless computing service that runs functions based on trigger event. Users define the code to execute and don't need to worry about the infrastructure.
+ Event-driven execution: Lambda runs code in response to triggers like HTTP request to API Gateway, data pushed to S3 or DynamoDB table updates.
+ Auto-scale: No need to worry about increased load since Lambda auto-scales the infrastructure behind the function.
+ Pay-per-use: Users pay for computing time, making Lambda suitable for short, variable workload.

## Example usages:
+ Automatically process files uploaded to an S3 bucket (e.g., image resizing, format conversion).
+ Build serverless backends for web applications, handling API requests with API Gateway and Lambda.
+ Run routine maintenance tasks on a schedule