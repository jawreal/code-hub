const getPost = async (): Promise<any> => {
  const result = await fetch('http://localhost:3000/api/get-post',{
      credentials: 'include'
    });
  return await result.json();
};

export default getPost;