# Software Architecture - Assignment 1

## Members

- (To be added)

## 1. Swagger screenshot(s)

(to be added)

## 2. Source codes

- gRPC (to be added)
- [REST](https://github.com/2110521-2563-1-Software-Architecture/TODO-assignment-1/tree/master/rest-api)

## 3. Comparation of REST and gRPC

| Functions     | gRPC                      | REST API  |
| ------------- | ------------------------- | --------- |
| List books    | `client.list({}, cb)`     |
| Insert books  | `client.insert(book, cb)` | 
| Get books     | `client.get({id}, cb)`    |
| Delete books  | `client.delete({id}, cb)` |
| Watch books   | `client.watch({})`        | N/A       |