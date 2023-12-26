const ShowUserLoans = (props) => {
    const userLoansBooks = props.userLoansBooks

    const insertBooks = userLoansBooks.map((book)=>{
    
        return(
            <tr key={book.id}>   
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
        
          </tr>
      )
     })
 return (
        <tbody>
                {insertBooks}
        </tbody>
    );
};
export default ShowUserLoans;