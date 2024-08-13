# Home Service APP (front-end project)

A simple web (front-end) project using TypeScript with ReactJS and NodeJS for the backend REST API.  
Projects idea: home repair/cleaning business service via web.

## Tech Stack

**Client:** React, TypeScript

**Server:** Node, Express

## Demo

Here will be link to the demo

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.
