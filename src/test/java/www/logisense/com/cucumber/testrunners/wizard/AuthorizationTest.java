package www.logisense.com.cucumber.testrunners.wizard;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {
                "src/test/resources/features/wizard/wizardAuthentication.feature"
        },
        glue = {
                "www.logisense.com.cucumber.steps.authentication"
        },

        tags = {
                " @Authorize"
        },
        dryRun = false

)
public class AuthorizationTest {

}
