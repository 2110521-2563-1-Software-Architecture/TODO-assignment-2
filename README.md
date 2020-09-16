# Software Architecture - Assignment 2: gRPC and REST API benchmarking


## Members

- 6031031221 นิธิ อัศวพลากร
- 6031046721 ภูริณัฐ เทศวิเชียรชัย
- 6031062721 อิทธิธีต์ ลีลาชุติพงศ์
- 6031001421 กนกภัทร จินะณรงค์
- 6031308121 ณัชพล ศรีสังข์ 

## 1. Graphs showing the benchmark results wih the explanation of experimental setting

a1: Single client with a small call to insert a book item
(./images/ScenarioA_insert.png)
จากกราฟพบว่าครั้งแรกที่การเรียกฟังก์ชัน insert จะใช้เวลานาน เมื่อเทียบกับการเรียกครั้งถัดไป และ การเรียกผ่าน GRPC นั้นทำได้เร็วกว่ากราเรียกผ่าน REST api
a2: A bigger call to insert a list of multiple book items


b: Multiple clients with different kind of calls


c: Vary the number of concurrent calls from 1 to 4096 calls



## 2. Discussion of the results why one method is better the other in which scenarios

gRPC is faster than REST because of these following reasons
1. 
2. 
3. 


## 3. Comparison of the gRPC and REST API from the aspects of language neutral, ease of use, and performance


| Aspect        | REST                      | gRPC                |
| ------------- | ------------------------- | ------------------- |
| Language Neutral    | Support Nearly every type of environment from mobile to web, Json libraries exist is most of programming language (and it’s just plain text)     | Support most popular languages and platform (C++, Java, Python, Go Ruby, C#, Objective-C, Javascript) In turn arguably not mature enough for production use         |
| Ease of Use  | write more code | write less code, High learning curve, Less support, Harder to debug directly        |
| Performance     | slower    | faster    |


## 4. Does results comply with the results in https://medium.com/@bimeshde/grpc-vs-rest-performance-simplified-fd35d01bbd4



