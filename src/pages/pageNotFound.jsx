import Main from "../layaout/main";

const PageNotFound = () => {

    return (
        <Main>
            <div className="d-flex align-items-center justify-content-center" style={{ flexGrow: 1, flexFlow: 'column nowrap' }}>
                <h1 className="display-1 fw-bold text-primary">404</h1>
                <h4 className="text-primary">Página no encontrada</h4>
            </div>
        </Main>);
}

export default PageNotFound;