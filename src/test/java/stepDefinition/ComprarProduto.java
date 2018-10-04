package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import tasks.EscolheProdutoTask;
import utils.TestBase;


public class ComprarProduto {

    private WebDriver navegador;

    @Given("^Usuário está na Home Page$")
    public void usuário_está_na_home_page(){

        this.navegador = TestBase.createChrome();
    }

    @When("^Usuário escolhe um produto$")
    public void usuário_escolhe_um_produto(){
        EscolheProdutoTask elemento = new EscolheProdutoTask(this.navegador);
        elemento.clicarImagem();
        //navegador.findElement(By.linkText("Faded Short Sleeve T-shirts")).click();

    }

    @Then("^É redirecionado para a página de descrição do produto$")
    public void é_redirecionado_para_a_página_de_descrição_do_produto(){

    }

    @Given("^Usuário está na página de descrição de seu produto$")
    public void usuário_está_na_página_de_descrição_de_seu_produto(){

    }

    @When("^Usuário adiciona seu produto no carrinho$")
    public void usuário_adiciona_seu_produto_no_carrinho(){

    }

    @Then("^O usuário vai para a página de confirmação de seu item no carrinho$")
    public void o_usuário_vai_para_a_página_de_confirmação_de_seu_item_no_carrinho(){

    }

    @Given("^Usuário está na pagina de confirmação$")
    public void usuário_está_na_pagina_de_confirmação(){

    }

    @Given("^Procede para o checkout$")
    public void procede_para_o_checkout(){

    }

    @When("^O usuário confirma o valor da compra$")
    public void o_usuário_confirma_o_valor_da_compra(){

    }

    @Then("^O usuário finaliza a compra$")
    public void o_usuário_finaliza_a_compra(){

    }

}
