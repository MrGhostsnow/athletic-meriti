import styled from "styled-components";
import backgroundImg from "../../../assets/bg-court.png";

export const ContainerOurMission = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${backgroundImg.src}); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative; 
    justify-content: space-between;
    background-color: #fff;
`;

export const SectionInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    height: 600px;

    &.first-info {
        margin-top: 60px;

        @media (max-width: 768px) {
            margin-top: 0px;
        }
    }

    &.column-reverse {
        @media (max-width: 1024px) {
            flex-direction: column-reverse;
        }

        @media (max-width: 768px) {
            flex-direction: column-reverse;
        }
    }
    

    @media (max-width: 1024px) {
        height:700px;
        flex-direction: column;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: 620px;

    }

    @media (max-width: 425px) {
        margin-top: -20px;
    }
`;

export const SectionInfoWork = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    height: 650px;

    &.column-reverse {
        @media (max-width: 1024px) {
            flex-direction: column-reverse;
        }

        @media (max-width: 768px) {
            flex-direction: column-reverse;
        }
    }
    

    @media (max-width: 1024px) {
        height:820px;
        flex-direction: column;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: 950px;
    }
`;

export const SectionText = styled.div`
    width: 50%;
    color: #000;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 1024px) {
       gap: 10px;
       align-items: center;
       text-align: center;
       width: 100%;
       height: 200px;
    }

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        text-align: center;
        margin-top: 20px;
    }

    &.invert-text {
        align-items: flex-end;
        text-align: end;

        @media (max-width: 1024px) {
       gap: 10px;
       align-items: center;
       text-align: center;
       width: 100%;
       height: 200px;
    }


        @media (max-width: 768px) {
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 400;
`;

export const Text = styled.p`
    font-size: 24px;
    width: 80%;
    font-family: 'Inter';
    font-weight: 600;

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 425px) {
        font-size: 20px;
    }

    &.values-text {
        border: 1px solid #77BD10;
    }
`;

export const SectionImg = styled.div`
    width: 600px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        width: 550px;
    }

    @media (max-width: 425px) {
        width: 350px;
    }

`;

export const SectionPartner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 185px;
    gap: 10px;
    font-family: 'Inter';

    &.partner-invert {
        align-items: flex-start;

        @media (max-width: 768px) {
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-bottom: 20px;
        }
    }
`;

export const Label = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #000;
`;

export const SpanHowWeWork = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    top: 0px;
    width: 750px;
    height: 109px;
    color: #000;
    border-radius: 24px;
    font-size: 50px;
    background-color: #77BD10;

    @media (max-width: 1024px) {
        margin-top: 20px;
    }

    @media (max-width: 768px) {
        width: 650px;
        height: 100px;
    }

    @media (max-width: 425px) {
        width: 350px;
        height: 100px;
        font-size: 35px;
    }
`;












