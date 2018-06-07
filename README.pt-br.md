# Teste Front-end
Teste para Avaliação de Front-end

Essa aplicação é um gerenciador de cadastros de clientes. Ao realizar o login na aplicação é exibido ao usuário uma tela com a listagem de clientes, 
essa tela possui um botão (+) que servirá para redirecionar o usuário para a tela de cadastro de cliente. 

Foram utilizadas as tecnologias Vue.js e Firebase para estruturar esta aplicação.

Referências:
- [Vue.js](https://vuejs.org/v2/api/)
- [Firebase](https://firebase.google.com/docs/)
- [Firebase Database](https://firebase.google.com/docs/reference/js/firebase.database.Reference)

Versão em Espanhol: [README.md](README.md)

## Instruções

Requisitos:
- Para rodar a aplicação é necessário ter o Node.js e o NPM instalado na máquina

Iniciar o projeto:
- Abrir o terminal na pasta 'Proyecto'
- Rodar o comando: npm install
- Rodar o comando: npm run dev
- Abrir o navegador e acessar a URL: http://localhost:8080
	
Login de acesso a aplicação:
- Login: prueba@paytechholding.com
- Senha: teste123
	
Tarefas:
1. Trabalhar no CSS da página de Login
2. Criar a página de cadastro de cliente
	
	
### Tarefa 1 - Trabalhar no CSS da página de Login
Descrição:
- Você deve trabalhar no CSS da página de login para deixá-la igual ao layout definido na imagem 'Layout - Login.png' que está na pasta raiz do projeto.

### Tarefa 2 - Criar a página de cadastro de cliente
Descrição:
- Você deve criar um componente que será a tela de cadastro de cliente, o qual será armazenado no banco de dados em Firebase.
Para navegar até essa tela nova você deve adicionar uma ação no botão (+) que está na tela de listagem,
onde ao clicar, o usuário será redirecionado para a tela de cadastro.

- Essa tela deve possibilitar o usuário a preencher um objeto com a estrutura demostrada no exemplo abaixo:

```bash
{
 "name": "Jose Alfredo Nunes",
 "phone": "9 3123-1231",
 "email": "jose.alfredo@paytechholding.com",
 "rut": "12.123.123-2",
 "description": "El cliente trabaja con informática.",
 "addresses": [
   {
    "name": "Dirección Principal",
    "street": "Av Del Valle",
    "number": 123,
    "complement": "Oficina 12",
    "city": "Santiago",
    "country": "Chile"
  }
 ]
}
```

Validações:
1. O campo "name" não pode ser vazio e precisa ter mais de 3 caracteres
2. O campo "phone" não pode ser vazio e precisa ter mais de 8 caracteres
3. O campo "email" não pode ser vazio, precisa ter os caracteres '@' e '.' e precisa ter mais de 4 caracteres
4. O campo "rut" não pode ser vazio e precisa ter mais de 7 caracteres
5. O campo "addresses" precisa ter pelo menos um endereço
6. O campo "name" de "addresses" não pode ser vazio e precisa ter mais de 3 caracteres
7. O campo "street" de "addresses" não pode ser vazio e precisa ter mais de 3 caracteres
8. O campo "number" de "addresses" precisa ser um número
9. O campo "city" de "addresses" não pode ser vazio e precisa ter mais de 3 caracteres
10. O campo "country" de "addresses" não pode ser vazio e precisa ter mais de 3 caracteres

- Use os métodos do Firebase para salvar esse objeto no banco de dados, a referencia no banco de dados é 'customers' 
- Mostre mensagens de erro caso não for preenchido os campos obrigatórios
- Ao obter uma resposta de sucesso na chamada do registro, redirecionar o usuário para a tela de listagem

### Enviar o projeto finalizado
- Você deve enviar o projeto para o email: eduardo.moura@paytechholding.com
