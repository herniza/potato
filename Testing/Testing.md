# Testing Pyramid
> An automated testing framework that tells us to group software tests into buckets of different granularity. Unit -> Integration -> UI

1. Unit Test

    Advantages: 
    * Lightning fast
    * Extremely versatile
    * Lebih Presisi
    * Cepat & Hemat
    
    Disadvantages:
    * Cant Detect Missed Integration

2. Integration Test
    * Tidak sepresisi unit test

3. UI Test
    * end to end
    * scope lebih luas

## Unit Testing 
> a software testing method by which individual units of source code, sets of one or more computer program modules together with associated control data, usage procedures and operating procedures are tested to determine whether they are fit for use.

## Format
3A = Arrange (create class), Act (call function), Assert(check return function)

## Test Naming Convention
methodName_shouldReturn{What}_when{InWhatCondition}()

## Test Coverage
> a measure (as percentage) used to describe the degree to which the source code of a program is executed when a particular test suite runs

## SIDE EFFECT TESTING
>A side effect method is a method which modifies some state variable value/arguments passed having a consequence beyond its scope, that is to say it has an observable effect besides returning a value (the main effect) to the invoker of the operation. In simpler terms, a method can take arguments and run some logic and return a value or not return anything.

## Assertions
1. Rounding in Assertions Using Delta
```Assertions.assertEqual(0.08, actualResult, 0.0001)```
