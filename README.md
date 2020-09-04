# Software Architecture - Assignment 1

## Members

- 6031031221 นิธิ อัศวพลากร
- 6031046721 ภูริณัฐ เทศวิเชียรชัย
- 6031062721 อิทธิธีต์ ลีลาชุติพงศ์
- 6031001421 กนกภัทร จินะณรงค์
- 6031308121 ณัชพล ศรีสังข์ 

## 1. Swagger screenshot

![Swagger](./images/swagger.png)

## 2. Source codes

- gRPC (to be added)
- [Client](https://github.com/2110521-2563-1-Software-Architecture/TODO-assignment-1/tree/master/rest-client)
- [REST](https://github.com/2110521-2563-1-Software-Architecture/TODO-assignment-1/tree/master/rest-api)

## 3. Comparation of REST and gRPC

| Functions     | gRPC                      | REST API  |
| ------------- | ------------------------- | --------- |
| List books    | `client.list({}, cb)`     | `GET /book` |
| Insert books  | `client.insert(book, cb)` | `POST /book` |
| Get books     | `client.get({id}, cb)`    | `GET /book/{id}` |
| Delete books  | `client.delete({id}, cb)` | `DELETE /book/{id}` |
| Watch books   | `client.watch({})`        | N/A       |
