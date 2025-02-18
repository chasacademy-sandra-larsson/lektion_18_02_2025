"use client"

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

// | i Typescript är "eller". Här har vi en del actions som bara har type men en del har också payload
type BankAction = { type: 'openAccount' } | { type: 'deposit', payload: number } | { type: 'withdraw', payload: number } | { type: 'requestLoan', payload: number } | { type: 'payLoan'} | { type: 'closeAccount' }


function reducer(state: BankState, action: BankAction) {

    switch (action.type) {
        case 'openAccount':
            return {
                ...state, 
                isActive: true
             };
        case 'deposit':
            return { 
                ...state,
                balance: state.balance + action.payload
            };
        case 'withdraw':
            return {
                ...state,
                balance: state.balance - action.payload
            };
        case 'requestLoan':
            // Om det redan finns ett lån
            if(state.loan > 0)
                return state;
            return {
                ...state,
                balance: state.balance + action.payload,
                loan: action.payload
            };
        case 'payLoan':
            return {
                ...state, 
                loan: 0,
                balance: state.balance - state.loan
            };
        case 'closeAccount':
            if(state.loan > 0 || state.balance !== 0)
                return state
            return initialState
        
        default: 
    }
}



function BankAccount() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Bank</h1>
            <p> Balance: { state.balance }</p>
            <p>Loan: { state.loan }</p>
            <p>Is active?: { state.isActive ? "Yes" : "No"}</p>
            <button onClick={() => dispatch({type: 'openAccount'})}>Open Account</button>
            <button>Deposit 100</button>
            <button>Withdraw 100</button>
            <button>Request Loan 1000</button>
            <button>Pay Loan</button>
            <button>Close account</button>
        </div>

    )
}

export default BankAccount