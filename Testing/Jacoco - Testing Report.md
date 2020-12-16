# Jacoco Plugin

## Setup
---
1. Add Plugin on pom.xml

2. ```mvn clean jacoco:prepare-agent test jacoco:report```

3. ```mvn clean test jacoco:report``` > hapus jacoco.exec di folder target

4. id
    >untuk execution yang lebih dari 2

    ```
    <execution>
        <id>report</id>
        <goals>
        <goal>report</goal>
        </goals>
    </execution>
    ```

5. phase
    > untuk nandain jalanin jacoco setelah ngelakuin clean test
    ```
    <execution>
        <id>report</id>
        <phase>test</phase>
        <goals>
        <goal>report</goal>
        </goals>
    </execution>
    ```