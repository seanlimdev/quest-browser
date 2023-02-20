import { Quest } from '@/types/Quest';
import axios from 'axios';

export const getQuests = async () => {
	const res = await axios.get<Quest[]>('http://localhost:3000/api/quests');
	return res.data;
};

export const getQuest = async (id: string) => {
	const res = await axios.get(`http://localhost:3000/api/quests/${id}`);
	return res.data;
};
