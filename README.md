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
- O usuario precisa confirmar a nova senha ao resetar sua senha;

# Atualização de perfil

**RF**
- O usuario deve poder atualizar seus dados (nome, email e senha)

**RN**
- O usuario não pode alterar seu e-mail para um e-mail ja utilizado;
- Para atualizar sua senha o usuario deve informar a senha antiga;
- Para atualizar sua senha o usuario precisa confirmar a nova senha;

# Painel do prestador

# Agendamento de serviços

**RF**
- O usuario deve poder listar todos prestadores de serviços
- O usuario deve poder listar os dias de um mes com pelo menos um horario disponivel de um prestador
- O usuario deve poder listsar horarios disponiveis em um dia especifico de um prestador
- O usuario deve poder realizar um novo agendamento com um prestador

**RNF**
- A listagem de prestadores deve ser armazenada em cache.

**RN**
- Cada agendaento deve durar 1h exatamente
- Os agendamentos devem poder estar dispo entre 8 as 18 (primeiro 8 e ultima as 17)
- O usuario nao pode agendar um horario ocupado
- O usuario nao pode agendar um horario que ja passou
- O usuario nao pode agendar serviços consigo mesmo
