import {useRoutes} from "react-router-dom";
import {routes} from "./routes";
import {QueryClientProvider} from "react-query";
import {GetClient} from "./queryClients";
import {ReactQueryDevtools} from 'react-query/devtools'
import React from "react";
import Gnb from "./components/gnb";

const App = () => {
    const elem = useRoutes(routes);
    const queryClient = GetClient();
    return (
        <QueryClientProvider client={queryClient}>
          <Gnb />
            {elem}
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>)
        ;
};

export default App;
