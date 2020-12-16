# Unit Testing
## Mockito
> To test void function)
 1. meniru suatu class tanpa melakukan semua function yang ada di dalam class tsb
    
 2. bikin object yang mimick behaviour dari suatu object
 3. jangan mock class di test class yang sama
 4. mock tujuannya bukan untuk nambah coverage
 5. bisa pake fungsi times untuk mastiin berapa kali  method itu dipanggil
 6. bisa pake verify untuk mastiin function itu  kepanggil atau nggak
 7. kalau mau test void pake mock, itu harus dikasih  test void kepanggil (times nya > 0 ) & void ga kepanggil (times nya 0)
 8. interface pake able
 9. mockito.spy create object biasa dan bisa pake function2nya

### When to use Mockito
- ketika ga peduli implementasi di dalem method yang mau di verify

## @BeforeEach in Test Class
> bisa dipake untuk init suatu variabel. biar ga redundant init variabel di tiap @Test nya

## MOCK & INJECT MOCK
> syntatic sugar of Mockito. We can use @Mock to mocking class, and use @InjectMock to inject its mock to another class constructor.