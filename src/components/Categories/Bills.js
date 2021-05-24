import React from "react"

const Bills = ({bills, total, modifyItem, deleteItem })=>{

    
    return(
        <div className="expense-items expense-categories">
            <div className="title">
                <h3>Bills</h3>
            </div>
            {bills.map(bill=>{
                    return(
                        <div key={bill.id} className="item-details">
                            <p>{bill.title}</p>
                            <p>${bill.expense.toFixed(2)}</p> 
                            <div>                                    
                                <button className="btn modify" onClick={modifyItem}>Modify</button>
                                <button className="btn" onClick={()=>deleteItem(bill.id)}>delete</button> 
                            </div>
                        </div>
                    )
                })}
            <p>Total: {total().toFixed(2)}</p>

        </div>
    )
}

export default Bills