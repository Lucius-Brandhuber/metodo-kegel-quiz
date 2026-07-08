# Método Kegel 14 Dias — funil (quiz + página de vendas)

Site estático, réplica das prints em `../quiz/` e `../pv/`.

## Estrutura
- `index.html` — quiz de 16 etapas (single-page, navegação por JS)
- `pv.html` — página de vendas
- `css/style.css` — estilos compartilhados
- `js/quiz.js` — navegação do quiz
- `js/pv.js` — countdown + accordion da FAQ
- `imagens/` — imagens do funil (já preenchida)

## Como rodar localmente
```
cd "site"
python3 -m http.server 8000
```
Abra http://localhost:8000

## Imagens
Todas as imagens enviadas já estão aplicadas. Mapeamento:

**Quiz (`index.html`)**
- Etapa 1 (idades): `img1.webp` (18–30), `img2.webp` (31–45), `img3.webp` (46–55), `img4.webp` (+56)
- Etapa 2 (ícones): `ampulheta.webp` (durar), `escudomusculo.webp` (ereções)
- Etapa 6: `img5.webp` (matéria g1) · Etapa 7: `img6.webp` (consulta) · Etapa 8: `img7.jpg` (músculo)
- Etapa 14: `img8.webp` (exercício) · Etapa 15: `img9.webp` (IA) + `img10.png` (Prêmio RA)

**Página de vendas (`pv.html`)**
- Oferta (3×): `img11.webp`
- App (carrossel): `img14.png`, `img12.png`, `img13.png`
- Bônus: `img15.webp` (#1), `img16.webp` (#2), `img17.webp` (#3)
- Depoimentos (carrossel): `dp1.png`–`dp4.png`
- Médico: `img18.webp` · Garantia: `garantia.webp` · Prova social: `img19.webp`

## Logo
`imagens/logo.png` (RASGA XANA / MÉTODO 14 DIAS) — aplicado no topo do quiz e no topo/rodapé
da PV. Fundo original (xadrez cinza opaco do gerador) foi removido via PIL e a imagem recortada
para transparência real.

## Pendência (aguardando arquivo)
- **Vídeo da VSL** — etapa 16 do quiz e topo da PV estão com um espaço preto (placeholder).
  Colar aí o embed do player (VTurb/Panda/YouTube etc.) quando tiver.

> Os textos dos depoimentos dp2–dp4 e das FAQs 2–4 foram escritos por mim (as prints não
> traziam esse texto). Revisar/ajustar se quiser.
