# Loccar Locadora

Bem-vindo à documentação do sistema de locação de veículos.

Esta página apresenta um resumo rápido do projeto e caminhos para começar.

---

## Visão Geral

- **Gestão de Veículos:** cadastro, atualização e inativação de veículos.  
- **Reservas Online:** criação de reservas com cálculo de custos.  
- **Controle Administrativo:** devoluções, multas e relatórios financeiros.  
- **Controle de Acesso por Role:** CLIENT_USER acessa apenas veículos, Admin/Funcionário têm acesso total.
- **Sidebar Dinâmica:** exibe opções conforme permissões do usuário.
- **Redirecionamento Inteligente:** após login, o usuário é levado à tela correta conforme seu perfil.
- **Integração de Dados do Usuário:** dados completos do usuário são buscados via endpoint `/find/email` e exibidos na interface.