# Arquitetura do Sistema

Este documento apresenta a **arquitetura inicial** do sistema, considerando o uso de Docker, PostgreSQL, .NET backend e Angular frontend.

---

## 1. Visão Geral

O sistema é composto por três camadas principais:

| Camada      | Tecnologia | Responsabilidade                  |
|------------|------------|----------------------------------|
| Frontend   | Angular    | Interface do usuário, consumo das APIs do backend |
| Backend    | .NET API   | Lógica de negócios, APIs REST, integração com DB |
| Banco      | PostgreSQL | Armazenamento de dados persistentes |


---

## 2. Componentes do Sistema

### 2.1 Frontend (Angular)

- Responsável pela **interface do usuário**.
- Consome APIs do backend via **HTTP/REST**.
- Suporta múltiplas páginas: login, cadastro, agenda, eventos, notificações.
- Pode ser containerizado no Docker.

---

### 2.2 Backend (.NET)

- Responsável pela **lógica de negócios**.
- Fornece APIs REST para o frontend.
- Funcionalidades principais:
  - Cadastro e autenticação de usuários.
  - CRUD de eventos.
  - Notificações de eventos.
  - Integração com serviços externos (Zoom, Teams, Gmail, futuro).
- Containerizado via Docker.
- Conecta-se ao PostgreSQL usando **Entity Framework Core**.

---

### 2.3 Banco de Dados (PostgreSQL)

- Armazena informações persistentes:
  - Usuários e credenciais.
  - Eventos e categorias.
  - Preferências do usuário.
- Executa em **container Docker**.