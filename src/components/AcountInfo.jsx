import React from "react";

function AccountInfo() {

    const groomAccount ={
        name:"황민현",
        bank:"신한은행",
        number:"123-456-789"
    }

    const brideAccount={
        name:"윤다연",
        bank:"카카오뱅크",
        number:"987-654-321"
    }

    const copyToClipboard = (text)=>{
        navigator.clipboard.writeText(text)
        .then(()=>{
            alert("계좌번호가 복사되었습니다.")
        }) .catch(()=>{
            alert("복사에 실패했습니다.")
        })
    }

    return(
      <section>
        <h2>마음 전하실 곳</h2>
        
        <div style={{border:"1px solid #ccc", padding:"10px"}}>
            <p><strong>신랑 {groomAccount.name}</strong></p>
            <p>{groomAccount.bank} {groomAccount.number}</p>
            <button onClick={()=>copyToClipboard(groomAccount.number)}>복사</button>
        </div>

        <div style={{border:"1px solid #ccc", padding:"10px"}}>
            <p><strong>신부 {brideAccount.name}</strong></p>
            <p>{brideAccount.bank} {brideAccount.number}</p>
            <button onClick={()=>copyToClipboard(brideAccount.number)}>복사</button>
        </div>
      </section>
    )
}
export default AccountInfo;