package skeleton;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefs {
	WebDriver driver;
	@Given("^The URL of Git Hub$")
	public void the_URL_of_Git_Hub() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\Program Files\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://github.com/login");
		driver.manage().window().maximize();
	}

	@When("^User enters https://github\\.com/login$")
	public void user_enters_https_github_com_login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@When("^User clicks on SignIn$")
	public void user_clicks_on_SignIn() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^User enters (.*) as username$")
	public void user_enters_Manishachand_as_username(String username) throws Throwable {
		driver.findElement(By.id("login_field")).sendKeys(username);
	}

	@When("^User enters (.*) as password$")
	public void user_enters_Shiya_as_password(String password) throws Throwable {
		driver.findElement(By.id("password")).sendKeys(password);
	}

	@When("^User clicks on Sign in$")
	public void user_clicks_on_submit() throws Throwable {
		driver.findElement(By.name("commit")).click();
	}

	@Then("^User Navigates to (.*)$")
	public void user_Navigates_to_GitHub(String result) throws Throwable {
	 if(result.startsWith("Sign"))
	 {
		 Assert.assertTrue(driver.getTitle().startsWith("Sign"));
	 }
	 else
		 Assert.assertTrue(driver.getTitle().startsWith("Git"));
	}
		
	@Then("^(Git Hub page opens|User is still at Sign In Git Hub page)$")
	public void git_hub_page_opens(String message) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	@Then("^Browser closed$")
	public void browser_closed() throws Throwable {
	    driver.quit();
	}


    }

