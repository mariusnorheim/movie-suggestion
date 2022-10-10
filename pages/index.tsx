import React, { useState } from 'react'
import useSWR from 'swr'
// import Router from 'next/router'
import PersonComponent from '@components/Person'
import { Person } from '@interfaces/index'
import AccordionComponent from '@components/Accordion'
import { ResponseData } from '@interfaces/responsedata'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)
  const [searchString, setSearchString] = useState('')
  const [response, setResponse] = useState(null)<ResponseData>

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjU1NGIzZWZlOTY4NTg3OWZhYWUzYWE5MmI0YjQ5OSIsInN1YiI6IjYzMzVmYzc1YTA2NjQ1MDA4YjkxNzUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.orobeh7Go79d5jWY7ct-HJ5MEHeeOTr09LgHN4i_AIo'
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchString}`, {
        method: 'GET',
        headers: { 
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json;charset=utf-8'
        },
      })
      .then(res => res.json())
      setResponse(JSON.stringify(response))
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label" htmlFor="searchString">
            Search
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              autoFocus
              autoComplete="searchString"
              type="text"
              name="searchString"
              required={true}
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-3"></div>
          <div className="col-sm-9">
            <input 
              className="btn btn-secondary" 
              disabled={!searchString}
              type="submit"
              value="Make suggestion!" />
          </div>
        </div>
      </form>
      <div className="mb-12 row">
        <pre>
        {/* <ul>
          {response?.results?.map((r: ResponseData) => (
            <AccordionComponent key={r.results.id} response={r} />
          ))}
        </ul> */}
          {response}
        </pre>
      </div>
      {/* <ul>
      {data.map((p: Person) => (
        <PersonComponent key={p.id} person={p} />
      ))}
    </ul> */}
    </>
  )
}
