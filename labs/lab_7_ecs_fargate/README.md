Lab 7: Application deployment with ECS, Fargate and ELB
=========================================================

In this lab, you will:
+ Create an ECS cluster with Fargate
+ Run a task to deploy a containerized web application
+ Configure Auto Scaling based on CPU utilization.
+ Expose the app with ALB

## Lab instructions

### 1. Prepare the Container Image

Go to Amazon ECR → Create repository
+ Repository name: ecs-fargate-demo
+ Visibility: Private
+ Click Create repository

(Optional) If you don’t have your own image:
You can use the public Nginx image in this lab instead of pushing your own.
+ Image URI: public.ecr.aws/nginx/nginx:latest

### 2. Create an ECS Cluster

Go to **ECS** → **Clusters** → **Create cluster**
+ **Cluster name**: ecs-fargate-cluster
+ **Infrastructure**: Fargate only

Leave all other defaults and click Create.

### 3. Create a Task Definition

In the ECS Console, go to Task Definitions → Create new task definition:
+ Choose Fargate → click Next step
+ Task definition name: ecs-fargate-demo-task

Under Container definitions, click Add container
+ Container name: demo-container
+ Image: public.ecr.aws/nginx/nginx:latest
(or your own ECR image URI)
+ Port mappings: 80 (container port)
+ Click Add

Under Task size, choose:
+ CPU: 0.25 vCPU
+ Memory: 0.5 GB

Click Create

### 5. Create the ECS Service

In ECS, go to your cluster → Services → Create
+ Launch type: Fargate
+ Task definition: ecs-fargate-demo-task:1
+ Cluster: ecs-fargate-cluster

Configure:
+ Service name: ecs-demo-service
+ Number of tasks: 2

Under Networking, choose:
+ Your VPC
+ Two public subnets
+ Security group: Create a new one → allow HTTP (port 80) from anywhere
+ Check Auto-assign public IP

Under Load balancing, choose:
+ Load balancer type: Application Load Balancer
+ Select your ALB: ecs-demo-alb
+ Listener: HTTP:80 → Add to load balancer
+ Target group: ecs-demo-tg

Leave defaults for Auto Scaling (we’ll configure it next).

Click Create Service


### 6. Configure Auto Scaling

Go to your cluster → Services tab → Click on ecs-demo-service

Under Auto Scaling (optional) → click Edit
Enable Service Auto Scaling

Configure:
+ Minimum number of tasks: 2
+ Desired tasks: 2
+ Maximum number of tasks: 5

Add a scaling policy:
+ Policy type: Target tracking
+ Metric type: ECSServiceAverageCPUUtilization
+ Target value: 60%

Save changes.

### 7. Test the Deployment

Go to EC2 > Load Balancers

Copy the DNS name of your ALB. Open it in your browser. You should see the Nginx default page or your custom app’s output.

To simulate load:

+ You can use an online HTTP load generator, or
+ From your local terminal:
```bash
ab -n 10000 -c 50 http://<alb-dns-name>/
```

Return to the ECS console → Service → Tasks tab

Observe new tasks being created when CPU > 60%

After load stops, tasks scale back down.

### 8. Cleanup

To avoid charges, delete resources:

Delete ECS Service
→ Cluster → Service → Actions → Delete service

Delete ECS Cluster
→ Clusters → ecs-fargate-cluster → Delete

Delete Load Balancer and Target Group
→ EC2 → Load Balancers / Target Groups → Delete

Delete ECR Repository (optional)