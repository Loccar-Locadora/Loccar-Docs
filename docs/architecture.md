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

Camadas e Responsabilidades

### 1. Core

Serviços singleton que permanecem durante toda a aplicação.

Autenticação, interceptadores HTTP, guards de rota.

Modelos compartilhados.

### 2. Shared

Componentes, pipes e diretivas que podem ser reutilizados em diversos módulos.

Não deve conter dependências de serviços específicos do módulo.

### 3. Features

Cada módulo representa uma funcionalidade do sistema.

Componentes, serviços e rotas encapsulados por módulo.

Lazy loading para otimizar carregamento.

### 4. Routing

app-routing.module.ts define rotas principais e módulos carregados sob demanda.

Cada feature pode ter seu próprio routing module para encapsular rotas específicas.

### 5. Assets e Environments

assets/: imagens, ícones, fontes e arquivos estáticos.

environments/: configurações específicas para dev/prod (API endpoints, flags).

---

## 2.2 Backend (.NET)

### Visão Geral
Este documento descreve a arquitetura do sistema **Loccar**, estruturado em camadas para garantir separação de responsabilidades, escalabilidade e facilidade de manutenção. O backend é desenvolvido em **.NET** e utiliza os seguintes módulos principais:

- **WebAPI**
- **Application**
- **Domain**
- **Infra**
- **Tests**

---

### Camadas da Arquitetura

### 1. WebAPI
- Responsável por expor os **endpoints HTTP** do sistema.
- Faz a comunicação com os clientes (front-end, mobile ou integrações externas).
- Implementa **controllers** que recebem as requisições e delegam a lógica de negócio para a camada Application.
- Realiza a autenticação, autorização e tratamento das respostas (status code, mensagens).

### 2. Application
- Contém a lógica de **casos de uso** e **regras de aplicação**.
- Orquestra a interação entre WebAPI e Domain.
- Implementa **services** e **DTOs (Data Transfer Objects)** para trafegar dados entre camadas.
- Centraliza regras de validação de fluxos do sistema.

### 3. Domain
- Núcleo da aplicação, contendo a **lógica de negócio** pura.
- Define as **entidades, agregados, value objects e interfaces**.
- Não depende de nenhuma tecnologia externa, garantindo independência e reutilização.
- Utiliza **eventos de domínio** e regras que refletem a realidade do negócio.

### 4. Infra
- Implementa detalhes técnicos e de infraestrutura.
- Contém o **ORM** (ex.: Entity Framework Core) e mapeamentos para o banco de dados.
- Define os **repositórios concretos**, serviços externos (pagamentos, autenticação, etc.) e configurações.
- Se comunica diretamente com o banco de dados e serviços externos.

### 5. Tests
- Responsável pelos **testes automatizados** do sistema.
- Inclui testes **unitários**, **de integração** e **end-to-end**.
- Garante a qualidade e evita regressões no código.
- Testa principalmente a camada **Domain** (unidade) e **Application** (integração).

### 2.3 Banco de Dados (PostgreSQL)

- Armazena informações persistentes:
  - Usuários e credenciais.
  - Eventos e categorias.
  - Preferências do usuário.
- Executa em **container Docker**.