package www.logisense.com.cucumber.steps.authentication;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import www.logisense.com.pogos.authentication.Authorization;
import www.logisense.com.utility.ObjectConverter;
import www.logisense.com.utility.PropertiesReader;
import www.logisense.com.utility.RestHttpRequest;

import java.util.List;

public class Log_In_Authorization {


    public static Response AutoResponse;

    @Before
    public void setUp() {
        RestAssured.baseURI = PropertiesReader.getPropertiesValue("Book_It_BaseURL");

    }

    @Given("^log-in to be authorized with following credentials$")
    public void log_in_to_be_authorized_with_following_credentials(List<Authorization> logIn) throws Throwable {

        String Authorization = ObjectConverter.convertObjectToJson(logIn.get(0));
        RestHttpRequest.addHeaders();
        AutoResponse = RestHttpRequest
                .requestSpecification
                .body(Authorization)
                .when()
                .request(String.valueOf(RestHttpRequest.HttpMethods.POST), "/api/authenticate");





    }

    @Then("^check up if you are authorized successfully$")
    public void checkUpIfYouAreAuthorizedSuccessfully() {
        System.out.println( AutoResponse.cookies());
    }
}