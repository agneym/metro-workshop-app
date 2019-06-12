# Kochi Metro Guide

Uses GTFS-static data [provided](https://kochimetro.org/open-data/) by [Kochi Metro](https://kochimetro.org).

## Folder Structure

1. `data`

Holds CSV data from GTFS archive of Kochi Metro.

2. `transformer`

Node scripts to transform the CSV data in _data_ folder to JSON structure required for the frontend.

This is done so that we can use the same again if the data changes or requirement for frontend changes.

3. `app`

Holds the React frontend for the application.
