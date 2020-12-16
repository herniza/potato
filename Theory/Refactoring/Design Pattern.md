# Design Pattern

## Behavioural
---
> Design pattern that are specifically concerned with communication between object.

1. CHAIN OF RESPONSIBILITY
    
    A way of passing a request between handlers

2. Command

    Encapsulate a command request as an object

3. ITERATOR

    Sequentially access the elements of a collection

4. MEDIATOR
    
    Defines simplified communication between objects. Reduce chaotic dependencies between objects.

5. MEMENTO

    Capture and restore and object's internal state, also called as Snapshot. There's originator and caretakers. Originator is the one that save Snapshot, and caretakers is the one that used Snapshot.

6. OBSERVER
    
    A way to notify change to a number of classes.

7. STATE
    
    Alter an object's behavior when its state is changed.

8. STRATEGY

    Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

9. TEMPLATE METHOD

    Defer the exact steps of an algorithm to a subclass.

10. VISITOR

    Defines a new operation to a class without change

## Creational
---
1. Factory Method
    > provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
2. Singleton
    > lets you ensure that a class has only one instance while providing a global access point to this instance.
3. Abstract Factory
    > provides an interface for creating families of related or dependant objects without specifying their concrete class
4. Builder
    > lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.
5. Prototype
    > lets you copy existing objects without making your code dependant on their class


## Structural
---
1. Facade
    > is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes. It hides much of the complexity and makes the subsystem easy to use.