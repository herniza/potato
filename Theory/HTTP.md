# HTTP
## How the Web Works

### Client Web Architecture
User -> Browser -> Request DNS Server -> Translate domain to IP -> Hit Server -> Give Responses -> Generate Website


Define language between client and server
1. HTTP METHOD:
    - GET : mengambil data
    - POST : mengirim data ke server
    - PUT : merubah data untuk replace all
    - PATCH : merubah data secara parsial
    - DELETE 
2. Basic Aspect of HTTP
    - Simple:
        > designed to be simple and human readable, even with the added complexity introduced in HTTP/2 by encapsulating HTTP messages into frames. HTTP messages can be read and understood by humans, providing easier testing for developers, and reduced complexity for newcomers.
    - Extensible
        >Introduced in HTTP/1.0, HTTP headers make this protocol easy to extend and experiment with. New functionality can even be introduced by a simple agreement between a client and a server about a new header's semantics.
    - Stateless but Not Sessionless
        >there is no link between two requests being successively carried out on the same connection. 

## WEB SERVER & APPLICATION SERVER
1. Java Servlet
    >handle request yang datang dan memberikan respond
    
    Lifecycle:
    1. init() : mendapatkan request
    2. service() : melakukan proses request
    3. destroy()