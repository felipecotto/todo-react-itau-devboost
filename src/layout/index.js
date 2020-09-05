import React from 'react';
import * as S from "./styled";

const Layout = ({ children }) => (
    <S.MainContent>
        <S.MainTitle>Controle <br/> de Tarefas</S.MainTitle>
        <S.MainBox>
            {children}
        </S.MainBox>
    </S.MainContent>
);

export default Layout;