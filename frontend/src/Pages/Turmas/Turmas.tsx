import { useEffect, useState } from "react";

export function Turmas() {
  const [data, setData] = useState()

  useEffect(() => {
    function fetchData() {
      fetch('http://localhost:3000/turmas', {
        headers: {
          authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTUwMzY3IiwiaWF0IjoxNjc4Mzc3MjUyLCJleHAiOjE2Nzg5ODIwNTJ9.LV2O-YDUN5UPB_YQktiESSAzYVUvG2ZMFgo5D_XsYsA'
        }
      })
        .then(response => response.json())
        .then(data => setData([...data]))
    }

    fetchData()
  })

  return (
    <div>
      {data}
    </div>
  )
}