# DATABASE
Convention Name: 
1. Consistency
2. Char for fixed value, varchar for not fixed value

## Relational Database
---
- Joining Table

- Composite Key
    > a combination of two or more columns in a table that can be used to uniquely identify each row in the table when the columns are combined uniqueness is guaranteed, but when it taken individually it does not guarantee uniqueness.
- Relationship Cardinality
    1. One to One: can be combined to one table, such as: people have 1 id card. if people have 1 address, address have city province etc then address can be divided to 2 table.

    2. One to Many
    3. Many to Many
- Why need relation
    1. Reduce storage requirements

    2. helps mantain data integrity
    3. help increase usability for end user
    4. easier data maintanance

### SQL
Disdvantages:
1. Need Design
    
## Non Relational Database
### No SQL
Advantages:
1. Dynamic
2. Key Value : Redis
3. Graph : Cassandra


## ANOMALIES
---
1. Insertion Anomaly
    > We need insert data to another table before insert to one table. Ex: Student table has FK to Address table. So user must insert data to address table before insert to student.

2. Deletion Anomaly
3. Update Anomaly

## Normalization
---
Advantages:
1. Avoid anomalies

2. Minimize duplicate data
3. Simplify queries

Rules:
1. Divided into normal forms. Rules to be followed while designing databases

2. If databases are not even in the 1NF ?

Normal Forms:
1. First normal form - 1NF
    - should have a single valued attribute
    - values stored in the column should be of the same domain
    - all columns in a table should have unique names
    - the order in which the data is stored does not matter

2. Second normal form
    - It should be in 1NF
    - It should not have partial dependency
3. Third normal form
    - It should be in 2NF
    - It should not have transitive dependency ( when changing a non-key column, might cause any other non-key columns to change)
4. BCNF

### ACID
1. Atomicity
    > The transaction executes completely or not at all.

2. Consistency
    > The transaction preserves the internal consistency of the database.
3. Isolation
    > The transaction executes as if it were running alone, with no other transactions.
4. Durability
    > The transaction’s results will not be lost in a failure.

## CASCADING
---

## AUDIT COLUMN
---
> there's column created_at and updated_at to log timestamp.