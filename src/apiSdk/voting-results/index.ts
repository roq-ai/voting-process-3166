import axios from 'axios';
import queryString from 'query-string';
import { VotingResultInterface, VotingResultGetQueryInterface } from 'interfaces/voting-result';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVotingResults = async (
  query?: VotingResultGetQueryInterface,
): Promise<PaginatedInterface<VotingResultInterface>> => {
  const response = await axios.get('/api/voting-results', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createVotingResult = async (votingResult: VotingResultInterface) => {
  const response = await axios.post('/api/voting-results', votingResult);
  return response.data;
};

export const updateVotingResultById = async (id: string, votingResult: VotingResultInterface) => {
  const response = await axios.put(`/api/voting-results/${id}`, votingResult);
  return response.data;
};

export const getVotingResultById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/voting-results/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVotingResultById = async (id: string) => {
  const response = await axios.delete(`/api/voting-results/${id}`);
  return response.data;
};
