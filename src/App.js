import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/pages/routes';
import { DefaultLayout } from '~/components/layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;
                        const Component = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path} 
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
