import { createQuery, QueryClient, QueryClientProvider } from "@tanstack/solid-query"

const queryClient = new QueryClient()

function Example() {
  const query = createQuery(() => ['todos'], () => null)

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}