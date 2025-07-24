import { createAServer } from '../dbconnect.js';
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
  const allowedFields = ['name', 'symbol', 'country', 'code'];
  const updates = [];
  const values = [];

  for (const field of allowedFields) {
    if (field in request.body) {
      updates.push(`${field} = ?`);
      values.push(request.body[field]);
    }
  }

  if (updates.length === 0) {
    return response.status(400).json({ error: "No fields provided for update" });
  }

  values.push(currencyId); // 最后添加 WHERE 子句中的 id

  const sql = `UPDATE currency SET ${updates.join(', ')} WHERE id = ?`;
  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error("Update error:", error);
      return response.status(500).json({ error: "Update failed" });
    }
    response.json({ message: "Currency updated", fieldsChanged: updates.length });
  });
}


// Delete currency by ID
export function deleteCurrency(request, response) {
  const currencyId = request.params.id;
  connection.query(
    "DELETE FROM currency WHERE id = ?",
    [currencyId],
    (error, results) => {
//      if (error) return response.status(500).json({ error: "Delete error" });
//      response.status(200).json({message:"successful deleted"});
        if (error) {
          return response.status(500).json({ error: "Delete error" });
        }
        if (results.affectedRows === 0) {
          return response.status(404).json({ error: "Currency not found" });
        }
        return response.status(200).json({ message: "Successfully deleted" });
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
