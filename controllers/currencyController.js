export function getCurrencies(request, response) {
    return response.send("Get all currencies");
}

export function getCurrencyById(request, response) {
    const currencyId = request.params.id;
    return response.send("Get currency by ID: " + currencyId);
}

export function createCurrency(request, response) {
    return response.send("Create a new currency");
}

export function updateCurrency(request, response) {
    const currencyId = request.params.id;
    return response.send("Update currency information for ID: " + currencyId);
}

export function deleteCurrency(request, response) {
    const currencyId = request.params.id;
    return response.send("Delete a currency with ID: " + currencyId);
}

export function searchCurrency(request, response) {
    const query = request.query.q;
    return response.send("Search a currency: " + query);
}