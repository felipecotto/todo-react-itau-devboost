import styled from "styled-components"

export const ListTasks = styled.ul`
    padding:  20px;
    border-radius: 8px;
    background: #fff;
    li {
        background-color: #f7dcdc; 
        border-radius: 8px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        h3 {
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 16px; 
        }
    }
`;