# Trip API
Trip API simply facilitates the trip data forexample the time the trip started and unit cost. This starts from the queue and combines the taxi involved.

## Building Stack
This API is built with NodeJs in mind, laveraging the power of NodeJs Runtime, ExpressJs is used as the core of the endpoints.

## How It Works
This API is designed to count the number of trips a driver makes in a day. When a queue is created, a given driver[Taxi] is permitted to join. After joining the queue, it is recorded in the database as a trip. The API further records how much the entire journey cost through the price property.

## Taxi Properties
To add a trip into the queue, the following properties must be made available by the taxi owner.
-   taxi
-   queue
-   price
-   startedAt

## Data Storage
The API utilizes the magic of NoSQL database models to persist the data.

## Development Port
- 5400