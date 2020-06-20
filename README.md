# Recuperação de senha

**RF**

- O usuario deve poder recuperar sua senha informando o seu e-mail;
- O usuario deve receber um e-mail com instrucoes de recuperacao de senha;
- O usuario deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente dev;
- Utilizar Amazon SES para envios em producao;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**
- O link enviado por email para resetar a senha deve expirar em 2h;
- O usuario precisa confirma a nova senha ao resetar sua senha;
