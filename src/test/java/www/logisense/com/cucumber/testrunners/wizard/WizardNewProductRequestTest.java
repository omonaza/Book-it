package www.logisense.com.cucumber.testrunners.wizard;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        //src/test/resources/features/wizard/wizardNewProductTypesNegative.feature
        features = {
                "classpath:features"
        },
        glue = {
                "www.logisense.com.cucumber.steps"
                //www.logisense.com.cucumber.steps.newProduct
        },
        plugin = {
                "pretty", "html:target/reports","json:target/cucumber.json"
        },
        tags = {
                " @successfullyCreateProduct"
        },
        dryRun = false

)

public class WizardNewProductRequestTest {

}
