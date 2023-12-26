import { Link } from "react-router-dom"

const AdminHome = () => {

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
            <h1 className="display-2">Administration features</h1>
            <br/>
            <br/>
            <section className="btn-group btn-group-lg" role="group" >
                {displayed}
            </section>
        </>
    )
    
}
export default AdminHome;
