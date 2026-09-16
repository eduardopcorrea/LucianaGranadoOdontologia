# Luciana Granado Odontologia Integrada

Site institucional (Next.js App Router + TypeScript + Tailwind CSS v4 + shadcn/ui + Framer Motion)
da Dra. Luciana Granado — cirurgiã-dentista (Endodontia, Ortodontia, Implantodontia), Vila Velha/ES.

## Por que o nome da pasta é kebab-case

O nome de exibição do cliente ("Luciana Granado Odontologia") tem espaços e maiúsculas, o que
`create-next-app`/npm não aceitam como nome de pacote ao criar o projeto. Por isso o projeto vive
em `luciana-granado-odontologia/` (sem espaços/maiúsculas) — esse é o padrão adotado para todo
cliente novo a partir de 2026-09-17, inclusive quando o nome original não tem caracteres especiais
como `&` (esse caso é ainda mais sério: veja `ervalti-souza-advocacia/README.md`, onde o `&` chega
a quebrar scripts do npm no Windows). O nome real da marca continua aparecendo normalmente dentro
do site (título, textos, metadata).

## Rodando localmente

```bash
npm install       # só necessário se node_modules for apagado
npm run dev        # http://localhost:3000 (ou próxima porta livre)
npm run build      # build de produção (Turbopack)
npm run start       # roda o build de produção
npm run lint        # ESLint
```

## Estrutura

- `src/app/page.tsx` — monta a página (Header, Hero, Especialidades, Sobre, Diferenciais,
  Depoimento, Contato, Footer, botão flutuante de WhatsApp).
- `src/app/layout.tsx` — fontes (Manrope + Work Sans via next/font/google), metadata/SEO.
- `src/app/globals.css` — paleta da marca (branco + verde + grafite) via CSS variables/Tailwind v4
  `@theme`, extraída por amostragem de cor direto das fotos reais da cliente.
- `src/components/site/*` — cada seção da página, com o conteúdo real da cliente (endereço,
  telefone/WhatsApp, e-mail, especialidades, avaliação e depoimento do Google, mapa incorporado).
- `src/components/site/logo-mark.tsx` — marca redesenhada em SVG (coração/dente com bracket
  ortodôntico), inspirada no logo real do Instagram/Facebook da cliente (baixa resolução demais
  para usar direto no site).
- `public/images/` — fotos reais da cliente, já tratadas/recortadas para o site:
  - `luciana-retrato.jpg` — retrato profissional dela (recortado da foto de capa do Facebook).
  - `luciana-capa-marca.jpg` — a foto de capa original completa (usada como fundo decorativo,
    com máscara de gradiente, na seção "Diferenciais").
  - `consultorio.jpg` — foto real da sala de atendimento (do perfil do Google Maps do negócio).

## `reference/`

Material bruto coletado do Google Maps e das redes sociais reais da cliente, usado como fonte
para o conteúdo e as fotos do site. Não são servidos pelo site (ficam fora de `public/`).

- `capa-facebook-luciana.png` — foto de capa original do Facebook, sem corte.
- `consultorio-google-maps.jpg` — foto do consultório em resolução completa.
- `logo-instagram.jpg` — foto de perfil do Instagram (@dralucianagranado), 150×150.

## Dados reais verificados (Google Maps + Facebook + Instagram, 2026-09-16)

- Endereço: Av. Henrique Moscoso, 1069 — Sala 5, Ed. Park Center, Centro de Vila Velha,
  Vila Velha - ES, CEP 29100-021
- Telefone/WhatsApp: (27) 99763-1575
- E-mail: lucianagranadoodontologia@hotmail.com
- Instagram: @dralucianagranado
- Google Maps: 5,0 ★ (1 avaliação real, citada no site) — não inventar avaliações extras.
- Não há CRO nem horário completo de funcionamento confirmados publicamente — o site evita citar
  número de CRO ou tabela de horários que não foram verificados; usa "mediante agendamento" e
  direciona para o WhatsApp.
