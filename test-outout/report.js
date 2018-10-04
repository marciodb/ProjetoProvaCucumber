$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/CompraProduto.feature");
formatter.feature({
  "line": 1,
  "name": "ComprarProduto",
  "description": "",
  "id": "comprarproduto",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Selecionar um produto na página",
  "description": "",
  "id": "comprarproduto;selecionar-um-produto-na-página",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Usuário está na Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Usuário escolhe um produto",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "É redirecionado para a página de descrição do produto",
  "keyword": "Then "
});
formatter.match({
  "location": "ComprarProduto.usuário_está_na_home_page()"
});
formatter.result({
  "duration": 8762198074,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.usuário_escolhe_um_produto()"
});
formatter.result({
  "duration": 1603218630,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.é_redirecionado_para_a_página_de_descrição_do_produto()"
});
formatter.result({
  "duration": 31091,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Adicionar um produto no carrinho",
  "description": "",
  "id": "comprarproduto;adicionar-um-produto-no-carrinho",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Usuário está na página de descrição de seu produto",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Usuário adiciona seu produto no carrinho",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "O usuário vai para a página de confirmação de seu item no carrinho",
  "keyword": "Then "
});
formatter.match({
  "location": "ComprarProduto.usuário_está_na_página_de_descrição_de_seu_produto()"
});
formatter.result({
  "duration": 74255,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.usuário_adiciona_seu_produto_no_carrinho()"
});
formatter.result({
  "duration": 23847,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.o_usuário_vai_para_a_página_de_confirmação_de_seu_item_no_carrinho()"
});
formatter.result({
  "duration": 22639,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Finalizar a compra do produto",
  "description": "",
  "id": "comprarproduto;finalizar-a-compra-do-produto",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Usuário está na pagina de confirmação",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Procede para o checkout",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "O usuário confirma o valor da compra",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "O usuário finaliza a compra",
  "keyword": "Then "
});
formatter.match({
  "location": "ComprarProduto.usuário_está_na_pagina_de_confirmação()"
});
formatter.result({
  "duration": 83311,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.procede_para_o_checkout()"
});
formatter.result({
  "duration": 34411,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.o_usuário_confirma_o_valor_da_compra()"
});
formatter.result({
  "duration": 26563,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.o_usuário_finaliza_a_compra()"
});
formatter.result({
  "duration": 22337,
  "status": "passed"
});
});