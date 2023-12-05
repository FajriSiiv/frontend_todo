"use server";

export const fetchTodo = async (id: any) => {
  const response = await fetch(`https://dummyjson.com/todos/user/${id}`);

  const data = await response.json();

  return data;
};
