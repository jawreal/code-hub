const getPostById = async (postId: string | undefined): Promise<any> => {
  const result = await fetch(`http://localhost:3000/api/view-post/${postId}`,{
      credentials: 'include'
    });
  const finalResult = await result.json();
  return [finalResult];
};

export default getPostById;