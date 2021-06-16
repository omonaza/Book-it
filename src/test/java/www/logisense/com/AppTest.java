package www.logisense.com;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertTrue;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest 
{

    /**
     * Rigorous Test :-)
     */
    String bearerToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI0IiwibmJmIjoxNjIwMjc0MzUwLCJleHAiOjE3NzgwNDA3NTAsImlhdCI6MTYyMDI3NDM1MH0.5C74DCv3D_pCo7YqGzSdsI2-OCfT9D8He5wXYtwSqFg";
    private static Response apiResponse;

    @Before
    public void setUp() {
        RestAssured.baseURI = "https://bookit-staging.logivote.com/";
    }


    @Test
    public void shouldAnswerWithTrue()
    {
        given()
                .contentType(ContentType.JSON)
                .accept(ContentType.JSON)
                .header("Authorization",bearerToken)
                .when()
                .get("https://bookit-staging.logivote.com/api/products")
                .then()
                .statusCode(200);
    }

    @Test
    public void createUser_1() {

        Response createdUserResponse = given()
                .header("Authorization", bearerToken)
                .header("Content-type", "application/json")
                .body("{\n" +
                        "   \"name\": \"Auto Test 1 \",\n" +
                        "  \"productTypeId\": \"Belm3pnb\",\n" +
                        "  \"active\": true,\n" +
                        "  \"shortDescription\": \"Test for Automation 1\",\n" +
                        "  \"fullDescription\": \"Automation for API in Postman 1 \",\n" +
                        "  \"mostPopular\": true,\n" +
                        "  \"longitude\": 456.456,\n" +
                        "  \"latitude\": 3245678.5467,\n" +
                        "  \"calendarColor\": \"blue\",\n" +
                        "  \"address\": \"Bishkek\",\n" +
                        "  \"cityId\": \"5bpJKaVE\",\n" +
                        "  \"createdAt\": \"2021-05-17T06:18:40.935841\",\n" +
                        "  \"productTypes\": [\n" +
                        "    {\n" +
                        "      \"name\": \"Horse Riding\"\n" +
                        "    }\n" +
                        "  ],\n" +
                        "  \"productWorkingDates\": [\n" +
                        "    {\n" +
                        "      \"fromDate\": \"0001-01-01T00:00:00\",\n" +
                        "      \"toDate\": \"0001-01-01T00:00:00\",\n" +
                        "      \"name\": \"AUtomation\",\n" +
                        "      \"strictHours\": true,\n" +
                        "      \"timeSlots\": [\n" +
                        "        {\n" +
                        "          \"dayOfWeek\": \"Monday\",\n" +
                        "          \"startTime\": \"01:01:01\",\n" +
                        "          \"endTime\": \"02:02:02\",\n" +
                        "          \"duration\": \"03:03:03\",\n" +
                        "          \"quantity\": 4,\n" +
                        "          \"usedQuantity\": 4,\n" +
                        "          \"active\": true,\n" +
                        "          \"deletedAt\": \"2021-05-17T06:18:40.935841\"\n" +
                        "        }\n" +
                        "      ],\n" +
                        "      \"deletedAt\": \"2021-05-17T06:18:40.935841\",\n" +
                        "      \"maxUsedTicketsQuantity\": 1,\n" +
                        "      \"errorCode\": 6\n" +
                        "    }\n" +
                        "  ],\n" +
                        "  \"productRegions\": [\n" +
                        "    {\n" +
                        "      \"regionId\": \"5bpJKaVE\",\n" +
                        "      \"regionName\": \"dsfdsgd\"\n" +
                        "    }\n" +
                        "  ],\n" +
                        "  \"productCustomerTypes\": [\n" +
                        "      {\n" +
                        "      \"name\": \"API\"\n" +
                        "    }\n" +
                        "  ],\n" +
                        "  \"city\": {\n" +
                        "     \n" +
                        "    \"name\": \"Israel\",\n" +
                        "     \"regionId\": \"Belm3pnb\"\n" +
                        "    \n" +
                        "  },\n" +
                        "  \"productVideos\": []\n" +
                        "}")
                .request("POST", "api/product");
        createdUserResponse.prettyPrint();
        Assert.assertEquals(200, createdUserResponse.getStatusCode());
        String email = createdUserResponse.body().jsonPath().getString("name");
        String ShortDescription = createdUserResponse.body().jsonPath().getString("shortDescription");
        Assert.assertEquals("Auto Test 1 ", email);
        Assert.assertEquals("Test for Automation 1", ShortDescription);





    }



}
