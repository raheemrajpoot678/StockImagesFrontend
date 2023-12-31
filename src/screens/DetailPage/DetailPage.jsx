import React from "react";
import ImagePreview from "../../components/ImagePreview/ImagePreview";

const DetailPage = ({ data }) => {
  return (
    <div>
      <ImagePreview data={data} />
    </div>
  );
};

export default DetailPage;
