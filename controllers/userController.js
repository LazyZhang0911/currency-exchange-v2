export function getUsers(request, response) {
    return response.send("Get all users");
}

export function getUserById(request, response) {
    const userId = request.params.id;
    return response.send("Get user by ID: " + userId);
}

export function createUser(request, response) {
    return response.send("Create a new user");
}

export function updateUser(request, response) {
    const userId = request.params.id;
    return response.send("Update user information for ID: " + userId);  
}

export function deleteUser(request, response) {
    const userId = request.params.id;
    return response.send("Delete a user with ID: " + userId);
}

export function searchUser(request, response) {
    const query = request.query.q;
    return response.send("Search a User: " + query);
}
