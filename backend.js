async function fetchDataWithCache(url, cacheKey, cacheDurationInMinutes) {
    let cachedData = localStorage.getItem(cacheKey);
    let cacheExpiry = localStorage.getItem(cacheKey + '_expiry');

    if (cachedData && cacheExpiry && Date.now() < parseInt(cacheExpiry, 10)) {
        return JSON.parse(cachedData);
    } else {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const responseData = await response.json();

            localStorage.setItem(cacheKey, JSON.stringify(responseData));

            const expiryTime = Date.now() + cacheDurationInMinutes * 60 * 1000;
            localStorage.setItem(cacheKey + '_expiry', expiryTime.toString());

            return responseData;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

const cacheKey = 'cached_data';
const cacheDurationInMinutes = 10;

(async () => {
    try {
        const data = await fetchDataWithCache(apiUrl, cacheKey, cacheDurationInMinutes);
        console.log('Data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
})();
