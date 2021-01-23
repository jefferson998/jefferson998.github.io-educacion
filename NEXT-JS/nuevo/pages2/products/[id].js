import React from "react";
import { useRouter } from "next/router";
const productItem = () => {
  //   const router = useRouter();
  const {
    query: { id },
  } = useRouter();
  return (
    <div>
      <h2>Esta es la pagina del producto:{id}</h2>
    </div>
  );
};

export default productItem;
