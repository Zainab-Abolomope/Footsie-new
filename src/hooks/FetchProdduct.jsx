import { useState, useEffect } from 'react';

const useProducts = (page, size) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch('https://timbu-get-all-products.reavdev.workers.dev/?organization_id=f64a86bffa1f4c3a9c4bcb39e1d652f8&reverse_sort=false&page=1&size=10&Appid=CVWWLRRGKYNFU9X&Apikey=2bdfd570eaf14c9d8b61c69993c17fcc20240712144946909097');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [page, size]);

    return { data, isLoading, error };
};

export default useProducts;
