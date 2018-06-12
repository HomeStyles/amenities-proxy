# Proxy Server, HomeStyles

This module combines all four microservices into a single proxy server. Current setup is intended to be used with Docker and AWS EC2. 

## Microservices

  - https://github.com/HomeStyles/amenities-service
  - https://github.com/HomeStyles/review-service
  - https://github.com/HomeStyles/pictures-service
  - https://github.com/HomeStyles/reservation-service

### Installing Dependencies

From within the root directory:

```sh
yarn install
yarn start
```
#### Deployment

```sh
Set up two Docker images, one for microservice and one for MongoDB database. 
Push images to Docker Hub
Use AWS CLI to connect AWS key pairs to EC2 public IP address
Install Docker within EC2 instance
Start Docker within EC2 instance
Log into DockerHub and pull microservice and MongoDB images into EC2 instance
Run these images
```
