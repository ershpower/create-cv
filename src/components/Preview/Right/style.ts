import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 20px;
    flex: 1 1 auto;
`;

export const MegaTitle = styled.p`
    font-size: 28px;
    color: #03064f;
    font-weight: 700;
    max-width: 100%;
`;

export const Position = styled.div`
    margin-top: 7px;
    padding-bottom: 5px;
    border-bottom: 2px solid #03064f;
    font-size: 16px;
`;

export const BigTitle = styled.p`
    margin-top: 8px;
    color: #03064f;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    gap: 8px;
`;

export const WorkHeader = styled.div`
    background: #eef4ff;
    padding: 10px;
    p:nth-child(1) {
        font-size: 18px;
        font-weight: 500;
    }
    p:nth-child(2) {
        font-weight: 500;
    }
`;

export const Period = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 10px;
`;

export const Description = styled.div`
    margin-top: 10px;
    width: 100%;
    pre {
        max-width: 100%;
        text-wrap: wrap;
    }
`;
