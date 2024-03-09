import React from "react";

const TransformationsPage = ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  return <div>{id}</div>;
};

export default TransformationsPage;
