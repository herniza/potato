# Principles

## Primitive Obsessions
---
1. Primitive value misalkan bikin variabel 'double probabilityA'. Double itu kan merepresentasikan Class Probability. Nah itu harusnya diganti jadi 'Probability probabilityA' aja

2. ngasih kebebasan untuk suatu variable yang nilainya harus memiliki nilai tertentu.
contoh: Variable gender. Gender kalau dijadiin freetext itu bakalan dianggep primitive obsession, terlalu banyak nilai yang beda2. Makanya gender itu harusnya pake dropdown dengan pilihan2 tertentu.

## 4 Rules of Simple Design (!!! to !)
---
1. Pass All Tests / It Works

2. Reveals Intention / Readable
3. Don't Repeat Yourself / No duplication 
4. Keep it small / Fewer element

## Object Calisthenics Rules
---
1. Only One Level Of Indentation Per Method

2. Don’t Use The ELSE Keyword
    * Early Return
    * Defensive Approach
3. Wrap All Primitives And Strings
4. First Class Collections
    
    > Any class that contains a collection should contain no other member variables. If you have a set of elements and want to manipulate them, create a class that is dedicated for this set.
5. One Dot Per Line
6. Don’t Abbreviate
7. Keep All Entities Small
    > No class over 50 lines of code
    * YAGNI
    * SRP (Single Responsibility Principle)
8. No Classes With More Than Two Instance Variables
    * High Cohesion
    * Better Encapsulation
9. No Getters/Setters/Properties
    * Tell, Don't Ask
        
        object should not burden themself with the knowledge of other object's internal

## SOLID Principle
---
1. Single Responsibility Principle (SRP)
    >each class should have one responsibility and one single purpose to change

2. Open/Closed Principle 
    >software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification. Add new entities without change previous entities.
3. Liskov Substitution Principle 
4. Interface Segregation Principle
5. Dependency Inversion Principle

## CQS (Command and Query Separation)
---
> Functions that change state should not return values and functions that return values should not change state. 

- Commands is the method that do the modification state of the system and return void

- Query is return a result and do not change.
Test menggunakan side effect

## ACID
---
1. Atomicity
    > The transaction executes completely or not at all.
2. Consistency
    > The transaction preserves the internal consistency of the database.
3. Isolation
    > The transaction executes as if it were running alone, with no other transactions.
4. Durability
    > The transaction’s results will not be lost in a failure.

## API First Principle
---
> Define APIs first, before coding its implementation

### REST Guidelines
1. Pluralize Resources Naming

2. Avoid Action: Think Resource
3. Use snake_case for Query Parameters
4. Provide API Specification (Documentation)
5. Don't break backward compatibility
    - Versioning

## SEPARATION OF CONCERNS
---
> is a design principle for separating a computer program into distinct sections such that each section addresses a separate concern