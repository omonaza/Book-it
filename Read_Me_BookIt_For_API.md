# BOOKiT  API

## _Create a new Product_ functionality

**TODO:**
`Test all functionalities based on the requirements below. Manually test each requirement in Postman, validate API Responses and status codes
`
---

> User Story:
> Add a product wizard step 1 Name & Description

> Substep 1. Name & Description

> General - icon of a step. When a definite step is being filled the icon changes color (blue color like notifications).

> Name & Description - label.

> Activity name - label, mandatory. It has a red star near it, and if the field is not filled it will show an error.

> Please, enter the name of your activity, for example: picking berries - label.

> Text box - accepts the name of a new product. Can accept 30 characters maximum.

> {Number of filled characters}/30

> Short description - label.

> Describe your product in one sentence - label.

> Text box - accepts short description. Can accept 60 characters maximum.

> {Number of filled characters}/60

> Next step button - leads to the next page (whether it is the same step or next one). Until the last step the next step button should be on this page.

> Long description - label, mandatory. It has a red star near it, and if the field is not filled it will show an error (like (3)).

> Describe your product in detail - label.

> Text box - accepts long description. Can have up to 900 characters max.

> {Number of filled characters}/900

> Back button - leads to the previous page of creating a product. It is situated on each page starting with second.

> Address - label.  ! New ! Region + City + Address (on the same page)

> Area - label, mandatory. It has a red star near it, and if the field is not filled it will show an error.

> Text box - accepts the area field, has a dropdown menu with options to choose.

> Activity address - label, mandatory. It has a red star near it, and if the field is not filled it will show an error.

> Text box - accepts activity address, has an autocomplete search on a map.

> Functionalities:
>
> -------

#### Functionality 1.

Provider should submit the following fields in order to successfully create a new product to BookIt app:

- name
- shortDescription
- fullDescription
- address
- city
- product_type_id 
- active
- mostPopular
- longitude
- latitude
- calendarColor
- cityId
---------------------------------
- productTypes
- name
-------------------------------- 
- productWorkingDates
- fromDate
- toDate
- name
- strictHours
--------------------------------
- timeSlots
- dayOfWeek
- startTime
- endTime
- duration
- quantity
- usedQuantity
- active
--------------------------------
- productRegions
- productId
- regionId
- regionName
---------------------------------
- productPrices (having issues for now)
--------------------------------
- productCustomerTypes
- name
--------------------------------
- city
- name
- regionId
--------------------------------
- productIncludedTags
- subTagId
- subTagName
--------------------------------
- productExcludedTags
- subTagId
- subTagName
--------------------------------
- productTags
- subTagId
- subTagName
---------------------------------
- productVideos (having issues for now)
----------------------------------
Once provider has been successfully created a new product, all submitted information should be saved in BookIt schema
 
-----------

See following example to test manually:

Allowed HTTPs request to create a product:

**`POST`**

API Endpoint:

 ```json
 https://bookit-staging.logivote.com/api/product
 ```

Request body:

 ```json

{
  "id": "string",
  "name": "string",
  "productTypeId": "string",
  "active": true,
  "shortDescription": "string",
  "fullDescription": "string",
  "mostPopular": true,
  "longitude": 0,
  "latitude": 0,
  "calendarColor": "string",
  "address": "string",
  "cityId": "string",
  "createdAt": "2021-05-28T10:02:23.668Z",
  "productImages": [
    {
      "id": "string",
      "productId": "string",
      "path": "string",
      "pathSmall": "string",
      "pathMedium": "string",
      "pathLarge": "string",
      "name": "string",
      "description": "string",
      "isMainImage": true,
      "translations": [
        {
          "name": "string",
          "description": "string",
          "id": "string",
          "languageId": "string",
          "entityId": "string"
        }
      ]
    }
  ],
  "productDocuments": [
    {
      "id": "string",
      "productId": "string",
      "path": "string",
      "name": "string",
      "description": "string",
      "translations": [
        {
          "name": "string",
          "description": "string",
          "id": "string",
          "languageId": "string",
          "entityId": "string"
        }
      ]
    }
  ],
  "productTypes": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "productWorkingDates": [
    {
      "id": "string",
      "productId": "string",
      "fromDate": "string",
      "toDate": "string",
      "name": "string",
      "strictHours": true,
      "timeSlots": [
        {
          "id": "string",
          "productWorkingDateId": "string",
          "dayOfWeek": "string",
          "startTime": "hh:mm:ss",
          "endTime": "hh:mm:ss",
          "duration": "hh:mm:ss",
          "quantity": 0,
          "usedQuantity": 0,
          "active": true,
          "deletedAt": "2021-05-28T10:02:23.668Z"
        }
      ],
      "deletedAt": "2021-05-28T10:02:23.668Z",
      "maxUsedTicketsQuantity": 0,
      "errorCode": 0
    }
  ],
  "productRegions": [
    {
      "id": "string",
      "productId": "string",
      "regionId": "string",
      "regionName": "string"
    }
  ],
  "productPrices": [
    {
      "id": "string",
      "productId": "string",
      "channelId": "string",
      "fromDate": "2021-05-28T10:02:23.668Z",
      "toDate": "2021-05-28T10:02:23.668Z",
      "title": "string",
      "remarks": "string",
      "officialPrice": 0,
      "currencyId": "string",
      "quantityPerDay": 0,
      "autoConfirm": true,
      "pricePerPerson": true,
      "productPriceTypes": [
        {
          "id": "string",
          "productPriceId": "string",
          "productCustomerTypeId": "string",
          "amount": 0,
          "currencyId": "string",
          "currencySymbol": "string",
          "isOfficial": true,
          "productCustomerType": {
            "id": "string",
            "productId": "string",
            "name": "string"
          }
        }
      ],
      "deletedAt": {}
    }
  ],
  "productCustomerTypes": [
    {
      "id": "string",
      "productId": "string",
      "name": "string"
    }
  ],
  "city": {
    "id": "string",
    "name": "string"
  },
  "productIncludedTags": [
    {
      "id": "string",
      "productId": "string",
      "subTagId": "string",
      "parentTagId": "string",
      "subTagName": "string"
    }
  ],
  "productExcludedTags": [
    {
      "id": "string",
      "productId": "string",
      "subTagId": "string",
      "parentTagId": "string",
      "subTagName": "string"
    }
  ],
  "productTags": [
    {
      "id": "string",
      "productId": "string",
      "subTagId": "string",
      "parentTagId": "string",
      "subTagName": "string"
    }
  ],
  "productTranslations": [
    {
      "name": "string",
      "shortDescription": "string",
      "fullDescription": "string",
      "language": {
        "id": "string",
        "name": "string",
        "twoLetterIsoLanguageName": "string"
      }
    }
  ],
  "productVideos": [
    {
      "id": "string",
      "productId": "string",
      "path": "string"
    }
  ]
}
```

Example response body:

```json
{
  "id": "string",
  "name": "string",
  "productTypeId": "string",
  "active": true,
  "shortDescription": "string",
  "fullDescription": "string",
  "mostPopular": true,
  "longitude": 0,
  "latitude": 0,
  "calendarColor": "string",
  "address": "string",
  "cityId": "string",
  "createdAt": "2021-05-28T10:02:23.726Z",
  "productImages": [
    {
      "id": "string",
      "productId": "string",
      "path": "string",
      "pathSmall": "string",
      "pathMedium": "string",
      "pathLarge": "string",
      "name": "string",
      "description": "string",
      "isMainImage": true,
      "translations": [
        {
          "name": "string",
          "description": "string",
          "id": "string",
          "languageId": "string",
          "entityId": "string"
        }
      ]
    }
  ],
  "productDocuments": [
    {
      "id": "string",
      "productId": "string",
      "path": "string",
      "name": "string",
      "description": "string",
      "translations": [
        {
          "name": "string",
          "description": "string",
          "id": "string",
          "languageId": "string",
          "entityId": "string"
        }
      ]
    }
  ],
  "productTypes": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "productWorkingDates": [
    {
      "id": "string",
      "productId": "string",
      "fromDate": "string",
      "toDate": "string",
      "name": "string",
      "strictHours": true,
      "timeSlots": [
        {
          "id": "string",
          "productWorkingDateId": "string",
          "dayOfWeek": "string",
          "startTime": "hh:mm:ss",
          "endTime": "hh:mm:ss",
          "duration": "hh:mm:ss",
          "quantity": 0,
          "usedQuantity": 0,
          "active": true,
          "deletedAt": "2021-05-28T10:02:23.726Z"
        }
      ],
      "deletedAt": "2021-05-28T10:02:23.726Z",
      "maxUsedTicketsQuantity": 0,
      "errorCode": 0
    }
  ],
  "productRegions": [
    {
      "id": "string",
      "productId": "string",
      "regionId": "string",
      "regionName": "string"
    }
  ],
  "productPrices": [
    {
      "id": "string",
      "productId": "string",
      "channelId": "string",
      "fromDate": "2021-05-28T10:02:23.726Z",
      "toDate": "2021-05-28T10:02:23.726Z",
      "title": "string",
      "remarks": "string",
      "officialPrice": 0,
      "currencyId": "string",
      "quantityPerDay": 0,
      "autoConfirm": true,
      "pricePerPerson": true,
      "productPriceTypes": [
        {
          "id": "string",
          "productPriceId": "string",
          "productCustomerTypeId": "string",
          "amount": 0,
          "currencyId": "string",
          "currencySymbol": "string",
          "isOfficial": true,
          "productCustomerType": {
            "id": "string",
            "productId": "string",
            "name": "string"
          }
        }
      ],
      "deletedAt": {}
    }
  ],
  "productCustomerTypes": [
    {
      "id": "string",
      "productId": "string",
      "name": "string"
    }
  ],
  "city": {
    "id": "string",
    "name": "string"
  },
  "productIncludedTags": [
    {
      "id": "string",
      "productId": "string",
      "subTagId": "string",
      "parentTagId": "string",
      "subTagName": "string"
    }
  ],
  "productExcludedTags": [
    {
      "id": "string",
      "productId": "string",
      "subTagId": "string",
      "parentTagId": "string",
      "subTagName": "string"
    }
  ],
  "productTags": [
    {
      "id": "string",
      "productId": "string",
      "subTagId": "string",
      "parentTagId": "string",
      "subTagName": "string"
    }
  ],
  "productTranslations": [
    {
      "name": "string",
      "shortDescription": "string",
      "fullDescription": "string",
      "language": {
        "id": "string",
        "name": "string",
        "twoLetterIsoLanguageName": "string"
      }
    }
  ],
  "productVideos": [
    {
      "id": "string",
      "productId": "string",
      "path": "string"
    }
  ]
}
```

-------