const getInfo = async (username: string | undefined): Promise<InfoType> => {
  const result = await fetch(`http://localhost:3000/api/get-info/${username}`);
  if(!result.ok){
    throw new Error("Error on fetching info")
  }
  const data = await result.json();
  return data;
};

export default getInfo;