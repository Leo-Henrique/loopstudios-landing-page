# Landing page com React e styled-components | Desafio do Frontend Mentor

<div align="center">
	<img src="https://user-images.githubusercontent.com/72027449/228910281-c23f8270-1958-459b-8400-6e3fde63ca12.gif"
	alt="Visualização da página inicial do projeto" />
</div>

## 🔎 Visão geral

Eu considero landing pages um tipo de website mais focado em CSS, por isso decidi desenvolver esse projeto com o intuito de utilizar **styled-components**!

### 🔗 Acesse o projeto

* [Site ao vivo](https://leo-henrique.github.io/loopstudios-landing-page/)
* [Desafio no Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw)

### 💻 Principais tecnologias / recursos

* [React](https://react.dev/)
* [styled-components](https://styled-components.com/)
* [Vite](https://vitejs.dev/)


## 💡 Aprendizados e principais recursos

### Tematização

O tema é uns dos principais destaques deste projeto. Através dele pude armazenar diversas configurações da UI para manter a consistência da interface.

Como eu o utilizava com muita frequência, decidi executar a função retornada com `styled` da maneira convencional para desestruturar o tema das props e poupar escrita:
```js
export const Hamburger = styled.button(({ theme }) => (css`
    z-index: ${theme.zIndex.headerContent};
    ${theme.mixins.transition(["opacity"])};
    ${theme.media.desktop} {
        &:hover {
            opacity: 0.7;
        }
    }
    ${theme.breakpoints.lg} {
        display: block;
    }
    // ...
`));
```

### Mixins

Os mixins é um conceito muito popular no SASS e algo de extrema eficácia para armazenar estilos reutilizáveis.

Com a função `css`, os mixins podem ser criados e utilizados de modo muito parecido com o SASS, inclusive, utilizando argumentos e passando o tipo de dado que for mais convincente. Como eles ficam em um arquivo separado, eu importei eles para o tema para facilitar o seu uso.

```js
export const transition = (properties, type = "button") => (css`
    transition-property: ${properties.join(", ")};
    transition-duration: ${theme.transitions[type].duration}ms;
    transition-timing-function: ${theme.transitions[type].timingFunction};
`);
```
```js
export const Hamburger = styled.button(({ theme }) => (css`
    ${theme.mixins.transition(["opacity"])};
    // ...
`));
```

### Props

A possibilidade de utilizar as `props` dentro dos estilos são, pelo menos pra mim, o grande potencial do styled-components.

O trecho de código a seguir se refere a navegação do cabeçalho. Com as props, eu pude aplicar estilizações diferentes dependendo do local onde a navegação se encontrava (cabeçalho ou rodapé) e animações com base em alguns estados (para quando o menu mobile é aberto ou fechado).

```js
const Wrapper = styled.nav(({ 
    theme, 
    local, 
    headerHeight, 
    nav, 
    navTransition 
}) => (css`
    ${local === "header" ? (css`
        ${theme.breakpoints.lg} {
            display: ${nav ? "block" : "none"};
            opacity: ${navTransition ? 1 : 0};
            transform: ${navTransition ? "none" : "translate3D(100px, 0, 0)"};
    `) : (css`
        // ... (footer)
    `)}
```

## 🔗 Recursos úteis

* [React Styled Components Folder Structure](https://www.codevertiser.com/styled-components-folder-structure/)
* [Starting styled mixins in React (part 1)](https://vegeloper.medium.com/starting-styled-mixins-in-react-f976677a81a8)
* [Starting styled mixins in React (part 2)](https://vegeloper.medium.com/advanced-mixins-in-styled-components-2702d60d730)