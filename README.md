# Nest + Mongoose + TypeScript example integration

### Description
This project provides an API with access to a PostgreSQL.
It has JWT integration in one of the endpoints.

# Available routes:

|method|endpoint|description|headers|
|:-----|:-----|:-----|:-----|
|GET|/movies|get movies| |
|POST|/movies|create movie| |
|PUT|/movies|update movie by title| |

# Project Structure
```sh
    src
    |_ application
        |_ controllers
        |_ dtos
    |_ domain
        |_ entities
        |_ services
    |_ infrastructure
        |_ repositories
        
```
### Getting started
1. You need to have ***go***, ***Docker***, ***docker-compose***, **minikube**, **helm**, **helm secrets** and **skaffold** installed
2. Clone the repository by running `git clone https://github.com/brianfiszman/nodejs-movies-api` into your terminal
3. Run `docker-compose up` in your terminal to run the API and the MongoDB database
4. Run ``yarn && yarn run seed`` in your terminal to seed 100 movie records to the MongoDB database


### How to deploy on Kubernetes locally
1. First we need to worry about creating the secrets, which will be used as environment variables encrypted.
To achieve this we need to have a GPG key created in our system. Once its created obtain it with the following command `gpg --fingerprint`

2. Replace the current GPG key in k8s/.sops.yaml file with the one in your clipboard 

3. Run the following command: `make encrypt-secrets`

4. Add the Bitnami repository to Helm with the following command: `helm repo add bitnami https://charts.bitnami.com/bitnami`

5. Run `minikube start` to start the Kubernetes service on Docker

6. Run `make skaffold-debug` in your terminal.

7. Enjoy!
