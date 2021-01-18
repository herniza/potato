# Java Springboot

## Setup
Run: ```mvn spring-boot:run```

API Documentation: http://localhost:8081/swagger-ui.html#/

## When to Create Class
1. punya properti & behaviour
2. kalau gapunya properti & behaviour, bisa diubah jadi interface. untuk initiate nya pake Mockito atau new Vehicle(){}

## Enum
> a special class that represent a group of constants (unchangeable variable like final variable)

- we can use enum if we have some constant value that we are not gonna change it
- syntatic sugar dari static factory method
- enum cant override method equal, hashCode
- we can attach multiple values in enum such as
    
    ```
    public enum Element {
            H(“Hydrogen”, 1, 1.008f),
            HE(“Helium”, 2, 4.0026f),
            NE(“Neon”, 10, 20.180f);
    }
    ```

## Equals & Hash Code
### Equals
> Equals membandingkan atributnya. Walaupun 2 instace berasal dari class yang sama pasti akan berbeda.

### Equals Implementation
1. It is reflexive: for any non-null reference value x, x.equals(x) should return true.

2. It is symmetric: for any non-null reference values x and y, x.equals(y) should return true if and only if y.equals(x) returns true.
3. It is transitive: for any non-null reference values x, y, and z, if x.equals(y) returns true and y.equals(z) returns true, then x.equals(z) should return true.
4. It is consistent: for any non-null reference values x and y, multiple invocations of x.equals(y) consistently return true or consistently return false, provided no information used in equals comparisons on the objects is modified.
5. For any non-null reference value x, x.equals(null) should return false.

### Hash Code
>Hash code harus diterapkan saat melakukan override equals dan kedua object harus memiliki hashcode yang sama apabila mau membandingkan object.

## Value Objects
> Value object is an object whose equality is based on the value rather than identity. Value object is immutable (cant changed)

## Annotations
>Annotation @BeforeEach to run common code for every test case in 1 Test File.

## Double & double
> Double itu object, double itu primitive aja
Double itu punya default value. double default valuenya 0.

## Exception
> Exception should not general and exception message must be clear and has one purpose. Biar di testnya ga bingung mau errornya apa, mesti dipakein if lagi.
* Checked
    1. Represent error outside the control of the program (Compile-Time)

    2. Java verifies checked exceptions at compile-time

    3. Need throws keyword to declare a checked exception, can also use a try-catch block to handle a checked exception
* Unchecked
    1. Represent error inside program logic (Run-Time)

    2. Logic code does not have any errors during compile-time

    3. Java does not verify unchecked exceptions at compile-time

## Collection Framework
> Framework adalah suatu kumpulan dari suatu struktur data. Sebuah kerangka kerja yang menyediakan sebuah arsitektur untuk menyimpan dan memanipulasi sebuah objek.

### Benefit:
1. Penyimpanan data yang dinamis

2. Mengurangi effort dalam penggunaan algoritma
3. Meningkatkan kecepatan pembuatan program

### Method of Collection Framework
> add, addAll, remove, removeAll

### Collection Class
1. Eksklusif menggunakan static method

2. Contoh fungsi: binarySearch, frequency, max, min, sort

#### ArrayList
1. Data yang ada di ArrayList dapat di duplikat
2. Mempertahankan urutan penyisipan data
3. Dinamis

#### HashSet
1. Cocok untuk pencarian data bukan untuk pengolahan data karena hanya punya fungsi contains() dan tidak punya get()

## GUARD CLAUSE
>A guard clause is simply a check that immediately exits the function, either with a return statement or an exception

kayak arraylist tapi maunya unique. jadinya dijagain pake cek contain dulu. kalau ada, baru throw error. kalau gak ada, baru add. padahal kalau bikin list mau unique bisa pake hashset. trus dia auto return false kalau mau add object yang sama ke set.

## Callback
> a function that is called from another class's function.

## Marker Interface
> an interface that has no methods or constants inside it.

## Garbage Collection
> process of reclaiming the runtime unsused memory automatically. in other words, a way to destroy the unused objects

### How Object are Created in Java
1. By invoking the new() operator and the JVM will do the following:
    - allocate memory

    - assign field their default values
    - run the constructor
    - a reference is returned

### How Garbage Collection Work
1. nulling a reference object

2. By assigning a reference to another
3. By anonymous object

### Advantage
1. eliminates the need for the programmer to deallocate memory blocks explicitly

2. helps ensure program integrity
3. dramatically simplify programs

### Disadvantages
1. adds an overhead that can affect program performance

2. requires extra memory
3. have less control over the scheduling of CPU time

### How to Deal with Garbage Collection
1. Reuse objects insted of generating new ones

## Delegate Pattern
> cuma perantara aja tapi diperlukan supaya objectnya berfungsi

## Observer
> behavioural pattern that lets you define subscription mechanism to notify multiply objects

## Aggregation
> private variable tapi bisa diubah2 dari class lain karena assign nya by reference. harusnya bikin new ArrayList<>(parkingLot) aja, bukan assign langsung = gitu

## Composition
> ketika suatu class yang seharusnya memiliki atribut dependant dengan class tab.

## Comparator
> bisa pake reverse order untuk nentuin mau asc atau desc

## Syntatic Sugar
- bisa replace lambda dengan ::
    ```ParkingLot::getFreeSpace```

## Functional Programming
> Style of programming where we build a program from pure function (function does nothing else and does not cause any side effect)

1. Functional Interface
    - Lambda Expression
    - Method Reference : shorthand version of lambda expression
2. Optional
3. Streams

## Dependency Inversion

## Spring Bean
1. Spring Inversion of Control
    > Backbond sping ioc, control beannya
2. Dependency Injections
    > Dependency Injection (DI) is a design pattern used to implement IoC. It allows the creation of dependent objects outside of a class and provides those objects to a class through different ways. Ex: @Autowire

## Lombok
1. @NoArgsConstructor : generate a constructor with no parameters
2. @RequiredArgsConstructor : generates a constructor with 1 parameter for each field that requires special handling
3. @AllArgsConstructor : generates a constructor with 1 parameter for each field in your class
4. @Getter or @Setter :  generate the default getter/setter automatically

.andDo(MockMvcResultHandlers.print());

## Common Design Architecture
1. Presentation Layer (Controller)
2. Business Layer (Service)
3. Data Access Layer (Repository)

### Spring Stereotype Annotations
@Component
1. @Controller
2. @Service
3. @Repository

## Data Transfer Object
> DTO is a representation of request body

## SEPARATION OF CONCERNS
> is a design principle for separating a computer program into distinct sections such that each section addresses a separate concern