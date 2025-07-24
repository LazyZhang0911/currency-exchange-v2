import { createAServer } from '../dbconnect.js';
const connection = createAServer();

// Utility function to handle database errors
const handleDbError = (error, response) => {
    console.error('Database error:', error);
    return response.status(500).json({ 
        error: 'Database operation failed',
        details: error.message 
    });
};

export async function getUsers(request, response) {
    try {
        connection.query('SELECT id, name, email, default_currency, is_active FROM users', 
            (error, results) => {
                if (error) return handleDbError(error, response);
                response.json(results);
            });
    } catch (error) {
        return handleDbError(error, response);
    }
}

export async function getUserById(request, response) {
    try {
        const userId = request.params.id;
        connection.query(
            'SELECT id, name, email, default_currency, is_active FROM users WHERE id = ?', 
            [userId],
            (error, results) => {
                if (error) return handleDbError(error, response);
                if (results.length === 0) {
                    return response.status(404).json({ error: 'User not found' });
                }
                response.json(results[0]);
            });
    } catch (error) {
        return handleDbError(error, response);
    }
}

export async function createUser(request, response) {
    try {
        const { name, email, password, default_currency } = request.body;
        
        if (!name || !email || !password) {
            return response.status(400).json({ 
                error: 'Missing required fields (name, email, password)' 
            });
        }
        
        connection.query(
            'INSERT INTO users (name, email, password, default_currency) VALUES (?, ?, ?, ?)',
            [name, email, password, default_currency || null],
            (error, results) => {
                if (error) {
                    if (error.code === 'ER_DUP_ENTRY') {
                        return response.status(409).json({ error: 'Email already exists' });
                    }
                    return handleDbError(error, response);
                }
                
                // Return the created user (without password)
                connection.query(
                    'SELECT id, name, email, default_currency, is_active FROM users WHERE id = ?',
                    [results.insertId],
                    (error, newUser) => {
                        if (error) return handleDbError(error, response);
                        response.status(201).json(newUser[0]);
                    }
                );
            });
    } catch (error) {
        return handleDbError(error, response);
    }
}

export async function updateUser(request, response) {
    try {
        const userId = request.params.id;
        const { name, email, default_currency, is_active } = request.body;
        
        connection.query(
            `UPDATE users 
             SET name = ?, email = ?, default_currency = ?, is_active = ?, update_time = CURRENT_TIMESTAMP 
             WHERE id = ?`,
            [name, email, default_currency, is_active, userId],
            (error, results) => {
                if (error) {
                    if (error.code === 'ER_DUP_ENTRY') {
                        return response.status(409).json({ error: 'Email already exists' });
                    }
                    return handleDbError(error, response);
                }
                
                if (results.affectedRows === 0) {
                    return response.status(404).json({ error: 'User not found' });
                }
                
                // Return the updated user
                connection.query(
                    'SELECT id, name, email, default_currency, is_active FROM users WHERE id = ?',
                    [userId],
                    (error, updatedUser) => {
                        if (error) return handleDbError(error, response);
                        response.json(updatedUser[0]);
                    }
                );
            });
    } catch (error) {
        return handleDbError(error, response);
    }
}

export async function deleteUser(request, response) {
    try {
        const userId = request.params.id;
        connection.query(
            'DELETE FROM users WHERE id = ?',
            [userId],
            (error, results) => {
                if (error) return handleDbError(error, response);
                if (results.affectedRows === 0) {
                    return response.status(404).json({ error: 'User not found' });
                }
                response.status(204).end();
            });
    } catch (error) {
        return handleDbError(error, response);
    }
}

export async function searchUser(request, response) {
    try {
        const query = request.query.q;
        console.log('Search query:', query);
        if (!query) {
            return response.status(400).json({ error: 'Search query is required' });
        }
        
        connection.query(
            `SELECT id, name, email, default_currency, is_active 
             FROM users 
             WHERE name LIKE ? OR email LIKE ?`,
            [`%${query}%`, `%${query}%`],
            (error, results) => {
                if (error) return handleDbError(error, response);
                response.json(results);
            });
    } catch (error) {
        return handleDbError(error, response);
    }
}