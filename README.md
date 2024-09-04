# Home Service APP (front-end project)

A simple web (front-end) project using TypeScript with ReactJS and NodeJS for the backend REST API.  
Projects idea: home repair/cleaning business service via web.

## Tech Stack

**Client:** React, TypeScript

**Server:** Node, Express

## Demo

Here will be link to the demo

## Docker container

Link to the container image

## Run Locally

Clone the project

```bash
  git clone https://github.com/Emcrowz/homeserviceapp
```

Go to the project directory

```bash
  cd homeserviceapp
```

Install dependencies

```bash
  npm run initialise-homeserviceapp-backend
```

```bash
  npm run initialise-homeserviceapp-frontend
```

Start the project

```bash
  npm run start-be
```

```bash
  npm run start-fe
```

> [!NOTE]
> Backend requires a connection string filled in a file called `.env` in order to connect to the mongoDB server.

## Running Tests

To run tests, run the following command

```bash
  npm run ---
```

## API Reference

### Categories

#### Get all Category items

```http
  GET /categories
```

#### Post Category item

Creates a new category in the Category list.

```http
  POST /categories
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `name`    | `string` | **Required**. Name of the category    |
| `icon`    | `object` | **Required**. Object containing URL   |
| `color`   | `string` | **Required**. Color value in string   |

### Businesses

#### Get all Business items

```http
  GET /businesses
```

#### Get all Business belonging to the specified Category

```http
  GET /businesses/category/:category
```

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `category` | `string` | **Required**. Name of the category |

#### Get Business data by specified ID

```http
  GET /businesses/:id
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `number` | **Required**. Id of the business |

#### Adds a new business to the businesses array

```http
  POST /businesses
```

| Parameter             | Type     | Description                                                                 |
| :-------------------- | :------- | :-------------------------------------------------------------------------- |
| `name`                | `string` | **Required**. Name of the business                                          |
| `about`               | `string` | **Required**. Description of the business                                   |
| `address`             | `string` | **Required**. Address of the business                                       |
| `category`            | `string` | **Required**. Category of the business                                      |
| `contactPerson`       | `string` | **Required**. Name and Surname of the contact person for the business       |
| `email`               | `string` | **Required**. Email of the representative                                   |
| `imageUrls`           | `array`  | **Required**. Array of the strings containing image URLs                    |
| `officialWorkingTime` | `array`  | **Required**. Tuple. Array of two numbers - hour start and hour finish      |
| `workTimes`           | `array`  | **Required**. Array of tupples of available times for user too use services |

### Bookings

#### Get bookings of the specified users email

```http
  GET /bookings
```

#### Create a new booking record in the bookings list

```http
  POST /bookings
```

| Parameter          | Type     | Description                                 |
| :----------------- | :------- | :------------------------------------------ |
| `businessId`       | `string` | **Required**. Id of the associated business |
| `userId`           | `string` | **Required**. Id of the associated user     |
| `userEmail`        | `string` | **Required**. Users email address           |
| `date`             | `string` | **Required**. Date of the booking           |
| `reservationTime`  | `array`  | **Required**. Time of the booking           |
| `status`           | `string` | Status of the booking.                      |
