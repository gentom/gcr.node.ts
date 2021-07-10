# gcr.node.ts
Google Cloud Run Node/TypeScript Boilerplate  

## Usage
#### Local
```
$ docker-compose up --build
---
$ curl localhost:8080/v1/
```
#### Cloud Run
1. modify build.sh & deploy.sh
2. build  
  `sh build.sh`
3. deploy  
  `sh deploy.sh`
4. execute  
  `curl https://{}.run.app/v1/`