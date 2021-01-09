const AcccountLine = ({account, viewAccount}) => {
    return(
        <div className="accountLine">
            <span
                id={account.account_number} 
                onClick={()=>viewAccount(account)}
                style={{cursor:"pointer", textDecoration:'underline', color:"blue"}}    
            >
                {account.account_number}
            </span>
            <span> {account.first_name} {account.last_name}</span>
        </div>
    )
};

export default AcccountLine;