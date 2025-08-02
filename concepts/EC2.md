AWS Elastic Computing Cloud (EC2)
====

## What is EC2
EC2 allows users to manage and deploy virtual machines on the cloud, it's one of the fundamental building blocks of AWS.

## Instance types
There are 7 types of instance, however we mostly use 4 types:

| Type | Purpose|
|------|--------|
| General Purpose | Good balance between computing power, memory and networking. Great for a diversity of workload such as web server or code repo.|
| Compute Optimized | Good for compute-intensive tasks that require high performance processors like batch processing, machine learning, media transcoding etc.|
| Memory Optimized | Fast performance workload that requires computing data in memory, like cache databases, in-memory databases, real-time applications.|
| Storage Optimized | Storage-intensive tasks that require high speed read/write operations on large datasets within local storage, like online transaction processing, databases, cache, DFS.|

## Security Groups
EC2 instances's firewall, allow and prevent network traffic going in and out of the instance. 

Must belong to a VPC, can be attached to multiple instances.

When troubleshooting, if the error is:
+ Time out → Security Group
+ Connection Refused → App/Service inside instance failed

All inbound is blocked and all outbound is allowed by default.