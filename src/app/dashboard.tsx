"use client";
import { fetchTodo } from "@/api/action";
import CardNote from "@/components/card/cardNote";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState<any>();
  const [datas, setDatas] = useState<any>();

  const createNewTodo = async () => {};

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const data = await fetchTodo(userId);

      setDatas(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const usernameId = localStorage.getItem("userId");
    setUserId(usernameId);
    fetchData();
  }, [userId]);

  useEffect(() => {
    console.log(datas);
  }, [datas]);
  return (
    <>
      {isLoading && <p>Loading..</p>}
      {datas &&
        datas?.todos?.map((card: any, index: any) => (
          <CardNote index={index} card={card} key={card.id} />
        ))}
    </>
  );
};

export default Dashboard;
