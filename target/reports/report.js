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
  "duration": 4716988900,
  "status": "passed"
});
formatter.before({
  "duration": 742659500,
  "status": "passed"
});
formatter.before({
  "duration": 164500,
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
  "duration": 199341300,
  "status": "passed"
});
formatter.after({
  "duration": 91500,
  "status": "passed"
});
formatter.before({
  "duration": 214469000,
  "status": "passed"
});
formatter.before({
  "duration": 116443800,
  "status": "passed"
});
formatter.before({
  "duration": 111200,
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
  "duration": 1517600,
  "status": "passed"
});
formatter.after({
  "duration": 66700,
  "status": "passed"
});
formatter.before({
  "duration": 67111500,
  "status": "passed"
});
formatter.before({
  "duration": 67352000,
  "status": "passed"
});
formatter.before({
  "duration": 149600,
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
  "duration": 276800,
  "status": "passed"
});
formatter.after({
  "duration": 52900,
  "status": "passed"
});
formatter.before({
  "duration": 77274400,
  "status": "passed"
});
formatter.before({
  "duration": 58602800,
  "status": "passed"
});
formatter.before({
  "duration": 111000,
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
  "duration": 1694800,
  "status": "passed"
});
formatter.after({
  "duration": 56100,
  "status": "passed"
});
formatter.before({
  "duration": 49121300,
  "status": "passed"
});
formatter.before({
  "duration": 77539300,
  "status": "passed"
});
formatter.before({
  "duration": 121400,
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
  "duration": 1221100,
  "status": "passed"
});
formatter.after({
  "duration": 45900,
  "status": "passed"
});
formatter.before({
  "duration": 66278100,
  "status": "passed"
});
formatter.before({
  "duration": 54238200,
  "status": "passed"
});
formatter.before({
  "duration": 145500,
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
  "duration": 322700,
  "status": "passed"
});
formatter.after({
  "duration": 82600,
  "status": "passed"
});
formatter.before({
  "duration": 66563400,
  "status": "passed"
});
formatter.before({
  "duration": 72596800,
  "status": "passed"
});
formatter.before({
  "duration": 108500,
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
  "duration": 226200,
  "status": "passed"
});
formatter.after({
  "duration": 65100,
  "status": "passed"
});
formatter.before({
  "duration": 50293600,
  "status": "passed"
});
formatter.before({
  "duration": 124812500,
  "status": "passed"
});
formatter.before({
  "duration": 110500,
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
  "duration": 1127900,
  "status": "passed"
});
formatter.after({
  "duration": 61300,
  "status": "passed"
});
formatter.before({
  "duration": 106404700,
  "status": "passed"
});
formatter.before({
  "duration": 169471200,
  "status": "passed"
});
formatter.before({
  "duration": 73900,
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
  "duration": 913200,
  "status": "passed"
});
formatter.after({
  "duration": 50100,
  "status": "passed"
});
formatter.before({
  "duration": 166481100,
  "status": "passed"
});
formatter.before({
  "duration": 162610500,
  "status": "passed"
});
formatter.before({
  "duration": 101400,
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
  "duration": 964200,
  "status": "passed"
});
formatter.after({
  "duration": 43300,
  "status": "passed"
});
formatter.before({
  "duration": 169115400,
  "status": "passed"
});
formatter.before({
  "duration": 169179600,
  "status": "passed"
});
formatter.before({
  "duration": 78100,
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
  "duration": 853600,
  "status": "passed"
});
formatter.after({
  "duration": 42700,
  "status": "passed"
});
formatter.before({
  "duration": 178908400,
  "status": "passed"
});
formatter.before({
  "duration": 173103700,
  "status": "passed"
});
formatter.before({
  "duration": 78600,
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
  "duration": 1111300,
  "status": "passed"
});
formatter.after({
  "duration": 52700,
  "status": "passed"
});
formatter.before({
  "duration": 179574200,
  "status": "passed"
});
formatter.before({
  "duration": 168466200,
  "status": "passed"
});
formatter.before({
  "duration": 107300,
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
  "duration": 1083800,
  "status": "passed"
});
formatter.after({
  "duration": 54900,
  "status": "passed"
});
formatter.before({
  "duration": 43099700,
  "status": "passed"
});
formatter.before({
  "duration": 39569000,
  "status": "passed"
});
formatter.before({
  "duration": 129700,
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
  "duration": 2847700,
  "status": "passed"
});
formatter.after({
  "duration": 52000,
  "status": "passed"
});
formatter.before({
  "duration": 45038100,
  "status": "passed"
});
formatter.before({
  "duration": 46755200,
  "status": "passed"
});
formatter.before({
  "duration": 93000,
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
  "duration": 218842300,
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
  "duration": 110087100,
  "status": "passed"
});
formatter.after({
  "duration": 60600,
  "status": "passed"
});
formatter.before({
  "duration": 135516200,
  "status": "passed"
});
formatter.before({
  "duration": 165916600,
  "status": "passed"
});
formatter.before({
  "duration": 636500,
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
  "duration": 4042200,
  "status": "passed"
});
formatter.after({
  "duration": 490000,
  "status": "passed"
});
formatter.before({
  "duration": 37587000,
  "status": "passed"
});
formatter.before({
  "duration": 39292900,
  "status": "passed"
});
formatter.before({
  "duration": 121200,
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
  "duration": 1667900,
  "status": "passed"
});
formatter.after({
  "duration": 60400,
  "status": "passed"
});
formatter.before({
  "duration": 186270300,
  "status": "passed"
});
formatter.before({
  "duration": 185732400,
  "status": "passed"
});
formatter.before({
  "duration": 63700,
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
  "duration": 794200,
  "status": "passed"
});
formatter.after({
  "duration": 61500,
  "status": "passed"
});
formatter.before({
  "duration": 206361500,
  "status": "passed"
});
formatter.before({
  "duration": 201701400,
  "status": "passed"
});
formatter.before({
  "duration": 68400,
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
  "duration": 1351000,
  "error_message": "java.lang.AssertionError: failure of regionName  expected:\u003cEilat\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat www.logisense.com.cucumber.steps.newProduct.CreateNewProductSteps.verifyThatProductRegionsIsSetWithFollowingFields(CreateNewProductSteps.java:440)\r\n\tat ✽.Given verify that productRegions is set with following fields(features/wizard/wizardNewProduct.feature:112)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 37000,
  "status": "passed"
});
formatter.before({
  "duration": 193176900,
  "status": "passed"
});
formatter.before({
  "duration": 194406400,
  "status": "passed"
});
formatter.before({
  "duration": 87900,
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
  "duration": 962000,
  "status": "passed"
});
formatter.after({
  "duration": 32800,
  "status": "passed"
});
formatter.before({
  "duration": 148184000,
  "status": "passed"
});
formatter.before({
  "duration": 36219000,
  "status": "passed"
});
formatter.before({
  "duration": 67500,
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
  "duration": 767300,
  "status": "passed"
});
formatter.after({
  "duration": 33300,
  "status": "passed"
});
formatter.before({
  "duration": 37700500,
  "status": "passed"
});
formatter.before({
  "duration": 39993300,
  "status": "passed"
});
formatter.before({
  "duration": 93400,
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
  "duration": 836400,
  "status": "passed"
});
formatter.after({
  "duration": 30600,
  "status": "passed"
});
formatter.before({
  "duration": 45324000,
  "status": "passed"
});
formatter.before({
  "duration": 63124300,
  "status": "passed"
});
formatter.before({
  "duration": 92900,
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
  "duration": 1067100,
  "status": "passed"
});
formatter.after({
  "duration": 35800,
  "status": "passed"
});
formatter.before({
  "duration": 53918600,
  "status": "passed"
});
formatter.before({
  "duration": 132929200,
  "status": "passed"
});
formatter.before({
  "duration": 94900,
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
  "duration": 690500,
  "status": "passed"
});
formatter.after({
  "duration": 31700,
  "status": "passed"
});
formatter.before({
  "duration": 181103200,
  "status": "passed"
});
formatter.before({
  "duration": 36773100,
  "status": "passed"
});
formatter.before({
  "duration": 90300,
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
  "duration": 915900,
  "error_message": "java.lang.AssertionError: failure of subTagName  expected:\u003cWiFi\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat www.logisense.com.cucumber.steps.newProduct.CreateNewProductSteps.verifyThatProductIncludedTagsIsSetWithFollowingFields(CreateNewProductSteps.java:524)\r\n\tat ✽.Given verify that productIncludedTags is set with following fields(features/wizard/wizardNewProduct.feature:143)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 69200,
  "status": "passed"
});
formatter.before({
  "duration": 147633300,
  "status": "passed"
});
formatter.before({
  "duration": 157439900,
  "status": "passed"
});
formatter.before({
  "duration": 175900,
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
  "duration": 1206300,
  "error_message": "java.lang.AssertionError: failure of subTagName  expected:\u003cFood\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat www.logisense.com.cucumber.steps.newProduct.CreateNewProductSteps.verifyThatProductExcludedTagsIsSetWithFollowingFields(CreateNewProductSteps.java:533)\r\n\tat ✽.Given verify that productExcludedTags is set with following fields(features/wizard/wizardNewProduct.feature:148)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 42900,
  "status": "passed"
});
formatter.before({
  "duration": 84126900,
  "status": "passed"
});
formatter.before({
  "duration": 91480800,
  "status": "passed"
});
formatter.before({
  "duration": 64800,
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
  "duration": 911900,
  "error_message": "java.lang.AssertionError: failure of subTagName  expected:\u003cExtreme\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat www.logisense.com.cucumber.steps.newProduct.CreateNewProductSteps.verifyThatProductTagsIsSetWithFollowingFields(CreateNewProductSteps.java:541)\r\n\tat ✽.Given verify that productTags is set with following fields(features/wizard/wizardNewProduct.feature:153)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 64000,
  "status": "passed"
});
formatter.before({
  "duration": 93369400,
  "status": "passed"
});
formatter.before({
  "duration": 95409100,
  "status": "passed"
});
formatter.before({
  "duration": 84700,
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
  "duration": 669000,
  "status": "passed"
});
formatter.after({
  "duration": 34200,
  "status": "passed"
});
});