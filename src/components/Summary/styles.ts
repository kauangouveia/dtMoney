import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    grid-template-areas: 'div div div';
    grid-template-columns: repeat(3,1rf);
    gap: 2rem;
    margin-top: -10rem;
    color: var(---text-title);
    div{
        background:var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        /* color: var(--text-title); */

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 6000;
            line-height: 3rem;
        }
        &.highlight {
            background: var(--green);
            color: #fff;
        }
    }
`