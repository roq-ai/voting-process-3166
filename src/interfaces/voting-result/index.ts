import { VoteInterface } from 'interfaces/vote';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VotingResultInterface {
  id?: string;
  vote_id: string;
  user_id: string;
  selected_option: string;
  created_at?: any;
  updated_at?: any;

  vote?: VoteInterface;
  user?: UserInterface;
  _count?: {};
}

export interface VotingResultGetQueryInterface extends GetQueryInterface {
  id?: string;
  vote_id?: string;
  user_id?: string;
  selected_option?: string;
}
