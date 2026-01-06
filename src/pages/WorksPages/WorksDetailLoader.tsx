import React from "react";
import { useParams, Navigate } from "react-router-dom";

import Portfolio from "./Portfolio";

const componentMap: {[key: string]: React.FC } = {
    "portfolio": Portfolio
};

const WorksDetailLoader = ()=>{
    const {categorySlug, workId} = useParams();
    const TargetComponent = workId ? componentMap[workId] : null;

    if(!TargetComponent){
        return <Navigate to="/works" replace />;
    }

    return <TargetComponent />;
};

export default WorksDetailLoader;