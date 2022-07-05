import css from 'styled-jsx/css'

export const style =  css`
	.tag {
        border: solid 1px var(--primary-color-opacity);
        backdrop-filter: blur(5px);
        padding: 3px 7px;
        border-radius: 20px;
        margin: 3px;
        font-size: 12px;
        display: inline-block;
        width: fit-content;
	}
    .tag:hover {
    }
`