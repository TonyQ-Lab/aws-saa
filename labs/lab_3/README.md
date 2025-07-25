Lab 3: Lambda and API Gateway
====
In this lab you will:
+ Create Lambda function that returns simple JSON response.
+ Create API gateway endpoint to handle HTTP request.

## Instructions

### 1. Create IAM Role for Lambda
Go to the IAM console.

Create a role with:
+ Trusted entity: AWS Lambda
+ Permissions: Attach the policy AWSLambdaBasicExecutionRole

Save the Role ARN for later use.

### 2. Create Lambda functions
Go to AWS Lambda > `Create function`

Choose `Author from scratch`
+ Name: HelloWorldLambda
+ Runtime: Python 3.12 or Node.js 21
+ Role: Use existing role (choose the one from step 1)

Function Code:
+ For Python:
```python
def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': 'Hello from Lambda!'
    }
```
+ For NodeJS:
```js
exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: 'Hello from Lambda!'
    };
};
```
Click `Deploy`.

### 3. Create API Gateway trigger
In the Lambda function page, go to `Add Trigger`.

Select API Gateway
+ Create a new API
+ API type: HTTP API (simpler for labs)
+ Security: Open (for public testing)

Click `Add`. AWS will create the API Gateway and link it.

You should get an invoke URL similar to `https://<id>.execute-api.<region>.amazonaws.com/default/HelloWorldLambda`

### 4. Test the function
Use curl to call the function:
```bash
curl https://<id>.execute-api.<region>.amazonaws.com/default/HelloWorldLambda
```

### 5. Clean up environment
When done:
+ Delete Lambda function
+ Delete API Gateway
