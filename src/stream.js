import axios from 'axios';

const TIP_FLOOR_URL = 'https://bundles.jito.wtf/api/v1/bundles/tip_floor';

async function getTipFloor() {
    try {
        const response = await axios.get(TIP_FLOOR_URL);
        // console.log('Full Response:', response.data); // Log full response

        // Check if the response is an array and has elements
        if (Array.isArray(response.data) && response.data.length > 0) {
            const tipData = response.data[0]; // Access the first element
            // console.log('Tip Data:', tipData); // Log the extracted data

            // Assuming 'landed_tips_50th_percentile' serves as the tip floor
            const tipFloor = tipData.landed_tips_75th_percentile || 'Unavailable';
            // console.log('Tip Floor:', tipFloor);

            return tipFloor;
        } else {
            console.warn('Response is not an array or is empty.');
        }
    } catch (error) {
        console.error('Error fetching tip floor:', error);
    }
}

export default getTipFloor;
