1. We can use Collection.max(List) to get a maximum value of the given list or Collection.max(List, Comparator) to sort a list with defined comparator in decending order.
2. Composing function is a mechanism for combining functions to obtain more complicated functions that originally comes from Math.
3. Strategy Pattern used to hide implementation by using an abstraction of each detail, so we can use 1 abstraction for lot functionality, and also resolve dependency inversion issue.
4. Impure functions are those who cause side effect, such as throw Exception or modify the value of the argument.
5. There are 3 stages of working with a stream :
    1.  obtaining the streams from a source
    2.  performing intermediate operations with the stream to process data
    3.  performing a terminal operation to produce a result
6. We should avoid causing a change in a collection natural order if we don't need it. in this case, use Collection.Max() or Collection.Min().
7. When the object equals to another object, then when we compare it, it should return 0 means there is no difference.
8. We can reverse comparator order using Comparator.comparing(ParkingLot::getFreeSpace).reversed().
9. Lambda expression can be used as a replacement for an anonymous inner type.
10. When we override compareTo method, we need to override equals and hashcode method too.
11. We can use 'Mockito.spy()' to create object and call methods inside the object and still tracking every injection.
12. Functional Interface is an interface with single abstract method, to implement it we can use :
    1.  Anonymous Function 
    2.  Lambda Expression
    3.  Method Reference
13. Optional is a container object which may or may not contain a non-null value.