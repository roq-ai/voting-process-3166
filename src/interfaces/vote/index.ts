import { VotingResultInterface } from 'interfaces/voting-result';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface VoteInterface {
  id?: string;
  title: string;
  option_1: string;
  option_2: string;
  option_3: string;
  option_4: string;
  option_5: string;
  school_id: string;
  created_at?: any;
  updated_at?: any;
  voting_result?: VotingResultInterface[];
  school?: SchoolInterface;
  _count?: {
    voting_result?: number;
  };
}

export interface VoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  option_1?: string;
  option_2?: string;
  option_3?: string;
  option_4?: string;
  option_5?: string;
  school_id?: string;
}
