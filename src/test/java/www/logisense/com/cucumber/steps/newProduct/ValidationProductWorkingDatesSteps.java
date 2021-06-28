package www.logisense.com.cucumber.steps.newProduct;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.http.Cookies;
import www.logisense.com.cucumber.steps.common.CommonData;
import www.logisense.com.pogos.wizardNewProduct.ProductWorkingDates;
import www.logisense.com.utility.ObjectConverter;
import www.logisense.com.utility.PropertiesReader;

import java.util.List;
import java.util.Map;

public class ValidationProductWorkingDatesSteps {

    private final CommonData commonData;
    private Cookies cookies;


    public ValidationProductWorkingDatesSteps(CommonData commonData) {
        this.commonData = commonData;


    }

    ProductWorkingDates productWorkingDates = new ProductWorkingDates();


    @Before
    public void setUp() {

        String token = PropertiesReader.getPropertiesValue("Token");
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


    @Given("^productWorkingDates is created with following fields$")
    public void productWorkingDates_is_created_with_following_fields(List<Map<String, String>> workingDates) throws Throwable {
        productWorkingDates.setProductId(workingDates.get(0).get("productId"));
        productWorkingDates.setFromDate(workingDates.get(0).get("fromDate"));
        productWorkingDates.setToDate(workingDates.get(0).get("toDate"));
        productWorkingDates.setName(workingDates.get(0).get("name"));
        productWorkingDates.setStrictHours(Boolean.parseBoolean(workingDates.get(0).get("strictHours")));
        productWorkingDates.setStrictHours(Boolean.parseBoolean(workingDates.get(0).get("strictHours")));

        String newProd = ObjectConverter.convertObjectToJson(productWorkingDates);
        commonData.response = NewProductEndPoints.createProductWorkingDates(newProd, cookies);


    }


}
