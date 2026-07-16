# Sistema PAES CABO — versão atualizada

## Arquivos
- `index.html`: estrutura e telas do sistema.
- `styles.css`: identidade visual, efeitos 3D e responsividade.
- `app.js`: configurações, conteúdo, células e lógica.

## Informações já configuradas
- Culto: domingo, às 18h.
- Próximo batismo e confirmação: 26/07/2026.
- Avisos da semana: Mercado Solidário e Células.
- Google Forms oficial de visitantes.
- Google Forms oficial de batismo.
- Localização oficial da PAES CABO no Google Maps.
- Todas as células e contatos de WhatsApp informados.

## Como testar
1. Mantenha `index.html`, `styles.css` e `app.js` na mesma pasta.
2. Abra `index.html` no navegador.
3. No VS Code, a extensão Live Server pode ser usada para testar como site local.

## Observação sobre armazenamento
O `localStorage` reconhece a pessoa somente no mesmo navegador e aparelho.
Ele não funciona como cadastro oficial, autenticação ou banco de dados compartilhado.


## Identidade visual adicionada
A imagem oficial foi tratada para remover somente o fundo preto e foi salva em:

`assets/logo-paes.png`

Ela aparece:
- na tela inicial;
- no menu lateral;
- no destaque principal do dashboard;
- no assistente PAES;
- como favicon;
- como marca-d'água sutil em todas as abas.

Para trocar a marca futuramente, substitua `assets/logo-paes.png` por outro PNG
transparente mantendo exatamente o mesmo nome.


## Correções desta versão
- Corrigidos IDs duplicados no bloco do culto e dos avisos.
- Restaurado o elemento usado pelo JavaScript para o pregador.
- Mantida a série **Armadilhas**.
- Versículo automático calculado pelo dia do ano.
- Versículo visível também no celular.
- Células carregadas ao iniciar e toda vez que a aba Células é aberta.
- Arquivos renomeados corretamente para `index.html`, `styles.css` e `app.js`.


## Ajuste do botão Trocar perfil
- O botão antigo foi removido da barra lateral.
- Agora existe apenas um botão `Trocar perfil`, no topo do dashboard.
- No computador, ele aparece com ícone e texto.
- No celular, ele se transforma em um botão compacto com ícone.
- A função continua usando o mesmo `id="switch-profile"` e a mesma lógica do JavaScript.
