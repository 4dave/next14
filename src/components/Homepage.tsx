'use client'

export default function HomePage({data}: {data: any}) {
  return (
    <>
    <h3>This is the HomePage - CLIENT component</h3>
    <h4>
      it receives the dog data from the server component
    </h4>
    <p>
      {data.dateTime}
    </p>
    </>

  )
}
