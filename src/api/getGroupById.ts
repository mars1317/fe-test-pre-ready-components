import axios from 'axios';
import { Group } from 'types/Group';

export const getGroupById = async (id: string): Promise<Group> => {
  const response = await axios.get('https://api.unstable.insurance-menu.com/test/Prod/group', {
    params: { id },
  });
  return response.data;
};
