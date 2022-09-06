///Herança///

///Exercício 1
///a. Não é possível acessar o atributo password pois ele é privado e não é possível acessá-lo fora da classe.

///b. A mensagem do console aparece porque o construtor da classe User é chamado. E ela aparece apenas uma vez.

/// Exercício 2
///a. A mensagem "Chamando o construtor da classe Customer" é impressa apenas uma vez.
///b. A mensagem "Chamando o construtor da classe User" é impressa apenas uma vez, pois a classe User é herdada por Customer e o construtor da classe User é chamado primeiro.

/// Exercício 3
/// a. Não é possível imprimir a propriedade password pois ela é privada e não é possível acessá-la fora da classe.

/// Polimorfismo

/// Exercício 2
//a. A classe Place é abstrata, pois não pode ser instanciada.
//b. para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

/// Exercício 4
//a. A classe ResidentialClient é filha de Residence, pois ela herda todos os atributos e métodos da classe Residence.

/// Exercício 5
//a. As semelhanças entre a classe CommercialClient e a classe residentialClient são que a classe CommercialClient herda todos os atributos e métodos da classe Commerce, e a classe ResidentialClient herda todos os atributos e métodos da classe Residence. E ambas as classes são implementadas por uma interface Client.
//b. A diferença entre a classe CommercialClient e a classe ResidentialClient é que a classe CommercialClient herda o atributo floorsQuantity, pois é um comércio.

// Exercício 6
//a. A classe IndustrialClient é filha de Industry, pois ela herda todos os atributos e métodos da classe Industry. E a classe IndustrialClient herda o atributo machinesQuantity, pois é uma indústria.
//b. A classe IndustrialClient implementa a interface Client, porque ela herda todos os atributos e métodos da interface Client para que possa ser usada como um cliente.
//c. Porque só queremos consumir os dados e informações de um cliente, não queremos setar nenhuma valor.