# Software Architecture - Assignment 1

## Members

นิธิ อัศวพลากร 6031031221
ภูริณัฐ เทศวิเชียรชัย 6031046721
อิทธิธีต์ ลีลาชุติพงศ์ 6031062721
กนกภัทร จินะณรงค์ 6031001421
ณัชพล ศรีสังข์ 6031308121 

## 1. Swagger screenshot(s)

(to be added)

## 2. Source codes

- gRPC (to be added)
- [Client](https://github.com/2110521-2563-1-Software-Architecture/TODO-assignment-1/tree/master/rest-client)
- [REST](https://github.com/2110521-2563-1-Software-Architecture/TODO-assignment-1/tree/master/rest-api)

## 3. Comparation of REST and gRPC

| Functions     | gRPC                      | REST API  |
| ------------- | ------------------------- | --------- |
| List books    | `client.list({}, cb)`     |
| Insert books  | `client.insert(book, cb)` | 
| Get books     | `client.get({id}, cb)`    |
| Delete books  | `client.delete({id}, cb)` |
| Watch books   | `client.watch({})`        | N/A       |
