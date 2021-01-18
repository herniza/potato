# Kafka

## Introduction
>A distributed streaming platform

Architecture: Zookeeper, Broker, Producers, COnsumers

Zookeeper
> To manage service discovery for Kafka Brokers that form the cluster

Producer
> Applications can publish a stream of records to one or more kafka topics

Consumer
>

Topic
> A category or feed name to which records are published

Partitions
> The main concurrency mechanism in Kafka

Node
> A single computer in the apache kafka cluster

Cluster
> A group of node or a group of computer

Key
> The messages always have a key-value structure

Replication
> Duplicate data from an existing partition

Offset
> A unique identifier of a record within a partition

Consumer Group
> The set of consumer processes that are subcribing to a specific topic

## Syntax

## Step

## Why use kafka?
1. Horizontally-scalable
2. Distributed
3. High Concurrency
4. Durability
5. Scalability
6. Fault-tolerant

## Installation
- brew cask install java
- brew install kafka
- Start Zookeeper : ```zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties```
- Start Kafka server : ```kafka-server-start /usr/local/etc/kafka/server.properties```

kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test
kafka-console-producer --broker-list localhost:9092 --topic test
kafka-console-consumer --bootstrap-server localhost:9092 --topic test --from-beginning
