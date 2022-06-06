import css from 'styled-jsx/css'

export const style =  css`
    .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 150px;
        color: #fff;
        text-align: center;
        padding: 8px 0;
        border-radius: 6px;
        font-size: 15px;
        margin-left: 15px;
        line-height: 18px;

        position: absolute;
        z-index: 1;
		background: var(--heading-color-opacity);
		backdrop-filter: blur(8px);
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
`