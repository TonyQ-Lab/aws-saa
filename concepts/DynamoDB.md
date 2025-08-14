AWS DynamoDB
============

Amazon DynamoDB is a fully managed, serverless, NoSQL database service. It is designed to handle key-value and document-based data models, providing high performance and scalability without the need to manage infrastructure. DynamoDB is ideal for applications requiring low-latency data access at scale.

## Key features

1. Serverless Architecture
No need to provision or manage servers; AWS handles scaling, patching, and setup.
Scales automatically based on the workload.

2. High Availability and Durability
Data is replicated across multiple availability zones for fault tolerance.
Provides built-in redundancy to ensure data durability.

3. Flexible Data Model
Key-value Store: Each item is identified by a primary key.
Document Store: Supports semi-structured data (e.g., JSON).

4. Scalable Throughput
    Automatically scales up or down to meet application demand.
    Offers two capacity modes:
    + On-Demand Mode: Scales automatically without capacity planning.
    + Provisioned Mode: Allows developers to specify read/write capacity units (RCUs/WCUs).

5. Streams and Event-Driven Architecture
DynamoDB Streams capture changes made to data in near real-time.
Streams can trigger AWS Lambda functions for serverless workflows.

6. Backup and Restore
Offers on-demand and continuous backups.
Ability to restore data to a specific point in time (Point-in-Time Recovery).