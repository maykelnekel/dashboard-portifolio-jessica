import styled from "styled-components";


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    flex-grow: 1;
    /* align-items: center; */
    margin: 2rem 0;
    width: 100%;
    button{
        width: 100%;
        height: 40px;
    }

    @media (min-width: 1200px){
        flex-direction: row;
        height: 180px;
    }
    

`

export const Image = styled.img`
    text-indent: -10000000px;
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 10px;
`

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    @media (min-width: 1200px){
        width: calc(100% - 373px);
        justify-content: space-between;
        padding-left: 20px;
    }

`

export const InputContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    background-color: var(--quaternary-color);
    /* height: 30px; */

    textarea, input, select{
        flex-grow: 1;
        /* max-height: 30px; */
    }
    
    &.description{
        display: flex;
        flex-direction: column;
        @media (min-width: 1200px){
            height: 100px;
        }
    }

`

export const Label = styled.label`
    padding-top: 10px;
    padding-left: 1rem;
    height: 30px;
`

export const IntraFormContainer = styled.div`
    .not-ok:last-child{
        margin-top: 10px;
    }
    @media (min-width: 1200px){
        display: flex;
        flex-direction: row;

        button{
            margin-left: 35px ;
        }

        .select{
            flex: 1 0 50%;
        }
        .not-ok:last-child{
            margin-top: 0;
        }
    }
`
