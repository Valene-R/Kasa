import { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import Router from "./pages/Router/Router";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Stop le chargement après 2 secondes
        }, 2000);
        return () => clearTimeout(timer); // Nettoie le timer pour éviter des erreurs
    }, []);

    if (loading) return <Loader />; // Affiche le loader pendant le chargement

    return <Router />

};

export default App;
