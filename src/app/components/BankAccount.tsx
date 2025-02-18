import { useReducer } from "react"


type BankState = {
    balance: number;
    loan: number;
    isActive: boolean;
}

const initialState: BankState = {
    balance: 0,
    loan: 0,
    isActive: false
}

function reducer(state, action) {
    switch (action.type) {
        case 'openAccount':
            return {};
        case 'deposit':
            return {};
        case 'withdraw':
            return {};
        case 'requestLoan':
            return {};
        case 'payLoan':
            return {};
        case 'cloasAccount':
            return {};
    }
}



function BankAccount() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Bank</h1>
            <p> Balance: {}</p>
            <p>Loan: {}</p>
            <p>Is active?: {}</p>
            <button>Open Account</button>
            <button>Deposit 100</button>
            <button>Withdraw 100</button>
            <button>Request Loan 1000</button>
            <button>Pay Loan</button>
            <button>Close account</button>
        </div>

    )
}