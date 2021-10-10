import axios from 'axios';
import { GroupPageDTO } from 'types/Group';

export const getAllGroups = async (): Promise<GroupPageDTO> => {
  const response = await axios.get('https://api.unstable.insurance-menu.com/test/Prod/getAllGroups', {});
  return response.data;
};
