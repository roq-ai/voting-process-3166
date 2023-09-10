const mapping: Record<string, string> = {
  schools: 'school',
  users: 'user',
  votes: 'vote',
  'voting-results': 'voting_result',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
