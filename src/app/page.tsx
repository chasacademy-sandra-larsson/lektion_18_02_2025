"use client"
import Image from "next/image";
import BankAccount from "./components/BankAccount";
import TodoApp from "./components/TodoApp";

export default function Home() {
  return (

      <main className="flex justify-center items-center h-screen">
          {/* <BankAccount/> */}
          <TodoApp/>
       </main>

  );
}
