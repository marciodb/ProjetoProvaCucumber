package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;


public class EscolheProdutoObject {

    private WebDriver navegador;
    public  WebElement usernameElement = null;

    public EscolheProdutoObject(WebDriver navegador) {
        this.navegador = navegador;
    }

    public WebElement imagemDoProduto(WebDriver navegador){
        //WebDriverWait wait = new WebDriverWait(navegador,10);
        //usernameElement = wait.until(ExpectedConditions.presenceOfElementLocated(By.linkText("Faded Short Sleeve T-shirts")));

        navegador.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        usernameElement = navegador.findElement(By.linkText("Faded Short Sleeve T-shirts"));
        return usernameElement;

        //return this.navegador.findElement(By.linkText("Faded Short Sleeve T-shirts"));
    }

    /*public EscolheProdutoObject imagemDoProduto(){
        navegador.findElement(By.linkText("Faded Short Sleeve T-shirts")).click();
        return this;*/

}



