import React from 'react'
import SalesLeadForm from './components/SalesLeadForm'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Sales Lead Form</h1>
          <p className="mt-2 text-gray-600">Enter customer information</p>
        </header>
        <main className="mt-4">
          <SalesLeadForm />
        </main>
      </div>
    </div>
  )
}

export default App