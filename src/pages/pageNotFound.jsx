import Main from "../layaout/main";
import CustomContainer from "../layaout/customContainer";
const PageNotFound = () => {

    return (
        <Main>
            <CustomContainer className="d-flex align-items-center justify-content-center">
                <h1 className="display-1 fw-bold text-secondary">404</h1>
                <h4 className="text-secondary">Página no encontrada</h4>
            </CustomContainer>
        </Main>);
}

export default PageNotFound;