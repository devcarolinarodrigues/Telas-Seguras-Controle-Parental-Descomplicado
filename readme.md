# 🛡️ Telas Seguras – Controle Parental Descomplicado

Bem-vindo ao repositório do **Telas Seguras**, um projeto educativo e independente criado para orientar pais e responsáveis na configuração de ferramentas de controle parental gratuitas e nativas em smartphones.

O site oferece um guia passo a passo interativo de como utilizar o **Google Family Link** (Android) e o **Tempo de Uso** (iOS/Apple), garantindo uma navegação mais segura para as crianças, sem a necessidade de instalar aplicativos espiões ou pagos.

## ✨ Funcionalidades

* **Guias Interativos:** Navegação por abas (Android, iPhone e Incompatibilidades) com menus sanfona (acordeão) detalhando cada etapa.
* **Vídeos Focados em Privacidade:** Integração de tutoriais do YouTube utilizando o domínio `youtube-nocookie.com`, respeitando a privacidade do usuário.
* **Downloads de Manuais:** Seção dedicada para baixar guias completos em PDF para leitura offline.
* **Suporte Direto:** Integração simples e direta para atendimento via WhatsApp.
* **Design Responsivo:** Layout adaptável para qualquer tamanho de tela (mobile-first), garantindo legibilidade e usabilidade em celulares.
* **Dark Mode Automático:** O visual do site se adapta automaticamente ao tema claro ou escuro configurado no sistema operacional do usuário.
* **Acessibilidade:** Suporte à navegação por teclado (Setas, Home, End e Tab) nos menus e suporte a leitores de tela (`aria-labels`, `roles`).

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com tecnologias web fundamentais, mantendo a performance alta e a manutenção simples:

* **HTML5:** Semântico e estruturado.
* **CSS3:** Estilização baseada em variáveis (Custom Properties), CSS Grid, Flexbox e Media Queries.
* **JavaScript (Vanilla):** Sem frameworks. Lógica limpa para gerenciar o estado das abas, renderização dos vídeos e controle do menu sanfona.

## 📁 Estrutura de Arquivos recomendada

Para que o site funcione perfeitamente no GitHub Pages ou em sua máquina local, organize os arquivos desta forma:

```text
/
├── index.html                   # Estrutura principal da página
├── Telas seguras.css            # Folha de estilos (cores, layout, responsivo)
├── js.js                        # Script de interação (vídeos, abas, downloads)
└── documentos/                  # Pasta para armazenar os arquivos PDF
    ├── MTS_ Guia Completo Google Family Link.pdf
    ├── MTS_ Guia Completo Tempo de Uso (Apple).pdf
    ├── MTS_ Como Desativar e Incompatibilidades.pdf
    └── Política de Privacidade.pdf
```

## 🚀 Como executar o projeto localmente

Como o projeto não utiliza banco de dados ou processos de build (como Node.js/NPM), rodá-lo é extremamente simples:

1. Faça o clone deste repositório:
   ```bash
   git clone [https://github.com/devcarolinarodrigues/Telas-Seguras-Controle-Parental-Descomplicado]
   ```
2. Crie a pasta `documentos` e adicione seus PDFs nela (respeitando os nomes exatos listados no `js.js` e no `index.html`).
3. Dê um duplo clique no arquivo `index.html` para abri-lo direto no seu navegador.
4. *(Opcional)* Para uma experiência melhor, utilize uma extensão como o "Live Server" no VS Code.

## ⚖️ Aviso Legal e Privacidade

**Privacidade:** Este site não possui formulários, não exige cadastro e não utiliza cookies de rastreamento.

**Independência:** O "Telas Seguras" é um projeto puramente educativo e não possui nenhum vínculo corporativo oficial com a Google LLC ou com a Apple Inc. Todas as marcas citadas pertencem aos seus respectivos donos.
