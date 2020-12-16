# OOP
> is a programming model that organizes software design around data, or object rather than functions and logic.

Object : Data, Variable, Function

## Advantages of OOP
1. Modular

2. Maintainable
3. Re-usable
4. Readable

## 4 Pilars of OOP
- Abstraction
    > method that hide implementation (unnecessary details from user)

- Inheritance
    > sebuah class dapat memiliki property dan method yang sama dengan class yang diinherit/diextends.
- Polymorphism
    > 1 tindakan tapi behaviournya bisa berbeda2.
- Encapsulation
    > Menjaga class dan method serta mengatur hak aksesnya.

The most important pilars : Encapsulation

## Fixing Duplication
1. Inheritance (Overload)

2. Abstract Class
3. Factory Method : a static method that returns object. 

## Naming Convention
1. English

2. No abbreviation
3. Avoid `get`
4. Avoid noun, use verb instead
5. Consistent

## Factory Method Naming Convention
1. Penamaan function di awal menggunakan make / create

2. makeA_shouldHaveB_whenGivenC

## Object Calisthenics
> is programming exercises, formalized as a set of 9 rules.
https://williamdurand.fr/2013/06/03/object-calisthenics/

### Object Calisthenics Focus
1. Maintainability

2. Readibility
3. Testability
4. Comprehensibility

### Object Calisthenics Rules
1. Only One Level Of Indentation Per Method

2. Don’t Use The ELSE Keyword
3. Wrap All Primitives And Strings
4. First Class Collections
5. One Dot Per Line
6. Don’t Abbreviate
7. Keep All Entities Small : No class over 50 lines. (Kalau di kelas, Line of Code tidak boleh melebihi 50 lines)
8. No Classes With More Than Two Instance Variables
9. No Getters/Setters/Properties
