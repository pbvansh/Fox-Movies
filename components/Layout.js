import Meta from "./Meta";
import Nav from "./Nav";

const layout =({children})=>{
    return(
        <>
        <Meta/>
        <Nav/>
        <main>
            {children}
        </main>
        </>
    );
}

export default layout;