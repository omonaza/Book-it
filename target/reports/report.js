$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/wizard/wizardNewProduct.feature");
formatter.feature({
  "line": 2,
  "name": "Creating a new product, and sending a new request body with the following scenarios",
  "description": "As a provider i want to be able to register to the app\r\nso i can use it , and provide my services ,by creating all kinds of my product.",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@successfullyCreateProduct"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 6083849700,
  "status": "passed"
});
formatter.before({
  "duration": 25599634000,
  "status": "passed"
});
formatter.before({
  "duration": 123167400,
  "status": "passed"
});
formatter.before({
  "duration": 95301100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "provider creates a new product",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-creates-a-new-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 8
    },
    {
      "cells": [
        "AutoTestPositive1",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 9
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 843818800,
  "status": "passed"
});
formatter.after({
  "duration": 118700,
  "status": "passed"
});
formatter.before({
  "duration": 96600,
  "status": "passed"
});
formatter.before({
  "duration": 100059000,
  "status": "passed"
});
formatter.before({
  "duration": 70267800,
  "status": "passed"
});
formatter.before({
  "duration": 66945900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "provider enters a data in productTypes",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-enters-a-data-in-producttypes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "productTypes is set with following fields",
  "rows": [
    {
      "cells": [
        "name",
        "id"
      ],
      "line": 13
    },
    {
      "cells": [
        "TestAPI",
        "5bpJ0olV"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productTypesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1676500,
  "status": "passed"
});
formatter.after({
  "duration": 70700,
  "status": "passed"
});
formatter.before({
  "duration": 92400,
  "status": "passed"
});
formatter.before({
  "duration": 85840200,
  "status": "passed"
});
formatter.before({
  "duration": 85076700,
  "status": "passed"
});
formatter.before({
  "duration": 58396100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "provider enters a data in ProductWorkingDates",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-enters-a-data-in-productworkingdates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 18
    },
    {
      "cells": [
        "2021-05-27",
        "2022-12-31",
        "1234567sdfgh#$#%^%\u0026",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 19
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 340000,
  "status": "passed"
});
formatter.after({
  "duration": 60900,
  "status": "passed"
});
formatter.before({
  "duration": 104900,
  "status": "passed"
});
formatter.before({
  "duration": 79362100,
  "status": "passed"
});
formatter.before({
  "duration": 67858900,
  "status": "passed"
});
formatter.before({
  "duration": 62918300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "provider enters a data in timeSlots",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-enters-a-data-in-timeslots",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "startTime",
        "usedQuantity"
      ],
      "line": 24
    },
    {
      "cells": [
        "false",
        "20:00:00",
        "Monday",
        "01:00:00",
        "67",
        "09:00:00",
        "0"
      ],
      "line": 25
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2237400,
  "status": "passed"
});
formatter.after({
  "duration": 52100,
  "status": "passed"
});
formatter.before({
  "duration": 118500,
  "status": "passed"
});
formatter.before({
  "duration": 171550900,
  "status": "passed"
});
formatter.before({
  "duration": 69769300,
  "status": "passed"
});
formatter.before({
  "duration": 74645800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "provider enters a data in ProductRegions",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-enters-a-data-in-productregions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "productRegions is set with the following fields",
  "rows": [
    {
      "cells": [
        "productId",
        "regionId",
        "regionName"
      ],
      "line": 30
    },
    {
      "cells": [
        "PYayPjpW",
        "5bpJKaVE",
        "Eilat"
      ],
      "line": 31
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productRegionsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4795200,
  "status": "passed"
});
formatter.after({
  "duration": 50400,
  "status": "passed"
});
formatter.before({
  "duration": 116900,
  "status": "passed"
});
formatter.before({
  "duration": 92796200,
  "status": "passed"
});
formatter.before({
  "duration": 57133300,
  "status": "passed"
});
formatter.before({
  "duration": 53398100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "provider enters a data in ProductPrices",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-enters-a-data-in-productprices",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "productPrices is set with the following fields",
  "rows": [
    {
      "cells": [
        "productId",
        "channelId",
        "fromDate",
        "toDate",
        "title",
        "remarks",
        "officialPrice",
        "currencyId",
        "quantityPerDay",
        "autoConfirm",
        "pricePerPerson",
        "deletedAt"
      ],
      "line": 35
    },
    {
      "cells": [
        "yxl4wVaj",
        "5bpJKaVE",
        "2021-05-31T00:00:00",
        "2022-12-31T00:00:00",
        "API",
        "Test",
        "0",
        "5bpJKaVE",
        "123",
        "false",
        "ture",
        ""
      ],
      "line": 36
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productPricesIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 300100,
  "status": "passed"
});
formatter.after({
  "duration": 434600,
  "status": "passed"
});
formatter.before({
  "duration": 83200,
  "status": "passed"
});
formatter.before({
  "duration": 74520300,
  "status": "passed"
});
formatter.before({
  "duration": 47819400,
  "status": "passed"
});
formatter.before({
  "duration": 64332300,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "provider enters a data in productPriceTypes",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-enters-a-data-in-productpricetypes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "productPriceTypes is set with the following dates",
  "rows": [
    {
      "cells": [
        "productPriceId",
        "productCustomerTypeId",
        "amount",
        "currencyId",
        "currencySymbol",
        "isOfficial"
      ],
      "line": 40
    },
    {
      "cells": [
        "Belmyqln",
        "Q4aLVbOn",
        "57",
        "Belm3pnb",
        "₪",
        "true"
      ],
      "line": 41
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productPriceTypesIsSetWithTheFollowingDates(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 368600,
  "status": "passed"
});
formatter.after({
  "duration": 49200,
  "status": "passed"
});
formatter.before({
  "duration": 100200,
  "status": "passed"
});
formatter.before({
  "duration": 53500300,
  "status": "passed"
});
formatter.before({
  "duration": 50224400,
  "status": "passed"
});
formatter.before({
  "duration": 43751400,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "provider enters a data in productCustomerType",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-enters-a-data-in-productcustomertype",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "productCustomerType is set with the following fields",
  "rows": [
    {
      "cells": [
        "productId",
        "name"
      ],
      "line": 45
    },
    {
      "cells": [
        "yxl4wVaj",
        "מבוגר"
      ],
      "line": 46
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productCustomerTypeIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1602500,
  "status": "passed"
});
formatter.after({
  "duration": 64400,
  "status": "passed"
});
formatter.before({
  "duration": 76100,
  "status": "passed"
});
formatter.before({
  "duration": 54876300,
  "status": "passed"
});
formatter.before({
  "duration": 54022800,
  "status": "passed"
});
formatter.before({
  "duration": 45977100,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "provider enters a data in productCustomerTypes",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-enters-a-data-in-productcustomertypes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "productCustomerTypes is set with following fields",
  "rows": [
    {
      "cells": [
        "name"
      ],
      "line": 51
    },
    {
      "cells": [
        "API"
      ],
      "line": 52
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productCustomerTypesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1628400,
  "status": "passed"
});
formatter.after({
  "duration": 50500,
  "status": "passed"
});
formatter.before({
  "duration": 62600,
  "status": "passed"
});
formatter.before({
  "duration": 75660300,
  "status": "passed"
});
formatter.before({
  "duration": 45103800,
  "status": "passed"
});
formatter.before({
  "duration": 70994700,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "provider enters a data in City",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-enters-a-data-in-city",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 56,
  "name": "City is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "regionId"
      ],
      "line": 57
    },
    {
      "cells": [
        "Israel",
        "Belm3pnb"
      ],
      "line": 58
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.cityIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1674800,
  "status": "passed"
});
formatter.after({
  "duration": 45900,
  "status": "passed"
});
formatter.before({
  "duration": 94200,
  "status": "passed"
});
formatter.before({
  "duration": 49555100,
  "status": "passed"
});
formatter.before({
  "duration": 45440000,
  "status": "passed"
});
formatter.before({
  "duration": 48572200,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "provider enters a data in productIncludedTags",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-enters-a-data-in-productincludedtags",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 61,
  "name": "productIncludedTags is set with the following fields",
  "rows": [
    {
      "cells": [
        "subTagId",
        "subTagName"
      ],
      "line": 62
    },
    {
      "cells": [
        "jLa3rjpz",
        "WiFi"
      ],
      "line": 63
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIncludedTagsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1536700,
  "status": "passed"
});
formatter.after({
  "duration": 50600,
  "status": "passed"
});
formatter.before({
  "duration": 89500,
  "status": "passed"
});
formatter.before({
  "duration": 53886200,
  "status": "passed"
});
formatter.before({
  "duration": 42206600,
  "status": "passed"
});
formatter.before({
  "duration": 54668700,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "provider enters a data in productExcludedTags",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-enters-a-data-in-productexcludedtags",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "productExcludedTags is set with the following fields",
  "rows": [
    {
      "cells": [
        "productId",
        "subTagId",
        "parentTagId",
        "subTagName"
      ],
      "line": 68
    },
    {
      "cells": [
        "52aAx3pZ",
        "4eO8gvlP",
        "qeaZepdE",
        "Food"
      ],
      "line": 69
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productExcludedTagsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1523100,
  "status": "passed"
});
formatter.after({
  "duration": 41400,
  "status": "passed"
});
formatter.before({
  "duration": 72300,
  "status": "passed"
});
formatter.before({
  "duration": 80548900,
  "status": "passed"
});
formatter.before({
  "duration": 44967200,
  "status": "passed"
});
formatter.before({
  "duration": 59490400,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "provider enters a data in productTags",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-enters-a-data-in-producttags",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 72,
  "name": "productTags is set with the following fields",
  "rows": [
    {
      "cells": [
        "productId",
        "subTagId",
        "parentTagId",
        "subTagName"
      ],
      "line": 73
    },
    {
      "cells": [
        "52aAx3pZ",
        "qeaZMepd",
        "JnlY6Oz4",
        "Extreme"
      ],
      "line": 74
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productTagsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1613800,
  "status": "passed"
});
formatter.after({
  "duration": 51000,
  "status": "passed"
});
formatter.before({
  "duration": 119800,
  "status": "passed"
});
formatter.before({
  "duration": 57348000,
  "status": "passed"
});
formatter.before({
  "duration": 47935800,
  "status": "passed"
});
formatter.before({
  "duration": 77634700,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "provider enters a data in product videos",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-enters-a-data-in-product-videos",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 78,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 79
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 80
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3105300,
  "status": "passed"
});
formatter.after({
  "duration": 47500,
  "status": "passed"
});
formatter.before({
  "duration": 77600,
  "status": "passed"
});
formatter.before({
  "duration": 79633600,
  "status": "passed"
});
formatter.before({
  "duration": 47664500,
  "status": "passed"
});
formatter.before({
  "duration": 60649800,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Provider creates a new product",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;provider-creates-a-new-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 83,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "verify status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 496081000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 185557300,
  "status": "passed"
});
formatter.after({
  "duration": 47900,
  "status": "passed"
});
formatter.before({
  "duration": 700000,
  "status": "passed"
});
formatter.before({
  "duration": 69039100,
  "status": "passed"
});
formatter.before({
  "duration": 58327000,
  "status": "passed"
});
formatter.before({
  "duration": 72793800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 86,
      "value": "#########################################################################################################################################################"
    },
    {
      "line": 87,
      "value": "# from here on, verifying the response body whether  all the data which is been sent successfully created,"
    },
    {
      "line": 88,
      "value": "# as we don\u0027t have to rely only on status code."
    }
  ],
  "line": 90,
  "name": "verify that product has been created",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;verify-that-product-has-been-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 91,
  "name": "verify that new product is set with following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 92
    },
    {
      "cells": [
        "AutoTestPositive1",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 93
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.verifyThatNewProductIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4806300,
  "status": "passed"
});
formatter.after({
  "duration": 632400,
  "status": "passed"
});
formatter.before({
  "duration": 107700,
  "status": "passed"
});
formatter.before({
  "duration": 59054300,
  "status": "passed"
});
formatter.before({
  "duration": 48509000,
  "status": "passed"
});
formatter.before({
  "duration": 69297300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 96,
      "value": "#  Scenario: verify that productTypes has been created"
    },
    {
      "line": 97,
      "value": "#    Given verify that productTypes is set with following fields"
    },
    {
      "line": 98,
      "value": "#      | name    | id       |"
    },
    {
      "line": 99,
      "value": "#      | TestAPI | 5bpJ0olV |"
    }
  ],
  "line": 101,
  "name": "verify that ProductWorkingDates has been created",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;verify-that-productworkingdates-has-been-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 102,
  "name": "verify that ProductWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 103
    },
    {
      "cells": [
        "2021-05-27",
        "2022-12-31",
        "1234567sdfgh#$#%^%\u0026",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 104
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.verifyThatProductWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1313500,
  "status": "passed"
});
formatter.after({
  "duration": 55000,
  "status": "passed"
});
formatter.before({
  "duration": 69600,
  "status": "passed"
});
formatter.before({
  "duration": 47031400,
  "status": "passed"
});
formatter.before({
  "duration": 45714900,
  "status": "passed"
});
formatter.before({
  "duration": 54861400,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "verify that timeSlots has been created",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;verify-that-timeslots-has-been-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 107,
  "name": "verify that timeSlots is set with following fields",
  "rows": [
    {
      "cells": [
        "active",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "startTime",
        "usedQuantity"
      ],
      "line": 108
    },
    {
      "cells": [
        "false",
        "20:00:00",
        "Monday",
        "01:00:00",
        "67",
        "09:00:00",
        "0"
      ],
      "line": 109
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.verifyThatTimeSlotsIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1437600,
  "status": "passed"
});
formatter.after({
  "duration": 41000,
  "status": "passed"
});
formatter.before({
  "duration": 69000,
  "status": "passed"
});
formatter.before({
  "duration": 45236500,
  "status": "passed"
});
formatter.before({
  "duration": 60324100,
  "status": "passed"
});
formatter.before({
  "duration": 58252300,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "verify that productRegions have been created",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;verify-that-productregions-have-been-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 112,
  "name": "verify that productRegions is set with following fields",
  "rows": [
    {
      "cells": [
        "productId",
        "regionId",
        "regionName"
      ],
      "line": 113
    },
    {
      "cells": [
        "PYayPjpW",
        "5bpJKaVE",
        "Eilat"
      ],
      "line": 114
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.verifyThatProductRegionsIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2977200,
  "error_message": "java.lang.AssertionError: failure of regionName  expected:\u003cEilat\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat www.logisense.com.cucumber.steps.newProduct.CreateNewProductSteps.verifyThatProductRegionsIsSetWithFollowingFields(CreateNewProductSteps.java:437)\r\n\tat ✽.Given verify that productRegions is set with following fields(features/wizard/wizardNewProduct.feature:112)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 42800,
  "status": "passed"
});
formatter.before({
  "duration": 72100,
  "status": "passed"
});
formatter.before({
  "duration": 50104000,
  "status": "passed"
});
formatter.before({
  "duration": 43038100,
  "status": "passed"
});
formatter.before({
  "duration": 48168200,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "verify that productPrices have been created",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;verify-that-productprices-have-been-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 117,
  "name": "verify that productPrices is set with following field",
  "rows": [
    {
      "cells": [
        "productId",
        "channelId",
        "fromDate",
        "toDate",
        "title",
        "remarks",
        "officialPrice",
        "currencyId",
        "quantityPerDay",
        "autoConfirm",
        "pricePerPerson",
        "deletedAt"
      ],
      "line": 118
    },
    {
      "cells": [
        "yxl4wVaj",
        "5bpJKaVE",
        "2021-05-31T00:00:00",
        "2022-12-31T00:00:00",
        "API",
        "Test",
        "0",
        "5bpJKaVE",
        "123",
        "false",
        "ture",
        ""
      ],
      "line": 119
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.verifyThatProductPricesIsSetWithFollowingField(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1371900,
  "status": "passed"
});
formatter.after({
  "duration": 41800,
  "status": "passed"
});
formatter.before({
  "duration": 62200,
  "status": "passed"
});
formatter.before({
  "duration": 44572200,
  "status": "passed"
});
formatter.before({
  "duration": 45215300,
  "status": "passed"
});
formatter.before({
  "duration": 52407200,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "verify that productPriceTypes have been created",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;verify-that-productpricetypes-have-been-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 123,
  "name": "verify that productPriceTypes is set with following fields",
  "rows": [
    {
      "cells": [
        "productPriceId",
        "productCustomerTypeId",
        "amount",
        "currencyId",
        "currencySymbol",
        "isOfficial"
      ],
      "line": 124
    },
    {
      "cells": [
        "Belmyqln",
        "Q4aLVbOn",
        "57",
        "Belm3pnb",
        "₪",
        "true"
      ],
      "line": 125
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.verifyThatProductPriceTypesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1215300,
  "status": "passed"
});
formatter.after({
  "duration": 38700,
  "status": "passed"
});
formatter.before({
  "duration": 80700,
  "status": "passed"
});
formatter.before({
  "duration": 50853500,
  "status": "passed"
});
formatter.before({
  "duration": 46685600,
  "status": "passed"
});
formatter.before({
  "duration": 32482800,
  "status": "passed"
});
formatter.scenario({
  "line": 127,
  "name": "verify that productCustomerType has been created",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;verify-that-productcustomertype-has-been-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 128,
  "name": "verify that productCustomerType is set with following fields",
  "rows": [
    {
      "cells": [
        "productId",
        "name"
      ],
      "line": 129
    },
    {
      "cells": [
        "yxl4wVaj",
        "מבוגר"
      ],
      "line": 130
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.verifyThatProductCustomerTypeIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1111100,
  "status": "passed"
});
formatter.after({
  "duration": 34300,
  "status": "passed"
});
formatter.before({
  "duration": 61000,
  "status": "passed"
});
formatter.before({
  "duration": 37859300,
  "status": "passed"
});
formatter.before({
  "duration": 59712900,
  "status": "passed"
});
formatter.before({
  "duration": 46843700,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "verify that productCustomerTypes have been created",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;verify-that-productcustomertypes-have-been-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 133,
  "name": "verify that productCustomerTypes is set with following fields",
  "rows": [
    {
      "cells": [
        "name"
      ],
      "line": 134
    },
    {
      "cells": [
        "API"
      ],
      "line": 135
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.verifyThatProductCustomerTypesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 803700,
  "status": "passed"
});
formatter.after({
  "duration": 39500,
  "status": "passed"
});
formatter.before({
  "duration": 66200,
  "status": "passed"
});
formatter.before({
  "duration": 56954800,
  "status": "passed"
});
formatter.before({
  "duration": 43093200,
  "status": "passed"
});
formatter.before({
  "duration": 43370000,
  "status": "passed"
});
formatter.scenario({
  "line": 137,
  "name": "verify that city has been created",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;verify-that-city-has-been-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 138,
  "name": "verify that city is set with following fields",
  "rows": [
    {
      "cells": [
        "name",
        "regionId"
      ],
      "line": 139
    },
    {
      "cells": [
        "Israel",
        "Belm3pnb"
      ],
      "line": 140
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.verifyThatCityIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 863900,
  "status": "passed"
});
formatter.after({
  "duration": 29700,
  "status": "passed"
});
formatter.before({
  "duration": 77600,
  "status": "passed"
});
formatter.before({
  "duration": 48302700,
  "status": "passed"
});
formatter.before({
  "duration": 43734400,
  "status": "passed"
});
formatter.before({
  "duration": 44073900,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "verify that productIncludedTags have been created",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;verify-that-productincludedtags-have-been-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 143,
  "name": "verify that productIncludedTags is set with following fields",
  "rows": [
    {
      "cells": [
        "subTagId",
        "subTagName"
      ],
      "line": 144
    },
    {
      "cells": [
        "jLa3rjpz",
        "WiFi"
      ],
      "line": 145
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.verifyThatProductIncludedTagsIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4933700,
  "error_message": "java.lang.AssertionError: failure of subTagName  expected:\u003cWiFi\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat www.logisense.com.cucumber.steps.newProduct.CreateNewProductSteps.verifyThatProductIncludedTagsIsSetWithFollowingFields(CreateNewProductSteps.java:521)\r\n\tat ✽.Given verify that productIncludedTags is set with following fields(features/wizard/wizardNewProduct.feature:143)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 26600,
  "status": "passed"
});
formatter.before({
  "duration": 52900,
  "status": "passed"
});
formatter.before({
  "duration": 47653900,
  "status": "passed"
});
formatter.before({
  "duration": 79426700,
  "status": "passed"
});
formatter.before({
  "duration": 46891600,
  "status": "passed"
});
formatter.scenario({
  "line": 147,
  "name": "verify that productExcludedTags have been created",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;verify-that-productexcludedtags-have-been-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 148,
  "name": "verify that productExcludedTags is set with following fields",
  "rows": [
    {
      "cells": [
        "productId",
        "subTagId",
        "parentTagId",
        "subTagName"
      ],
      "line": 149
    },
    {
      "cells": [
        "52aAx3pZ",
        "4eO8gvlP",
        "qeaZepdE",
        "Food"
      ],
      "line": 150
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.verifyThatProductExcludedTagsIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2971200,
  "error_message": "java.lang.AssertionError: failure of subTagName  expected:\u003cFood\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat www.logisense.com.cucumber.steps.newProduct.CreateNewProductSteps.verifyThatProductExcludedTagsIsSetWithFollowingFields(CreateNewProductSteps.java:530)\r\n\tat ✽.Given verify that productExcludedTags is set with following fields(features/wizard/wizardNewProduct.feature:148)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 38800,
  "status": "passed"
});
formatter.before({
  "duration": 72900,
  "status": "passed"
});
formatter.before({
  "duration": 55532500,
  "status": "passed"
});
formatter.before({
  "duration": 44070200,
  "status": "passed"
});
formatter.before({
  "duration": 45788200,
  "status": "passed"
});
formatter.scenario({
  "line": 152,
  "name": "verify that productTags has been created",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;verify-that-producttags-has-been-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 153,
  "name": "verify that productTags is set with following fields",
  "rows": [
    {
      "cells": [
        "productId",
        "subTagId",
        "parentTagId",
        "subTagName"
      ],
      "line": 154
    },
    {
      "cells": [
        "52aAx3pZ",
        "qeaZMepd",
        "JnlY6Oz4",
        "Extreme"
      ],
      "line": 155
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.verifyThatProductTagsIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2880400,
  "error_message": "java.lang.AssertionError: failure of subTagName  expected:\u003cExtreme\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat www.logisense.com.cucumber.steps.newProduct.CreateNewProductSteps.verifyThatProductTagsIsSetWithFollowingFields(CreateNewProductSteps.java:538)\r\n\tat ✽.Given verify that productTags is set with following fields(features/wizard/wizardNewProduct.feature:153)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 30000,
  "status": "passed"
});
formatter.before({
  "duration": 52400,
  "status": "passed"
});
formatter.before({
  "duration": 69625900,
  "status": "passed"
});
formatter.before({
  "duration": 55194100,
  "status": "passed"
});
formatter.before({
  "duration": 77487500,
  "status": "passed"
});
formatter.scenario({
  "line": 157,
  "name": "verify that productVideos have been created",
  "description": "",
  "id": "creating-a-new-product,-and-sending-a-new-request-body-with-the-following-scenarios;verify-that-productvideos-have-been-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 158,
  "name": "verify that productVideos is set with following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 159
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 160
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.verifyThatProductVideosIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 905400,
  "status": "passed"
});
formatter.after({
  "duration": 40100,
  "status": "passed"
});
formatter.uri("features/wizard/wizardNewProductNegative.feature");
formatter.feature({
  "line": 2,
  "name": "Creating new Product with Negative Scenarios",
  "description": "",
  "id": "creating-new-product-with-negative-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@providerCreatesProductWithOutSomeFields"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 68900,
  "status": "passed"
});
formatter.before({
  "duration": 114900000,
  "status": "passed"
});
formatter.before({
  "duration": 42452000,
  "status": "passed"
});
formatter.before({
  "duration": 43241200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Provider creates a new product with the same data",
  "description": "",
  "id": "creating-new-product-with-negative-scenarios;provider-creates-a-new-product-with-the-same-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@creatingProductWithTheSameDataOver"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 188400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 837700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 111260300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 22502000,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductNegative.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 34100,
  "status": "passed"
});
formatter.before({
  "duration": 77600,
  "status": "passed"
});
formatter.before({
  "duration": 55658300,
  "status": "passed"
});
formatter.before({
  "duration": 78803200,
  "status": "passed"
});
formatter.before({
  "duration": 51073600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Provider creates a new product with missing name field",
  "description": "",
  "id": "creating-new-product-with-negative-scenarios;provider-creates-a-new-product-with-missing-name-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@creatingProductWithMissingNameField"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 20
    },
    {
      "cells": [
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 21
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 23
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 24
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 187800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6544600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 321338700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 876300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 2083040300,
  "status": "passed"
});
formatter.after({
  "duration": 92800,
  "status": "passed"
});
formatter.before({
  "duration": 61700,
  "status": "passed"
});
formatter.before({
  "duration": 81705300,
  "status": "passed"
});
formatter.before({
  "duration": 51145800,
  "status": "passed"
});
formatter.before({
  "duration": 45098000,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Provider creates a new product with empty name field",
  "description": "",
  "id": "creating-new-product-with-negative-scenarios;provider-creates-a-new-product-with-empty-name-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@creatingProductWithEmptyNameField"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 33
    },
    {
      "cells": [
        "",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 34
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 36
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 37
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 179800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 916800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 97420300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 8252800,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardNewProductNegative.feature:39)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 39300,
  "status": "passed"
});
formatter.before({
  "duration": 80300,
  "status": "passed"
});
formatter.before({
  "duration": 41225600,
  "status": "passed"
});
formatter.before({
  "duration": 46959900,
  "status": "passed"
});
formatter.before({
  "duration": 50749700,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Provider creates a new product with missing shortDescription field",
  "description": "",
  "id": "creating-new-product-with-negative-scenarios;provider-creates-a-new-product-with-missing-shortdescription-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@creatingProductWithMissingShortDescriptionField"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 46
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 47
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 49
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 50
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 152100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 642700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 124687800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 6322500,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductNegative.feature:52)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 69900,
  "status": "passed"
});
formatter.before({
  "duration": 54600,
  "status": "passed"
});
formatter.before({
  "duration": 112930900,
  "status": "passed"
});
formatter.before({
  "duration": 62182300,
  "status": "passed"
});
formatter.before({
  "duration": 49757500,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Provider creates a new product with missing fullDescription field",
  "description": "",
  "id": "creating-new-product-with-negative-scenarios;provider-creates-a-new-product-with-missing-fulldescription-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@creatingProductWithMissingFullDescriptionField"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 59
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 60
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 62
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 63
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 631900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 763100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 81868200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 10242100,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductNegative.feature:65)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 33000,
  "status": "passed"
});
formatter.before({
  "duration": 63700,
  "status": "passed"
});
formatter.before({
  "duration": 50886200,
  "status": "passed"
});
formatter.before({
  "duration": 54608500,
  "status": "passed"
});
formatter.before({
  "duration": 79091600,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Provider creates a new product with empty shortDescription field",
  "description": "",
  "id": "creating-new-product-with-negative-scenarios;provider-creates-a-new-product-with-empty-shortdescription-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@creatingProductWithEmptyShortDescription"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 71
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 72
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 74
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 75
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 146200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 730100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 135764200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 9004100,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductNegative.feature:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 32900,
  "status": "passed"
});
formatter.before({
  "duration": 49900,
  "status": "passed"
});
formatter.before({
  "duration": 63097300,
  "status": "passed"
});
formatter.before({
  "duration": 78766900,
  "status": "passed"
});
formatter.before({
  "duration": 54526400,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Provider creates a new product with empty fullDescription field",
  "description": "",
  "id": "creating-new-product-with-negative-scenarios;provider-creates-a-new-product-with-empty-fulldescription-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 80,
      "name": "@creatingProductWithEmptyFullDescription"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 83
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 84
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 86
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 87
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 161100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4943600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 121762100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 4701400,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductNegative.feature:89)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 34800,
  "status": "passed"
});
formatter.before({
  "duration": 46300,
  "status": "passed"
});
formatter.before({
  "duration": 56031300,
  "status": "passed"
});
formatter.before({
  "duration": 44074100,
  "status": "passed"
});
formatter.before({
  "duration": 46456700,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "Provider creates a new product with empty address field",
  "description": "",
  "id": "creating-new-product-with-negative-scenarios;provider-creates-a-new-product-with-empty-address-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 92,
      "name": "@creatingProductWithEmptyAddress"
    }
  ]
});
formatter.step({
  "line": 94,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 95
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        ""
      ],
      "line": 96
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 98
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 99
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 183200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 416200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 77697200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 7549400,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductNegative.feature:101)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 28300,
  "status": "passed"
});
formatter.before({
  "duration": 59400,
  "status": "passed"
});
formatter.before({
  "duration": 44466100,
  "status": "passed"
});
formatter.before({
  "duration": 52287900,
  "status": "passed"
});
formatter.before({
  "duration": 40506400,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "Provider creates a new product with missing address field",
  "description": "",
  "id": "creating-new-product-with-negative-scenarios;provider-creates-a-new-product-with-missing-address-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 104,
      "name": "@creatingProductWithMissingAddress"
    }
  ]
});
formatter.step({
  "line": 106,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor"
      ],
      "line": 107
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue"
      ],
      "line": 108
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 110
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 111
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 113,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 351800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 518200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 98587900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 5856200,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductNegative.feature:113)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 34400,
  "status": "passed"
});
formatter.uri("features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature");
formatter.feature({
  "line": 2,
  "name": "productTypes and productWorkingDates are being tested with negative scenarios",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@providerCreatesProductTypesWithOutSomeFields"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 50200,
  "status": "passed"
});
formatter.before({
  "duration": 95035100,
  "status": "passed"
});
formatter.before({
  "duration": 108983300,
  "status": "passed"
});
formatter.before({
  "duration": 49370700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 279100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 493300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "# have to do some changes in strictHours   \u003c\u003c\u003c\u003d\u003d\u003d\u003d\u003d"
    },
    {
      "line": 14,
      "value": "#  @productWorkingDatesWithNullToDateField"
    },
    {
      "line": 15,
      "value": "#  Scenario: provider enters a data in ProductWorkingDates field"
    },
    {
      "line": 16,
      "value": "#    Given productWorkingDates is set with following fields"
    },
    {
      "line": 17,
      "value": "#      | fromDate   | toDate | name                | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |"
    },
    {
      "line": 18,
      "value": "#      | 2022-12-31 | null   | 1234567sdfgh#$#%^%\u0026 | false       | null      | 0                      | 0         |"
    },
    {
      "line": 19,
      "value": "#    Given verify that ProductWorkingDates is set with following fields"
    },
    {
      "line": 20,
      "value": "#      | fromDate   | toDate     | name                | strictHours | deletedAt | maxUsedTicketsQuantity | errorCode |"
    },
    {
      "line": 21,
      "value": "#      | 2021-05-27 | 2022-12-31 | 1234567sdfgh#$#%^%\u0026 | true        | null      | 0                      | 0         |"
    },
    {
      "line": 22,
      "value": "#    Given provider creates a new product"
    },
    {
      "line": 23,
      "value": "#    Then verify status code is 400"
    },
    {
      "line": 24,
      "value": "#    Then verify the title is \"One or more validation errors occurred.\""
    }
  ],
  "line": 28,
  "name": "provider enters a data in productTypes with missing name field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-producttypes-with-missing-name-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@productTypesWithMissingNameField"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "productTypes is set with following fields",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 30
    },
    {
      "cells": [
        "5bpJ0olV"
      ],
      "line": 31
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productTypesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 130100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 79793800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 3392100,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 34900,
  "status": "passed"
});
formatter.before({
  "duration": 68400,
  "status": "passed"
});
formatter.before({
  "duration": 51294700,
  "status": "passed"
});
formatter.before({
  "duration": 52453800,
  "status": "passed"
});
formatter.before({
  "duration": 55168600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 170600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 476100,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "provider enters a data in ProductWorkingDates with missing fromDate field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-productworkingdates-with-missing-fromdate-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@productWorkingDatesWithMissingFromDateField"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 39
    },
    {
      "cells": [
        "2022-12-31",
        "1234567sdfgh#$#%^%\u0026",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 40
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 143500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 66575800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 1017600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 25925700,
  "status": "passed"
});
formatter.after({
  "duration": 31500,
  "status": "passed"
});
formatter.before({
  "duration": 65100,
  "status": "passed"
});
formatter.before({
  "duration": 46505400,
  "status": "passed"
});
formatter.before({
  "duration": 40212900,
  "status": "passed"
});
formatter.before({
  "duration": 63789700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 196800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 506100,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "provider enters a data in ProductWorkingDates with empty fromDate field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-productworkingdates-with-empty-fromdate-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@productWorkingDatesWithEmptyFromDateField"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 48
    },
    {
      "cells": [
        "",
        "2022-12-31",
        "1234567sdfgh#$#%^%\u0026",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 49
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 182900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 70318700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 1401300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 26617800,
  "status": "passed"
});
formatter.after({
  "duration": 33200,
  "status": "passed"
});
formatter.before({
  "duration": 53800,
  "status": "passed"
});
formatter.before({
  "duration": 45952300,
  "status": "passed"
});
formatter.before({
  "duration": 69224300,
  "status": "passed"
});
formatter.before({
  "duration": 54845100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 151300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 362900,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "provider enters a data in ProductWorkingDates with null fromDate field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-productworkingdates-with-null-fromdate-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@productWorkingDatesWithNullFromDateField"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 57
    },
    {
      "cells": [
        "null",
        "2022-12-31",
        "1234567sdfgh#$#%^%\u0026",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 58
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 120300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 54678100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 792300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 25185000,
  "status": "passed"
});
formatter.after({
  "duration": 33800,
  "status": "passed"
});
formatter.before({
  "duration": 71200,
  "status": "passed"
});
formatter.before({
  "duration": 50631900,
  "status": "passed"
});
formatter.before({
  "duration": 50835400,
  "status": "passed"
});
formatter.before({
  "duration": 45920300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 141400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 614500,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "provider enters a data in ProductWorkingDates with empty toDate field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-productworkingdates-with-empty-todate-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@productWorkingDatesWithEmptyToDateField"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 66
    },
    {
      "cells": [
        "2022-12-31",
        "",
        "1234567sdfgh#$#%^%\u0026",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 67
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 156200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 55836200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 753200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 24513100,
  "status": "passed"
});
formatter.after({
  "duration": 37600,
  "status": "passed"
});
formatter.before({
  "duration": 73700,
  "status": "passed"
});
formatter.before({
  "duration": 45277900,
  "status": "passed"
});
formatter.before({
  "duration": 71667900,
  "status": "passed"
});
formatter.before({
  "duration": 46420900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 610300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1221000,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "provider enters a data in ProductWorkingDates with missing toDate field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-productworkingdates-with-missing-todate-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 72,
      "name": "@productWorkingDatesWithMissingToDateField"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 75
    },
    {
      "cells": [
        "2022-12-31",
        "1234567sdfgh#$#%^%\u0026",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 76
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 135800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 60358600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 3129000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 18622600,
  "status": "passed"
});
formatter.after({
  "duration": 25700,
  "status": "passed"
});
formatter.before({
  "duration": 44100,
  "status": "passed"
});
formatter.before({
  "duration": 47846500,
  "status": "passed"
});
formatter.before({
  "duration": 44209200,
  "status": "passed"
});
formatter.before({
  "duration": 39359300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 217200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 453800,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "provider enters a data in ProductWorkingDates with null toDate field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-productworkingdates-with-null-todate-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 81,
      "name": "@productWorkingDatesWithNullToDateField"
    }
  ]
});
formatter.step({
  "line": 83,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 84
    },
    {
      "cells": [
        "2022-12-31",
        "null",
        "1234567sdfgh#$#%^%\u0026",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 85
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 140800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 55093800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 1033400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 24743500,
  "status": "passed"
});
formatter.after({
  "duration": 32100,
  "status": "passed"
});
formatter.before({
  "duration": 50200,
  "status": "passed"
});
formatter.before({
  "duration": 57210900,
  "status": "passed"
});
formatter.before({
  "duration": 91122700,
  "status": "passed"
});
formatter.before({
  "duration": 47496100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 134000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 338600,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "provider enters a data in ProductWorkingDates with empty name field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-productworkingdates-with-empty-name-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 90,
      "name": "@productWorkingDatesWithEmptyNameField"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 93
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 94
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 137800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 109062800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 4371300,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature:96)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 64100,
  "status": "passed"
});
formatter.before({
  "duration": 214800,
  "status": "passed"
});
formatter.before({
  "duration": 67292500,
  "status": "passed"
});
formatter.before({
  "duration": 56956000,
  "status": "passed"
});
formatter.before({
  "duration": 39760800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 153400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 391300,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "provider enters a data in ProductWorkingDates with missing name field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-productworkingdates-with-missing-name-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 99,
      "name": "@productWorkingDatesWithMissingNameField"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 102
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 103
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 130900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 86465500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 707500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 26274100,
  "status": "passed"
});
formatter.after({
  "duration": 37800,
  "status": "passed"
});
formatter.before({
  "duration": 42200,
  "status": "passed"
});
formatter.before({
  "duration": 46144700,
  "status": "passed"
});
formatter.before({
  "duration": 74274600,
  "status": "passed"
});
formatter.before({
  "duration": 44834200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 169100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 519200,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "provider enters a data in timeSlots with empty startTime field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-empty-starttime-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 108,
      "name": "@timeSlotsWithEmptyStartTimeField"
    }
  ]
});
formatter.step({
  "line": 110,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 111
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 112
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 113,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 114
    },
    {
      "cells": [
        "false",
        "",
        "20:00:00",
        "Monday",
        "01:00:00",
        "32",
        "0"
      ],
      "line": 115
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 117300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 115500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 48053000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 876900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 21665700,
  "status": "passed"
});
formatter.after({
  "duration": 36700,
  "status": "passed"
});
formatter.before({
  "duration": 68300,
  "status": "passed"
});
formatter.before({
  "duration": 42304200,
  "status": "passed"
});
formatter.before({
  "duration": 43577300,
  "status": "passed"
});
formatter.before({
  "duration": 63043000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 157800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 343000,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "provider enters a data in timeSlots with null startTime field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-null-starttime-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 120,
      "name": "@timeSlotsWithNullStartTimeField"
    }
  ]
});
formatter.step({
  "line": 122,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 123
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 124
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 126
    },
    {
      "cells": [
        "false",
        "null",
        "20:00:00",
        "Monday",
        "01:00:00",
        "32",
        "0"
      ],
      "line": 127
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 129,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 641700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 193900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 167575500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 1902000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 21592600,
  "status": "passed"
});
formatter.after({
  "duration": 35900,
  "status": "passed"
});
formatter.before({
  "duration": 94900,
  "status": "passed"
});
formatter.before({
  "duration": 78719000,
  "status": "passed"
});
formatter.before({
  "duration": 35913000,
  "status": "passed"
});
formatter.before({
  "duration": 36557400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 192500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 426100,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "provider enters a data in timeSlots with incorrect timing in startTime field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-incorrect-timing-in-starttime-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 133,
      "name": "@timeSlotsWithIncorrectTimingInStartTimeField"
    }
  ]
});
formatter.step({
  "line": 135,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 136
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 137
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 138,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 139
    },
    {
      "cells": [
        "false",
        "124",
        "20:00:00",
        "Monday",
        "01:00:00",
        "32",
        "0"
      ],
      "line": 140
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 141,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 132400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 161500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 67791400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 567300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 20184900,
  "status": "passed"
});
formatter.after({
  "duration": 45300,
  "status": "passed"
});
formatter.before({
  "duration": 50300,
  "status": "passed"
});
formatter.before({
  "duration": 51502000,
  "status": "passed"
});
formatter.before({
  "duration": 53450500,
  "status": "passed"
});
formatter.before({
  "duration": 46156600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 231800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 264100,
  "status": "passed"
});
formatter.scenario({
  "line": 146,
  "name": "provider enters a data in timeSlots with special chars in startTime field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-special-chars-in-starttime-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 145,
      "name": "@timeSlotsWithSpecialCharsInStartTimeField"
    }
  ]
});
formatter.step({
  "line": 147,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 148
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 149
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 150,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 151
    },
    {
      "cells": [
        "false",
        "@#$%^",
        "20:00:00",
        "Monday",
        "01:00:00",
        "32",
        "0"
      ],
      "line": 152
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 153,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 154,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 155900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 212800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 39635100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 572600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 20644300,
  "status": "passed"
});
formatter.after({
  "duration": 26800,
  "status": "passed"
});
formatter.before({
  "duration": 29000,
  "status": "passed"
});
formatter.before({
  "duration": 35925000,
  "status": "passed"
});
formatter.before({
  "duration": 38310600,
  "status": "passed"
});
formatter.before({
  "duration": 42409900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 154900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 452600,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "provider enters a data in timeSlots with missing startTime field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-missing-starttime-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 157,
      "name": "@timeSlotsWithMissingStartTimeField"
    }
  ]
});
formatter.step({
  "line": 159,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 160
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 161
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 162,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 163
    },
    {
      "cells": [
        "false",
        "20:00:00",
        "Monday",
        "01:00:00",
        "32",
        "0"
      ],
      "line": 164
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 165,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 166,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 146300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 131700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 135557100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 5495900,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature:166)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 35400,
  "status": "passed"
});
formatter.before({
  "duration": 101100,
  "status": "passed"
});
formatter.before({
  "duration": 92046800,
  "status": "passed"
});
formatter.before({
  "duration": 65652700,
  "status": "passed"
});
formatter.before({
  "duration": 68789200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 146200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 418200,
  "status": "passed"
});
formatter.scenario({
  "line": 171,
  "name": "provider enters a data in timeSlots with empty endTime field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-empty-endtime-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 170,
      "name": "@timeSlotsWithEmptyEndTimeField"
    }
  ]
});
formatter.step({
  "line": 172,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 173
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 174
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 176
    },
    {
      "cells": [
        "false",
        "09:00:00",
        "",
        "Monday",
        "01:00:00",
        "32",
        "0"
      ],
      "line": 177
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 178,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 179,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 160700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 150100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 45939300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 970100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 19745700,
  "status": "passed"
});
formatter.after({
  "duration": 32300,
  "status": "passed"
});
formatter.before({
  "duration": 54600,
  "status": "passed"
});
formatter.before({
  "duration": 46351200,
  "status": "passed"
});
formatter.before({
  "duration": 52059600,
  "status": "passed"
});
formatter.before({
  "duration": 47820200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 192100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 631300,
  "status": "passed"
});
formatter.scenario({
  "line": 183,
  "name": "provider enters a data in timeSlots with null endTime field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-null-endtime-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 182,
      "name": "@timeSlotsWithNullEndTimeField"
    }
  ]
});
formatter.step({
  "line": 184,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 185
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 186
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 187,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 188
    },
    {
      "cells": [
        "false",
        "09:00:00",
        "null",
        "Monday",
        "01:00:00",
        "32",
        "0"
      ],
      "line": 189
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 190,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 191,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 192,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 960100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 284500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 42886800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 1022800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 20645700,
  "status": "passed"
});
formatter.after({
  "duration": 34300,
  "status": "passed"
});
formatter.before({
  "duration": 59000,
  "status": "passed"
});
formatter.before({
  "duration": 39226000,
  "status": "passed"
});
formatter.before({
  "duration": 54757300,
  "status": "passed"
});
formatter.before({
  "duration": 37421100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 147700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 320000,
  "status": "passed"
});
formatter.scenario({
  "line": 196,
  "name": "provider enters a data in timeSlots with incorrect timing in endTime field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-incorrect-timing-in-endtime-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 195,
      "name": "@timeSlotsWithIncorrectTimingInEndTimeField"
    }
  ]
});
formatter.step({
  "line": 197,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 198
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 199
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 200,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 201
    },
    {
      "cells": [
        "false",
        "09:00:00",
        "23escf",
        "Monday",
        "01:00:00",
        "32",
        "0"
      ],
      "line": 202
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 203,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 204,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 205,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 129500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 118100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 42274000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 723000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 19406900,
  "status": "passed"
});
formatter.after({
  "duration": 25000,
  "status": "passed"
});
formatter.before({
  "duration": 51600,
  "status": "passed"
});
formatter.before({
  "duration": 43269000,
  "status": "passed"
});
formatter.before({
  "duration": 42437000,
  "status": "passed"
});
formatter.before({
  "duration": 53306900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 178200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 439600,
  "status": "passed"
});
formatter.scenario({
  "line": 208,
  "name": "provider enters a data in timeSlots with special char in endTime field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-special-char-in-endtime-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 207,
      "name": "@timeSlotsWithSpecialCharsInEndTimeField"
    }
  ]
});
formatter.step({
  "line": 209,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 210
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 211
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 212,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 213
    },
    {
      "cells": [
        "false",
        "09:00:00",
        "@#$%^",
        "Monday",
        "01:00:00",
        "32",
        "0"
      ],
      "line": 214
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 215,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 216,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 217,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 106000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 112300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 68017900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 884900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 24214600,
  "status": "passed"
});
formatter.after({
  "duration": 26300,
  "status": "passed"
});
formatter.before({
  "duration": 41400,
  "status": "passed"
});
formatter.before({
  "duration": 69569000,
  "status": "passed"
});
formatter.before({
  "duration": 76388200,
  "status": "passed"
});
formatter.before({
  "duration": 46263700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 119200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 331000,
  "status": "passed"
});
formatter.scenario({
  "line": 221,
  "name": "provider enters a data in timeSlots with missing endTime field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-missing-endtime-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 220,
      "name": "@timeSlotsWithMissingEndTimeField"
    }
  ]
});
formatter.step({
  "line": 222,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 223
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 224
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 225,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 226
    },
    {
      "cells": [
        "false",
        "09:00:00",
        "Monday",
        "01:00:00",
        "32",
        "0"
      ],
      "line": 227
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 228,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 229,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 230,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 138400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 132200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 88458400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 3687100,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature:229)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 54400,
  "status": "passed"
});
formatter.before({
  "duration": 61400,
  "status": "passed"
});
formatter.before({
  "duration": 41073200,
  "status": "passed"
});
formatter.before({
  "duration": 48044000,
  "status": "passed"
});
formatter.before({
  "duration": 54946200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 206900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 361800,
  "status": "passed"
});
formatter.scenario({
  "line": 233,
  "name": "provider enters a data in timeSlots with special char in dayOfWeek field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-special-char-in-dayofweek-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 232,
      "name": "@timeSlotsWithSpecialCharsInDayOfWeekField"
    }
  ]
});
formatter.step({
  "line": 234,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 235
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 236
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 237,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 238
    },
    {
      "cells": [
        "false",
        "09:00:00",
        "20:00:00",
        "!@#$",
        "01:00:00",
        "32",
        "0"
      ],
      "line": 239
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 240,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 241,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 242,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 130900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 120700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 55654500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 1418900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 21028600,
  "status": "passed"
});
formatter.after({
  "duration": 36200,
  "status": "passed"
});
formatter.before({
  "duration": 50900,
  "status": "passed"
});
formatter.before({
  "duration": 111744800,
  "status": "passed"
});
formatter.before({
  "duration": 37779000,
  "status": "passed"
});
formatter.before({
  "duration": 38971600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 149800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 331500,
  "status": "passed"
});
formatter.scenario({
  "line": 245,
  "name": "provider enters a data in timeSlots with null  dayOfWeek field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-null--dayofweek-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 244,
      "name": "@timeSlotsWithNullDayOfWeekField"
    }
  ]
});
formatter.step({
  "line": 246,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 247
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 248
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 249,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 250
    },
    {
      "cells": [
        "false",
        "09:00:00",
        "20:00:00",
        "null",
        "01:00:00",
        "32",
        "0"
      ],
      "line": 251
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 252,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 253,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 254,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 139700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 156200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 74571700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 803300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 26957000,
  "status": "passed"
});
formatter.after({
  "duration": 75500,
  "status": "passed"
});
formatter.before({
  "duration": 61200,
  "status": "passed"
});
formatter.before({
  "duration": 55249100,
  "status": "passed"
});
formatter.before({
  "duration": 45153300,
  "status": "passed"
});
formatter.before({
  "duration": 64215200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 196200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 615700,
  "status": "passed"
});
formatter.scenario({
  "line": 257,
  "name": "provider enters a data in timeSlots with empty  dayOfWeek field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-empty--dayofweek-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 256,
      "name": "@timeSlotsWithEmptyDayOfWeekField"
    }
  ]
});
formatter.step({
  "line": 258,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 259
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 260
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 261,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 262
    },
    {
      "cells": [
        "false",
        "09:00:00",
        "20:00:00",
        "",
        "01:00:00",
        "32",
        "0"
      ],
      "line": 263
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 264,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 265,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 266,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 125500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 110500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 80306100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 4844600,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature:265)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 34900,
  "status": "passed"
});
formatter.before({
  "duration": 51400,
  "status": "passed"
});
formatter.before({
  "duration": 68272300,
  "status": "passed"
});
formatter.before({
  "duration": 37915300,
  "status": "passed"
});
formatter.before({
  "duration": 41420800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 150000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 319800,
  "status": "passed"
});
formatter.scenario({
  "line": 270,
  "name": "provider enters a data in timeSlots with missing  dayOfWeek field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-missing--dayofweek-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 269,
      "name": "@timeSlotsWithMissingDayOfWeekField"
    }
  ]
});
formatter.step({
  "line": 271,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 272
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 273
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 274,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 275
    },
    {
      "cells": [
        "false",
        "09:00:00",
        "20:00:00",
        "01:00:00",
        "32",
        "0"
      ],
      "line": 276
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 277,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 278,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 279,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 186700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 195100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 79883300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 4362900,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature:278)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 39600,
  "status": "passed"
});
formatter.before({
  "duration": 35400,
  "status": "passed"
});
formatter.before({
  "duration": 42821400,
  "status": "passed"
});
formatter.before({
  "duration": 38937000,
  "status": "passed"
});
formatter.before({
  "duration": 45587300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 166500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 467600,
  "status": "passed"
});
formatter.scenario({
  "line": 283,
  "name": "provider enters a data in timeSlots with empty  duration field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-empty--duration-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 282,
      "name": "@timeSlotsWithEmptyDurationField"
    }
  ]
});
formatter.step({
  "line": 284,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 285
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 286
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 287,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 288
    },
    {
      "cells": [
        "false",
        "09:00:00",
        "20:00:00",
        "Monday",
        "",
        "32",
        "0"
      ],
      "line": 289
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 290,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 291,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 292,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 137300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 567200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 41157200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 1345600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 19632100,
  "status": "passed"
});
formatter.after({
  "duration": 31100,
  "status": "passed"
});
formatter.before({
  "duration": 66800,
  "status": "passed"
});
formatter.before({
  "duration": 44680900,
  "status": "passed"
});
formatter.before({
  "duration": 58281400,
  "status": "passed"
});
formatter.before({
  "duration": 42608600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 132100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 326600,
  "status": "passed"
});
formatter.scenario({
  "line": 295,
  "name": "provider enters a data in timeSlots with incorrect timing  duration field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-incorrect-timing--duration-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 294,
      "name": "@timeSlotsWithIncorrectTimingDurationField"
    }
  ]
});
formatter.step({
  "line": 296,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 297
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 298
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 299,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 300
    },
    {
      "cells": [
        "false",
        "09:00:00",
        "20:00:00",
        "Monday",
        "fsdghhjb",
        "32",
        "0"
      ],
      "line": 301
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 302,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 303,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 304,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 106600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 115900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 52810100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 920400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 22708800,
  "status": "passed"
});
formatter.after({
  "duration": 30500,
  "status": "passed"
});
formatter.before({
  "duration": 31500,
  "status": "passed"
});
formatter.before({
  "duration": 39126900,
  "status": "passed"
});
formatter.before({
  "duration": 39703700,
  "status": "passed"
});
formatter.before({
  "duration": 58795700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 207100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 389500,
  "status": "passed"
});
formatter.scenario({
  "line": 308,
  "name": "provider enters a data in timeSlots with special char  duration field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-special-char--duration-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 307,
      "name": "@timeSlotsWithSpecialCharDurationField"
    }
  ]
});
formatter.step({
  "line": 309,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 310
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 311
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 312,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "duration",
        "quantity",
        "usedQuantity"
      ],
      "line": 313
    },
    {
      "cells": [
        "false",
        "09:00:00",
        "20:00:00",
        "Monday",
        "!@#$",
        "32",
        "0"
      ],
      "line": 314
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 315,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 316,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 317,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 133200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 116100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 52004000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 726900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 17564300,
  "status": "passed"
});
formatter.after({
  "duration": 29700,
  "status": "passed"
});
formatter.before({
  "duration": 31700,
  "status": "passed"
});
formatter.before({
  "duration": 42238400,
  "status": "passed"
});
formatter.before({
  "duration": 66297500,
  "status": "passed"
});
formatter.before({
  "duration": 65935700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 7
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 149200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 321500,
  "status": "passed"
});
formatter.scenario({
  "line": 320,
  "name": "provider enters a data in timeSlots with missing  duration field",
  "description": "",
  "id": "producttypes-and-productworkingdates-are-being-tested-with-negative-scenarios;provider-enters-a-data-in-timeslots-with-missing--duration-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 319,
      "name": "@timeSlotsWithMissingDurationField"
    }
  ]
});
formatter.step({
  "line": 321,
  "name": "productWorkingDates is set with following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "name",
        "strictHours",
        "deletedAt",
        "maxUsedTicketsQuantity",
        "errorCode"
      ],
      "line": 322
    },
    {
      "cells": [
        "2022-12-31",
        "2022-12-31",
        "1234",
        "false",
        "null",
        "0",
        "0"
      ],
      "line": 323
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 324,
  "name": "timeSlots is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "startTime",
        "endTime",
        "dayOfWeek",
        "quantity",
        "usedQuantity"
      ],
      "line": 325
    },
    {
      "cells": [
        "false",
        "09:00:00",
        "20:00:00",
        "Monday",
        "32",
        "0"
      ],
      "line": 326
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 327,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 328,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 329,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productWorkingDatesIsSetWithFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 109200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 105800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 109886400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 3005200,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature:328)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 43400,
  "status": "passed"
});
formatter.uri("features/wizard/wizardProductNameNegative.feature");
formatter.feature({
  "line": 2,
  "name": "name, shortDescription, fullDescription, are being tested within the given range of characters",
  "description": "",
  "id": "name,-shortdescription,-fulldescription,-are-being-tested-within-the-given-range-of-characters",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@negative"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 46500,
  "status": "passed"
});
formatter.before({
  "duration": 34605800,
  "status": "passed"
});
formatter.before({
  "duration": 40508100,
  "status": "passed"
});
formatter.before({
  "duration": 45210900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "provider enters in name field more than 30 char",
  "description": "",
  "id": "name,-shortdescription,-fulldescription,-are-being-tested-within-the-given-range-of-characters;provider-enters-in-name-field-more-than-30-char",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@nameNegative"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "product name is set with \"a\" 40 times",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 8
    },
    {
      "cells": [
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 9
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "product video is created with bellow given path",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 11
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "provider sends a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 26
    },
    {
      "val": "40",
      "offset": 29
    }
  ],
  "location": "WizardProductNegativeSteps.product_name_is_set_with_times(String,int)"
});
formatter.result({
  "duration": 236900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 139500,
  "status": "passed"
});
formatter.match({
  "location": "WizardProductNegativeSteps.productVideoIsCreatedWithBellowGivenPath(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 356000,
  "status": "passed"
});
formatter.match({
  "location": "WizardProductNegativeSteps.provider_sends_a_new_product()"
});
formatter.result({
  "duration": 86553100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 594700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 20215600,
  "status": "passed"
});
formatter.after({
  "duration": 39200,
  "status": "passed"
});
formatter.before({
  "duration": 44400,
  "status": "passed"
});
formatter.before({
  "duration": 38631500,
  "status": "passed"
});
formatter.before({
  "duration": 67362600,
  "status": "passed"
});
formatter.before({
  "duration": 44091300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "provider enters in shortDescription field more than 60 char",
  "description": "",
  "id": "name,-shortdescription,-fulldescription,-are-being-tested-within-the-given-range-of-characters;provider-enters-in-shortdescription-field-more-than-60-char",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@shortDescriptionNegative"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "product shortDescription is set with \"a\" 100 times",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 21
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 22
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "product video is created with bellow given path",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 24
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 25
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "provider sends a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 38
    },
    {
      "val": "100",
      "offset": 41
    }
  ],
  "location": "WizardProductNegativeSteps.product_shortDescription_is_set_with_times(String,int)"
});
formatter.result({
  "duration": 241200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 156900,
  "status": "passed"
});
formatter.match({
  "location": "WizardProductNegativeSteps.productVideoIsCreatedWithBellowGivenPath(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 318800,
  "status": "passed"
});
formatter.match({
  "location": "WizardProductNegativeSteps.provider_sends_a_new_product()"
});
formatter.result({
  "duration": 83870400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 918700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 19029500,
  "status": "passed"
});
formatter.after({
  "duration": 31500,
  "status": "passed"
});
formatter.before({
  "duration": 49900,
  "status": "passed"
});
formatter.before({
  "duration": 48542800,
  "status": "passed"
});
formatter.before({
  "duration": 43311300,
  "status": "passed"
});
formatter.before({
  "duration": 46090400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "provider enters in fullDescription field more than 900 char",
  "description": "",
  "id": "name,-shortdescription,-fulldescription,-are-being-tested-within-the-given-range-of-characters;provider-enters-in-fulldescription-field-more-than-900-char",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@fullDescriptionNegative"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "product fullDescription is set with \"a\" 1000 times",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 34
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 35
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "product video is created with bellow given path",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 37
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 38
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "provider sends a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 37
    },
    {
      "val": "1000",
      "offset": 40
    }
  ],
  "location": "WizardProductNegativeSteps.product_fullDescription_is_set_with_times(String,int)"
});
formatter.result({
  "duration": 1212300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 153100,
  "status": "passed"
});
formatter.match({
  "location": "WizardProductNegativeSteps.productVideoIsCreatedWithBellowGivenPath(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 371900,
  "status": "passed"
});
formatter.match({
  "location": "WizardProductNegativeSteps.provider_sends_a_new_product()"
});
formatter.result({
  "duration": 63822900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 787500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 18572800,
  "status": "passed"
});
formatter.after({
  "duration": 30800,
  "status": "passed"
});
formatter.uri("features/wizard/wizardProductPricesNegative.feature");
formatter.feature({
  "line": 2,
  "name": "productPrices is being tested with negative scenarios",
  "description": "",
  "id": "productprices-is-being-tested-with-negative-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@productPriceNegativeTesting"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 35000,
  "status": "passed"
});
formatter.before({
  "duration": 41724800,
  "status": "passed"
});
formatter.before({
  "duration": 72303000,
  "status": "passed"
});
formatter.before({
  "duration": 41549300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 6
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 9
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 261900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 287300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "provider enters a data in productPrices with empty  fromDate field",
  "description": "",
  "id": "productprices-is-being-tested-with-negative-scenarios;provider-enters-a-data-in-productprices-with-empty--fromdate-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@productPricesWithEmptyFromDateField"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "productPrices is set with the following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "title",
        "remarks",
        "officialPrice",
        "currencyId",
        "quantityPerDay",
        "autoConfirm",
        "pricePerPerson",
        "deletedAt"
      ],
      "line": 15
    },
    {
      "cells": [
        "",
        "2022-12-31T00:00:00",
        "API",
        "Test",
        "0",
        "5bpJKaVE",
        "123",
        "false",
        "ture",
        ""
      ],
      "line": 16
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productPricesIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 208100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 60763600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 1184800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 18111200,
  "status": "passed"
});
formatter.after({
  "duration": 34900,
  "status": "passed"
});
formatter.before({
  "duration": 29600,
  "status": "passed"
});
formatter.before({
  "duration": 42140100,
  "status": "passed"
});
formatter.before({
  "duration": 50002700,
  "status": "passed"
});
formatter.before({
  "duration": 40415900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 6
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 9
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 158000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 317400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "provider enters a data in productPrices with missing  fromDate field",
  "description": "",
  "id": "productprices-is-being-tested-with-negative-scenarios;provider-enters-a-data-in-productprices-with-missing--fromdate-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@productPricesWithMissingFromDateField"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "productPrices is set with the following fields",
  "rows": [
    {
      "cells": [
        "toDate",
        "title",
        "remarks",
        "officialPrice",
        "currencyId",
        "quantityPerDay",
        "autoConfirm",
        "pricePerPerson",
        "deletedAt"
      ],
      "line": 25
    },
    {
      "cells": [
        "2022-12-31T00:00:00",
        "API",
        "Test",
        "0",
        "5bpJKaVE",
        "123",
        "false",
        "ture",
        ""
      ],
      "line": 26
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productPricesIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 128100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 131316300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 3707600,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardProductPricesNegative.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 24000,
  "status": "passed"
});
formatter.before({
  "duration": 28400,
  "status": "passed"
});
formatter.before({
  "duration": 65205800,
  "status": "passed"
});
formatter.before({
  "duration": 43170600,
  "status": "passed"
});
formatter.before({
  "duration": 38084900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 6
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 9
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 787400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 324100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "provider enters a data in productPrices with empty  fromDate field",
  "description": "",
  "id": "productprices-is-being-tested-with-negative-scenarios;provider-enters-a-data-in-productprices-with-empty--fromdate-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@productPricesWithSpecialCharFromDateField"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "productPrices is set with the following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "title",
        "remarks",
        "officialPrice",
        "currencyId",
        "quantityPerDay",
        "autoConfirm",
        "pricePerPerson",
        "deletedAt"
      ],
      "line": 35
    },
    {
      "cells": [
        "@#$%^",
        "2022-12-31T00:00:00",
        "API",
        "Test",
        "0",
        "5bpJKaVE",
        "123",
        "false",
        "ture",
        ""
      ],
      "line": 36
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productPricesIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 111200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 46000900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 1134700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 17589800,
  "status": "passed"
});
formatter.after({
  "duration": 29400,
  "status": "passed"
});
formatter.before({
  "duration": 36800,
  "status": "passed"
});
formatter.before({
  "duration": 37211100,
  "status": "passed"
});
formatter.before({
  "duration": 41475300,
  "status": "passed"
});
formatter.before({
  "duration": 40887500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 6
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 9
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 128800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 558300,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "provider enters a data in productPrices with empty  toDate field",
  "description": "",
  "id": "productprices-is-being-tested-with-negative-scenarios;provider-enters-a-data-in-productprices-with-empty--todate-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@productPricesWithEmptyToDateField"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "productPrices is set with the following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "title",
        "remarks",
        "officialPrice",
        "currencyId",
        "quantityPerDay",
        "autoConfirm",
        "pricePerPerson",
        "deletedAt"
      ],
      "line": 45
    },
    {
      "cells": [
        "2021-05-31T00:00:00",
        "",
        "API",
        "Test",
        "0",
        "5bpJKaVE",
        "123",
        "false",
        "ture",
        ""
      ],
      "line": 46
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productPricesIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 136600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 45860300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 1015400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 34124800,
  "status": "passed"
});
formatter.after({
  "duration": 39300,
  "status": "passed"
});
formatter.before({
  "duration": 39900,
  "status": "passed"
});
formatter.before({
  "duration": 70568500,
  "status": "passed"
});
formatter.before({
  "duration": 73684900,
  "status": "passed"
});
formatter.before({
  "duration": 46462500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 6
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 9
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 128600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 258000,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "provider enters a data in productPrices with missing  toDate field",
  "description": "",
  "id": "productprices-is-being-tested-with-negative-scenarios;provider-enters-a-data-in-productprices-with-missing--todate-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@productPricesWithMissingToDateField"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "productPrices is set with the following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "title",
        "remarks",
        "officialPrice",
        "currencyId",
        "quantityPerDay",
        "autoConfirm",
        "pricePerPerson",
        "deletedAt"
      ],
      "line": 54
    },
    {
      "cells": [
        "2021-05-31T00:00:00",
        "API",
        "Test",
        "0",
        "5bpJKaVE",
        "123",
        "false",
        "ture",
        ""
      ],
      "line": 55
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "verify status code is 500",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "verify the title is \"Internal Server Error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productPricesIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 111400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 71034400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 751000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal Server Error",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 17226000,
  "status": "passed"
});
formatter.after({
  "duration": 31800,
  "status": "passed"
});
formatter.before({
  "duration": 25800,
  "status": "passed"
});
formatter.before({
  "duration": 43940800,
  "status": "passed"
});
formatter.before({
  "duration": 42792000,
  "status": "passed"
});
formatter.before({
  "duration": 45476000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 6
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 9
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 156200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 350300,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "provider enters a data in productPrices with special char  toDate field",
  "description": "",
  "id": "productprices-is-being-tested-with-negative-scenarios;provider-enters-a-data-in-productprices-with-special-char--todate-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 61,
      "name": "@productPricesWithSpecialCharToDateField"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "productPrices is set with the following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "title",
        "remarks",
        "officialPrice",
        "currencyId",
        "quantityPerDay",
        "autoConfirm",
        "pricePerPerson",
        "deletedAt"
      ],
      "line": 64
    },
    {
      "cells": [
        "2021-05-31T00:00:00",
        "@#$%",
        "API",
        "Test",
        "0",
        "5bpJKaVE",
        "123",
        "false",
        "ture",
        ""
      ],
      "line": 65
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productPricesIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 130100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 46278600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 773000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "duration": 20784800,
  "status": "passed"
});
formatter.after({
  "duration": 25900,
  "status": "passed"
});
formatter.before({
  "duration": 28700,
  "status": "passed"
});
formatter.before({
  "duration": 45263200,
  "status": "passed"
});
formatter.before({
  "duration": 40404500,
  "status": "passed"
});
formatter.before({
  "duration": 51544500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 6
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 9
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 149500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 327000,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "provider enters a data in productPrices with empty  title field",
  "description": "",
  "id": "productprices-is-being-tested-with-negative-scenarios;provider-enters-a-data-in-productprices-with-empty--title-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 70,
      "name": "@productPricesWithEmptyTitleField"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "productPrices is set with the following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "title",
        "remarks",
        "officialPrice",
        "currencyId",
        "quantityPerDay",
        "autoConfirm",
        "pricePerPerson",
        "deletedAt"
      ],
      "line": 73
    },
    {
      "cells": [
        "2021-05-31T00:00:00",
        "2022-12-31T00:00:00",
        "",
        "Test",
        "0",
        "5bpJKaVE",
        "123",
        "false",
        "ture",
        ""
      ],
      "line": 74
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productPricesIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 169400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 75774200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 3140900,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardProductPricesNegative.feature:76)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 28900,
  "status": "passed"
});
formatter.before({
  "duration": 25400,
  "status": "passed"
});
formatter.before({
  "duration": 35773600,
  "status": "passed"
});
formatter.before({
  "duration": 45279100,
  "status": "passed"
});
formatter.before({
  "duration": 39357300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 6
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 9
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 889700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 415000,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "provider enters a data in productPrices with missing  title field",
  "description": "",
  "id": "productprices-is-being-tested-with-negative-scenarios;provider-enters-a-data-in-productprices-with-missing--title-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 80,
      "name": "@productPricesWithMissingTitleField"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "productPrices is set with the following fields",
  "rows": [
    {
      "cells": [
        "fromDate",
        "toDate",
        "remarks",
        "officialPrice",
        "currencyId",
        "quantityPerDay",
        "autoConfirm",
        "pricePerPerson",
        "deletedAt"
      ],
      "line": 83
    },
    {
      "cells": [
        "2021-05-31T00:00:00",
        "2022-12-31T00:00:00",
        "Test",
        "0",
        "5bpJKaVE",
        "123",
        "false",
        "ture",
        ""
      ],
      "line": 84
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productPricesIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 164800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 80504900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 2857200,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardProductPricesNegative.feature:86)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 24900,
  "status": "passed"
});
formatter.uri("features/wizard/wizardProductRegionsNegative.feature");
formatter.feature({
  "line": 2,
  "name": "productRegions is being tested with negative scenarios",
  "description": "",
  "id": "productregions-is-being-tested-with-negative-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 24100,
  "status": "passed"
});
formatter.before({
  "duration": 44733100,
  "status": "passed"
});
formatter.before({
  "duration": 41008000,
  "status": "passed"
});
formatter.before({
  "duration": 41689500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 6
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 9
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 121000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 279500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "provider enters a data in productRegions with empty  regionName field",
  "description": "",
  "id": "productregions-is-being-tested-with-negative-scenarios;provider-enters-a-data-in-productregions-with-empty--regionname-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@productRegionWithEmptyRegionNameField"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "productRegions is set with the following fields",
  "rows": [
    {
      "cells": [
        "productId",
        "regionId",
        "regionName"
      ],
      "line": 15
    },
    {
      "cells": [
        "PYayPjpW",
        "5bpJKaVE",
        ""
      ],
      "line": 16
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productRegionsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 104100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 78270900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 2992100,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardProductRegionsNegative.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 30400,
  "status": "passed"
});
formatter.before({
  "duration": 46500,
  "status": "passed"
});
formatter.before({
  "duration": 52977300,
  "status": "passed"
});
formatter.before({
  "duration": 39761200,
  "status": "passed"
});
formatter.before({
  "duration": 47524500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 6
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 9
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 127200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 454900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "provider enters a data in productRegions with missing  regionName field",
  "description": "",
  "id": "productregions-is-being-tested-with-negative-scenarios;provider-enters-a-data-in-productregions-with-missing--regionname-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@productRegionWithMissingRegionNameField"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "productRegions is set with the following fields",
  "rows": [
    {
      "cells": [
        "productId",
        "regionId"
      ],
      "line": 24
    },
    {
      "cells": [
        "PYayPjpW",
        "5bpJKaVE"
      ],
      "line": 25
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productRegionsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 101300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 83146700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 3110000,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardProductRegionsNegative.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 67700,
  "status": "passed"
});
formatter.before({
  "duration": 25700,
  "status": "passed"
});
formatter.before({
  "duration": 57276400,
  "status": "passed"
});
formatter.before({
  "duration": 86348800,
  "status": "passed"
});
formatter.before({
  "duration": 59203800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "product is set with the following fields",
  "rows": [
    {
      "cells": [
        "name",
        "active",
        "shortDescription",
        "fullDescription",
        "mostPopular",
        "longitude",
        "latitude",
        "calendarColor",
        "address"
      ],
      "line": 6
    },
    {
      "cells": [
        "AutoTest",
        "true",
        "Test For Automation 1",
        "Automation for API in Postman",
        "true",
        "456.456",
        "3245678.5467",
        "blue",
        "Bishkek"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "productVideos is set with the following fields",
  "rows": [
    {
      "cells": [
        "path"
      ],
      "line": 9
    },
    {
      "cells": [
        "https://www.youtube.com/watch?v\u003du1yVCeXYya4\u0026list\u003dRDMMu1yVCeXYya4\u0026start_radio\u003d1"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 146600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 293300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "provider enters a data in productRegions with special chars  regionName field",
  "description": "",
  "id": "productregions-is-being-tested-with-negative-scenarios;provider-enters-a-data-in-productregions-with-special-chars--regionname-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@productRegionWithSpecialCharsRegionNameField"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "productRegions is set with the following fields",
  "rows": [
    {
      "cells": [
        "productId",
        "regionId",
        "regionName"
      ],
      "line": 34
    },
    {
      "cells": [
        "PYayPjpW",
        "5bpJKaVE",
        "@#$%^"
      ],
      "line": 35
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "provider creates a new product",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "verify status code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "verify the title is \"One or more validation errors occurred.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewProductSteps.productRegionsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 123500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 96104000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 22
    }
  ],
  "location": "CommonSteps.verify_status_code_is(int)"
});
formatter.result({
  "duration": 3010400,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:31)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardProductRegionsNegative.feature:37)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more validation errors occurred.",
      "offset": 21
    }
  ],
  "location": "CommonSteps.verifyTheTitleIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 27600,
  "status": "passed"
});
});