import TopMenu from "./Headers/TopMenu";


const BasicLayout = ({children}) => {
    return (
        <div className="container-fluid min-vw-100 min-vh-100 bg-primary text-light">
            <TopMenu></TopMenu>
            {children}
        </div>
    )
}

export default BasicLayout;