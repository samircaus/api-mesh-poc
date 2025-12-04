"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var graphql_1 = require("graphql");
var schemaAST = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "SchemaDefinition",
            "operationTypes": [
                {
                    "kind": "OperationTypeDefinition",
                    "operation": "query",
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Query"
                        }
                    }
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "The root query type",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "Query"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Returns a greeting message",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "hello"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get a single user by ID",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "user"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "User ID",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "User"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get all users",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "users"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "User"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get all products",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "products"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Filter by category",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "category"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Product"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get product by ID",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "getProductById"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Product ID",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Product"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get all categories",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "categories"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Category"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get category by ID",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "getCategoryById"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Category ID",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Category"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get list of cities with filtering and pagination",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "cityList"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Filter criteria",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "filter"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "FilterInput"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Pagination offset",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "offset"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Pagination limit",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "limit"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "CityResults"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get city by path",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "cityByPath"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Content fragment path",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "_path"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "CityItem"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get list of persons",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "personList"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Filter criteria",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "filter"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "FilterInput"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "PersonResults"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get person by path",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "personByPath"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Content fragment path",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "_path"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "PersonItem"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get list of companies",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "companyList"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Filter criteria",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "filter"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "FilterInput"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "CompanyResults"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get list of awards",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "awardList"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Filter criteria",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "filter"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "FilterInput"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "AwardResults"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get list of adventures",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "adventureList"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Filter criteria",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "filter"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "FilterInput"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "AdventureResults"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get adventure by path",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "adventureByPath"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Content fragment path",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "_path"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "AdventureItem"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get paginated adventures",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "adventurePaginated"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Number of items",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Cursor",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "after"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "AdventurePaginated"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "A city content fragment",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "City"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Repository path",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_path"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "City name",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Country",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "country"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Population",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "population"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Categories",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "categories"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Tags",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_tags"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "City query results",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "CityResults"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "List of cities",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "items"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "City"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Single city result",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "CityItem"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "The city",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "item"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "City"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "A person content fragment",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "Person"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Repository path",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_path"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Last name",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "First name",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "firstName"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Awards received",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "awards"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Award"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Person query results",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "PersonResults"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "List of persons",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "items"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Person"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Single person result",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "PersonItem"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "The person",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "item"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Person"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "A company content fragment",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "Company"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Repository path",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_path"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Company name",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "CEO",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "ceo"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Person"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Employees",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "employees"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Person"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Company query results",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "CompanyResults"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "List of companies",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "items"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Company"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "An award",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "Award"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Award ID",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Award title",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "title"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Repository path",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_path"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Metadata",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_metadata"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Metadata"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Award query results",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "AwardResults"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "List of awards",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "items"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Award"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Metadata for content fragments",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "Metadata"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "String metadata",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "stringMetadata"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "MetadataItem"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "A metadata key-value pair",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "MetadataItem"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Metadata key",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Metadata value",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "value"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "An adventure content fragment",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "Adventure"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Repository path",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_path"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Adventure title",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "title"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Description",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "description"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Type of adventure",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "adventureType"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Price",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "price"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Float"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Adventure query results",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "AdventureResults"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "List of adventures",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "items"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Adventure"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Single adventure result",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "AdventureItem"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "The adventure",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "item"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Adventure"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Paginated adventure results",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "AdventurePaginated"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Edges",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "edges"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "AdventureEdge"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Pagination info",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "pageInfo"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "PageInfo"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Adventure edge for pagination",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "AdventureEdge"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Cursor",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "cursor"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Node",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "node"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Adventure"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Pagination information",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "PageInfo"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "End cursor",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "endCursor"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Has next page",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "hasNextPage"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Boolean"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "A user object",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "User"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "User ID",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "User name",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "User email",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "email"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "User role",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "role"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "A product object matching OpenAPI schema with Mesh federation support",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "Product"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Unique product identifier",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Product name",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Product description",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "description"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Category ID for federation/joins",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "categoryId"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Product category name (Electronics, Wearables, Accessories)",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "category"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Template text with {{placeholders}} for category data",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "text"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Product price",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "price"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Float"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Currency code",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "currency"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Whether product is in stock",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "inStock"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Boolean"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Available quantity",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "quantity"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Product image URL",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "imageUrl"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Product rating (3.0-5.0)",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "rating"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Float"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Number of reviews",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "reviews"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Product specifications",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "specifications"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ProductSpecifications"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Product tags",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "tags"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "A category object for product categorization",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "Category"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Unique category identifier",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Category name",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Category description",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "description"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "URL-friendly slug",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "slug"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Category image URL",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "imageUrl"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Parent category ID for nested categories",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "parentId"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Product specifications object",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "ProductSpecifications"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Product weight",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "weight"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Product dimensions",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "dimensions"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Product color",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "color"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Product brand",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "brand"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Filter operators for string and numeric comparisons",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "FilterOperator"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Equals comparison",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "EQUALS"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Not equals comparison",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "EQUALS_NOT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Contains comparison",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "CONTAINS"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Does not contain comparison",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "CONTAINS_NOT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Starts with comparison",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "STARTS_WITH"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Ends with comparison",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "ENDS_WITH"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Greater than comparison",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "GREATER"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Greater than or equal comparison",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "GREATER_EQUAL"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Lower than comparison",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "LOWER"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Lower than or equal comparison",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "LOWER_EQUAL"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "At comparison",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "AT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Not at comparison",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "NOT_AT"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Expression for a single filter condition",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "FilterExpressionInput"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "The value to compare against",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "value"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "The comparison operator",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_operator"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "FilterOperator"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Filter input for string fields",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "StringFilterInput"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "List of filter expressions",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_expressions"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "FilterExpressionInput"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Logical operator to combine expressions (AND/OR)",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_logOp"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Filter input for integer fields",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "IntFilterInput"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "List of filter expressions",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_expressions"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "FilterExpressionInput"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Logical operator to combine expressions (AND/OR)",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_logOp"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Filter input with field-specific filters",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "FilterInput"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter on name field",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "StringFilterInput"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter on firstName field",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "firstName"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "StringFilterInput"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter on title field",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "title"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "StringFilterInput"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter on description field",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "description"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "StringFilterInput"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter on country field",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "country"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "StringFilterInput"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter on adventure type",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "adventureType"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "StringFilterInput"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter on population",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "population"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "IntFilterInput"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter on price",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "price"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "IntFilterInput"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter on path",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_path"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "StringFilterInput"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        }
    ]
};
exports.default = (0, graphql_1.buildASTSchema)(schemaAST, {
    assumeValid: true,
    assumeValidSDL: true
});
