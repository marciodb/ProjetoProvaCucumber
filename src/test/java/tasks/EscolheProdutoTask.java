package tasks;

import org.openqa.selenium.WebDriver;
import pageObjects.EscolheProdutoObject;

public class EscolheProdutoTask {

    private WebDriver navegador;

    public  EscolheProdutoTask(WebDriver navegador) {
        this.navegador = navegador;
    }

    EscolheProdutoObject produtoPageObject = new EscolheProdutoObject(navegador);

    public void clicarImagem(){
        produtoPageObject.imagemDoProduto(navegador).click();
        //navegador.findElement(By.linkText("Faded Short Sleeve T-shirts")).click();
    }

}
