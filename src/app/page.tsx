import HomePage from "@/components/Homepage";

const GetData = async () => {
  const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=America/Chicago', {
    next: {
      revalidate: 30,
    },
  })
  const data = await response.json();
  return data;
}

export default async function Home() {

  const data = await GetData();

  return (
    <>
    <h1>The default page - SERVER component</h1>
    <h2> this is an async function that awaits GetDogs() which returns dog data to HomePage component</h2>
    <HomePage data={data}/>
    </>

  );
}
