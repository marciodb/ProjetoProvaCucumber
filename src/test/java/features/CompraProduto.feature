Feature: ComprarProduto

  Scenario: Selecionar um produto na página
    Given Usuário está na Home Page
    When Usuário escolhe um produto
    Then É redirecionado para a página de descrição do produto

  Scenario: Adicionar um produto no carrinho
    Given Usuário está na página de descrição de seu produto
    When Usuário adiciona seu produto no carrinho
    Then O usuário vai para a página de confirmação de seu item no carrinho

  Scenario: Finalizar a compra do produto
    Given Usuário está na pagina de confirmação
    And Procede para o checkout
    When O usuário confirma o valor da compra
    Then O usuário finaliza a compra




