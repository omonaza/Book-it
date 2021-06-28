package www.logisense.com.cucumber.steps.common;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import www.logisense.com.pogos.wizardNewProduct.ProductWorkingDates;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class CommonSteps {

    private CommonData commonData;



    public CommonSteps(CommonData commonData) {
        this.commonData = commonData;



    }



    @Then("^verify status code is (\\d+)$")
    public void verify_status_code_is(int StatusCode) throws Throwable {
        System.out.println(commonData.response.body().prettyPrint());
        Assert.assertEquals(StatusCode, commonData.response.getStatusCode());

    }

    @Then("^verify the title is \"([^\"]*)\"$")
    public void verifyTheTitleIs(String expectedTitle) throws Throwable {
        Assert.assertEquals(expectedTitle, commonData.response.body().jsonPath().getString("title"));

    }


}
