# API

Request response cycle.

Type of request to an url path

Example: ```/orders```

POST /orders createOrder
GET /orders getOrderHistory
DELETE /orders cancelOrder


## API (Application Programming Interface)
list of the type of requests allowed by the backend

## REST (Representational State Transfer)
Naming convention using a Request Type (POST, GET etc.) + URL Path

Other conventions
- GraphQL ```POST /graphql```
- RPC (Remote procedure call) ```POST /createOrder``` ```POST /getOrderHistory```

## IaaS
- aws (amazon web services)
- google cloud platform
- microsoft azure

Renting a VM (small computer running inside a bigger computer)

Loadbalancer (special VM that will distribute the load evently across multiple VM running the same backend)

## PaaS (Platform as a Service)
Will deal with all the VMs and loadbalancing
- Elastic Beanstalk (aws)
- App Engine
- App Service

## Microservices
Split backend into seperate codebases

Exemple:
- Save orders
- Charge credit cards
- Send emails

Each will have their own backend (LB + VM + database)
- Orders backend
- Payments backend
- Email backend

each backend can send request to the other one
each backend can have completely different programming language or database, can also be an external service, known as

## SaaS (Software as a Service)

IaaS + PaaS + SaaS = 3 foundations of Cloud Computing

## Databases

- blob Storage (AWS S3) to store and CDN (AWS Cloudfront) to load images
- search databases (Elasticsearch)
- cache (redis)
- data science, use Analytical Database (Snowflake)
- scheduled tasks (rabbitMQ)
