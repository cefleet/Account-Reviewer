const AcccountLine = ({account, viewAccount}) => {
    return(
        <div id={account.account_number}  onClick={()=>viewAccount(account)} className="accountLine">
            #{account.account_number} - {account.first_name} {account.last_name}
        </div>
    )
};

export default AcccountLine;