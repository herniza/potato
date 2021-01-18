# **GraphQL**
> is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data

## Queries and Mutations
1. Fields

    Query:
    ```
    {
        hero {
            name
            friends {
                name
            }
        }
    }
    ```

    Result:
    ```
    {
        "data": {
            "hero": {
                "name": "R2-D2",
                "friends": [
                    {
                        "name": "Luke Skywalker"
                    }
                ]
            }
        }
    }
    ```

2. Arguments
    > Arguments can be of many different types. (See more types in Schemas & Types)

    Query:
    ```
    {
        human(id: "1000") {
            name
            height(unit: METER)
        }
    }
    ```
3. Aliases
    >  since the result object fields match the name of the field in the query but don't include arguments, you can't directly query for the same field with different arguments.

    Query:
    ```
    {
        empireHero: hero(episode: EMPIRE) {
            name
        }
        jediHero: hero(episode: JEDI) {
            name
        }
    }
    ```

    Result:
    ```
    {
        "data": {
            "empireHero": {
                "name": "Luke Skywalker"
            },
            "jediHero": {
                "name": "R2-D2"
            }
        }
    }
    ```
4. Fragments
    > Fragments let you construct sets of fields, and then include them in queries where you need to.

    Query:
    ```
    query HeroComparison($first: Int = 3) {
        leftComparison: hero(episode: EMPIRE) {
            ...comparisonFields
        }
        rightComparison: hero(episode: JEDI) {
            ...comparisonFields
        }
    }

    fragment comparisonFields on Character {
        name
        friendsConnection(first: $first) {
            totalCount
            edges {
            node {
                name
            }
            }
        }
    }
    ```

    Result:
    ```
    {
        "data": {
            "leftComparison": {
                "name": "Luke Skywalker",
                "friendsConnection": {
                    "totalCount": 1,
                    "edges": [
                        { "node": { "name": "Han Solo" } }
                    ]
                }
            },
            "rightComparison": {
                "name": "R2-D2",
                "friendsConnection": {
                    "totalCount": 1,
                    "edges": [
                        { "node": { "name": "Leia Organa" } }
                    ]
                }
            }
        }
    }
    ```
5. Operation name
    > The operation name is a meaningful and explicit name for your operation. Such as, (query) **HeroComparison**

    Variable:
    ```
    {
        "episode": "JEDI"
    }
    ```

    Query:
    ```
    query HeroNameAndFriends($episode: Episode) {
        hero(episode: $episode) {
            name
            friends {
                name
            }
        }
    }
    ```

    Result:
    ```
    {
        "data": {
            "hero": {
                "name": "R2-D2",
                "friends": [
                    { "name": "Luke Skywalker" }
                ]
            }
        }
    }
    ```
6. Variables
7. Directives
8. Mutations
9. Inline Fragments
