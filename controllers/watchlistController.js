export function getWatchlists(request, response) {
    return response.send("Get all watchlists");
}

export function getWatchlistById(request, response) {
    const watchlistId = request.params.id;
    return response.send("Get watchlist by ID: " + watchlistId);
}

export function createWatchlist(request, response) {
    return response.send("Create a new watchlist");
}

export function updateWatchlist(request, response) {
    const watchlistId = request.params.id;
    return response.send("Update watchlist information for ID: " + watchlistId);
}

export function deleteWatchlist(request, response) {
    const watchlistId = request.params.id;
    return response.send("Delete a watchlist with ID: " + watchlistId);
}

export function searchWatchlist(request, response) {
    const query = request.query.q;
    return response.send("Search a watchlist: " + query);
}