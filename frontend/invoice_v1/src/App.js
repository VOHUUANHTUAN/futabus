// src/App.js
import React from 'react';
import TicketForm from './component/SearchInvoice';

function App() {

  return (
    <>
      <main>
        <header className="flex flex-col items-center justify-center my-5">
          <div>
            <h2 className="font-bold uppercase tracking-wide text-4xl">
              Tra cứu thông tin đặt vé
            </h2>
          </div>

        </header>
        <section>
          <TicketForm />
        </section>
      </main>
    </>
  );
}

export default App;
