import { Component } from "react";
import MasterLayout from "./pages/users/theme/masterLayout";

const renderUserRouter =  () => {
  const userRouters = [ 
    {
        path: ROUTERS.USER.HOME,
        Component: <HomePage />
    }
  ]
  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route
            key={key}
            path={item.path}
            element={item.Component}
          />
        ))}
      </Routes>
    </MasterLayout>
  );


};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;