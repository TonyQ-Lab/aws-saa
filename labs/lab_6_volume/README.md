Lab 5: AWS EBS Volume Usage
=========================================================

In this lab, you will:
+ Create an EBS volume and attach it to an EC2
+ Move volume between AZs with snapshot

## Lab instructions

### 1. Attach the EBS Volume to Your EC2 Instance

Go to **AWS Management Console** → **EC2** → **Volumes**.

Select your EBS volume → click **Actions** → **Attach Volume**.

Choose the EC2 instance you want to attach it to.

Note the device name (e.g., /dev/sdf or /dev/xvdf) – you will need it later.

Click **Attach Volume**.

![](imgs/lab_6_1.PNG)

Check if the volume is attached: 
```bash
lsblk
```
![](imgs/lab_6_2.PNG)

```bash
sudo fdisk -l
```
![](imgs/lab_6_3.PNG)

### 2. Create a Mount Point and Mount the Volume

Convert the volume:
```bash
sudo mkfs -t ext4 /dev/nvme1n1
```
⚠️ Warning: This will erase any existing data on the volume. If it’s an old volume, skip this step.

Create a directory to mount it:
```bash
sudo mkdir /mnt/mydata
sudo mount /dev/nvme1n1 /mnt/mydata
```
![](imgs/lab_6_4.PNG)

Verify Mount:
```bash
df -h
```
![](imgs/lab_6_5.PNG)
