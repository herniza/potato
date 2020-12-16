# CODE SMELL
> Code smell is a surface indication that usually corresponds to deeper problem in the system

## Type
---
1. Bloaters
    Code, method and classes that have increased
    - Long Method

    - Large Class : A class contains many methods/LOC
    - Primitive Obsession : 
        - Use of primitives instead of small objects for simple tasks
        - Use of constants of coding information
    - Data Arrays
    - Long Parameter List : More than three or four parameters for a method
    - Data Clumps : Different parts of the code contain identical groups of variables
    - Object

2. Object Oriented Abusers
    - Switch Statements : A complex switch operator or sequence if statement

    - Temporary Field
    - Refused Bequest : A subclass uses only some of the methods and properties inherited from its parents
    - Alternative Classes with Different Interfaces : Two classes perform identical method but different method name
3. Change Preventer
    - Divergent Change : Change many unrelated methods when you make changes to a class

    - Shotgun Surgery : Making any modifications requires that you make many small changes to many different classes.
    - Parallel Inheritance Hierarchies : Create a subclass for a class, you find yourself needing to create a subclass for another class.
4. Dispensables
    - Comments

    - Duplicate Code
    - Lazy Class
    - Data Class
    - Dead Code : Biasanya hasil dari refactor
    - Speculative Generality
5. Couplers
    - Future Envy
    
    - Inappropiate Intimacy
    - Message CHains
