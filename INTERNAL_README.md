# 🔐 Documentação Interna do Template (Takoa)

Este documento é destinado **exclusivamente aos desenvolvedores e mantenedores do template**. Ele contém detalhes técnicos sobre a arquitetura, decisões de design e instruções de manutenção que não devem ser expostas ao cliente final.

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura **White-Label** baseada em React + Vite, onde a lógica e a UI são desacopladas do conteúdo.

### Estrutura de Pastas (`/src`)

```
src/
├── components/       # Componentes de UI (Burros/Apresentacionais)
│   ├── Navbar.tsx    # Menu responsivo
│   ├── Hero.tsx      # Seção principal
│   └── ...           # Outras seções
├── pages/            # Páginas completas (Rotas)
│   ├── PrivacyPolicy.tsx
│   └── TermsOfService.tsx
├── hooks/            # Lógica reutilizável
│   └── useCountdown.ts
├── App.tsx           # Entry point da aplicação
├── Router.tsx        # Gerenciador de rotas (SPA + Scroll Fix)
├── MainPage.tsx      # Landing Page (agrupa os componentes)
├── Content.ts        # ⚠️ O CORAÇÃO DO TEMPLATE (Dados do Cliente)
└── types.ts          # Definições de Tipos TypeScript
```

## 🎨 Sistema de Estilos (Tailwind CSS)

O projeto usa **Tailwind CSS v3**.

*   **Configuração:** `tailwind.config.js`
*   **Cores:** Definidas como variáveis CSS em `src/index.css` e mapeadas no `tailwind.config.js`.
    *   `primary`: Cor principal da marca.
    *   `secondary`: Cor de destaque/fundo secundário.
    *   `background`: Cor de fundo principal.

**Para alterar as cores globalmente:**
Edite as variáveis `:root` em `src/index.css`. O Tailwind pegará essas mudanças automaticamente.

## 🚦 Roteamento e Navegação

Utilizamos um **Router Customizado** (`src/Router.tsx`) em vez do `react-router-dom` para manter o projeto leve.

*   **Rotas:**
    *   `/` -> `MainPage`
    *   `/privacidade` -> `PrivacyPolicy`
    *   `/termos` -> `TermsOfService`
*   **Comportamento:**
    *   Intercepta cliques em links internos.
    *   **Ignora** links de âncora (ex: `#about`) para permitir o scroll suave na landing page.
    *   Gerencia o histórico do navegador (`pushState`).

## 🍪 LGPD e Cookies

*   **Componente:** `src/components/CookieBanner.tsx`
*   **Lógica:** Verifica `localStorage.getItem('cookieConsent')`.
*   **Configuração:** Pode ser ativado/desativado em `Content.ts` (`cookieBanner.enabled`).

##  Scripts de Manutenção

*   `npm run dev`: Roda servidor local (Vite).
*   `npm run build`: Gera versão de produção em `/dist`.
*   `npm run preview`: Testa o build de produção localmente.

## 🛡️ Segurança e Headers

*   **Configuração:** `netlify.toml` (para deploy no Netlify) e `index.html` (CSP).
*   **Headers Implementados:**
    *   `X-Frame-Options: DENY` (Proteção contra Clickjacking)
    *   `X-Content-Type-Options: nosniff` (Proteção contra MIME Sniffing)
    *   `Strict-Transport-Security` (HSTS)
    *   `Referrer-Policy`
    *   `Permissions-Policy`
*   **Proteção de Imagens:** Imagens em `Testimonials.tsx` protegidas contra download (botão direito, arrastar).
*   **Links Externos:** Todos possuem `rel="noopener noreferrer"` para prevenir Tabnabbing.

## 🔍 SEO Técnico

*   **Meta Tags:** Gerenciadas dinamicamente por `src/components/SEO.tsx` e estaticamente em `index.html`.
*   **Arquivos Públicos:**
    *   `robots.txt`: Configurado para permitir indexação total.
    *   `sitemap.xml`: Mapa do site gerado manualmente para Home, Privacidade e Termos.

## ♿ Acessibilidade (a11y)

*   **Navegação:** Menu mobile e Accordions (FAQ) totalmente acessíveis via teclado e leitores de tela.
*   **Atributos ARIA:** `aria-label`, `aria-expanded`, `aria-controls`, `role="dialog"`, etc. implementados.
*   **Contraste:** Cores verificadas para legibilidade.

## 🧩 Novos Componentes Utilitários

*   `src/components/WhatsAppIcon.tsx`: Ícone SVG otimizado do WhatsApp (sem dependências externas).
*   `src/components/ErrorBoundary.tsx`: Captura erros de renderização e exibe uma UI amigável em vez de quebrar o app.
*   `src/components/ScrollReveal.tsx`: Adiciona animações de entrada (fade-in/slide-up) aos elementos.
*   `src/components/SEO.tsx`: Gerencia `<head>` dinamicamente.

## ⚠️ Pontos de Atenção

1.  **Imagens:** As imagens ficam em `/public`. Ao entregar para o cliente, certifique-se de que as imagens referenciadas em `Content.ts` existem.
2.  **Segurança:** O `index.html` possui uma **Content Security Policy (CSP)** restrita. Se adicionar scripts externos (ex: Pixel do Facebook, Google Analytics), você precisará atualizar a meta tag CSP no `index.html`.
3.  **Atualizações:** Ao atualizar o template, verifique se o `tailwind.config.js` continua apontando corretamente para `./src/**/*.{js,ts,jsx,tsx}`.
4.  **Deploy:** O arquivo `netlify.toml` já está configurado para produção. Para outras plataformas (Vercel, etc.), configure os headers de segurança equivalentes.

---

**Versão do Template:** 2.1.0
**Última Auditoria:** 28/11/2025
