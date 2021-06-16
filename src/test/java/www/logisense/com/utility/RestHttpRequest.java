package www.logisense.com.utility;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;

public class RestHttpRequest {
   public static String bearerToken = PropertiesReader.getPropertiesValue("Token");
    public static RequestSpecification requestSpecification = RestAssured.given();


    public enum HttpMethods {

        GET,
        POST,
        PUT,
        PATCH,
        DELETE

    }

    public static void addHeaders() {
        requestSpecification
                .contentType(ContentType.JSON)
                .accept(ContentType.JSON);

    }

}
