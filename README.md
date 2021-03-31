<h1 align="center">How to Create a Serverless RESTful API with NodeJs, MySQL and AWS Lambda</h1>

## Endpoints
- [My API URL](https://38qvnu90k1.execute-api.us-east-1.amazonaws.com/production/api/products)
<p>Here, I had successfully created simple RESTful API with the following two endpoints:</p>

| No  | HTTP Method | URI                               | Operation                                 |
| --- | ----------- | ----------------------------------| ----------------------------------------- |
| 1   | GET         | /api/products/                    | Get all products data                     |
| 2   | POST        | /api/products/                    | Insert new product data                   |
---
# Get Started
## Modules
- [AWS-Serverless-Express](https://www.npmjs.com/package/aws-serverless-express)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Serverless](https://www.npmjs.com/package/serverless) 
---
## Installation
### Clone
```
$ git clone https://github.com/fadellasrg/REST-API
$ cd REST-API
$ npm install
```
### AWS CLI
- Install [AWS CLI](https://aws.amazon.com/cli/).
- `$ aws configure` to set up your AWS Credentials from your AWS Account.
```
AWS Access Key ID: fill with your AWS access key ID
AWS Secret Access Key: fill with your AWS secret access key
Default region name: fill in the AWS region you want in your AWS account
Default output format: json
```
---
## Set up Serverless
- Open file `serverless.yml`.
- In region section, make sure to set the same value as your previous aws configuration.
---
## Set up database
- Open your [phpmyadmin](http://localhost/phpmyadmin/).
- Make new database with the name `cafe`.
- Import the file `cafe.sql`.
---
## Create Environment Variables (Local)
- Make your .env file and fill it (for local purpose).
```
PORT=fill to set the API running port.
DB_HOST=fill with HOSTNAME in your database configuration.
DB_USER=fill with USERNAME in your database configuration.
DB_PASSWORD=fill with PASSWORD in your database configuration.
```
---
## Start Deployment
```
$ npm run deploy
```
- You will get your new endpoints. 
- Before run it, set up enironment variables in AWS Lambda function.
- Click on your lambda function that has been created.
- Click configuration and then choose Environment Variables.
- Fill the key and value.
- Open your Postman App, copy and paste your endpoint and run it with additional methods and paths.
- Here's my [Postman Documentation](https://documenter.getpostman.com/view/13713483/TzCMe8cZ) that will help you.
---
Copyright © 2020 [Fadella Amirah](https://github.com/fadellasrg)