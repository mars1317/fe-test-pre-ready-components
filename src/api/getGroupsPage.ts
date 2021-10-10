import axios from 'axios';
import { GroupPageDTO } from 'types/Group';

export const getGroupsPage = async (page: number): Promise<GroupPageDTO> => {
  const response = await axios.get('https://api.unstable.insurance-menu.com/test/Prod/getGroupsPage', {
    params: { page },
  });
  return response.data;
};
