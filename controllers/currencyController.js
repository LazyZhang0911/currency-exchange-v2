import { createAServer } from '../dbConnect.js';
const connection = createAServer();

// Get all currencies
export function getCurrencies(request, response) {
  connection.query("SELECT * FROM currency", (error, results) => {
    if (error) return response.status(500).json({ error: "Query error" });
    response.json(results);
  });
}

// Get currency by ID
export function getCurrencyById(request, response) {
  const currencyId = request.params.id;
  connection.query(
    "SELECT * FROM currency WHERE id = ?",
    [currencyId],
    (error, results) => {
      if (error) return response.status(500).json({ error: "Query error" });
      if (results.length === 0) return response.status(404).json({ error: "Currency not found" });
      response.json(results[0]);
    }
  );
}

// Create a new currency
export function createCurrency(request, response) {
  const { name, symbol, country, code } = request.body;
  connection.query(
    "INSERT INTO currency (name, symbol, country, code) VALUES (?, ?, ?, ?)",
    [name, symbol, country, code],
    (error, results) => {
      if (error) return response.status(500).json({ error: "Insert error" });
      response.status(201).json({ message: "Currency added", id: results.insertId });
    }
  );
}

// Update currency by ID
export function updateCurrency(request, response) {
  const currencyId = request.params.id;
  const { name, symbol, country, code } = request.body;
  connection.query(
    "UPDATE currency SET name = ?, symbol = ?, country = ?, code = ? WHERE id = ?",
    [name, symbol, country, code, currencyId],
    (error, results) => {
      if (error) return response.status(500).json({ error: "Update error" });
      response.json({ message: "Currency updated" });
    }
  );
}

// Delete currency by ID
export function deleteCurrency(request, response) {
  const currencyId = request.params.id;
  connection.query(
    "DELETE FROM currency WHERE id = ?",
    [currencyId],
    (error, results) => {
      if (error) return response.status(500).json({ error: "Delete error" });
      response.status(204).end();
    }
  );
}

// Search currency by name, symbol or country
export function searchCurrency(request, response) {
  const query = request.query.q || "";
  const searchTerm = `%${query}%`;
  connection.query(
    "SELECT * FROM currency WHERE name LIKE ? OR symbol LIKE ? OR country LIKE ? OR code LIKE ?",
    [searchTerm, searchTerm, searchTerm, searchTerm],
    (error, results) => {
      if (error) return response.status(500).json({ error: "Search error" });
      response.json(results);
    }
  );
}
