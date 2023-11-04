import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface IDateFormatter {
  createdAt: string;
}

export const dateFormatter = ({ createdAt }: IDateFormatter) => {
  const issueCreationDate = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  });

  return issueCreationDate.charAt(0).toUpperCase() + issueCreationDate.slice(1);
};