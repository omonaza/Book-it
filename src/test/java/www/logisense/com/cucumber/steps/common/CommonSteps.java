package www.logisense.com.cucumber.steps.common;


import cucumber.api.java.en.Then;
import org.junit.Assert;

public class CommonSteps {

    private  CommonData commonData;

    public CommonSteps(CommonData commonData) {
        this.commonData = commonData;
    }


    @Then("^verify status code is (\\d+)$")
    public void verify_status_code_is(int StatusCode) throws Throwable {
        System.out.println(CommonData.response.body().prettyPrint());
        Assert.assertEquals(StatusCode, CommonData.response.getStatusCode());

    }

    @Then("^verify the title is \"([^\"]*)\"$")
    public void verifyTheTitleIs(String expectedTitle) throws Throwable {
        Assert.assertEquals(expectedTitle, CommonData.response.body().jsonPath().getString("title"));

    }


}
