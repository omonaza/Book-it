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
  "duration": 2065803800,
  "status": "passed"
});
formatter.before({
  "duration": 6429038100,
  "status": "passed"
});
formatter.before({
  "duration": 71797900,
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
  "duration": 269012700,
  "status": "passed"
});
formatter.after({
  "duration": 103800,
  "status": "passed"
});
formatter.before({
  "duration": 99300,
  "status": "passed"
});
formatter.before({
  "duration": 88549100,
  "status": "passed"
});
formatter.before({
  "duration": 67270700,
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
  "duration": 1715500,
  "status": "passed"
});
formatter.after({
  "duration": 49500,
  "status": "passed"
});
formatter.before({
  "duration": 98400,
  "status": "passed"
});
formatter.before({
  "duration": 87053000,
  "status": "passed"
});
formatter.before({
  "duration": 74104300,
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
  "duration": 344400,
  "status": "passed"
});
formatter.after({
  "duration": 47900,
  "status": "passed"
});
formatter.before({
  "duration": 77600,
  "status": "passed"
});
formatter.before({
  "duration": 60021800,
  "status": "passed"
});
formatter.before({
  "duration": 61718600,
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
  "duration": 2048800,
  "status": "passed"
});
formatter.after({
  "duration": 654900,
  "status": "passed"
});
formatter.before({
  "duration": 114900,
  "status": "passed"
});
formatter.before({
  "duration": 63556100,
  "status": "passed"
});
formatter.before({
  "duration": 62049900,
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
  "duration": 1842100,
  "status": "passed"
});
formatter.after({
  "duration": 59000,
  "status": "passed"
});
formatter.before({
  "duration": 152300,
  "status": "passed"
});
formatter.before({
  "duration": 67012500,
  "status": "passed"
});
formatter.before({
  "duration": 107157600,
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
  "duration": 305300,
  "status": "passed"
});
formatter.after({
  "duration": 59700,
  "status": "passed"
});
formatter.before({
  "duration": 119200,
  "status": "passed"
});
formatter.before({
  "duration": 70130800,
  "status": "passed"
});
formatter.before({
  "duration": 230485400,
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
  "duration": 299000,
  "status": "passed"
});
formatter.after({
  "duration": 58300,
  "status": "passed"
});
formatter.before({
  "duration": 118800,
  "status": "passed"
});
formatter.before({
  "duration": 52493500,
  "status": "passed"
});
formatter.before({
  "duration": 83048300,
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
  "duration": 1638600,
  "status": "passed"
});
formatter.after({
  "duration": 57400,
  "status": "passed"
});
formatter.before({
  "duration": 105300,
  "status": "passed"
});
formatter.before({
  "duration": 60361500,
  "status": "passed"
});
formatter.before({
  "duration": 52323800,
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
  "duration": 1657600,
  "status": "passed"
});
formatter.after({
  "duration": 45300,
  "status": "passed"
});
formatter.before({
  "duration": 80100,
  "status": "passed"
});
formatter.before({
  "duration": 60006500,
  "status": "passed"
});
formatter.before({
  "duration": 70506400,
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
  "duration": 1519600,
  "status": "passed"
});
formatter.after({
  "duration": 46500,
  "status": "passed"
});
formatter.before({
  "duration": 95300,
  "status": "passed"
});
formatter.before({
  "duration": 55100400,
  "status": "passed"
});
formatter.before({
  "duration": 54531100,
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
  "duration": 1660100,
  "status": "passed"
});
formatter.after({
  "duration": 46400,
  "status": "passed"
});
formatter.before({
  "duration": 74000,
  "status": "passed"
});
formatter.before({
  "duration": 48204500,
  "status": "passed"
});
formatter.before({
  "duration": 46594900,
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
  "duration": 1636200,
  "status": "passed"
});
formatter.after({
  "duration": 52500,
  "status": "passed"
});
formatter.before({
  "duration": 104800,
  "status": "passed"
});
formatter.before({
  "duration": 54412100,
  "status": "passed"
});
formatter.before({
  "duration": 49567200,
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
  "duration": 1979600,
  "status": "passed"
});
formatter.after({
  "duration": 43700,
  "status": "passed"
});
formatter.before({
  "duration": 95800,
  "status": "passed"
});
formatter.before({
  "duration": 70730800,
  "status": "passed"
});
formatter.before({
  "duration": 53122200,
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
  "duration": 3450700,
  "status": "passed"
});
formatter.after({
  "duration": 41900,
  "status": "passed"
});
formatter.before({
  "duration": 123200,
  "status": "passed"
});
formatter.before({
  "duration": 86757900,
  "status": "passed"
});
formatter.before({
  "duration": 50831500,
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
  "duration": 496027600,
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
  "duration": 179372900,
  "status": "passed"
});
formatter.after({
  "duration": 43700,
  "status": "passed"
});
formatter.before({
  "duration": 1040700,
  "status": "passed"
});
formatter.before({
  "duration": 74237600,
  "status": "passed"
});
formatter.before({
  "duration": 56818900,
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
  "duration": 8678800,
  "status": "passed"
});
formatter.after({
  "duration": 430600,
  "status": "passed"
});
formatter.before({
  "duration": 72900,
  "status": "passed"
});
formatter.before({
  "duration": 66202800,
  "status": "passed"
});
formatter.before({
  "duration": 64558100,
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
  "duration": 1268200,
  "status": "passed"
});
formatter.after({
  "duration": 56900,
  "status": "passed"
});
formatter.before({
  "duration": 136000,
  "status": "passed"
});
formatter.before({
  "duration": 65411100,
  "status": "passed"
});
formatter.before({
  "duration": 54749800,
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
  "duration": 1229100,
  "status": "passed"
});
formatter.after({
  "duration": 43100,
  "status": "passed"
});
formatter.before({
  "duration": 72000,
  "status": "passed"
});
formatter.before({
  "duration": 57132200,
  "status": "passed"
});
formatter.before({
  "duration": 53602100,
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
  "duration": 2702000,
  "error_message": "java.lang.AssertionError: failure of regionName  expected:\u003cEilat\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat www.logisense.com.cucumber.steps.newProduct.CreateNewProductSteps.verifyThatProductRegionsIsSetWithFollowingFields(CreateNewProductSteps.java:440)\r\n\tat ✽.Given verify that productRegions is set with following fields(features/wizard/wizardNewProduct.feature:112)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 39800,
  "status": "passed"
});
formatter.before({
  "duration": 113400,
  "status": "passed"
});
formatter.before({
  "duration": 63524300,
  "status": "passed"
});
formatter.before({
  "duration": 54966700,
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
  "duration": 1015800,
  "status": "passed"
});
formatter.after({
  "duration": 44700,
  "status": "passed"
});
formatter.before({
  "duration": 76000,
  "status": "passed"
});
formatter.before({
  "duration": 63961100,
  "status": "passed"
});
formatter.before({
  "duration": 59056700,
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
  "duration": 3049700,
  "status": "passed"
});
formatter.after({
  "duration": 41000,
  "status": "passed"
});
formatter.before({
  "duration": 136600,
  "status": "passed"
});
formatter.before({
  "duration": 158253100,
  "status": "passed"
});
formatter.before({
  "duration": 76588400,
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
  "duration": 1638800,
  "status": "passed"
});
formatter.after({
  "duration": 86600,
  "status": "passed"
});
formatter.before({
  "duration": 78500,
  "status": "passed"
});
formatter.before({
  "duration": 58822800,
  "status": "passed"
});
formatter.before({
  "duration": 55518700,
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
  "duration": 891600,
  "status": "passed"
});
formatter.after({
  "duration": 40600,
  "status": "passed"
});
formatter.before({
  "duration": 98500,
  "status": "passed"
});
formatter.before({
  "duration": 82393400,
  "status": "passed"
});
formatter.before({
  "duration": 140877300,
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
  "duration": 804200,
  "status": "passed"
});
formatter.after({
  "duration": 36600,
  "status": "passed"
});
formatter.before({
  "duration": 60100,
  "status": "passed"
});
formatter.before({
  "duration": 91750300,
  "status": "passed"
});
formatter.before({
  "duration": 53915500,
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
  "duration": 1166000,
  "error_message": "java.lang.AssertionError: failure of subTagName  expected:\u003cWiFi\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat www.logisense.com.cucumber.steps.newProduct.CreateNewProductSteps.verifyThatProductIncludedTagsIsSetWithFollowingFields(CreateNewProductSteps.java:524)\r\n\tat ✽.Given verify that productIncludedTags is set with following fields(features/wizard/wizardNewProduct.feature:143)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 49000,
  "status": "passed"
});
formatter.before({
  "duration": 70600,
  "status": "passed"
});
formatter.before({
  "duration": 77538800,
  "status": "passed"
});
formatter.before({
  "duration": 60161800,
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
  "duration": 1374200,
  "error_message": "java.lang.AssertionError: failure of subTagName  expected:\u003cFood\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat www.logisense.com.cucumber.steps.newProduct.CreateNewProductSteps.verifyThatProductExcludedTagsIsSetWithFollowingFields(CreateNewProductSteps.java:533)\r\n\tat ✽.Given verify that productExcludedTags is set with following fields(features/wizard/wizardNewProduct.feature:148)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 56900,
  "status": "passed"
});
formatter.before({
  "duration": 80200,
  "status": "passed"
});
formatter.before({
  "duration": 54297900,
  "status": "passed"
});
formatter.before({
  "duration": 54214200,
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
  "duration": 1047200,
  "error_message": "java.lang.AssertionError: failure of subTagName  expected:\u003cExtreme\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat www.logisense.com.cucumber.steps.newProduct.CreateNewProductSteps.verifyThatProductTagsIsSetWithFollowingFields(CreateNewProductSteps.java:541)\r\n\tat ✽.Given verify that productTags is set with following fields(features/wizard/wizardNewProduct.feature:153)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 39000,
  "status": "passed"
});
formatter.before({
  "duration": 58900,
  "status": "passed"
});
formatter.before({
  "duration": 49353700,
  "status": "passed"
});
formatter.before({
  "duration": 46336200,
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
  "duration": 782400,
  "status": "passed"
});
formatter.after({
  "duration": 37100,
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
      "name": "@providerCreatesProductWithOutSomeFields"
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
  "duration": 70400,
  "status": "passed"
});
formatter.before({
  "duration": 42192400,
  "status": "passed"
});
formatter.before({
  "duration": 40503400,
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
  "duration": 232200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1659000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 84565700,
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
  "duration": 11381800,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductNegative.feature:13)\r\n",
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
  "duration": 34300,
  "status": "passed"
});
formatter.before({
  "duration": 66600,
  "status": "passed"
});
formatter.before({
  "duration": 47876000,
  "status": "passed"
});
formatter.before({
  "duration": 40696100,
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
  "duration": 197300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 805300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 167002100,
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
  "duration": 1199200,
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
  "duration": 2431039200,
  "status": "passed"
});
formatter.after({
  "duration": 55900,
  "status": "passed"
});
formatter.before({
  "duration": 60000,
  "status": "passed"
});
formatter.before({
  "duration": 51597200,
  "status": "passed"
});
formatter.before({
  "duration": 41176700,
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
  "duration": 158100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 815000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 253266700,
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
  "duration": 7179300,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardNewProductNegative.feature:39)\r\n",
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
  "duration": 34200,
  "status": "passed"
});
formatter.before({
  "duration": 81700,
  "status": "passed"
});
formatter.before({
  "duration": 49230300,
  "status": "passed"
});
formatter.before({
  "duration": 38953800,
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
  "duration": 149800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 612800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 116324300,
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
  "duration": 5507000,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductNegative.feature:52)\r\n",
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
  "duration": 148500,
  "status": "passed"
});
formatter.before({
  "duration": 39300,
  "status": "passed"
});
formatter.before({
  "duration": 32239700,
  "status": "passed"
});
formatter.before({
  "duration": 30911400,
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
  "duration": 157700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 678000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 78244300,
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
  "duration": 4081900,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductNegative.feature:65)\r\n",
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
  "duration": 32100,
  "status": "passed"
});
formatter.before({
  "duration": 37100,
  "status": "passed"
});
formatter.before({
  "duration": 32027600,
  "status": "passed"
});
formatter.before({
  "duration": 31068300,
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
  "duration": 228900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1260300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 70696300,
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
  "duration": 3845600,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductNegative.feature:77)\r\n",
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
  "duration": 27600,
  "status": "passed"
});
formatter.before({
  "duration": 60400,
  "status": "passed"
});
formatter.before({
  "duration": 35907800,
  "status": "passed"
});
formatter.before({
  "duration": 37222700,
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
  "duration": 173900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 364000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 89503200,
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
  "duration": 3085400,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductNegative.feature:89)\r\n",
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
  "duration": 30900,
  "status": "passed"
});
formatter.before({
  "duration": 52800,
  "status": "passed"
});
formatter.before({
  "duration": 32684800,
  "status": "passed"
});
formatter.before({
  "duration": 32920000,
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
  "duration": 127700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 591900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 86986900,
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
  "duration": 3189800,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductNegative.feature:101)\r\n",
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
  "duration": 23000,
  "status": "passed"
});
formatter.before({
  "duration": 60200,
  "status": "passed"
});
formatter.before({
  "duration": 30900800,
  "status": "passed"
});
formatter.before({
  "duration": 30246200,
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
  "duration": 108500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 266100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 119433300,
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
  "duration": 4383000,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductNegative.feature:113)\r\n",
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
  "duration": 21300,
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
      "name": "@providerCreatesProductTypesWithOutSomeFields"
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
  "duration": 59600,
  "status": "passed"
});
formatter.before({
  "duration": 33065600,
  "status": "passed"
});
formatter.before({
  "duration": 40449200,
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
  "duration": 146100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 562600,
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
  "duration": 103300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 75291000,
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
  "duration": 3497200,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature:33)\r\n",
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
  "duration": 26400,
  "status": "passed"
});
formatter.before({
  "duration": 56100,
  "status": "passed"
});
formatter.before({
  "duration": 38662000,
  "status": "passed"
});
formatter.before({
  "duration": 38324200,
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
  "duration": 192000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 493700,
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
  "duration": 122100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 51573600,
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
  "duration": 1491600,
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
  "duration": 15285900,
  "status": "passed"
});
formatter.after({
  "duration": 23700,
  "status": "passed"
});
formatter.before({
  "duration": 39800,
  "status": "passed"
});
formatter.before({
  "duration": 34072100,
  "status": "passed"
});
formatter.before({
  "duration": 37149600,
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
  "duration": 197000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 476200,
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
  "duration": 173400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 48225400,
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
  "duration": 936400,
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
  "duration": 24792200,
  "status": "passed"
});
formatter.after({
  "duration": 37300,
  "status": "passed"
});
formatter.before({
  "duration": 59400,
  "status": "passed"
});
formatter.before({
  "duration": 48939100,
  "status": "passed"
});
formatter.before({
  "duration": 50608200,
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
  "duration": 414000,
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
  "duration": 126000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 94223100,
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
  "duration": 940600,
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
  "duration": 22430800,
  "status": "passed"
});
formatter.after({
  "duration": 40000,
  "status": "passed"
});
formatter.before({
  "duration": 58500,
  "status": "passed"
});
formatter.before({
  "duration": 50425800,
  "status": "passed"
});
formatter.before({
  "duration": 43653800,
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
  "duration": 224500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 638300,
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
  "duration": 154500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 66748400,
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
  "duration": 761800,
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
  "duration": 17824800,
  "status": "passed"
});
formatter.after({
  "duration": 26100,
  "status": "passed"
});
formatter.before({
  "duration": 58100,
  "status": "passed"
});
formatter.before({
  "duration": 42131500,
  "status": "passed"
});
formatter.before({
  "duration": 47819700,
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
  "duration": 625900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 881500,
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
  "duration": 131500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 58015300,
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
  "duration": 3285000,
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
  "duration": 20448900,
  "status": "passed"
});
formatter.after({
  "duration": 26000,
  "status": "passed"
});
formatter.before({
  "duration": 50000,
  "status": "passed"
});
formatter.before({
  "duration": 41388500,
  "status": "passed"
});
formatter.before({
  "duration": 42158300,
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
  "duration": 179700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 407100,
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
  "duration": 309200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 48245800,
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
  "duration": 1002300,
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
  "duration": 18979200,
  "status": "passed"
});
formatter.after({
  "duration": 32800,
  "status": "passed"
});
formatter.before({
  "duration": 67800,
  "status": "passed"
});
formatter.before({
  "duration": 45826600,
  "status": "passed"
});
formatter.before({
  "duration": 41756900,
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
  "duration": 327800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 377100,
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
  "duration": 202100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 89405000,
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
  "duration": 9037700,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature:96)\r\n",
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
  "duration": 66000,
  "status": "passed"
});
formatter.before({
  "duration": 58730200,
  "status": "passed"
});
formatter.before({
  "duration": 43671600,
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
  "duration": 179000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 466100,
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
  "duration": 182600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 68196800,
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
  "duration": 783900,
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
  "duration": 15577800,
  "status": "passed"
});
formatter.after({
  "duration": 31900,
  "status": "passed"
});
formatter.before({
  "duration": 70300,
  "status": "passed"
});
formatter.before({
  "duration": 40023200,
  "status": "passed"
});
formatter.before({
  "duration": 39633600,
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
  "duration": 145900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 505000,
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
  "duration": 135300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 162300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 69618100,
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
  "duration": 1283300,
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
  "duration": 24606900,
  "status": "passed"
});
formatter.after({
  "duration": 37700,
  "status": "passed"
});
formatter.before({
  "duration": 47000,
  "status": "passed"
});
formatter.before({
  "duration": 49060100,
  "status": "passed"
});
formatter.before({
  "duration": 51561600,
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
  "duration": 152800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 334500,
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
  "duration": 173800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 119500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 88376600,
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
  "duration": 883200,
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
  "duration": 18285400,
  "status": "passed"
});
formatter.after({
  "duration": 32600,
  "status": "passed"
});
formatter.before({
  "duration": 49600,
  "status": "passed"
});
formatter.before({
  "duration": 48026100,
  "status": "passed"
});
formatter.before({
  "duration": 42546500,
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
  "duration": 161200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 378300,
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
  "duration": 141900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 257400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 47456200,
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
  "duration": 1014800,
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
  "duration": 22165500,
  "status": "passed"
});
formatter.after({
  "duration": 31300,
  "status": "passed"
});
formatter.before({
  "duration": 40600,
  "status": "passed"
});
formatter.before({
  "duration": 41274800,
  "status": "passed"
});
formatter.before({
  "duration": 49273800,
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
  "duration": 123900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 282200,
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
  "duration": 118100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 195900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 45655900,
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
  "duration": 1090700,
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
  "duration": 22212500,
  "status": "passed"
});
formatter.after({
  "duration": 57000,
  "status": "passed"
});
formatter.before({
  "duration": 60200,
  "status": "passed"
});
formatter.before({
  "duration": 46349100,
  "status": "passed"
});
formatter.before({
  "duration": 45796600,
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
  "duration": 1893900,
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
  "duration": 155300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 138500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 107789900,
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
  "duration": 5690100,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature:166)\r\n",
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
  "duration": 34800,
  "status": "passed"
});
formatter.before({
  "duration": 78500,
  "status": "passed"
});
formatter.before({
  "duration": 43108700,
  "status": "passed"
});
formatter.before({
  "duration": 50343200,
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
  "duration": 141700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 399300,
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
  "duration": 135200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 121400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 52156700,
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
  "duration": 878800,
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
  "duration": 24013600,
  "status": "passed"
});
formatter.after({
  "duration": 30500,
  "status": "passed"
});
formatter.before({
  "duration": 49600,
  "status": "passed"
});
formatter.before({
  "duration": 40186300,
  "status": "passed"
});
formatter.before({
  "duration": 45746000,
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
  "duration": 233500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 361500,
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
  "duration": 601900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 150300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 44998500,
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
  "duration": 1709900,
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
  "duration": 18487000,
  "status": "passed"
});
formatter.after({
  "duration": 29300,
  "status": "passed"
});
formatter.before({
  "duration": 40300,
  "status": "passed"
});
formatter.before({
  "duration": 41324700,
  "status": "passed"
});
formatter.before({
  "duration": 45671500,
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
  "duration": 150200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 311200,
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
  "duration": 157200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 178000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 51670200,
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
  "duration": 2001700,
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
  "duration": 18843200,
  "status": "passed"
});
formatter.after({
  "duration": 32200,
  "status": "passed"
});
formatter.before({
  "duration": 96600,
  "status": "passed"
});
formatter.before({
  "duration": 57555600,
  "status": "passed"
});
formatter.before({
  "duration": 44851100,
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
  "duration": 192700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 310500,
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
  "duration": 117100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 101700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 46024000,
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
  "duration": 1576300,
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
  "duration": 24878500,
  "status": "passed"
});
formatter.after({
  "duration": 57700,
  "status": "passed"
});
formatter.before({
  "duration": 52700,
  "status": "passed"
});
formatter.before({
  "duration": 37878700,
  "status": "passed"
});
formatter.before({
  "duration": 45119000,
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
  "duration": 156900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 349900,
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
  "duration": 147200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 151500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 108234100,
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
  "duration": 4571800,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature:229)\r\n",
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
  "duration": 38100,
  "status": "passed"
});
formatter.before({
  "duration": 57500,
  "status": "passed"
});
formatter.before({
  "duration": 47698700,
  "status": "passed"
});
formatter.before({
  "duration": 55115100,
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
  "duration": 172300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 815200,
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
  "duration": 131900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 169200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 55827500,
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
  "duration": 962600,
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
  "duration": 19970700,
  "status": "passed"
});
formatter.after({
  "duration": 36000,
  "status": "passed"
});
formatter.before({
  "duration": 90000,
  "status": "passed"
});
formatter.before({
  "duration": 43855700,
  "status": "passed"
});
formatter.before({
  "duration": 49096300,
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
  "duration": 641500,
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
  "duration": 155000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 195400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 51563600,
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
  "duration": 827000,
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
  "duration": 18621000,
  "status": "passed"
});
formatter.after({
  "duration": 38100,
  "status": "passed"
});
formatter.before({
  "duration": 77500,
  "status": "passed"
});
formatter.before({
  "duration": 41002400,
  "status": "passed"
});
formatter.before({
  "duration": 41137700,
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
  "duration": 146400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 388900,
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
  "duration": 134200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 157300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 217029800,
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
  "duration": 4545200,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature:265)\r\n",
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
  "duration": 43800,
  "status": "passed"
});
formatter.before({
  "duration": 57070600,
  "status": "passed"
});
formatter.before({
  "duration": 49452100,
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
  "duration": 151700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 392900,
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
  "duration": 116800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 150900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 70899800,
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
  "duration": 4524700,
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 500(features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature:278)\r\n",
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
  "duration": 28100,
  "status": "passed"
});
formatter.before({
  "duration": 48800,
  "status": "passed"
});
formatter.before({
  "duration": 46405000,
  "status": "passed"
});
formatter.before({
  "duration": 33445500,
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
  "duration": 131000,
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
  "duration": 112000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 467400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 44339300,
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
  "duration": 839000,
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
  "duration": 19388600,
  "status": "passed"
});
formatter.after({
  "duration": 36400,
  "status": "passed"
});
formatter.before({
  "duration": 38100,
  "status": "passed"
});
formatter.before({
  "duration": 35866300,
  "status": "passed"
});
formatter.before({
  "duration": 46198300,
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
  "duration": 145400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 337500,
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
  "duration": 123300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 200300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 56072300,
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
  "duration": 1120500,
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
  "duration": 18054800,
  "status": "passed"
});
formatter.after({
  "duration": 30600,
  "status": "passed"
});
formatter.before({
  "duration": 41600,
  "status": "passed"
});
formatter.before({
  "duration": 41814300,
  "status": "passed"
});
formatter.before({
  "duration": 47360400,
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
  "duration": 139400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 827300,
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
  "duration": 382700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 109300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 46682200,
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
  "duration": 778800,
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
  "duration": 19351400,
  "status": "passed"
});
formatter.after({
  "duration": 36600,
  "status": "passed"
});
formatter.before({
  "duration": 42700,
  "status": "passed"
});
formatter.before({
  "duration": 41495500,
  "status": "passed"
});
formatter.before({
  "duration": 42541500,
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
  "duration": 239900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1618400,
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
  "duration": 118600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productTimeSlotsIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 103600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 167525900,
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
  "duration": 3186500,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardNewProductTypes\u0026WorkingDatesNegative.feature:328)\r\n",
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
  "duration": 300000,
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
      "name": "@negative"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 71500,
  "status": "passed"
});
formatter.before({
  "duration": 51010900,
  "status": "passed"
});
formatter.before({
  "duration": 48175400,
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
  "duration": 247600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 204900,
  "status": "passed"
});
formatter.match({
  "location": "WizardProductNegativeSteps.productVideoIsCreatedWithBellowGivenPath(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 285900,
  "status": "passed"
});
formatter.match({
  "location": "WizardProductNegativeSteps.provider_sends_a_new_product()"
});
formatter.result({
  "duration": 78750500,
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
  "duration": 865000,
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
  "duration": 18443700,
  "status": "passed"
});
formatter.after({
  "duration": 34600,
  "status": "passed"
});
formatter.before({
  "duration": 93900,
  "status": "passed"
});
formatter.before({
  "duration": 42108100,
  "status": "passed"
});
formatter.before({
  "duration": 40651900,
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
  "duration": 233900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 183500,
  "status": "passed"
});
formatter.match({
  "location": "WizardProductNegativeSteps.productVideoIsCreatedWithBellowGivenPath(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 288000,
  "status": "passed"
});
formatter.match({
  "location": "WizardProductNegativeSteps.provider_sends_a_new_product()"
});
formatter.result({
  "duration": 85174700,
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
  "duration": 744600,
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
  "duration": 18420300,
  "status": "passed"
});
formatter.after({
  "duration": 30000,
  "status": "passed"
});
formatter.before({
  "duration": 42400,
  "status": "passed"
});
formatter.before({
  "duration": 40619500,
  "status": "passed"
});
formatter.before({
  "duration": 40058300,
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
  "duration": 568500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 229100,
  "status": "passed"
});
formatter.match({
  "location": "WizardProductNegativeSteps.productVideoIsCreatedWithBellowGivenPath(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 250000,
  "status": "passed"
});
formatter.match({
  "location": "WizardProductNegativeSteps.provider_sends_a_new_product()"
});
formatter.result({
  "duration": 64307400,
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
  "duration": 820000,
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
  "duration": 17578800,
  "status": "passed"
});
formatter.after({
  "duration": 31400,
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
      "name": "@productPriceNegativeTesting"
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
  "duration": 49800,
  "status": "passed"
});
formatter.before({
  "duration": 40753600,
  "status": "passed"
});
formatter.before({
  "duration": 49866700,
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
  "duration": 257200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 344100,
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
  "duration": 127000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 50007900,
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
  "duration": 1031600,
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
  "duration": 13669100,
  "status": "passed"
});
formatter.after({
  "duration": 24900,
  "status": "passed"
});
formatter.before({
  "duration": 27100,
  "status": "passed"
});
formatter.before({
  "duration": 43431500,
  "status": "passed"
});
formatter.before({
  "duration": 39240900,
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
  "duration": 194900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 560800,
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
  "duration": 170500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 81183100,
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
  "duration": 2864900,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardProductPricesNegative.feature:28)\r\n",
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
  "duration": 58800,
  "status": "passed"
});
formatter.before({
  "duration": 68200,
  "status": "passed"
});
formatter.before({
  "duration": 44560600,
  "status": "passed"
});
formatter.before({
  "duration": 36699900,
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
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 192100,
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
  "duration": 142400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 36482600,
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
  "duration": 907800,
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
  "duration": 15789200,
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
  "duration": 40235600,
  "status": "passed"
});
formatter.before({
  "duration": 43173600,
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
  "duration": 138200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 264500,
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
  "duration": 111700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 45430800,
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
  "duration": 800200,
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
  "duration": 17404500,
  "status": "passed"
});
formatter.after({
  "duration": 28800,
  "status": "passed"
});
formatter.before({
  "duration": 37100,
  "status": "passed"
});
formatter.before({
  "duration": 45914700,
  "status": "passed"
});
formatter.before({
  "duration": 41394100,
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
  "duration": 270300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 290800,
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
  "duration": 551600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 72819400,
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
  "duration": 1729200,
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
  "duration": 18689300,
  "status": "passed"
});
formatter.after({
  "duration": 43300,
  "status": "passed"
});
formatter.before({
  "duration": 64300,
  "status": "passed"
});
formatter.before({
  "duration": 43974500,
  "status": "passed"
});
formatter.before({
  "duration": 37749600,
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
  "duration": 178000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 435600,
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
  "duration": 213500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 46776100,
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
  "duration": 864400,
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
  "duration": 18851900,
  "status": "passed"
});
formatter.after({
  "duration": 34300,
  "status": "passed"
});
formatter.before({
  "duration": 50300,
  "status": "passed"
});
formatter.before({
  "duration": 43570500,
  "status": "passed"
});
formatter.before({
  "duration": 37070700,
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
  "duration": 308600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 355000,
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
  "duration": 355200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 141863800,
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
  "duration": 3098900,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardProductPricesNegative.feature:76)\r\n",
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
  "duration": 31000,
  "status": "passed"
});
formatter.before({
  "duration": 38800,
  "status": "passed"
});
formatter.before({
  "duration": 37603600,
  "status": "passed"
});
formatter.before({
  "duration": 38072200,
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
  "duration": 365100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.productVideosIsSetWithTheFollowingFields(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 371200,
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
  "duration": 172900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewProductSteps.providerCreatesANewProduct()"
});
formatter.result({
  "duration": 76612400,
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
  "duration": 3406400,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat www.logisense.com.cucumber.steps.common.CommonSteps.verify_status_code_is(CommonSteps.java:19)\r\n\tat ✽.Then verify status code is 400(features/wizard/wizardProductPricesNegative.feature:86)\r\n",
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
  "duration": 32000,
  "status": "passed"
});
});