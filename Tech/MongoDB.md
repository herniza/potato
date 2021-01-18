
## Run
brew services start mongodb-community@4.4

brew services stop mongodb-community@4.4

mongo (run in localhost:27017)

## Difference
| RDBMS      | MongoDB |
| ----------- | ----------- |
| Database      | Database       |
| Table   | Collection        |
| Tuple/Row   | Document        |
| Column   | Field        |
| Table Join   | Embedded Documents        |
| Primary Key   | Primary Key (Default key _id provided by MongoDB itself)        |

## Query
- List all Db: ```show dbs```
- Show collections:  ```show collections```
- Create Db: ```use db_name```
- insert document: 
    ```
    db.users.insert({
        _id : ObjectId("507f191e810c19729de860ea"),
        title: "MongoDB Overview",
        description: "MongoDB is no sql database",
        by: "tutorials point",
        url: "http://www.tutorialspoint.com",
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 100
    })
    ```