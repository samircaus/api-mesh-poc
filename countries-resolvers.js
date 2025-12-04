// Simple custom resolvers for Countries API

// Currency code to symbol mapping
const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    CNY: '¥',
    INR: '₹',
    AUD: 'A$',
    CAD: 'C$',
    CHF: 'Fr',
    SEK: 'kr',
    NOK: 'kr',
    DKK: 'kr',
    RUB: '₽',
    BRL: 'R$',
    MXN: '$',
    ZAR: 'R',
    KRW: '₩',
    TRY: '₺',
    AED: 'د.إ',
    SAR: '﷼',
    PLN: 'zł',
    THB: '฿',
    IDR: 'Rp',
    MYR: 'RM',
    PHP: '₱',
    SGD: 'S$',
    NZD: 'NZ$',
    HKD: 'HK$',
    ILS: '₪',
    EGP: '£',
    NGN: '₦',
    ARS: '$',
    CLP: '$',
    COP: '$',
    PEN: 'S/',
    VND: '₫',
    BDT: '৳',
    PKR: '₨',
    UAH: '₴',
    CZK: 'Kč',
    HUF: 'Ft',
    RON: 'lei',
};

module.exports = {
    resolvers: {
        Country: {
            // Combine name with emoji
            displayName: {
                selectionSet: `{ name emoji }`,
                resolve: (root, args, context, info) => {
                    return `${root.emoji} ${root.name}`;
                },
            },
            // Create a full description
            fullDescription: {
                selectionSet: `{ name capital currency continent { name } languages { name } }`,
                resolve: (root, args, context, info) => {
                    const capital = root.capital || 'N/A';
                    const currency = root.currency || 'N/A';
                    const continent = root.continent?.name || 'Unknown';
                    
                    // Extract language names
                    let languageText = 'N/A';
                    if (root.languages && root.languages.length > 0) {
                        const languageNames = root.languages.map(lang => lang.name).filter(Boolean);
                        if (languageNames.length === 1) {
                            languageText = languageNames[0];
                        } else if (languageNames.length > 1) {
                            // Join multiple languages with commas and 'and' for the last one
                            const lastLang = languageNames.pop();
                            languageText = languageNames.join(', ') + ' and ' + lastLang;
                        }
                    }
                    
                    return `${root.name} is in ${continent}, capital: ${capital}, currency: ${currency}. Official language${root.languages?.length > 1 ? 's are' : ' is'} ${languageText}`;
                },
            },
            // Check if country has capital
            hasCapital: {
                selectionSet: `{ capital }`,
                resolve: (root, args, context, info) => {
                    return !!root.capital;
                },
            },
            // Convert currency code to symbol
            currencySign: {
                selectionSet: `{ currency }`,
                resolve: (root, args, context, info) => {
                    if (!root.currency) return null;
                    
                    // Handle multiple currencies separated by commas
                    const currencies = root.currency.split(',').map(c => c.trim());
                    
                    // Convert each currency to its symbol
                    const symbols = currencies.map(code => currencySymbols[code] || code);
                    
                    // Remove duplicates and join with comma
                    const uniqueSymbols = [...new Set(symbols)];
                    return uniqueSymbols.join(',');
                },
            },
            // Fetch description from CountryDetails source
            description: {
                selectionSet: `{ code }`,
                resolve: (root, args, context, info) => {
                    if (!root.code) return null;
                    
                    context.logger.log('Fetching description from CountryDetails');
                    
                    // Use fetch to query the CountryDetails GraphQL endpoint
                    // Try with String type instead of ID
                    return globalThis.fetch('https://sandbox.samircaus.workers.dev/graphql', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            query: `{ country(code: "${root.code}") { description } }`,
                        })
                    })
                    .then(response => {
                        if (response && response.ok) {
                            return response.json();
                        }
                        return null;
                    })
                    .then(data => {
                        if (data?.errors) {
                            context.logger.error('GraphQL errors received');
                            return null;
                        }
                        return data?.data?.country?.description || null;
                    })
                    .catch(error => {
                        context.logger.error('Failed to fetch description');
                        return null;
                    });
                },
            },
        },
    },
};


