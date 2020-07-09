import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const { env: { INFERKIT_API_KEY, INFERKIT_URL } } = process;

export default async function inferkitRequest (input, opts) {
    try {
        const data = {
            "prompt": {
                "text": input
            },
            "length": 400/*,
            "startFromBeginning": true*/
        };

        const { data: { data: result } } = await axios.post(INFERKIT_URL, data, { headers: { Authorization: `Bearer ${INFERKIT_API_KEY}` } });

        return result;
    } catch (error) {
        throw error;
    }
};