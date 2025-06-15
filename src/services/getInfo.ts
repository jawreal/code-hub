const getInfo = async (username: string): Promise<{ message: string }> => {
  try{
    const result = await fetch(`http://localhost:3000/api/get-info/${username}`);
    const data = await result.json();
    console.log(data);
    return data;
  }catch(err){
    return { message: "Error" }
  }
};

export default getInfo;