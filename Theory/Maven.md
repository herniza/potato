# Apache Maven
> is a software management and comprehension tool

### Create Project
```
mvn archetype:generate -DgroupId=com.potato.example -DartifactId=maven-exercise -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
```

## Maven Standard Project Structure
1. Project Object Model / POM

2. Source Code Application
3. Source Code Test

## Main Feature in Maven
1. Build Tools

2. Dependency Management Tools
3. Documentation Tools 

## Common Lifecycle Phases of Maven
1. Clean : 
    > cleans up artifacts created by prior builds 
    
	```mvn clean``` : hapus project target menggunakan command
2. Validate: 
    > validate project is correct and all necessary information is available
3. Compile: 
    > compile the source code of the project 

	```mvn compile``` : memastikan project tidak ada error
4. Test: 
    > test the compiled source code using a suitable unit testing framework. these tests should not require the code be packaged or deployed 

	```mvn clean test``` / ```mvn test``` :  run project
5. Package: 
    > take the compiled code and package it in its distributable format such as jar

    ```mvn clean package```: membuat jar dengan gabungan nama artifact dan version
6. Install: 
    > install the package into the local repository for use as a dependency in other project locally