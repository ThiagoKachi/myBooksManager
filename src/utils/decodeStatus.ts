export function decodeStatus(status: string) {
  if (status === 'finished') return 'Finalizado';
  if (status === 'in_progress') return 'Lendo';
  if (status === 'my_list') return 'Minha lista';
}
