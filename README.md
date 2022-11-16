## Quick Start

Install dependecies:

```
npm i
```

## Commands

Running:

```
docker-compose up
```

Running locally:

```
yarn start:dev
```

## API Documentation

List of available routes:

`GET /v1/pokemons` - get all pokemons

`POST /v1/pokemons` - create a pokemon

`GET /v1/pokemons/:number` - get pokemon by number

`PUT /v1/pokemons/:number` - update pokemon by number

`DELETE /v1/pokemons/:number` - delete pokemon by number

## Project Structure

```
src\
|--config\ # Base onfigurations
|--constants\ # Constants variables
|--controllers\ # Route controllers (controller layer)
|--interfaces\ # Route interfaces (interface layer)
|--docs\ # Swagger files
|--middlewares\ # Custom express middlewares
|--models\ # Mongoose models (data layer)
|--services\ # Business logic (service layer)
|--utils\ # Utility classes and functions
|--app.ts # Express app
|--server.ts # Entry point
```

## TODOS

- [x] Setup project
- [x] Setup mongo with Docker
- [x] Create GET /v1/pokemon endpoint
- [x] Create POST /v1/pokemon endpoint
- [x] Create GET /v1/pokemon/:id endpoint
- [x] Create PUT /v1/pokemon/:id endpoint
- [x] Create DELETE /v1/pokemon/:id endpoint
- [x] Create seed /seed from CSV
- [ ] Paginate results
- [ ] Create swagger (Documentation)
- [ ] Create tests
