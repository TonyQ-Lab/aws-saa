Lab 2: Auto-scaling Group and Load Balancer
====
In this lab, you will:
+ Create an ASG that automatically scales EC2 instances.
+ Setup ALB to load balances traffic.
+ Deploy a simple web server to handle traffic.

## Instructions
### 1. Create the following resources:
+ 1 VPC
+ 2 Subnets in different AZs (public IP allocation isn't necessary)
+ 1 Internet Gateway
+ 1 Route table to route public traffic

### 2. Create security group for web server
Create a SG that allows traffic to port 22 and 80.

### 3. Create a launch template
Go to EC2 → Launch Templates → Create Launch Template:
+ Name: web-template
+ AMI: Amazon Linux 2
+ Instance type: t2.micro
+ Key pair: select one or create (for SSH)
+ Security Group: the one above
+ User Data (to install a simple web server):
```bash
#!/bin/bash
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "<h1>Hello from TonyQ</h1>" > /var/www/html/index.html
```
Save the template.

### 4. Create an ALB
Go to EC2 → Load Balancers → Create Load Balancer → Application Load Balancer
+ Name: web-alb
+ Scheme: internet-facing
+ IP type: IPv4
+ Listeners: HTTP (port 80)
+ VPC: select your VPC
+ Subnets: choose at least 2 public subnets (different AZs)
+ Security Group: choose the one above

Target Group:
+ Name: web-target-group
+ Target type: Instance
+ Protocol: HTTP
+ Port: 80
+ Health check path: /


### 5. Create an ASG
Go to EC2 → Auto Scaling Groups → Create ASG
+ Name: web-asg
+ Launch Template: select web-template
+ VPC: select same VPC and subnets as ALB
+ Attach to Load Balancer: select ALB and web-target-group

Group Size:
+ Desired capacity: 2
+ Min: 1
+ Max: 3

Scaling Policies (optional for lab):
+ Policy type: Target tracking scaling policy
+ Metric: Average CPU Utilization
+ Target value: 50% (or 40% to trigger faster)
+ Instance Warmup: 300 seconds

### 6. Load testing
On a separated machine (Ubuntu) use Apache Benchmark to load test our web server:
```bash
sudo apt install apache2-utils
ab -n 1000000 -c 500 http://<ALB-DNS>/
```
The load should be enough to force the ASG to scale out

### 7. Clean up environment
When done:
+ Delete Auto Scaling Group
+ Delete Launch Template
+ Delete Load Balancer
+ Delete Target Group
+ Delete EC2 instances (if any)
+ Delete unused security groups
+ Delete IGW, Subnet, VPC
