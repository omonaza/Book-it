package www.logisense.com.cucumber.steps.newProduct;

import cucumber.api.java.Before;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.http.Cookies;
import io.restassured.response.Response;
import org.apache.logging.log4j.LogManager;
import www.logisense.com.utility.PropertiesReader;
import www.logisense.com.utility.RestHttpRequest;

import static io.restassured.RestAssured.given;

public class NewProductEndPoints {

    {
        RestAssured.baseURI = PropertiesReader.getPropertiesValue("Book_It_BaseURL");
    }

    public static Response createProduct(String userJson,Cookies cookies) {

        Response response =  given()
                .contentType(ContentType.JSON)
                .accept(ContentType.JSON)
                .body(userJson)
                .when()
                .cookies(cookies)
                .request(String.valueOf(RestHttpRequest.HttpMethods.POST), "/api/product");

        return response;
    }

}
