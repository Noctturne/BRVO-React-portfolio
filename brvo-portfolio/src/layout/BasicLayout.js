import TopMenu from "./Headers/TopMenu";
import AsideMenu from "./Headers/AsideMenu";

const BasicLayout = ({children}) => {
    return (
        <div className="container-fluid m-0 p-0 vw-100 vh-100 bg-home text-light">
            <TopMenu></TopMenu>
            <div class="content d-flex flex-wrap">
                <AsideMenu></AsideMenu>
                {children}
            </div>
        </div>
    )
}

export default BasicLayout;