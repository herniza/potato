# TIPS

1. We can override toString methods to avoid using getter to print class property
2. We can use _ in integer value to make it more readable. ex: 1000000 == 1_000_000
3. noun for class name, verb for method name
4. Private modifier can be accessed from a same class even though it's a different instance
5. 'static final' variable for class (not method) name convention must be capitalized and use underscore to replace space
6. One way to eliminate the usage of 'else' is to do an early return statement
7. We can use Double.compareTo if result 1 meaning greater than, -1 for less than, and 0 for equals
8. Do not use 'static import', so we can know where the source class is
9. The general contract of hashCode is if 2 objects are equal according to the equals method, then calling the hashCode method on each of the object must produce the same integer result.
10. Avoid magic number/magic literal by extract it into descriptive variable / constant to achieve the reveals intention rule
11. We should use bracket block ({}) for if condition even there is just one line of code
12. To check 2 objects is equal or not, we can override java 'equals' method
13. Kalau bingung cari nama, berarti ada yang salah sama tujuan dan method
14. Apabila ada method abstract, subclassnya harus mengimplementasi method tersebut.
15. All class/enum must have test class if method inside class/enum is set to public.
16. Don't add unnecessary method to satisfy the unit test
17. Setiap bikin class tentuin dulu itu valueobject atau entityobject
18. value object harus punya equality (equals & hashcode)
19. value object juga immutable, jadi mending return class baru. gaboleh ubah valuenya
20. entity object itu bisa aja valuenya sama tapi robotnya beda.
21. bisa pakai factory method untuk ubah2 inputan, string jadi list misalnya
22. jangan mock suatu class di test class tersebut karena mocking itu tujuannya untuk mimick bukan untuk nambah coverage/ngelakuin test. misal mock Owner di OwnerTest
23. Tiap bikin test harus independent. jangan bikin variabel di global kalau emang mau dipake di tiap test. misal kayak bikin list parking lot terus ngelakuin add2.
24. ngelakuin test void function:
    - mockito
    - assert does not throw
    - side effect testing
25. We should minimize unecessary exception because it is costly and affect performance
26. We can utilize the guard clause to prevent using the exception
27. before each itu untuk variabel yang bener2 global dan emang dibutuhin semua test case. kalau butuh setup2 lagi mendingan di methodnya aja supaya bisa readable
28. pake mockito when itu kalau bisa jangan ada kondisi2 lainnya lagi. kalau ada kondisi lainnya pas lg mockito when malah jadi ribet di testingnya mesti tambah test untuk kondisi lainnya lg
29. bisa early return di void function dengan `return;`
30. hati2 assign suatu variabel. kalo di assign langsung itu artinya dia ambil referencenya. bukan copy isinya.
    ```this.parkingLots = parkingLots```
    itu artinya this itu ambil referencenya parkingLots. bukan copy isinya. jadi lebih baik gini
    ```this.parkingLots = new ArrayList<>(parkingLots)```
31. bikin test yang beneran bikin confidence.
32. integration test yang dari end to end itu di controller, unit test untuk service dll nya
33. 1 controller hanya punya 1 service. 1 service boleh punya banyak repository
34. sebisa mungkin untuk tidak pakai setter getter karena bisa breaking rules encapsulation.

# SHORTCUT

1. Refactor : ctrl + shift + r
2. Reformat : shift + option + f
3. Reload : cmd + R atau cmd + shift + P -> reload window
4. Import : cmd + .
5. clean java : cmd shift p -> clean the java language server workspaces
6. add dependecy : cmd shift p -> add dependency ->  mockito-core
7. organize import : shift option o


# RULES
1. magic literals
2. max loc : 15

 