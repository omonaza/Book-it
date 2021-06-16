package www.logisense.com.cucumber.steps.newProduct;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.http.Cookies;

import io.restassured.response.Response;
import www.logisense.com.cucumber.steps.common.CommonData;
import www.logisense.com.pogos.wizardNewProduct.ProductRequest;
import www.logisense.com.pogos.wizardNewProduct.ProductVideos;
import www.logisense.com.utility.ObjectConverter;
import www.logisense.com.utility.PropertiesReader;
import www.logisense.com.utility.RestHttpRequest;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class WizardProductNegativeSteps {

    private CommonData commonData;

    public WizardProductNegativeSteps(CommonData commonData) {
        this.commonData = commonData;
    }


    private Cookies cookies;
    public static ProductRequest productRequest = new ProductRequest();

    @Before
    public void setUp() {

        RestAssured.baseURI = PropertiesReader.getPropertiesValue("Book_It_BaseURL");


        String token = PropertiesReader.getPropertiesValue("Token");
        RestHttpRequest.addHeaders();
        cookies = RestAssured.given()
                .contentType(ContentType.JSON)
                .when()
                .body(token)
                .post("https://bookit-staging.logivote.com/api/authenticate")
                .then()
                .statusCode(200)
                .extract()
                .response()
                .getDetailedCookies();
    }


    @Given("^product name is set with \"([^\"]*)\" (\\d+) times$")
    public void product_name_is_set_with_times(String name, int times) throws Throwable {
        String Name = "";

        for (int i = 0; i <= times; i++) {
            Name = Name.concat(name);
        }

        productRequest.setName(Name);


    }

    @Given("^product shortDescription is set with \"([^\"]*)\" (\\d+) times$")
    public void product_shortDescription_is_set_with_times(String shortDescription, int times) throws Throwable {
        String Short = "";
        for (int i = 0; i <= times; i++) {
            Short = Short.concat(shortDescription);
        }

        productRequest.setShortDescription(Short);
    }

    @Given("^product fullDescription is set with \"([^\"]*)\" (\\d+) times$")
    public void product_fullDescription_is_set_with_times(String fullDescription, int times) throws Throwable {
        String Full = "";

        for (int i = 0; i <= times; i++) {
            Full = Full.concat(fullDescription);
        }

        productRequest.setFullDescription(Full);
    }


    @Given("^product video is created with bellow given path$")
    public void productVideoIsCreatedWithBellowGivenPath(List<Map<String, String>> videos) {

        ProductVideos productVideos = new ProductVideos();

        productVideos.setPath(videos.get(0).get("path"));


        List<ProductVideos> productVideosList = new ArrayList<>();
        productVideosList.add(productVideos);
        productRequest.setProductVideos(productVideosList);

        System.out.println("azamat======> " + productRequest.toString());
    }


    @Given("^provider sends a new product$")
    public void provider_sends_a_new_product() throws Throwable {

        String newProd = ObjectConverter.convertObjectToJson(productRequest);
        RestHttpRequest.addHeaders();

        CommonData.response = RestHttpRequest
                .requestSpecification
                .body(newProd)
                .when()
                .cookies(cookies)
                .request(String.valueOf(RestHttpRequest.HttpMethods.POST), "/api/product");

    }


}
