package skeleton;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;

public class Cucumber {

	@Given("^(?:He Said|Sarah) buys (no|-?\\d+|) cucumber(?!)$")
	public void sarah_buys_no_cucumber(String value) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

}
