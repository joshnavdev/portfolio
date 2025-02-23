export interface Theme {
  id: string;
  label: string;
}

const themes: Theme[] = [
  { id: 'nord-dark', label: 'Nord Dark' },
  { id: 'nord-light', label: 'Nord Light' },
  { id: 'kanagawa', label: 'Kanagawa' },
];

export default themes;
