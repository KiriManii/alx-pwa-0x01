# ALX Project 0x14 – API Documentation Review

## API Overview
The MoviesDatabase API is a RESTful service that provides access to a wide collection of movies, series, and related metadata.  
It supports browsing movie titles, searching by genre or year, retrieving details of a specific title, and handling pagination for large datasets.

## Version
v1

## Available Endpoints
- **/titles** → Fetch a list of movie titles. Supports filters like year, genre, and sorting.  
- **/titles/{id}** → Get detailed information about a specific movie by its ID.  
- **/titles/search** → Search for titles using keywords.  
- **/genres** → Retrieve the available genres to use as filters.  
- **/people** → Fetch information about actors, directors, or crew associated with titles.  

## Request and Response Format
**Request:**  
- All requests use HTTPS.  
- Parameters are passed via query strings (e.g., `?year=2023&genre=Action`).  
- Headers must include the API key for authentication.  

**Response:**  
- Data is returned in JSON format.  
- A typical movie object contains:
```json
{
  "id": "tt1234567",
  "titleText": { "text": "Inception" },
  "releaseYear": { "year": 2010 },
  "primaryImage": { "url": "https://image.url" },
  "genres": [{ "id": "Action", "text": "Action" }]
}
