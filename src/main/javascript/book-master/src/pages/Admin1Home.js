import { Link } from "react-router-dom"

const Admin1Home = () => {

            const tables = [{
                                name:"Users",
                                call:"users"
                            }, 
                            {
                                name:"Books",
                                call:"books"
                            },
                            {
                                name:"Loans",
                                call: "loans"
                            },
                            {
                                name:"Review",
                                call:"review"
                            },
                            {
                                name:"Events",
                                call:"events"
                            },
                            {
                                name:"Roles",
                                call:"roles"
                            } ]

            const displayed = tables.map((table)=>{
                return(
                    <div className="container" key={table.name}>
                        <Link to={`/admin_home/${table.call}`}><button className="btn btn-primary">{table.name}</button></Link>
                    </div>
                )
            })

    return (
        <>
        <div className="container mt-3">
            <h1 className="display-2">Administration features</h1>
            <br/>
            <br/>
            <section className="btn-group btn-group-lg" role="group" >
                {displayed}
            </section>
        </div>
        </>
    )
    
}
export default Admin1Home;
