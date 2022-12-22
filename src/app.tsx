import { createQuery, QueryClient, QueryClientProvider } from "@tanstack/solid-query"
import { For, Match, Switch } from "solid-js"

const queryClient = new QueryClient()

const fetchPeople: () => Promise<Users> = () => {
  return fetch("https://randomuser.me/api/?results=10").then((res) => res.json())
}

type Users = {
  results: {
    email: string
  }[]
}


function Example() {
  const query = createQuery(() => ["people"], fetchPeople)

  return (
    <div>
      <Switch>
        <Match when={query.isLoading} keyed={false}>
          <p>Loading...</p>
        </Match>
        <Match when={query.isSuccess} keyed={false}>
          <For each={query.data?.results}>
            {(person) => <p>{person.email}</p>}
          </For>
        </Match>
      </Switch>
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