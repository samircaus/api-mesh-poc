// Helper function to replace placeholders like [fieldname] or [ref.fieldname] with actual values
function replacePlaceholders(template, data) {
    if (!template) return null;
    
    // Match patterns like [fieldname] or [ref.fieldname] or [ref.nested.field]
    return template.replace(/\[([^\]]+)\]/g, (match, path) => {
        const fields = path.split('.');
        let value = data;
        
        // Navigate through nested fields
        for (const field of fields) {
            if (value == null) return match; // Keep placeholder if value not found
            value = value[field];
        }
        
        // Return the value or keep the original placeholder if not found
        return value != null ? value : match;
    });
}

module.exports = {
    resolvers: {
        Product: {
            // Format price with currency symbol
            formattedPrice: {
                selectionSet: `{ price }`,
                resolve: (root, args, context, info) => {
                    if (root.price == null) return null;
                    return `$${root.price.toFixed(2)}`;
                },
            },
            // Calculate price with tax
            priceWithTax: {
                selectionSet: `{ price }`,
                resolve: (root, args, context, info) => {
                    if (root.price == null) return null;
                    const taxRate = args.taxRate || 0.1; // Default 10% tax
                    return root.price * (1 + taxRate);
                },
            },
            // Check if product is expensive (over $100)
            isExpensive: {
                selectionSet: `{ price }`,
                resolve: (root, args, context, info) => {
                    if (root.price == null) return false;
                    return root.price > 100;
                },
            },
            // Get availability status as text
            availabilityStatus: {
                selectionSet: `{ inStock }`,
                resolve: (root, args, context, info) => {
                    return root.inStock ? 'In Stock' : 'Out of Stock';
                },
            },
            // Template replacement for products
            productSummary: {
                selectionSet: `{ id name price category inStock }`,
                resolve: (root, args, context, info) => {
                    const template = args.template || 'Product: [name] - $[price] ([category])';
                    return replacePlaceholders(template, root);
                },
            },
        },
        City: {
            // Display name combining city and country
            displayName: {
                selectionSet: `{ name country }`,
                resolve: (root, args, context, info) => {
                    return `${root.name}, ${root.country}`;
                },
            },
            // Categorize population size
            populationCategory: {
                selectionSet: `{ population }`,
                resolve: (root, args, context, info) => {
                    if (root.population == null) return 'Unknown';
                    if (root.population < 100000) return 'Small';
                    if (root.population < 1000000) return 'Medium';
                    return 'Large';
                },
            },
            // Template replacement for cities
            cityDescription: {
                selectionSet: `{ _path name country population categories _tags }`,
                resolve: (root, args, context, info) => {
                    const template = args.template || '[name], [country] - Population: [population]';
                    return replacePlaceholders(template, root);
                },
            },
        },
        Person: {
            // Full name combining firstName and name
            fullName: {
                selectionSet: `{ firstName name }`,
                resolve: (root, args, context, info) => {
                    const parts = [root.firstName, root.name].filter(Boolean);
                    return parts.length > 0 ? parts.join(' ') : null;
                },
            },
            // Count of awards
            awardsCount: {
                selectionSet: `{ awards { id } }`,
                resolve: (root, args, context, info) => {
                    return root.awards?.length || 0;
                },
            },
            // Template replacement for persons
            personBio: {
                selectionSet: `{ _path firstName name awards { id title } }`,
                resolve: (root, args, context, info) => {
                    const template = args.template || '[firstName] [name]';
                    return replacePlaceholders(template, root);
                },
            },
        },
        Company: {
            // Template replacement for companies with nested references
            companyDescription: {
                selectionSet: `{ _path name ceo { firstName name } employees { firstName name } }`,
                resolve: (root, args, context, info) => {
                    const template = args.template || '[name] - CEO: [ceo.firstName] [ceo.name]';
                    return replacePlaceholders(template, root);
                },
            },
        },
        Adventure: {
            // Template replacement for adventures
            adventureSummary: {
                selectionSet: `{ _path title description adventureType price }`,
                resolve: (root, args, context, info) => {
                    const template = args.template || '[title] - [adventureType] adventure for $[price]';
                    return replacePlaceholders(template, root);
                },
            },
        },
    },
};

